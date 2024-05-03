import algosdk from "algosdk";

const algodToken = "a".repeat(64);

const server: string = "http://localhost";
const port: string = "4001";
const mnemonic: string = 
"profit habit library minimum sorry elder vocal globe magic expose tourist food project peanut frown usual convince donate shuffle alter camp jeans brother absent senior"

export function getClient(): algosdk.Algodv2 {
    
    let client = new algosdk.Algodv2(algodToken, server, port);
    
    return client;
     }
    
    
    export function getAccount(): algosdk.Account {
    
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    
    return account;
     }