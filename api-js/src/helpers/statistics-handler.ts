import request = require('request');
import CONFIG from './config';

export class StatisticsHandler {

    public static async PostRecord(rec: { any }): Promise<any> {
        return new Promise((resolve, reject) => {
            request({
                url: `${CONFIG.SERVER.STATISTICS_API}record`,
                method: 'POST',
                json: true,
                body: rec
            }, (error, response, body) => error ? reject(error) : resolve(resolve));
        });
    }

}