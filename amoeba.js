class Amoeba {
  constructor() {
    this.value = "a";
    this.children = [];
  }
  countAmoebas(){
    return this.children.reduce((memo, child) => {
      memo += 1;
      if(child.children.length > 0){
        memo += child.countAmoebas();
      }
      return memo;
    }, 1);
  }
  singleYearSimulater(){
    if(this.value === "a"){
      this.value = "A";
    } else {
      if(this.children.length > 0){
        this.children.forEach(child => child.singleYearSimulater());
      }
      this.children.push(new Amoeba());
    }
  }
  simulateYearByNumber(numberOfYears){
    if(numberOfYears > 0) {
      for (var i = 1; i <= numberOfYears; i++) {
        this.singleYearSimulater();
      }
    }
  }
  printValueAndChildren(){
    console.log(this.children);
    console.log(this.value);
    return;
  }
}

const parent = new Amoeba();
parent.simulateYearByNumber(3);
console.log(parent.countAmoebas());
console.log(parent.printValueAndChildren());

