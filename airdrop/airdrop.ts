import { Connection, Keypair, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js"
import wallet from "./dev-wallet.json"

(async () => {
    try {
        // We're going to claim 2 devnet SOL tokens
        let key_pair = Keypair.fromSecretKey(new Uint8Array(wallet));
        
        const connection = new Connection(clusterApiUrl('devnet'))
        
        const txhash = await connection.requestAirdrop(key_pair.publicKey, 2 * LAMPORTS_PER_SOL);
        
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`)  
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();