"use strict";
/**
 * @hidden
 */
(function (KeyEvents) {
    KeyEvents[KeyEvents["keydown"] = 0] = "keydown";
    KeyEvents[KeyEvents["keypress"] = 1] = "keypress";
    KeyEvents[KeyEvents["keyup"] = 2] = "keyup";
})(exports.KeyEvents || (exports.KeyEvents = {}));
var KeyEvents = exports.KeyEvents;
