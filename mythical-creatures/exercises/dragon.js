class Dragon{
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.eatenVillager = 0; 
  } eat(){
    this.eatenVillager++
    if (this.eatenVillager >= 3){
     this.hungry = false;
    }
  }
}

// passed all tests

module.exports = Dragon;