import { useState } from 'react';
import accountData from '../../data/accounts.json';
// import Transaction from "../Transaction/Transaction";

export default function Accounts() {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <main className="main bg-dark">
      <h2 className="sr-only">Accounts</h2>
      {accountData.map((account, index) => (
        <section className="account" key={index}>
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">{account.amountDescription}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button onClick={toggleContent} className="transaction-button">View transactions</button>

            {/* {isContentVisible && (
              <Transaction />
            )} */}
          </div>
        </section>
      ))}
    </main>
  );
}
