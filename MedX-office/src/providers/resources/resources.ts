import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { testForms } from '../../interfaces/test-form';
/*
  Generated class for the ResourcesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResourcesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ResourcesProvider Provider');
  }
  public createExamResource(test: testForms):any{
    return JSON.stringify(test);
  }

}
