import {TransactionModel} from "../../transaction/model/TransactionModel";
const {DataTypes } = require('sequelize');

export function InitModel(sequelize){
    TransactionModel.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: DataTypes.DATEONLY,
        total: DataTypes.FLOAT,
        discount: DataTypes.DOUBLE,
        unitPrice: DataTypes.DOUBLE,
        quantity: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    }, {
        tableName: 'transaction',
        createdAt: false,
        updatedAt: false,
        sequelize, // We need to pass the connection instance
    })

}
