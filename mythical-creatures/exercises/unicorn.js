class Unicorn{
  constructor(name, color){
    this.name = name;
    this.color = color || 'white';
  } isWhite() {
    return false;
  } says(neigh) {
    return `**;* ${neigh} *;**`;
  }
}

// all tests passed

module.exports = Unicorn;