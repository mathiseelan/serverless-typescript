import {Body, Controller, Delete, Get, Path, Post, Put, Route, Tags} from "tsoa";
import {TransactionDto} from "../dto/TransactionDto";
import {TransactionService} from "../service/TransactionService";
import {TransactionConverter} from "../converter/TransactionConverter";


@Tags('Transaction')
@Route('transaction')
export class TransactionController extends Controller {

    @Get('{id}')
    public async getTransaction(
        @Path() id: string,
    ): Promise<TransactionDto> {
        return TransactionConverter.toDto(
            await TransactionService.getTransactionById(id)
        );
    }

    @Get('')
    public async listTransactions(): Promise<TransactionDto[]> {
        return TransactionConverter.toDtoList(
            await TransactionService.listTransactions()
        );
    }

    @Post('')
    public async saveTransaction(
        @Body() transaction: TransactionDto,
    ) {
        await TransactionService.saveTransaction(
            TransactionConverter.toModel(transaction)
        );

        return {
            status: "Transaction inserted"
        }
    }
}
