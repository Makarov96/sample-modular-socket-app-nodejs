import  express  from "express";

import * as http from "http";
import { router} from  './routes/routes';
import bodyParser from "body-parser";
import  morgan from "morgan";
import { PORT} from "./core/utils/config"
import errorMiddleware from './core/middleware/error.middleware';
import socket from "./socket";


const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(router);
app.use(morgan("dev"));
app.use(errorMiddleware);
app.set( "ipaddr", "127.0.0.1" ); 
app.set( "port", PORT);

server.listen(PORT, () => {console.log('server is running on port http://localhost:'+`${PORT}`,) });
socket.connect(server);
