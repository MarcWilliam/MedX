import aesjs = require('aes-js');
import Hasher = require('jshashes');


export class EcnriptionHandler {
    private data: IpfsDataOpject;

    constructor() {
        this.data = new IpfsDataOpject();
    }

    public GenKey_256() {
        var key = "";
        for (let i = 0; i < 32; i++) {
            let x = Math.floor((Math.random() * 93) + 33);
            // 33 Lower limit   , 93 char range , From char number 33 to char number 126
            // console.log(x);
            key += String.fromCharCode(x);
            // console.log(key[i]);

        }
        //this.data.encryptionKey = key; //store the key as string
        return key; // return the key as string, Note key must be buffer to be used in the encryption
    }

    private AES_Encrypt(bytes, key) {
        var aesCtr = new aesjs.ModeOfOperation.ctr(key); //use Counter modes of operations to encrypt
        var encryptedBytes = aesCtr.encrypt(bytes); //encrypt the bytes
        var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes); // convert bytes to hex to store them
        return encryptedHex; //return the hex


    }


    private AES_Decrypt(cText, key, Type = "AES") {
        var encryptedBytes = aesjs.utils.hex.toBytes(cText); // convert the stored cypher text from hex  to bytes
        var aesCtr = new aesjs.ModeOfOperation.ctr(key); //use Counter modes of operations to decrypt
        var decryptedBytes = aesCtr.decrypt(encryptedBytes); //decrypt the bytes
        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes); //convert bytes to plan text
        return decryptedText; //return text
    }

    public encrypt(bytes, key = "", eType = "AES", keySize = "256") {
        var C_Text; // to store the cypher text
        if (eType == "AES") { //check for encryption type
            if (keySize == "256") { // check for key size
                if (key == "") {
                    key = this.GenKey_256(); // generate random key
                }
                let bufferdKey = new Buffer(key);
                this.data.encryptionKey = key;
                C_Text = this.AES_Encrypt(bytes, bufferdKey); // encrypt the data
            }
        }

        this.data.cypherText = C_Text; // store the cypher 
        this.data.encryptionMethod = eType; //store the encryption type
    }


    public decrypt(C_Text, eType = "AES", key, KeySize = "256") {
        var text; // to store the Plane text
        if (eType == "AES") {
            if (KeySize == "256") {
                let bufferdKey = new Buffer(key);
                text = this.AES_Decrypt(C_Text, bufferdKey, eType); //decrypt the cypher
                return text;
            }
        }


    }
    public hash(bytes, type = "SHA-512") {
        var hash; // to store the hash
        if (type = "SHA-512") {
            var SHA512 = new Hasher.SHA512;

            hash = SHA512.hex(bytes); //hash the data   NOTE : data must to be hex
            //return new Hasher.SHA512().any(bytes,UTF-8);    
        }
        if (hash != undefined) {
            this.data.dataHash = hash; //store the hash
            this.data.hashMethod = type; //store the hash type
            return hash; // return the hash
        }

    }

    ////////////////////////////////////////////////////////////////////Public functions//////////////////////////////////////////////////////////

    //function add : creates new Object from data 
    //input in the data to be stored either string or Buffer
    public add(inputarr, data, encrKey = "") {
        let input = inputarr[0].hash;
        //console.log(input);
        let inputHex; //to store the hex to be hashed


        let bathBytes = aesjs.utils.utf8.toBytes(input);
        inputHex = this.bufferToHex(data);

        let hashedBytes = this.hash(inputHex); // hash the data to be stored
        if (encrKey == "") {
            this.encrypt(bathBytes); // encrypt the data
        } else {
            this.encrypt(bathBytes, encrKey);
        }

        return this.data; //return the data
    }


    //function to retrive stored data and check it`s integrty
    // dataOpject is the same as Data 
    /*dataOpject = {
        encryptionKey: : ,
        cypherText: :  ,
        encryptionMethod: : ,
        hash : ,
        hashType:,
        inputType:
    }
    */

    public retrive(dataOpject) {
        let output = { massage: "", data: "" }; //the output tobe returned 
        /*
            output ={
                massage :
                data:
            }
        */
        let bufferdKey = new Buffer(dataOpject.encryptionKey);// convert the key from string to buffer tobe used in encryption

        let bText = this.decrypt(dataOpject.cypherText, dataOpject.encryptionMethod, bufferdKey); //decrypt the text
        let bufferedData = new Buffer(bText) //Conver text to buffer
        let inputHex = bufferedData.toString('hex'); // Convert buffer to hex to hash it
        bText = bufferedData  // if the data was origenally buffer then use the buffered data
        output.massage = "success"; //create succes massage
        output.data = bText;
        return output;


    }

    public toBuffer(str: string) {
        return new Buffer(str);
    }

    public bufferToHex(buffer: Buffer) {
        return buffer.toString('hex');
    }


}
export class IpfsDataOpject {
    encryptionKey: string = "";
    cypherText: string = "";
    encryptionMethod: string = "";
    dataHash: string = "";
    hashMethod: any = "";
    constructor() {
    }
}