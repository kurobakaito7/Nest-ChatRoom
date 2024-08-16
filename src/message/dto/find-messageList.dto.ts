import { ApiProperty } from '@nestjs/swagger';

export class findMessageListDTO {
  @ApiProperty({
    default: 'kk',
    description: '消息发送者',
    example: 'kk',
    required: true,
  })
  username: string;
  @ApiProperty({
    default: 'xiaoxin',
    description: '当前聊天对象',
    example: 'xiaoxin',
    required: true,
  })
  currentChater: string;
}
