class Animal {
    speak(words) {
        console.log(this.translate(words, ""));
    }
    translate(words, catchphrase ) {
        return words.replace(/ /g, catchphrase).concat(catchphrase);
    }
  }

class Lion extends Animal {
    speak(words) {
        console.log(this.translate(words, " roar "));
    }
}

class Tiger extends Animal {
    speak(words) {
        console.log(this.translate(words, " grrr "));
    }
}

let tiger = new Tiger();
let lion = new Lion();

lion.speak("I'm a lion");
tiger.speak("Lions suck");