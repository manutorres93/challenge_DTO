import { IsDate, IsNotEmpty , IsString} from 'class-validator';
import { Type } from 'class-transformer';
import { TransferDto } from '../common/transfer.dto';

export class TransferResponseDto extends TransferDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  updatedAt: Date;

  @IsNotEmpty()
  @IsString()
  description: string;
}
