const events = require("events")

module.exports = new events.EventEmitter()
module.exports.events = {
  REDRAW: "redraw",
  FOCUS: "character:focus",
  ERR: "err",
  FLASH: "message:flash",
  CHANGE_THEME: "theme",
}
