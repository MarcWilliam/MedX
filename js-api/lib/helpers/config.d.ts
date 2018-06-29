import { ServerInfo } from '../Servers';
export default class Config {
    static IsProduction: boolean;
    static DevMnemonic: string;
    static server: ServerInfo;
    static TruffleContract: any;
    static LightWallet: any;
    static passwordGetter: Function;
    static passwordSetter: Function;
}
