class Centaur{
  constructor(name,breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
  }
  shoot(){
    this.checkCranky()
      if(this.cranky === false){
        return 'Twang!!!'
      } else {
        return 'NO!';
      }
    } 
  run(){
    this.checkCranky()
    if(this.cranky === true){
      return 'NO!';
    } else {
      return 'Clop clop clop clop!!!';
    }
  }
  checkCranky(){
    this.counter++
    if(this.counter >= 3 || this.layingDown === true){
      this.cranky = true;
      return 'NO!'
    }
  }
  sleep(){
    this.counter = 0;
    this.cranky = false;
    if(this.standing === true){
      return 'NO!';
    } else {
      return 'ZZZZ'
    }
  }
  layDown(){
    this.standing = false;
    this.layingDown = true;
  }
  standUp(){
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion(){
    if(this.standing === true){
      this.cranky = !this.cranky;
    } else {
      return 'Not while I\'m laying down!';
    }

  }
}

// all tests passed

module.exports = Centaur;