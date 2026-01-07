import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config() 

 const DATABASE_URL: string = process.env.DATABASE_URL;
 if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is undefined');
 }

const connectDB = async () => {
  try {
    const sequelize: Sequelize = new Sequelize(DATABASE_URL);
    await sequelize.authenticate();
    
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log('Unable to connect to the database', error);
  }
}
export default  connectDB;


