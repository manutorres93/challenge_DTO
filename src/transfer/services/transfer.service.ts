import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, SortOrder } from 'mongoose';
import { Transfer } from '../entities/transfer.entity';
import { TransferDto } from '../DTOs/common/transfer.dto';

@Injectable()
export class TransferService {
  constructor(@InjectModel(Transfer.name) protected transfers: Model<Transfer>) {}
  
  //private transfers: any[] = []; // Simulated in-memory database

  findAll(): Promise<Transfer[]> {
    return this.transfers.find().exec();
  }

  findOne(id: string): Promise<Transfer> {
    const transfer = this.transfers.findOne({ transferId: id }).exec();
    if (!transfer) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);

    }
    return transfer;
  }

  create(transfer: TransferDto): Promise<Transfer> {
    const createdTransfer = new this.transfers(transfer);
    return createdTransfer.save();
  }

  update(id: string, updatedTransfer: TransferDto): Promise<Transfer> {
    /* const index = this.transfers.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    } */
    return this.transfers
      .findOneAndUpdate({ transferId: id }, updatedTransfer, { new: true })
      .exec();;
  }
  

  remove(id: string): Promise<Transfer> {
    /* const index = this.transfers.findIndex((t) => t.id === id); */
    /* if (index === -1) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    const deletedTransfer = this.transfers.splice(index, 1); */
    return this.transfers.findOneAndDelete({ bookId: id }).exec();
  }

/*   private generateId(): number {
    return this.transfers.length > 0
      ? Math.max(...this.transfers.map((t) => t.id)) + 1
      : 1;
  } */
}
