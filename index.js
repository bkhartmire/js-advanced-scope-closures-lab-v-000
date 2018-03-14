function produceDrivingRange(blockRange) {
  return function(start, destination) {
    let a = parseInt(start.slice(0, -2))
    let b = parseInt(destination.slice(0, -2))
    let distance = Math.abs(b - a)
    let difference = Math.abs(blockRange - distance)
    if(distance <= blockRange) {
      return `within range by ${difference}`
    } else {
      return `${difference} blocks out of range`
    }
  }
}
