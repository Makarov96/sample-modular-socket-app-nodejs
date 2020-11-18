import { JobAppoinmetSockets } from "./features/Appointment/socket/job";
import checkJWT from "./helpers/check_jwt";
let connection: any = null;

export class Socket {
  socket: any;
  io: any
  jobAppoinmentSocket: JobAppoinmetSockets;


  constructor() {
    this.jobAppoinmentSocket = new JobAppoinmetSockets();

  }

  connect(server: any) {
    this.io = require("socket.io")(server);;
    this.io.on("connection", (socket: any) => {
      console.log('Cliente conectado')
      this.socket = socket;
      //this.jobAppoinmentSocket.createUserInfoAppointment();
      this.jobAppoinmentSocket.emitTotalValue();

      socket.on('disconnect', () => {
        console.log('Cliente desconetado')
      })

      
      const value=  checkJWT(socket.handshake.headers['x-token']);
      console.log(value);
    });
  }
  
  emitOne(event: any, data: any) {
    this.socket.emit(event, data);
  }

  on(event: any, handler: (any)) {
    this.socket.on(event, handler);
  }

  emitall(event: any, data: any) {

    this.io.emit(event, data);

  }

  broadcast(event: any, data: any) {
    this.socket.broadcast.emit(event, data)
  }

  static init(server: any) {

    if (!connection) {
      connection = new Socket();
      connection.connect(server);


    }
  }
  static getConnection() {
    if (connection) {
      return connection;
    }
  }
}


export default {
  connect: Socket.init,
  connection: Socket.getConnection
}