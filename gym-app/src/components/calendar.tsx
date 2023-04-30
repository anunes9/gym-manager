import { add, eachDayOfInterval, endOfWeek, isSameDay, isToday, startOfWeek } from 'date-fns'
import { useEffect, useState } from 'react'
import { Header } from './header'
import { SessionCard } from './session-card'
import { SessionForm, SessionFormDataType } from './session-form'
import { columnHeight, currentDate, defaultEventDuration, formatHour, getGridPosition } from './utils'

export const Calendar = () => {
  const [visible, setVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(new Date())
  const [indicatorPosition, setIndicatorPosition] = useState(getGridPosition(new Date()))
  const currentWeek = eachDayOfInterval({
    start: startOfWeek(currentDate, { weekStartsOn: 1 }),
    end: endOfWeek(currentDate, { weekStartsOn: 1 })
  })

  const [sessions, setSessions] = useState([
    {
      id: '123',
      athletes: [{ name: 'Andre' }, { name: 'Rui' }],
      duration: defaultEventDuration,
      endDate: add(new Date(2023, 3, 28, 12, 0), { minutes: defaultEventDuration }),
      startDate: new Date(2023, 3, 28, 12, 0),
      title: 'Andre e Rui'
    },
  ])

  useEffect(() => {
    setInterval(() => {
      setIndicatorPosition(getGridPosition(new Date()))
    }, 60000)
  }, [])

  const handleSubmitNewEvent = (data: SessionFormDataType) => {
    const newEvent = {
      id: '124',
      athletes: data.athletes,
      duration: data.duration,
      endDate: data.endDate,
      startDate: data.startDate,
      title: data.title
    }

    setSessions((old) => [...old, newEvent] )
    setVisible(false)
  }

  const handleSlotClick = (date: Date, hour: number) => {
    setSelectedDate(date)
    setSelectedTime(new Date(2000, 1, 1, hour))
    setVisible(true)
  }

  return (
    <div>
      <h1>Calendar</h1>

      <Header currentDate={currentDate} week={currentWeek} />

      <div className="h-auto overflow-scroll">
        <div className="flex">
          <HoursColumn />

          {currentWeek.map((date, idx) => (
            <div className="flex flex-1 flex-column" key={idx}>
              {isToday(date) && <TimeIndicator position={indicatorPosition} />}

              <DayLines handleClick={(hour: number) => handleSlotClick(date, hour)} />

              {sessions.map(session => {
                if (isSameDay(date, session.startDate)) return <SessionCard key={session.id} session={session} />
                return null
              })}
            </div>
          ))}
        </div>
      </div>

      {visible ? <SessionForm
        date={selectedDate}
        handleClose={() => setVisible(false)}
        onSubmit={handleSubmitNewEvent}
        time={selectedTime}
      /> : null}
    </div>
  )
}

const DayLines = ({ handleClick }: { handleClick: (hour: number) => void }) => (
  <>
    {Array.from(Array(24).keys()).map((hour, index) => (
      <div
        className={`
          ${index !== 0 && 'border-top-1'} border-left-1 cursor-pointer h-${columnHeight}rem hover:surface-700
        `}
        key={index}
        onClick={() => handleClick(hour)}
      />
    ))}
  </>
)

const TimeIndicator = ({ position }: { position: number }) => (
  <div
    className=" absolute flex align-items-center z-5"
    style={{ marginTop: `${position}rem` }}
  >
    <div className="w-1rem h-1rem border-circle bg-primary absolute" style={{ marginLeft: -6.5 }} />
    <div className="w-1rem h-1rem bg-primary absolute" style={{ }} />
    <div className="w-10rem bg-primary absolute" style={{ height: '2px' }} />
  </div>
)

const HoursColumn = () => (
  <div className="flex flex-column w-3rem">
    {Array.from(Array(24).keys()).map((hour) => (
      <div className={`h-${columnHeight}rem flex`} key={hour}>
        <p className="text-xs" style={{ marginTop: '-12px' }}>
          {formatHour(hour)}
        </p>
      </div>
    ))}
  </div>
)
