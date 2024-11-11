let diceSides: number = 6;
const diceMAX: number = 99;
const diceMIN: number = 2;
let buttonWasPressed: number = 0; //0 bude nestisknuto, 1 bude stisknuto


while (true) {
    if(input.buttonIsPressed(Button.A)) { //minus
        if (diceSides > diceMIN) {
            diceSides = diceSides - 1
        }
        basic.showNumber(diceSides)
    }

    if (input.buttonIsPressed(Button.B)) { //plus
        if (diceSides < diceMAX) {
            diceSides += 1
        }
        basic.showNumber(diceSides)
    }

    if (input.isGesture(Gesture.Shake)) {
        let value = randint(1, diceSides)
        basic.showNumber(value)
    }
}




//buttonWasPressed = input.buttonIsPressed(Button.A) ? 1:0

//console.logValue("button state", buttonWasPressed)

basic.pause(50); // 1000ms / 50ms = 20 iterací za sekundu