"use strict";

// let debug = require("debug")("bbt-patcher");

class Logger {
    debug(str) {
        if (!str) {
            return;
        }
        console.log(str + "\n");
    }

    error(str) {
        if (!str) {
            return;
        }
        console.log("ERROR!" + str + "\n");
    }
}

module.exports = Logger;
