let Light = 0
basic.forever(function () {
    Light = pins.analogReadPin(AnalogPin.P0)
    if (Light > 200) {
        music.playMelody("C D E F G A B C5 ", 120)
        music.playMelody("C D E F G A B C5 ", 120)
        music.playMelody("C5 B A B C5 B A G ", 120)
        music.playMelody("C5 B A B C5 B A G ", 120)
        music.playMelody("C5 B A G A B C5 B ", 120)
        music.playMelody("D B C5 F C G A F ", 120)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.showString("Get up!!!")
        basic.showString("Good morning!!!")
    } else {
        basic.showLeds(`
            # # # . .
            . # # # .
            . . # # .
            . # # # .
            # # # . .
            `)
        music.playMelody("C5 B A G F E D C ", 120)
        music.playMelody("C5 B A G A G F G ", 120)
        music.playMelody("C5 B A G F E F G ", 120)
        music.playMelody("C5 B A E D C D E ", 120)
        music.playMelody("B B A A G G F F ", 120)
        basic.showString("Go to Bed !!!!")
        basic.showString("night-night!!!!!")
    }
})
