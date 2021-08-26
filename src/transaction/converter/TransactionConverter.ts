import {TransactionDto} from "../dto/TransactionDto";
import {TransactionModel} from "../model/TransactionModel";


export class TransactionConverter{
    static toDto(val: TransactionModel): TransactionDto {
        return {
            total: val.total,
            date: val.date,
            discount: val.discount,
            unitPrice: val.unitPrice,
            quantity: val.quantity,
        };
    }

    static toDtoList(val: TransactionModel[]): TransactionDto[] {
        return val.map(element =>  {
            return {
                total: element.total,
                date: element.date,
                discount: element.discount,
                unitPrice: element.unitPrice,
                quantity: element.quantity,
            }
        });
    }

    static toModel(val: TransactionDto): TransactionModel {
        return {
            total: val.total,
            date: val.date,
            discount: val.discount,
            unitPrice: val.unitPrice,
            quantity: val.quantity,
        };
    }
}
