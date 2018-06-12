import encrServece from'./src/helpers/encription-handler';
import ipfsService from './src/helpers/ipfs-service';
import { METHODS } from 'http';

class testIpfs{
    encrServece :encrServece;
    ipfsService : ipfsService;
    constructor(){};

    public async test(){
        this.ipfsService=new ipfsService();
         this.encrServece = new encrServece();
       
     this.ipfsService.init();
     let ipfsDataOpject =await this.ipfsService.add('pic.jpg','s');
     //console.log(ipfsDataOpject);
    //console.log(await this.ipfsService.retriveIpfs(ipfsDataOpject));
     

    }

}

//var testips = new testIpfs();
//testips.test();