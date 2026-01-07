import express from 'express';
import type { Request, Response } from 'express'
import dotenv from 'dotenv'
import  sequelize, { connectDB }   from './config/database';



dotenv.config();
connectDB();

const app = express();

const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API working',
    env: process.env.NODE_ENV
  })
})

app.listen(port, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    console.log(`Environment: ${nodeEnv}`);
    console.log(sequelize.config)
})