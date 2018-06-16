import {EcnriptionHandler} from'./encription-handler';

const ipfsAPI = require('ipfs-api'); //ipfs Library
const fs = require('fs'); //Js File library

export  class IPFSservice {
    ipfs: any;
    encrServece : EcnriptionHandler;
    isInit :boolean = false;


    constructor() { }
    public init(url = '/ip4/127.0.0.1/tcp/5001') {
        this.ipfs = ipfsAPI(url)
        this.encrServece = new EcnriptionHandler();
        this.isInit = true;
    }

    public async ipfsInsert(data:any , key:string = ""){
        try{
                return new Promise((resolve , reject)=>{
                this.addToIpfs(data).then(output=>{
                    resolve(this.encrServece.add(output,data,key));
               },err=>{
                   reject(err);
               })
            })
            
        }catch(err){
            console.error(err);
        }
       

    }

    public  async readFile(file_Url) {
        try{
            if(this.ipfs != null){
                return new Promise((resolve, reject) => {
                    fs.readFile(file_Url, (err, data) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(data);
                        }
                    });
        
                });
            }else{
                console.log("init first")
            }
        }catch(err){
            console.error(err);
        }
       
    }


    public async  retriveIpfs(dataOpject : any) {
        try{

            let dataPath = this.encrServece.decrypt(dataOpject.cypherText, dataOpject.encryptionMethod,new Buffer(dataOpject.encryptionKey));

            return new Promise((resolve, reject) => {
                this.ipfs.files.get(dataPath, (err, data) => {
                    if(err){
                        reject(err);
                    }else{
                       
                        let hex = this.encrServece.bufferToHex(data[0].content);
                        
                        if(dataOpject.dataHash == this.encrServece.hash(hex)){
                            resolve(data[0].content);
                        }else{
                            console.error('Authentication Error : Wrong hash detected The data may be corrupted')
                        }
                    }
                
            });
            
                });
          
        }catch(err){
            console.error(err);
        }
        
            
        }
        



    private async addToIpfs(bufferdData) {
        try{
            if (this.ipfs != null) {
                return new Promise((resolve, reject) => {
                    this.ipfs.files.add(bufferdData, (err, file) => {
                        if (err) {
                            reject(err)
                        }
                        else {
                            resolve(file);
                        }
    
                    });
                });
            } else {
                console.log("init first");
            }
        }catch(err){
            console.error(err);
        }
        
    }





}


