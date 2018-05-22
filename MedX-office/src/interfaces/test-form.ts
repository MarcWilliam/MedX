
export class testForms{
    auther : string;
    createdAt : Date;
    name : string;
    description: string;
    components :Array<formComponent>;
    constructor(auther : string="", Created:Date= new Date(),name:string="",descr:string= ""){
        this.name=name;
        this.description=descr;
        this.createdAt=Created;
        this.auther=auther;
        this.components = new Array();
        
    }
    public addComponent(comp : formComponent){
        this.components.push(comp);
    }

}
export class formComponent {
    name: string;
    expectedValue: any;
    actualValue : any;
    unit : string;
    constructor(name:string="" , expected:any=0 , actual : any=0, unit: string=""){
        this.name=name;
        this.expectedValue= expected;
        this.actualValue= actual;
        this.unit =unit;

    }
}