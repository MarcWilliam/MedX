
export class testForms{
    resourceType : string;

    id : string;

    meta :{
        lastUpdated :Date;
    }

      text : {
          status: "generated",
          div : string 
      }

      contained : Array<formComponent>;



    
    constructor(id : string="", Created:Date= new Date(),name:string=""){
        this.resourceType=name;
        this.id = id;
        this.meta={ lastUpdated :Created};
        this.text={div :"" , status:"generated"};
        this.contained = new Array();
        
    }
    public addComponent(comp : formComponent){
        this.contained.push(comp);
    }

    public generateDiv(){
    
        this.text.div="<div> ";
        this.text.div+=`<row>
        <col>Component</col>
        <col>Patient Results</col>
        <col>standerd Range</col>
        <col>Units</col>
      </row>`
      for(let i =0 ;i<this.contained.length ; i++){
          this.text.div+= "<row><col>"+this.contained[i].resourceType+"</col><col>"+this.contained[i].valueQuantity.value+"</col><col>"+this.contained[i].referenceRange[0].high+"</col><col>"+this.contained[i].valueQuantity.unit+"</col></row>";
      }


        this.text.div+="</div>"
    }

}
export class formComponent {
        resourceType : string = "Observation";
        id : string;
        status : string="final";
        code: {
            coding:
              {
                system: "http://loinc.org",
                
              }
            ,
            text: string
          }
        supject : {
            reference : string
        }
        performer :{
            reference : string,
            display :string
        }
        valueQuantity:{
            value: any,
            unit: string,
            
        }
        referenceRange: [
            {
              low: {
                value: any,
                unit: string,
                
                
              },
              high: {
                value: any,
                unit: string,

              }
            }
          ]
    
    constructor(name:string="" ,id : string="", expected:any=0 , actual : any=0, unit: string=""){
        this.code={text : name , coding :{system: "http://loinc.org"}};
        this.id =id;
        this.referenceRange= [{high : {value : expected , unit : unit }, low :{value : expected , unit : unit }}];
        this.valueQuantity= {value : actual ,unit : unit};

    }
}