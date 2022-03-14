class Stark {
  constructor(name, location){
    this.name = name;
    this.location = location || 'Winterfell';
    this.safe = false;
  }
  houseWords(){
    if (this.safe === false){
      return 'Winter is Coming';
    } else {
      return 'The North Remembers';
    }
  }
}
// all tests passed
module.exports = Stark;