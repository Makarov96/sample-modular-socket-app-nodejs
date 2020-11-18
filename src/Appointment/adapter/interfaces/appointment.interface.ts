import { Float } from "../../../../../prisma/generated/prisma-client";

export interface AppointmentInterface{
    size:String;
    price:Float;
    hair:String;
    time:String;
    imagePath:String
}