import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/model/user.model';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './ws/event.module';
import { MessageModule } from './message/message.module';
import { Message } from './message/model/message.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'k2136267433',
      database: 'nest',
      models: [User, Message],
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([User, Message]),
    UserModule,
    AuthModule,
    EventsModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
