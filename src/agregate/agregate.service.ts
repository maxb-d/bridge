import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AgregateService {
    constructor(
        private httpService: HttpService,
        private configService: ConfigService,
    ) {}

    async agregateAccounts() {
        let parsedOutput = []

        // Parse accounts
        let accountsArr = []
        let currentAccounts = await this.getAccounts('/accounts?page=1');

        currentAccounts['accounts'].map(account => {
            accountsArr.push(account)
        })

        while (!!currentAccounts?.links?.next) {
            currentAccounts = await this.getAccounts(currentAccounts.links.next)

            currentAccounts['accounts'].map(account => {
                accountsArr.push(account)
            })
        }

        const uniq_accounts = accountsArr.filter((account, index) => {
                const _value = JSON.stringify(account)
                return index === accountsArr.findIndex(acc => {
                    return JSON.stringify(acc) === _value;
                })
            }
        )

        // Parse transactions
        const tra = await uniq_accounts.map(async account => {

            const trans = await this.getTransactions(account.acc_number)
            
            const transactions = trans['transactions']

            const parsedElem = {
                    acc_number: account.acc_number,
                    amount: account.amount,
                    transactions: [ ...transactions ]
                }

            console.log(`transactions for account ${account.acc_number} are : `, trans)
            console.log(`parsed eleme =  `, parsedElem)
            
            parsedOutput.push(parsedElem)
        })
        console.log('parsed output == ', parsedOutput)
        return parsedOutput;
    }

    async getTransactions(account_number: string) {
        const headersRequest = {
            'Content-Type': 'application/json',
            'x-api-key': this.configService.get<string>('X-API-KEY'),
        };
        
        const { data } = await this.httpService.axiosRef.get(
            `${this.configService.get<string>('API_ENDPOINT')}/accounts/${account_number}/transactions`,  
            { headers: headersRequest }
        );

        return data;
    }

    async getAccounts(next_page: string) {

        const headersRequest = {
            'Content-Type': 'application/json',
            'x-api-key': this.configService.get<string>('X-API-KEY'),
        };
        
        const { data } = await this.httpService.axiosRef.get(
            `${this.configService.get<string>('API_ENDPOINT')}${next_page}`,  
            { headers: headersRequest }
        );

        return data;
    }
}
