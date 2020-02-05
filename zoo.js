class Animal {
    speak(words) {
        console.log(words);
    }
  }

class Lion extends Animal {
    speak(words) {
        var language = " roar ";
        var translate = words.replace(/ /g, language).concat(language);
        console.log(translate);
    }
}

class Tiger extends Animal {
    speak(words) {
        var language = " grrr ";
        var translate = words.replace(/ /g, language).concat(language);
        console.log(translate);
    }
}

let tiger = new Tiger();
let lion = new Lion();

lion.speak("I'm a lion");
tiger.speak("Lions suck");