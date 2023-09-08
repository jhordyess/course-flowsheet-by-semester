import { findPostrequisites, findPrerequisites } from '@/data/example'
import './style.css'

type TDProps = {
  id: string
  text: string
  tdClass: string
  tdsClass: Record<string, string>
  setTdsClass: (tdsClass: Record<string, string>) => void
}

export default function TD({ id, text, tdClass, tdsClass, setTdsClass }: TDProps) {
  const handleIn = () => {
    findPostrequisites(id).forEach(value => {
      tdsClass[value] = 'td_postreq'
    })
    tdsClass[id] = 'td_hover'
    const pre = findPrerequisites(id)
    pre.forEach(value => {
      tdsClass[value] = 'td_prereq'
    })
    setTdsClass({ ...tdsClass })
  }

  const handleOut = () => {
    findPostrequisites(id).forEach(value => {
      tdsClass[value] = ''
    })
    tdsClass[id] = ''
    const pre = findPrerequisites(id)
    pre.forEach(value => {
      tdsClass[value] = ''
    })
    setTdsClass({ ...tdsClass })
  }

  return (
    <td className={tdClass} onMouseEnter={handleIn} onMouseLeave={handleOut}>
      {text}
    </td>
  )
}
