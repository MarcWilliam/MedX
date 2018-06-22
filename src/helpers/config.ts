import { ServerInfo } from '../Servers';

export default class Config {

    public static IsProduction: boolean = false;
    public static DevMnemonic: string = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

    public static server: ServerInfo;

    public static TruffleContract;
    public static LightWallet;

    public static passwordGetter: Function;
    public static passwordSetter: Function;

}