import { Sequelize } from 'sequelize';

import  dotenv  from 'dotenv';
dotenv.config();

const dbHost   = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER  as string;
const dbPassword = process.env.DB_PASSWORD  as string;
const dbDialect = (process.env.DB_DIALECT || 'postgres') as Dialect;
const dbName = process.env.DB_NAME as string;

const sequelize = new Sequelize(dbName, dbUser,  dbPassword, {
    host: dbHost,
    dialect: dbDialect,
    dialectOptions: {
        ssl:  {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export const connectDB = async () =>  {
    try {
        await sequelize.authenticate();
        console.log('✅ Connection has been established successfully.');

    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
        process.exit(1); // Exit if the DB is required for the app to function
    }
}

export default sequelize;

