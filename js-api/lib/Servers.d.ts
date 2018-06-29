export interface ServerInfo {
    STATISTICS_API: string | null;
    HTTP_PROVIDER: string;
    CONTRACTS_URL: string | null;
    IPFS_NODE: string | null;
    NETWORK_ID: number | null;
    HD_PATH: string | null;
}
declare const SERVERS: {
    LOCALHOST: ServerInfo;
    RINKEBY: ServerInfo;
};
export default SERVERS;
