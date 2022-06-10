input.onButtonPressed(Button.A, function () {
    Moving = Moving * -1
})
let Moving = 0
cuteBot.stopcar()
Moving = -1
basic.forever(function () {
    if (Moving == 1) {
        if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) <= 10) {
            cuteBot.moveTime(cuteBot.Direction.left, 50, 0.25)
        } else {
            cuteBot.motors(50, 50)
        }
    } else {
        cuteBot.stopcar()
    }
})
