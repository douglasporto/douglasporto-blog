import { parseISO, format } from 'date-fns'
import enUs from 'date-fns/locale/en-US'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  // return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d',' yyyy'", { locale: enUs })}
    </time>
  )
}

export default DateFormatter
