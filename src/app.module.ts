import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AgregateModule } from './agregate/agregate.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,
    AgregateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
