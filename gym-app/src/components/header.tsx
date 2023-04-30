import { format } from 'date-fns'
import { pt } from 'date-fns/locale'

export const Header = ({ currentDate, week }: { currentDate: Date; week: Date[] }) => (
  <div className="flex">
    <div className=" h-6rem w-3rem" />

    {week.map((day, index) => (
      <div className="font-bold h-6rem flex-1 flex align-items-center justify-content-center" key={index}>
        <DayButton currentDate={currentDate} day={day} />
      </div>
    ))}
  </div>
)

const DayButton = ({ currentDate, day }: { currentDate: Date; day: Date }) => {
  const isToday = format(day, 'P') === format(currentDate, 'P')
  const textStyle = `cursor-pointer text-xl m-0 w-3rem h-3rem flex align-items-center
    justify-content-center mt-1 border-circle hover:surface-500`
  const isTodayStyle = `${textStyle} bg-primary`

  return (
    <div className="flex flex-column">
      <p className="text-sm m-0 uppercase">{format(day, 'EEE', { locale: pt })}</p>
      <p className={isToday ? isTodayStyle : textStyle}>{format(day, 'dd', { locale: pt })}</p>
    </div>
  )
}
