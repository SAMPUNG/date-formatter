const RE_DATE_TIME = /^(\d)(\d)(\d)(\d)-(0?)(\d+)-(0?)(\d+)T(0?)(\d+):(0?)(\d+):(0?)(\d+).(0+)(\d+)Z$/
const DATE_TIME_PIECES = {
  dd: '$7$8',
  d: '$8',
  hh: '$9$10',
  h: '$10',
  MM: '$5$6',
  M: '$6',
  mm: '$11$12',
  m: '$12',
  ss: '$13$14',
  s: '$14',
  S: '$16',
  yyyy: '$1$2$3$4',
  yyy: '$2$3$4',
  yy: '$3$4',
  y: '$4',
}

export function formatDate(date: Date, formatting: string) {
  Object.entries(DATE_TIME_PIECES).forEach(([key, value]) => {
    formatting = formatting.replace(new RegExp(key), value)
  })
  return date.toJSON().replace(RE_DATE_TIME, formatting)
}
