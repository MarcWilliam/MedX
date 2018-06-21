import {EcnriptionHandler} from'./src/helpers/encription-handler';
import {IPFSservice} from './src/helpers/ipfs-service';

class testIpfs{
    encrServece :EcnriptionHandler;
    ipfsService : IPFSservice;
    constructor(){};

    public async test(){
        this.ipfsService=new IPFSservice();
         this.encrServece = new EcnriptionHandler();
       
       this.ipfsService.init();
    let bufferData = await this.ipfsService.readFile('pic.jpg');
    let ipfsDataOpject =await this.ipfsService.ipfsInsert(bufferData);  // the second parameter is a flag if the input is a file name then flag = 's' , if the input is a data buffer then flag ='r' 
                                                                         // note that the flag as a defualt = 'r'
     console.log(ipfsDataOpject);
    console.log(await this.ipfsService.retriveIpfs(ipfsDataOpject));  
     

    }

}

var testips = new testIpfs();
testips.test();