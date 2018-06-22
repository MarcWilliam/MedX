import { EcnriptionHandler } from './encription-handler';
import { randomBytes } from 'crypto';

import IPFS = require('ipfs');
import fs = require('fs'); //Js File library

export class IPFSservice {

    node: any;
    encrServece: EcnriptionHandler;
    isInit: boolean = false;

    constructor() { }

    public async init(url = '/ip4/127.0.0.1/tcp/5001') {
        this.isInit = true;

        this.encrServece = new EcnriptionHandler();
        this.node = new IPFS({
            start: true,

            config: {
                Addresses: {
                    API: url,

                }
            }
        })


    }

    public async ipfsInsert(data: any, key: string = "") {
        try {
            return new Promise((resolve, reject) => {
                this.addToIpfs(data).then(output => {
                    resolve(this.encrServece.add(output, data, key));
                }, err => {
                    reject(err);
                })
            })

        } catch (err) {
            console.error(err);
        }

    }

    public async readFile(file_Url) {
        try {

            return new Promise((resolve, reject) => {
                fs.readFile(file_Url, (err, data) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(data);
                    }
                });

            });

        } catch (err) {
            console.error(err);
        }

    }


    public async  retriveIpfs(dataOpject: any) {

        return new Promise((resolve, reject) => {
            try {
                let dataPath = this.encrServece.decrypt(dataOpject.cypherText, dataOpject.encryptionMethod, new Buffer(dataOpject.encryptionKey));

                this.node.files.get(dataPath, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        let hex = this.encrServece.bufferToHex(data[0].content);

                        if (dataOpject.dataHash == this.encrServece.hash(hex)) {
                            resolve(data[0].content);
                        } else {
                            console.error('Authentication Error : Wrong hash detected The data may be corrupted')
                        }
                    }

                });
            } catch (err) {
                console.error(err);
                reject(err);
            }
        });
    }

    private async addToIpfs(bufferdData) {
        try {
            return new Promise((resolve, reject) => {
                let files = {
                    path: Math.random().toString(),
                    content: bufferdData
                }
                this.node.on("start", () => {
                    this.node.files.add(files, function (err, output) {
                        if (err) {
                            reject(err)
                        }
                        if (output) {
                            resolve(output);
                        }

                    })
                    this.node.stop();
                })
            });
        } catch (err) {
            console.error(err);
        }

    }


}