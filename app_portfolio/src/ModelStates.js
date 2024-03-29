class ModelStates {
    constructor(){
        this.firstSection = false;
        this.secondSection = false;
        this.thirdSection = false;
        this.forthSection = false;
        this.subscribers = [];
    }

    setCurrentSection(currentSection) {
        this.currentSection = currentSection;
        this.notifyObservers();
    }

    setFirstSection(bool) {
        this.firstSection = bool;
        this.notifyObservers();
    }

    setSecondSection(bool) {
        this.secondSection = bool;
        this.notifyObservers();
    }

    setThirdSection(bool) {
        this.thirdSection = bool;
        this.notifyObservers();
    }

    setForthSection(bool) {
        this.forthSection = bool;
        this.notifyObservers();
    }

    addObserver(obs){
        this.subscribers = this.subscribers.concat(obs);   
        return () => this.removeObserver(obs);                                                   
    }

    removeObserver(obs){
        this.subscribers= this.subscribers.filter(o => o!== obs); 
    }

    notifyObservers(){
        this.subscribers.forEach(callback => {
            try {
                callback()
            } catch(err) {
                  console.error("Error ", err, callback);}
            }
        )
    }
}

export default ModelStates;