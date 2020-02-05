class Animal {
    constructor(pharse) {
        this.catchphrase = pharse;
    }
 
    speak(words) {
        console.log(this.translate(words, catchphrase));
    }
    translate(words, catchphrase ) {
        return words.replace(/ /g, catchphrase).concat(catchphrase);
    }
}

class Lion extends Animal {
    speak(words) {
        console.log(this.translate(words, this.catchphrase));
    }
}

class Tiger extends Animal {
    speak(words) {
        console.log(this.translate(words, this.catchphrase));
    }
}

let tiger = new Tiger(" grrr ");
let lion = new Lion(" roar ");

lion.speak("I'm a lion");
tiger.speak("Lions suck");