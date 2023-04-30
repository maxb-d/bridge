import { 
  Controller,
  Get, 
  Post, 
} from '@nestjs/common';

import { BridgeService } from './bridge.service';

@Controller('bridge')
export class BridgeController {
  constructor(private readonly bridgeService: BridgeService) {}

  @Get('')
  async getStandard() {
    return await this.bridgeService.getStandard();
  }

  @Post('')
  async postStandard() {
    return await this.bridgeService.postStandard();
  }
}