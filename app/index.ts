require('dotenv').config();
import express from 'express';
import cors from 'cors';
import http from 'http';

const app = express();

app.use(cors({
  credentials: true,
}));
app.use(express.json());

const server = http.createServer(app);

server.listen(8000, () => {
  console.log('server running on localhost:8000')
});
