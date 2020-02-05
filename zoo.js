class Animal {
    constructor() {
        this.catchphrase =  "";
    }
 
    speak(words) {
        console.log(this.translate(words, catchphrase));
    }
    translate(words, catchphrase ) {
        return words.replace(/ /g, catchphrase).concat(catchphrase);
    }
}

class Lion extends Animal {
    catchphrase =  " roar ";
    speak(words) {
        console.log(this.translate(words, this.catchphrase));
    }
}

class Tiger extends Animal {
    catchphrase =  " grrr ";
    speak(words) {
        console.log(this.translate(words, this.catchphrase));
    }
}

let tiger = new Tiger();
let lion = new Lion();

lion.speak("I'm a lion");
tiger.speak("Lions suck");