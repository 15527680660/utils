import moment from 'moment'

function dateFormat (x, y = 'D') {
  let f = 'YYYY-MM-DD'
  switch (y) {
    case 'M':
      f = 'YYYY-MM-DD HH:mm'
      break
    case 'S':
      f = 'YYYY-MM-DD HH:mm:ss'
      break
    default:
      f = 'YYYY-MM-DD'
      break
  }
  return !!x?.value ? moment(x.value).format(f) : !!x ? moment(x).format(f) : ''
}

export default dateFormat
