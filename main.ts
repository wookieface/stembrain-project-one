input.onButtonPressed(Button.A, function () {
    if (start == 0) {
        setChannel += 1
        basic.showNumber(setChannel)
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    if (start == 0) {
        basic.showNumber(setChannel)
        start = 1
        radio.setGroup(setChannel)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (start == 0) {
        setChannel += -1
        basic.showNumber(setChannel)
    } else {
    	
    }
})
let setChannel = 0
let start = 0
start = 0
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
