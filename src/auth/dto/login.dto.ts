import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty({
    default: 'kkkk',
    required: true,
  })
  username: string;

  @ApiProperty({
    default: 'haoshuai',
    required: true,
  })
  password: string;
}
