import { Appointment } from "../../data/models/appointment";
import { AppointmentRepository } from "../../data/contracts/appointment_repositories"
import { AppointmentInterface } from "../../adapter/interfaces/appointment.interface";
import { TotalAppoinmet } from "../../data/models/totalappointment";
import { TotalAppoinmetInteface } from "../../adapter/interfaces/totalappointment";


export class AppointmentManager {
  private appointmentRepository: AppointmentRepository;


  constructor(appointmentRepository: AppointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  async getAppointment(): Promise<Appointment[]> {
    const appointment = await this.appointmentRepository.appoitments();
    return appointment;
  }


  async createAppointment(newAppoinment: AppointmentInterface): Promise<String> {
    const appointmentCreated = await this.appointmentRepository.createAppoinment(newAppoinment);
    return appointmentCreated;
  }



  async updateAppoinment(id: string, updateAppoinment: AppointmentInterface): Promise<String> {
    const appointmentUpdated = await this.appointmentRepository.updateAppoinment(id, updateAppoinment);
    return appointmentUpdated;
  }

  async deleteAppoinment(id: String): Promise<String> {
    const appointmentDeleted = await this.appointmentRepository.deleteAppoinment(id);
    return appointmentDeleted;
  }

  //Total appoinment
  async getTotalAppoinment(): Promise<[TotalAppoinmet]> {

    return await this.appointmentRepository.getTotalAppoinment();
  }

  async createNewValueTotalAppoinment(newValueTotalAppointment: TotalAppoinmetInteface): Promise<TotalAppoinmetInteface> {
    return await this.appointmentRepository.createNewValueTotalAppoinment(newValueTotalAppointment);
  }


  async updateTotalAppointmen() {
    return await this.appointmentRepository.updateTotalAppoinment()
  }


  async updateManualTotalAppoinment(id: String, value: number): Promise<[TotalAppoinmetInteface]> {
    return await this.appointmentRepository.updateManualTotalAppoinment(id, value);
  }
}