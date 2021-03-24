function formateDate(datetime) {
    let d = new Date(datetime)
    let formatdatetime =
        d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate())
    return formatdatetime
}
function addDateZero(num) {
    return num < 10 ? '0' + num : num
}

console.log(formateDate('2021-04-06T16:00:00.000Z'))
