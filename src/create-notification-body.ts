import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({
    message: 'O campo recipientid nao pode ser nulo',
  })
  @IsUUID()
  recipientId: string;
  @IsNotEmpty()
  @Length(5, 240)
  content: string;
  @IsNotEmpty()
  category: string;
}
