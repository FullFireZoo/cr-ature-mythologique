class Wizard {
  constructor(wizObj) {
    this.name = wizObj.name;
    this.isRested = true;
    this.numSpells = 0;
    if (wizObj.bearded == undefined) {
      this.bearded = true;
    } else {
      this.bearded = wizObj.bearded;
    }
  }incantation(spells){
    return spells.toUpperCase();
  }cast(){
    this.numSpells++
    if(this.numSpells >= 3){
      this.isRested = false;
      return "I SHALL NOT CAST!"
    }else{
    return "MAGIC BULLET"
    } 
  }
}

// all tests passedle

module.exports = Wizard;