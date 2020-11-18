import { Appointment } from "../models/appointment"
import { AppointmentInterface } from "../../adapter/interfaces/appointment.interface";
import { TotalAppoinmet } from "../../data/models/totalappointment";
import { TotalAppoinmetInteface } from "../../adapter/interfaces/totalappointment";

export interface AppointmentRepository {
  appoitments(): Promise<Appointment[]>
  createAppoinment(newAppoinment: AppointmentInterface): Promise<String>
  updateAppoinment(id: String, updateAppoinment: AppointmentInterface): Promise<String>
  deleteAppoinment(id: String): Promise<String>
  //OtherEntity
  updateTotalAppoinment(): any


  //TotalAppoinmet
  getTotalAppoinment(): Promise<[TotalAppoinmet]>
  //el administrador actualiza la cita manualmente
  updateManualTotalAppoinment(id: String, value:number): Promise<[TotalAppoinmetInteface]>
  createNewValueTotalAppoinment(newValueTotalAppointment: TotalAppoinmetInteface): Promise<TotalAppoinmetInteface>;


}


