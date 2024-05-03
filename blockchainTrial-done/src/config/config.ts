import algosdk from "algosdk";

const algodToken = "a".repeat(64);

const server: string = "http://localhost";
const port: string = "4001";
const mnemonic: string = 
"friend mix basket journey sad forest predict kit tilt aspect short option cat inflict million mango allow catalog grab omit clip anxiety business absent rely"

export function getClient(): algosdk.Algodv2 {
    
    let client = new algosdk.Algodv2(algodToken, server, port);
    
    return client;
     }
    
    
    export function getAccount(): algosdk.Account {
    
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    
    return account;
     }