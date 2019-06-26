// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) { return string.toLowerCase() === driver.toLowerCase(); })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) { return string[0..2] === driver[0..2]})
}
