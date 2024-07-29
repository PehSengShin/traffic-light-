let Green = 0
let Yellow = 0
let Red = 0
basic.forever(function () {
    Green = 71
    Yellow = 3
    Red = 43
    for (let index = 0; index < 71; index++) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
        basic.showNumber(Green)
        Green += -1
    }
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(1000)
        basic.showNumber(Yellow)
        Yellow += -1
    }
    for (let index = 0; index < 42; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(1000)
        basic.showNumber(Yellow)
        Yellow += -1
    }
})
