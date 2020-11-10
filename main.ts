let x1 = 0
basic.forever(function () {
    x1 += 1
    serial.writeValue("x", Math.constrain(x1, 0, 16))
})
