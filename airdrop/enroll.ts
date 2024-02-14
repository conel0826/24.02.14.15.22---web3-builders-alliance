import { Program, web3, AnchorProvider, Wallet, Address } from "@project-serum/anchor"
import { WbaPrereq, IDL } from "./programs/wba_prereq"
import wallet from "./wba-wallet.json"

const keypair = web3.Keypair.fromSecretKey(new Uint8Array(wallet))
const connection = new web3.Connection(web3.clusterApiUrl('devnet'))
const github = Buffer.from("conel0826", "utf-8")

const provider = new AnchorProvider(connection, new Wallet(keypair), {commitment: "confirmed"})
const program = new Program<WbaPrereq>(IDL,"HC2oqz2p6DEWfrahenqdq2moUcga9c9biqRBcdK3XKU1" as Address, provider)

const enrollment_seeds = [Buffer.from("prereq"),keypair.publicKey.toBuffer()];
const [enrollment_key, _bump] = web3.PublicKey.findProgramAddressSync(enrollment_seeds, program.programId);

(async () => {
    try {
        const txhash = await program.methods
        .complete(github)
        .accounts({
            signer: keypair.publicKey,
            prereq: enrollment_key,
            systemProgram: web3.SystemProgram.programId,
        }).signers([
            keypair
        ]).rpc();
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();