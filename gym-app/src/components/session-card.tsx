import { format } from 'date-fns'
import { getGridPosition } from './utils'

export const SessionCard = ({ session }: { session: {
  id: string,
  title: string,
  startDate: Date,
  endDate: Date,
  duration: number
} }) => {
  const start = getGridPosition(session.startDate)
  const end = getGridPosition(session.endDate)
  const height = end - start

  return (
    <div
      className={`
        absolute z-4 border-round bg-bluegray-200 h-${height}rem w-10rem align-items-start px-1 flex flex-column
      `}
      style={{ marginTop: `${start}rem`, height: `${height}rem` }}
    >
      <p className="font-bold m-0">{session.title}</p>
      {session.duration > 45 &&
        <p className="flex text-xs m-0">
          {`${format(session.startDate, 'kk:mm')} - ${format(session.endDate, 'kk:mm')}`}
        </p>}
    </div>
  )
}
