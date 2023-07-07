const { dajb } = require("daj");

class client extends dajb {
  #DateRegiste;
  #Points;
  
  constructor(Name, Direction, DateRegiste) {
    super()
    this.Name = Name;
    this.Direction = Direction; 
    this.DateRegiste = DateRegiste;
  }
  getDateRegiste() {
    return this.DateRegiste;
  }
  
  getPoints() {
    return this.Points;
  }
  getPoints(value) {
    this.SalePrice = value;
  }
}

module.exports = client;