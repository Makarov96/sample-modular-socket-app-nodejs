export class Appointment {
  size:String;
  price:Number;
  hair:String;;
  time:String;
  imagePath:String
  constructor( 
    size:String,
    price:Number,
    hair:String,
    time:String,
    imagePath:String
    ) {
    this.size = size;
    this.price = price;
    this.hair = hair;
    this.time = time;
    this.imagePath = imagePath;
  }
}