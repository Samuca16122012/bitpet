let luminosidade = 0
basic.forever(function () {
    luminosidade = input.lightLevel()
    if (luminosidade > 100) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
