import { Module } from '@nestjs/common';
import { AgregateService } from './agregate.service';
import { AgregateController } from './agregate.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [AgregateController],
  providers: [AgregateService]
})
export class AgregateModule {}
