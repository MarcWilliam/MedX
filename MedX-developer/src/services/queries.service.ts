//import { Injectable } from '@angular/core';

//@Injectable()
export class QueryService{
    public createdAt:Date;
    public developer:number;
    public cost:number;
    public result:number[];
    constructor(
        public name:string,
        public version:string,
        public description:string,
        public query:string,
        public params:{param1:string,param2:number},
        public media:any
    ){
        this.name = name;
        this.version = version;
        this.description = description;
        this.query = query;
        this.createdAt = new Date();
        this.developer = 0x123456789;
        this.params = params;
        this.cost = 0; //calculated
        this.media = media;
    }
}