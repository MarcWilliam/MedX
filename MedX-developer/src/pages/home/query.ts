export class Query{

    query:string;

    cost:number;

    result:number[];

    constructor(query:string, cost:number){

        this.query = query;
        this.cost = cost;
        this.result = new Array();

    }


}