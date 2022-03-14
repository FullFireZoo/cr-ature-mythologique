class Direwolf{
  constructor(name, home, size){
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(stark){
    if (this.starksToProtect.length >= 2){
      return;
    }
    if(stark.location === this.home){
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }
  leave(stark){
    stark.safe = false;
    this.starksToProtect = []
  }
}

// all tests passed

module.exports = Direwolf;