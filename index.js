// Code your solution in this file
function findMatching(drivers, string) {
  const filteredDrivers = drivers.filter(function (driver) { return string.toLowerCase === driver; })
  return filteredDrivers
}
