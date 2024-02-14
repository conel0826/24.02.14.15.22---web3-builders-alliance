use anchor_lang::prelude::*;

declare_id!("A8fUgq5NcEryu3TwdTWeVnxyYA7cHgmwfrKwveSpi4rz");

#[program]
pub mod prereqs {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
