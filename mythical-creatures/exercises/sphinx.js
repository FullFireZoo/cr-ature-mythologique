class Sphinx{
  constructor(){
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  } 
  collectRiddle(riddle){
    this.riddles.push(riddle);
    if(this.riddles.length > 3){
    this.riddles.shift();
    } 
  } 
  attemptAnswer(attempted) {
      for (let i = 0; i < this.riddles.length; i++) {
        if(attempted === this.riddles[i].answer){
          this.riddles.splice(i,1)
          if (this.riddles.length === 0) {
            return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${attempted}"???`
          }
          return "That wasn't that hard, I bet you don't get the next one";
        }
      }
    this.heroesEaten++;
  }
}

module.exports = Sphinx;