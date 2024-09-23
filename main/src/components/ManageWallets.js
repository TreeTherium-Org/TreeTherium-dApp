import React from 'react';

const ManageWallets = () => {
    // Sample wallet data; this would typically come from an API or state management
    const wallets = [
        { id: 1, currency: 'Bitcoin (BTC)', balance: ' BTC', valueInUSD: '$' },
        { id: 2, currency: 'Ethereum (ETH)', balance: ' ETH', valueInUSD: '$' },
        { id: 3, currency: 'Solana (SOL)', balance: ' SOL', valueInUSD: '$' },
    ];

    return (
        <div className="container">
            <h3>Manage Wallets</h3>
            <ul className="wallet-list">
                {wallets.map(wallet => (
                    <li key={wallet.id} className="wallet-item">
                        <div className="wallet-info">
                            <h4>{wallet.currency}</h4>
                            <p>Balance: {wallet.balance}</p>
                            <p>Value: {wallet.valueInUSD}</p>
                        </div>
                        <div className="wallet-actions">
                            <button className="btn btn-secondary">Deposit</button>
                            <button className="btn btn-danger">Withdraw</button>
                            <button className="btn btn-outline-primary">View Transactions</button>
                        </div>
                    </li>
                ))}
            </ul>
            <button className="btn btn-primary">Add Wallet</button>
        </div>
    );
};

export default ManageWallets;
