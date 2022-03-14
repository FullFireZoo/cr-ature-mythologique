class Human {
  constructor(){
    this.name = 'Jane';
    this.encounterCounter = 0;
    this.knockedOut = false;
  }
  noticesOgre(){
    if(this.encounterCounter < 3){
      return false;
    } else {
      this.encounterCounter = 0;
      return true;
    }
  }

}

module.exports = Human;