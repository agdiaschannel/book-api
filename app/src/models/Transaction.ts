import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

type TransactionType = 'BUY'| 'SELL';

const Transaction = sequelize.define(
    'Transaction',
    {
       ticker: {
        type: DataTypes.STRING,
        allowNull: false
       } ,
       description: {
        type: DataTypes.STRING,
        allowNull: true,
       },
       purchaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
       },
       shares: {
        type: DataTypes.INTEGER ,
        allowNull: false,
       },
       price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
       },
       sector: {
        type: DataTypes.STRING,
        allowNull: false
       },
       type: {
        type: DataTypes.ENUM('BUY','SELL'),
        allowNull: false
       }



    }
);

