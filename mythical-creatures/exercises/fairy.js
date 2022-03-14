class Fairy{
  constructor(name, dust, obj){
    this.name = name;
    this.dust = dust || 10;
    this.disposition = 'Good natured'
    this.clothes = {dresses:['Iris']}
    this.humanWards = []
    this.stolenBabies = 0;
  }
  recieveBelief(dustAfter, dustBefore){
    // var dustAfter = this.dust
    // return difference = dustAfter - dustBefore;
    this.dust++
  }
  believe(){
    this.dust +=10;
  }
  makeDresses(moDresses){
    this.clothes.dresses = this.clothes.dresses.concat(moDresses)
    // this.clothes.dresses.forEach(element => {
    //   this.makeDresses.push(element)
    // });
  }
  provoke(){
    this.disposition = 'Vengeful';
  }
  replaceInfant(baby){
    this.stolenBabies++;
    if(this.disposition === 'Vengeful' && this.stolenBabies < 3){
    this.humanWards = this.humanWards.concat(baby)
    baby.disposition = 'Malicious';
    }else{
     this.disposition = 'Good natured'
     return baby;
    }
  }
}

// all tests passed

module.exports = Fairy;