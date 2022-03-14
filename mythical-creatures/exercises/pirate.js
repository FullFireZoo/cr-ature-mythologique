class Pirate{
  constructor(name, job){
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.karmaHits = 0;
    this.booty = 0;
  }commitHeinousAct(){
    this.karmaHits++
    if(this.karmaHits >= 3){
      this.cursed = true;
    }
  }robShip(){
    this.booty = 100;
    return 'YAARRR!';
  }
}

// all tests passed

module.exports = Pirate;