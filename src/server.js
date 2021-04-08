const express = require('express');
const morgan = require('morgan');

//imports
import router from './routes/index.routes';
import { connect } from './database';

//setting
const server = express();
require('dotenv').config();
server.set('port' , process.env.PORT || 4001);

//middlewares
server.use(express.json());
server.use(morgan('dev'));

//database connection
connect();

//routes
server.use(router);

//exports
export default server;