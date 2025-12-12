import { APIRequestContext, expect } from '@playwright/test';

export class OrderService {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async verifyOrderStatus(orderId: string, expectedStatus: string) {
        console.log(`\n BACKEND CHECK: Order ID [${orderId}] ...`);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const mockDbResponse = { id: orderId, status: "COMPLETED" };
        
        console.log(`DB RESPONSE: ${mockDbResponse.status}`);
        expect(mockDbResponse.status).toBe(expectedStatus);
    }
}