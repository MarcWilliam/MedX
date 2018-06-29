//import { Injectable } from '@angular/core';

//@Injectable()
export class QueryService{
    public id:number;
    public createdAt:Date;
    public developer:number;
    public cost:number;
    public result:number[];
    constructor(
        public name:string,
        public version:string,
        public description:string,
        public query:string,
        public params:{},
        public category:string,
        public subCategory:string,
        public media:any
    ){
        this.name = name;
        this.version = version;
        this.description = description;
        this.query = query;
        this.createdAt = new Date();
        this.developer = 0x123456789;
        this.params = params;
        this.category = category;
        this.subCategory = subCategory;
        this.cost = 0; //calculated
        this.media = media;
    }
}