import {Keypair} from "@solana/web3.js"

let key_pair = Keypair.generate()
console.log(`
    You've generated a new Solana Wallet 
    (public_key): ${key_pair.publicKey.toBase58()}
    (key_pair): [${key_pair.secretKey}]
`)
// update if exists else create json file (or straight up env file stead of a json)