import { AppointmentRepository } from "../contracts/appointment_repositories"
import { Appointment } from "../models/appointment"
import { prisma } from "../../../../../prisma/generated/prisma-client/index";
import { AppointmentInterface } from "../../adapter/interfaces/appointment.interface";
import { TotalAppoinmet } from "../../data/models/totalappointment";
import { TotalAppoinmetInteface } from "../../adapter/interfaces/totalappointment";
import * as cron from "node-cron";


export class AppointmentPrismaDatasource implements AppointmentRepository {


  async updateManualTotalAppoinment(id: String, value: number): Promise<[TotalAppoinmetInteface]> {
    return await prisma.updateTotalAppointment({
      where: { id: id.toString() },
      data: {
        defaultTotal: value,
        total: value
      }
    }).$fragment("{total}");

  }

  async createNewValueTotalAppoinment(newValueTotalAppointment: TotalAppoinmetInteface): Promise<TotalAppoinmetInteface> {
    const newTotalAppoinment = prisma.createTotalAppointment({
      defaultTotal: newValueTotalAppointment.total,
      total: newValueTotalAppointment.total

    });
    return newTotalAppoinment;
  }

  async getTotalAppoinment(): Promise<[TotalAppoinmet]> {
    const fragment = "{ id createdAt updatedAt total}";
    return await prisma.totalAppointments().$fragment(fragment)
  }

  updateTotalAppoinment() {
    cron.schedule("25 21 * * *", async () => {
      try {
        const totalappoimnet: Array<TotalAppoinmet> = await prisma.totalAppointments().$fragment("{id defaultTotal}")
        prisma.updateTotalAppointment({
          where: { id: totalappoimnet[0].id.toString() },
          data: {
            total: totalappoimnet[0].defaultTotal
          }
        })
          .$fragment("{id}")
          .catch(error => console.error("Sucedio un error tiempo de respuesta invalid" + error));
      } catch (error) {
        console.error("Error inesperado" + error)
      }
    }, {
      scheduled: true,
      timezone: "America/Guatemala"
    });
  }
  // Appointment Component 

  async createAppoinment(newAppoinment: AppointmentInterface): Promise<String> {
    const appointmentCreated = prisma.createAppointment({
      hair: newAppoinment.hair.toString(),
      price: newAppoinment.price,
      size: newAppoinment.size.toString(),
      time: newAppoinment.time.toString(),
      imagePath: newAppoinment.imagePath.toString()
    });

    return appointmentCreated.id();
  }

  async appoitments(): Promise<Appointment[]> {
    return await prisma.appointments().$fragment("{ id size price hair time imagePath}")
  }

  async updateAppoinment(id: String, updateAppoinment: AppointmentInterface): Promise<String> {

    const resultID = await prisma.updateAppointment({
      where: {
        id: id.toString()
      },
      data: {
        hair: updateAppoinment.hair.toString(),
        price: updateAppoinment.price,
        size: updateAppoinment.size.toString(),
        time: updateAppoinment.time.toString(),
        imagePath: updateAppoinment.imagePath.toString()
      }
    })
    return resultID.id;
  }


  async deleteAppoinment(id: String): Promise<String> {
    const reultDeleteID = await prisma.deleteAppointment({
      id: id.toString()
    })
    return reultDeleteID.id
  }

}