export function addDay(date, day) {
  return new Date(date.setDate(date.getDate() + day))
}

export function addMonth(date, month) {
  return new Date(date.setMonth(date.getMonth() + month))
}
export default {addDay, addMonth}