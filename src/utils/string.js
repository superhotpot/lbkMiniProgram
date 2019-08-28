export function secondsToduration(seconds) {
  //TODO: seconds to MM:SS
  var seconds = seconds;
  var minites = 0;
  var hours = 0;
  if (seconds > 60) {
    minites = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60);
    if (minites > 60) {
      minites = parseInt(minites / 60);
      hours = parseInt(minites % 60);
    }
  }
  var result = "" + parseInt(seconds);
  if (minites > 0) {
    result = parseInt(minites) + ":" + result;
  }
  return result;
}