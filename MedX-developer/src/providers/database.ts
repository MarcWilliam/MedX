import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

declare var require: any;
var CONFIG = require('./config.json');

@Injectable()
export class DatabaseProvider {
  private url = `http://${CONFIG.DB.HOST}:${CONFIG.HTTP.PORT}/api`;

  constructor(public httpClient: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
  }

  get(collection) {

    return new Promise(resolve => {
      this.httpClient.get(`${this.url}/${collection}`)
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getById(collection, id) {

    return new Promise(resolve => {
      this.httpClient.get(`${this.url}/${collection}/${id}`)
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  post(collection, data) {

    return new Promise(resolve => {

      this.httpClient.post(`${this.url}/${collection}`, data)
        .subscribe((data) => {
          resolve(data);
        });

    });
  }
}
