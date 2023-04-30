import { add, format } from 'date-fns'
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'
import { Dialog } from 'primereact/dialog'
import { InputNumber } from 'primereact/inputnumber'
import { InputTextarea } from 'primereact/inputtextarea'
import { MultiSelect } from 'primereact/multiselect'
import { defaultEventDuration } from './utils'

const athletes = [{ name: 'Andre' }, { name: 'Rui' }, { name: 'Miguel' }, { name: 'Manel' }, { name: 'Filipe' }]

export type SessionFormDataType = {
  athletes: { name: string}[]
  duration: number
  endDate: Date
  notes: string
  startDate: Date
  title: string
}

type SessionFormType = {
  date: Date
  time: Date
  onSubmit: (data: SessionFormDataType) => void
  handleClose: () => void
}

export const SessionForm = ({ date, handleClose, time, onSubmit }: SessionFormType) => {
  const formik = useFormik({
    initialValues: {
      date,
      time,
      notes: '',
      selectedAthletes: [],
      duration: defaultEventDuration
    },
    onSubmit: (data) => {
      let title = ''
      if (data.selectedAthletes) title = data.selectedAthletes.map(({ name }) => name).join(', ')

      const year = Number(format(data.date, 'yyyy'))
      const month = Number(format(data.date, 'M')) - 1
      const day = Number(format(data.date, 'd'))
      const hours = Number(format(data.time, 'H'))
      const minutes = Number(format(data.time, 'm'))
      const startDate = new Date(year, month, day, hours, minutes)
      const endDate = add(startDate, { minutes: data.duration })

      onSubmit({
        athletes: data.selectedAthletes,
        duration: data.duration,
        endDate,
        notes: data.notes,
        startDate,
        title
      })
      formik.resetForm()
    }
  })

  const onCancel = () => {
    formik.resetForm()
    handleClose()
  }

  return (
    <Dialog
      dismissableMask
      draggable={false}
      header="Marcar treino"
      onHide={onCancel}
      style={{ width: '50vw' }}
      visible
    >
      <form className="flex flex-column gap-3" onSubmit={formik.handleSubmit}>
        <div className="flex flex-column gap-2">
          <label htmlFor="form_select">Atletas</label>
          <MultiSelect
            className="w-full"
            filter
            id="form_select"
            onChange={(e) => formik.setFieldValue('selectedAthletes', e.target.value)}
            optionLabel="name"
            options={athletes}
            value={formik.values.selectedAthletes}
          />
        </div>

        <div className="flex justify-content-between">
          <div className="flex flex-column gap-2">
            <label htmlFor="form_date">Data</label>
            <Calendar
              dateFormat="dd / mm / yy"
              inputClassName="max-w-9rem"
              inputId="form_date"
              name="date"
              onChange={(e) => {
                formik.setFieldValue('date', e.target.value)
              }}
              value={formik.values.date}
            />
          </div>

          <div className="flex flex-column gap-2">
            <label htmlFor="form_time">Hora Início</label>
            <Calendar
              inputClassName="max-w-8rem"
              inputId="form_time"
              onChange={(e) => formik.setFieldValue('time', e.target.value)}
              timeOnly
              value={formik.values.time}
            />
          </div>

          <div className="flex flex-column gap-2">
            <label htmlFor="form_duration">Duraçāo (minutos)</label>
            <InputNumber
              buttonLayout="horizontal"
              decrementButtonClassName="p-button-secondary"
              decrementButtonIcon="pi pi-minus"
              id="form_duration"
              incrementButtonClassName="p-button-secondary"
              incrementButtonIcon="pi pi-plus"
              inputClassName="max-w-6rem"
              min={5}
              onValueChange={(e) => formik.setFieldValue('duration', e.target.value)}
              showButtons
              step={5}
              value={formik.values.duration}
            />
          </div>
        </div>

        <div className="flex flex-column gap-2">
          <label htmlFor="form_notes">Notas</label>
          <InputTextarea
            id="form_notes"
            onChange={(e) => formik.setFieldValue('notes', e.target.value)}
            rows={3}
            value={formik.values.notes}
          />
        </div>

        <div className="flex justify-content-end gap-3 mt-4">
          <Button label="Guardar" type="submit" />

          <Button label="Cancelar" onClick={onCancel} severity="danger" />
        </div>
      </form>
    </Dialog>
  )
}
