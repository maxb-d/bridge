import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { BridgeController } from './bridge.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [BridgeController],
  providers: [BridgeService]
})
export class BridgeModule {}