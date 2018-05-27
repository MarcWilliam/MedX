import { FormControl } from '@angular/forms';

export class QueryValidator {
 
    static checkQuery(control: FormControl): any {
   
        if(control.value.length < 18){
            return {
                "too short": true
            };
        }
        //////

        return null;
    }
   
  }