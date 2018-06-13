import encrServece from'./src/helpers/encription-handler';
import ipfsService from './src/helpers/ipfs-service';

class testIpfs{
    encrServece :encrServece;
    ipfsService : ipfsService;
    constructor(){};

    public async test(){
        this.ipfsService=new ipfsService();
         this.encrServece = new encrServece();
       
     this.ipfsService.init();
     let ipfsDataOpject =await this.ipfsService.addIpfs('pic.jpg','s');  // the second parameter is a flag if the input is a file name then flag = 's' , if the input is a data buffer then flag ='r' 
                                                                         // note that the flag as a defualt = 'r'
     console.log(ipfsDataOpject);
    //console.log(await this.ipfsService.retriveIpfs(ipfsDataOpject));  
     

    }

}

var testips = new testIpfs();
testips.test();