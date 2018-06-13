import encrServece from'./encription-handler';

const ipfsAPI = require('ipfs-api'); //ipfs Library
const fs = require('fs'); //Js File library

export default class IPFSservice {
    ipfs: any;
    encrServece : encrServece;


    constructor() { }
    public init(url = '/ip4/127.0.0.1/tcp/5001') {
        this.ipfs = ipfsAPI(url)
        this.encrServece = new encrServece();
    }
//flag  s=> string {file url} , r=>buffer {file data}
    public async addIpfs(data:any,flag:string = "r"){
        try{
            if(flag == "r"){
                return new Promise((resolve , reject)=>{
                this.addToIpfs(data).then(output=>{
                    resolve(this.encrServece.add(output,'s'));
               },err=>{
                   reject(err);
               })
            })
            }else{
                return  await this.ReadFile(data);
            }
        }catch(err){
            console.error(err);
        }
       

    }

    public async ReadFile(file_Url){
        try{
            return new Promise((resolve , reject)=>{
                this.SetBuffer(file_Url).then(data=>{
                    this.addToIpfs(data).then(output=>{
                        resolve(this.encrServece.add(output,'s'));
                    },err=>{
                        reject(err);
                    })
                })
            })     
        }catch(err)
         {
             console.error(err)
         }
    }

    public async  retriveIpfs(dataOpject : any) {
        try{
            let massage = this.encrServece.retrive(dataOpject);
        
        
        if(massage.massage == "success"){
            let hash  = massage.data;
            return new Promise((resolve, reject) => {
                this.ipfs.files.get(hash, (err, data) => {
                err ? reject(err) : resolve(data[0].content);
            });
            
                });
            }else{
                console.log("Data Opject Not authorized");
            }
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
    private async SetBuffer(file_Url) {
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





}


