import {TransactionModel} from "../model/TransactionModel";

export class TransactionService{
    public static async saveTransaction(transaction: TransactionModel){
        try {
            await TransactionModel.create({
                total: transaction.total,
                date: transaction.date,
                discount: transaction.discount,
                unitPrice: transaction.unitPrice,
                quantity: transaction.quantity,
            });

        } catch (error) {
            throw new Error(error);
        }
    }

    public static async getTransactionById(transactionId: string): Promise<TransactionModel>{
        try{
            const resp =  await TransactionModel.findByPk(transactionId);

            if (typeof resp !== 'undefined' && resp !== null){
                return resp;
            }else{
                throw new Error(`Transaction ${transactionId} not found`);
            }

        }catch (error){
            console.error(error.name);
            throw error;
        }
    }

    public static async listTransactions(): Promise<TransactionModel[]>{
        try{

            return await TransactionModel.findAll();

        }catch (error){
            console.error(error.name);
            throw error;
        }
    }
}
