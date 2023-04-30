import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BridgeService {
    constructor(
        private httpService: HttpService,
        private configService: ConfigService,
    ) {}

    async getStandard() {
        const headersRequest = {
            'Client-Id': this.configService.get<string>('CLIENT_ID'),
            'Client-Secret': this.configService.get<string>('CLIENT_SECRET'),
            'Bridge-Version': this.configService.get<string>('BRIDGE_VERSION')
        };
        
        console.log(this.configService.get<string>('BRIDGE_ENDPOINT'));
        const { data } = await this.httpService.axiosRef.get(
            `${this.configService.get<string>('BRIDGE_ENDPOINT')}/banks`,  
            { headers: headersRequest }
        );

        return data;
    }

    async postStandard() {
        const payload = {
            user: {
                    first_name: "Firstname",
                    last_name: "Lastname",
                    external_reference: "REF-1234_AZ"
                },
                expired_date: "2023-05-20T22:00:00.000Z",
                client_reference: "ABCDE_FG-HI_12345",
                transactions: [
                {
                    amount: 10,
                    currency: "EUR",
                    label: "Refund 123456",
                    end_to_end_id: "E2E_ID-1234"
                }
                ]
        
        }

        const headersRequest = {
            'Client-Id': this.configService.get<string>('CLIENT_ID'),
            'Client-Secret': this.configService.get<string>('CLIENT_SECRET'),
            'Bridge-Version': this.configService.get<string>('BRIDGE_VERSION')
        };

        const { data } = await this.httpService.axiosRef.post(
            `${this.configService.get<string>('BRIDGE_ENDPOINT')}/payment-links`,  
            payload,
            { headers: headersRequest });

        return data;
    }
}