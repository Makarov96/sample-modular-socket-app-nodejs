import { Response, Request, NextFunction } from "express";
import { AppointmentManager } from "../managers/appointment_manager";
import { AppointmentPrismaDatasource } from "../../data/resources/appointment_prisma_repository";
import { AppointmentInterface } from "../interfaces/appointment.interface";
import HttpException from "../../../../core/exceptions/http_exception";
import { TotalAppoinmetInteface } from "../../adapter/interfaces/totalappointment";


abstract class AppointmentController {
  indexGetAppointment = async (req: any, res: any, next: NextFunction) => { }
  indexDeleteAppointment = async (req: any, res: any, next: NextFunction) => { }
  indexCreateAppointment = async (req: any, res: any, next: NextFunction) => { }
  indexUpdateAppointment = async (req: any, res: any, next: NextFunction) => { }

  indexGetTotalAppointment = async (req: any, res: any, next: NextFunction) => { }
  indexUpdateManualtTotalAppoinment = async (req: any, res: any, next: NextFunction) => { }
  indexCreateNewValueTotalAppoinment = async (req: any, res: any, next: NextFunction) => { }

}


class AppointmentControllerImpl implements AppointmentController {
  private appointmentRepositoryImpl: AppointmentManager;

  constructor() {

    this.appointmentRepositoryImpl = new AppointmentManager(new AppointmentPrismaDatasource())
    //Este es un trabajo que se ejecuta al actualizar las citas 
    this.appointmentRepositoryImpl.updateTotalAppointmen();


  }
  indexCreateNewValueTotalAppoinment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newTotalAppointment: TotalAppoinmetInteface = req.body.data;
      if (!newTotalAppointment.total) {
        next(new HttpException(400, "Falta informacion en el json", "Error en el json un dato viene indefinido " + `${newTotalAppointment.total}`));
      } else {
        const result = await this.appointmentRepositoryImpl.createNewValueTotalAppoinment(newTotalAppointment);
        res.status(201).send(result)
      }
    } catch (error) {
    
      next(new HttpException(400, "Error interno vuelve a intentar mas tarde", error));
    }
  }



  indexUpdateManualtTotalAppoinment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newValueTotalAppointment = req.body.data;
      if (!req.params.id || !newValueTotalAppointment.value) {
        next(new HttpException(400, "Falta informacion en el json", "Error en el json un dato viene indefinido " + `${req.params.id} ${newValueTotalAppointment.value}`));
      } else {
        const result = await this.appointmentRepositoryImpl.updateManualTotalAppoinment(req.params.id, newValueTotalAppointment.value)
        res.status(201).send(result)

      }
    } catch (error) {
    
      next(new HttpException(400, "Error interno vuelve a intentar mas tarde", error));
    }
  }


  indexGetTotalAppointment = async (req: Request, res: Response, next: NextFunction) => {
    const totalappoimnet = await this.appointmentRepositoryImpl.getTotalAppoinment();
    res.json(totalappoimnet)
  }


  //Normal appoinment

  indexGetAppointment = async (req: Request, res: Response, next: NextFunction) => {
    const appointment = await this.appointmentRepositoryImpl.getAppointment();
    res.json(appointment)
  }

  indexDeleteAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {

      if (!req.params.id) {
        next(new HttpException(400, "Falta informacion en el json", "Error en el json un dato viene indefinido " + `${req.params.id} `));
      } else {
        const result = this.appointmentRepositoryImpl.deleteAppoinment(req.params.id)
        res.status(201).send(result)
      }
    } catch (error) {
     
      next(new HttpException(400, "Error interno vuelve a intentar mas tarde", error));
    }
  }

  indexCreateAppointment = async (req: Request, res: Response, next: NextFunction) => {

    try {
      const appointmentcreated: AppointmentInterface = req.body.data;

      if (!appointmentcreated.hair || !appointmentcreated.price
        || !appointmentcreated.time || !appointmentcreated.size || 
        !appointmentcreated.imagePath
      ) {
        next(new HttpException(400, "Falta informacion en el json", "Error en el json un dato viene indefinido " + `${appointmentcreated.hair} ${appointmentcreated.price} ${appointmentcreated.size} ${appointmentcreated.time}`));
      } else {
        const result = await this.appointmentRepositoryImpl.createAppointment(appointmentcreated)
        res.status(201).send(result)
      }
    } catch (error) {
    
      next(new HttpException(400, "Error interno vuelve a intentar mas tarde", error));
    }


  }

  indexUpdateAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const appointmentupdated: AppointmentInterface = req.body.data;

      if (!appointmentupdated.hair || !appointmentupdated.price
        || !appointmentupdated.time || !appointmentupdated.size || !req.params.id
      ) {
        next(new HttpException(400, "Falta informacion en el json", "Error en el json un dato viene indefinido " + `${appointmentupdated.hair} ${appointmentupdated.price} ${appointmentupdated.size} ${appointmentupdated.time}+ ${req.params.id}`));
      } else {
        const result = this.appointmentRepositoryImpl.updateAppoinment(req.params.id, appointmentupdated)
        res.status(201).send(result)
      }
    } catch (error) {
   
      next(new HttpException(400, "Error interno vuelve a intentar mas tarde", error));
    }
  }



}



export default new AppointmentControllerImpl();