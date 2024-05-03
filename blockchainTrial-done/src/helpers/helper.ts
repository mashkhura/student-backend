import algosdk from "algosdk";
import { getClient, getAccount } from "../config/config.js";

export const storeStudentData = async (data: StudentData): Promise<void> => {

try {

const client = getClient();

const account = getAccount();

const suggestedParams = await client.getTransactionParams().do();

const note = algosdk.encodeObj({
    id:data.id,
    name :data.name,
    dateOfBirth:data.dateOfBirth,
    courseName:data.courseName,
    enrolled:data.enrolled?true:-1

});

const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
from: account.addr,
to: account.addr, // Sending the transaction to oneself
amount: 1000, // Minimum amount
note: note,
suggestedParams: suggestedParams,
});

const signedTxn = txn.signTxn(account.sk);
const sendTxn = await client.sendRawTransaction(signedTxn).do();

console.log("Transaction ID:", sendTxn.txId);

} catch (error) {

console.error("Failed to store student data:", error);

}
};