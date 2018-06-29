export class Doctor {
    name: string;
    access: Date;
    expire: Date;
    constructor(name:string, access:Date,  expire:Date){
      this.name = name;
      this.access = access;
      this.expire = expire;
    }
  }