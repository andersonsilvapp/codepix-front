import { CardAction } from "@/components/CardAction";
import { BankAccount } from "@/model";
import { Typography } from "@mui/material";

export async function getBankAccounts(): Promise<BankAccount[]> {
  const response = await fetch('http://host.docker.internal:3001/bank-accounts')

  return response.json()
}

export async function HomePage() {
  const bankAccounts = await getBankAccounts()
  return (
    <div>
      <h1>Bank Accounts</h1>
        {bankAccounts.map(bankAccount => (
          <CardAction key={bankAccount.id}>
            <Typography>
              {bankAccount.owner_name}
            </Typography>
            <Typography>
              Conta - {bankAccount.account_number}
            </Typography>
           
          </CardAction>
        ))}
    </div>
  )
}

export default HomePage;