import { Controller, Get, Param } from '@nestjs/common';
import { AgregateService } from './agregate.service';

@Controller('agregate')
export class AgregateController {
  constructor(private readonly agregateService: AgregateService) {}

  @Get('agregateAccounts')
  async agregateAccounts() {
    return await this.agregateService.agregateAccounts();
  }

  @Get(':account_number')
  async getTransactions(@Param() params: { account_number: string }) {
    return await this.agregateService.getTransactions(params.account_number);
  }

  @Get('')
  async getAccounts() {
    return await this.agregateService.getAccounts('/accounts?page=1');
  }

}
