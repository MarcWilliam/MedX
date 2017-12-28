var aesjs = require('aes-js');
var Hasher =   require('jshashes');

var data = [];

/*
data = [{
    encryptionKey: : ,
    cypherText: :  ,
    encryptionMethod: : ,
    hash : ,
    hashType:,
    inputType:
}]

*/



/////////////////////////////////////////////////////////////////////Privete Functions/////////////////////////////////////////////////////
//function to generate 256 bit key
 function GenKey_256(){
     var key=new String() ;
     for(let i =0 ; i<32;i++){
        let x=Math.floor((Math.random() * 93)+33);
        // 33 Lower limit   , 93 char range , From char number 33 to char number 126
       // console.log(x);
        key += String.fromCharCode(x);
       // console.log(key[i]);
        
    }
     //var Array_un = new Uint8Array(key);
    // console.log(data);
    data.encryptionKey = key; //store the key as string
    return new Buffer(key); // return the key as buffer , Note key must be buffer to be used in the encryption
}


//Function to encrypt using AES
function AES_Encrypt(bytes,key){
    var aesCtr = new aesjs.ModeOfOperation.ctr(key); //use Counter modes of operations to encrypt
    var encryptedBytes = aesCtr.encrypt(bytes); //encrypt the bytes
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes); // convert bytes to hex to store them
    return encryptedHex; //return the hex
    
    
}
//Function to decrypt using AES
function AES_Decrypt(cText,key,Type ="AES"){
    var encryptedBytes = aesjs.utils.hex.toBytes(cText); // convert the stored cypher text from hex  to bytes
    var aesCtr = new aesjs.ModeOfOperation.ctr(key); //use Counter modes of operations to decrypt
    var decryptedBytes = aesCtr.decrypt(encryptedBytes); //decrypt the bytes
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes); //convert bytes to plan text
    return decryptedText; //return text
}

//general encryption function  defulted to EncryptionType -> AES AND keySize -> 256 
function encrypt(bytes ,eType ="AES",keySize ="256"){
    var key; // to store the RG key
    var C_Text; // to store the cypher text
    if(eType == "AES"){ //check for encryption type
        if(keySize =="256"){ // check for key size
             key = GenKey_256(); // generate random key
             C_Text = AES_Encrypt(bytes,key); // encrypt the data
        }
    }

    data.cypherText=C_Text; // store the cypher 
    data.encryptionMethod=eType; //store the encryption type
}

//general decrypting function  defulted to DecryptionType -> AES AND keySize -> 256 
function decrypt(C_Text,eType= "AES",key ,KeySize ="256"){
    var text ; // to store the Plane text
    if(eType == "AES"){
        if(KeySize =="256"){
            text = AES_Decrypt(C_Text,key,eType); //decrypt the cypher
            return text;
        }
    }


}



//General Hashing function defulted to SHA-512
function hash(bytes ,type="SHA-512"){
    var hash; // to store the hash
    if(type = "SHA-512"){
        var SHA512 = new Hasher.SHA512; 

         hash = SHA512.hex(bytes); //hash the data   NOTE : data must to be hex
        //return new Hasher.SHA512().any(bytes,UTF-8);    
    }
    if(hash != undefined){
        data.hash=hash; //store the hash
        data.hashType=type; //store the hash type
        return hash; // return the hash
    }

}
////////////////////////////////////////////////////////////////////Public functions//////////////////////////////////////////////////////////

//function add : creates new Object from data 
//input in the data to be stored either string or Buffer
//inputType s -> string  r->Buffer
function add(input , inputType){
    let inputHex; //to store the hex to be hashed
    let Bytes =aesjs.utils.utf8.toBytes(input); //converts the data to bytes to be encrypted
    if(inputType == 's'){
        inputHex = aesjs.utils.hex.fromBytes(Bytes);  //Conver Bytes to hex to hash
    }else if(inputType == 'r'){
        inputHex = input.toString('hex'); //Conver buffer to hex to hash
    }
    let hashedBytes= hash(inputHex); // hash the data to be stored
    encrypt(Bytes); // encrypt the data
    data.inputType = inputType; //store the data
    return data; //return the data
}

//function to retrive stored data and check it`s integrty
// dataOpject is the same as Data 
/*dataOpject = [{
    encryptionKey: : ,
    cypherText: :  ,
    encryptionMethod: : ,
    hash : ,
    hashType:,
    inputType:
}]
*/

function retrive(dataOpject){
    let output =[]; //the output tobe returned 
    /*
        output =[{
            massage :
            data:
        }]
    */
    let bufferdKey = new Buffer(dataOpject.encryptionKey);// convert the key from string to buffer tobe used in encryption
   // console.log(bufferdKey);
    let bText = decrypt(dataOpject.cypherText,dataOpject.encryptionMethod,bufferdKey); //decrypt the text
    let bufferedData = new Buffer(bText) //Conver text to buffer
    let inputHex = bufferedData.toString('hex'); // Convert buffer to hex to hash it
    if(dataOpject.inputType == 'r'){
         bText = bufferedData  // if the data was origenally buffer then use the buffered data
    }
    if(hash(inputHex)==dataOpject.hash){ //check if the origenal data hash is the same as the retrived data hash
        output.massage = "success"; //create succes massage
        output.data = bText; 
    }else{
        output.massage = "fail"; //create fail massage
        output.data = null;
    }
    return output;


}


//function to test
function test(){
    text = "test encryption";
    var testBuffer = new Buffer(text);
   // let x=testBuffer.toString('utf8');
    console.log(testBuffer);
   //console.log(new Buffer(x.toString()));
    console.log( add(text , 's'));
   //console.log(add(testBuffer , 'r'));
  
   //console.log(hashedBytes);
   
    
  // console.log(data);
   console.log(retrive(data));
}
//test();