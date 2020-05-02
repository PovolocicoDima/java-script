let protoRabbit = {
    speak(line) {
        console.log(`${this.type} rabbit speaks: '${line}'`);
    }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "combat";
killerRabbit.speak("PIF-PAF");