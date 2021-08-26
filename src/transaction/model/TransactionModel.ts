const { Model } = require('sequelize');

export class TransactionModel extends Model{
    total: number;
    date: string;
    discount: number;
    unitPrice: number;
    quantity: number;
}
