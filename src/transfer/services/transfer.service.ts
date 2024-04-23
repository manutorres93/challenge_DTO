import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transfer } from '../entities/transfer.entity';
import { TransferDto } from '../DTOs/common/transfer.dto';

@Injectable()
export class TransferService {
  constructor(
    @InjectModel(Transfer.name) protected transfers: Model<Transfer>,
  ) {}

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
    return this.transfers
      .findOneAndUpdate({ transferId: id }, updatedTransfer, { new: true })
      .exec();
  }

  remove(id: string): Promise<Transfer> {
    return this.transfers.findOneAndDelete({ bookId: id }).exec();
  }
}
