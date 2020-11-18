import { AppointmentManager } from "../adapter/managers/appointment_manager";
import { AppointmentPrismaDatasource } from "../data/resources/appointment_prisma_repository";
import { UserManager } from "../../User/adapter/managers/user_manager";
import { UserPrismaRepository } from "../../User/data/resources/user_prisma_repository"
import { UserInfoAppointmentInterface } from "../../User/adapter/interfaces/user_info_appointment.interface";
import socket from "../../../socket";



export class JobAppoinmetSockets {
  private appointmentRepositoryImpl: AppointmentManager;
  private usermanager: UserManager;

  constructor() {
    this.usermanager = new UserManager(new UserPrismaRepository());
    this.appointmentRepositoryImpl = new AppointmentManager(new AppointmentPrismaDatasource())

  }



  async emitTotalValue() {
    const connection = socket.connection();

    if (connection) {
      const result = await this.appointmentRepositoryImpl.getTotalAppoinment();
      connection.emitall("totalappoinmet", result)
    }

  }

  createUserInfoAppointment() {
    const connection = socket.connection();
    if (connection) {
      connection.on("createUserInfoAppointment", async (payload: any) => {
        const userAppointment: UserInfoAppointmentInterface = payload.data;
        const result = await this.usermanager.insertUserInfoAppointment(payload.id.user, userAppointment);
        this.emitTotalValue()
      });
    }
  }
}