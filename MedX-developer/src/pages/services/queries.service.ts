export class Query{

    name:string;
    version:string;
    description:string;
    //media:[]
    query:string;
    createdAt:Date;
    developer:number;
    params:{param1:string, param2:number};
    
    cost:number;
    result:number[];

    constructor(query:string, cost:number){
        this.name = "basic test";
        this.version = "";
        this.description = "";
        //this.media
        this.query = query;
        this.createdAt = new Date();
        this.developer = 0x123456789;
        this.cost = cost;
        this.result = new Array();

    }


}