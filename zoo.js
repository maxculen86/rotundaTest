class Animal {
    constructor() {
        this.catchphrase;
    }
    speak(words) {
        console.log(this.translate(words, this.catchphrase));
    }
    translate(words, catchphrase ) {
        return words.replace(/ /g, catchphrase).concat(catchphrase).trimEnd();
    }
}

class Lion extends Animal {
    catchphrase = " roar "
}

class Tiger extends Animal {
    catchphrase = " grrr "
}

let tiger = new Tiger();
let lion = new Lion();

lion.speak("I'm a lion");
tiger.speak("Lions suck");