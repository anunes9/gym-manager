import { format } from 'date-fns'

export const currentDate = new Date()

export const defaultEventDuration = 75 // in minutes

export const columnHeight = 3 // in rem

export const formatHour = (n: number) => (n === 0 ? '' : `${('0' + n).slice(-2)}:00`)

export const getGridPosition = (date: Date) => {
  const hour = format(date, 'k')
  const minutes = format(date, 'm')
  // Each column has 3rem of height
  return (Number(hour) * columnHeight) + (Number(minutes) / 60 * columnHeight)
}

export const isToday = (day: Date) => format(day, 'P') === format(currentDate, 'P')
