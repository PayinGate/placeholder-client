import { useState } from "react";

export default function PaymentForm() {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedChain, setSelectedChain] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("");
  const [rate, setRate] = useState(null);

  const banks = ["Bank A", "Bank B", "Bank C"];
  const chains = ["Ethereum", "Solana", "Polygon"];
  const coins = ["USDT", "BTC", "ETH"];

  const fetchAccountName = async (account) => {
    // Simulate API call
    setAccountName("John Doe");
  };

  const fetchRates = async () => {
    // Simulate API call for rates
    setRate("1 USDT = 500 NGN");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Transaction Details</h2>

      {/* Select Bank */}
      <label className="block mb-2">Select Bank</label>
      <select
        className="w-full p-2 border rounded-lg"
        value={selectedBank}
        onChange={(e) => setSelectedBank(e.target.value)}
      >
        <option value="">Select a bank</option>
        {banks.map((bank) => (
          <option key={bank} value={bank}>
            {bank}
          </option>
        ))}
      </select>

      {/* Account Number Input */}
      <label className="block mt-4 mb-2">Account Number</label>
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        onBlur={() => fetchAccountName(accountNumber)}
      />

      {/* Display Account Name */}
      {accountName && <p className="text-green-600 mt-2">Account Name: {accountName}</p>}

      {/* Select Chain */}
      <label className="block mt-4 mb-2">Select Chain</label>
      <select
        className="w-full p-2 border rounded-lg"
        value={selectedChain}
        onChange={(e) => setSelectedChain(e.target.value)}
      >
        <option value="">Select a chain</option>
        {chains.map((chain) => (
          <option key={chain} value={chain}>
            {chain}
          </option>
        ))}
      </select>

      {/* Select Coin */}
      <label className="block mt-4 mb-2">Select Coin</label>
      <select
        className="w-full p-2 border rounded-lg"
        value={selectedCoin}
        onChange={(e) => setSelectedCoin(e.target.value)}
      >
        <option value="">Select a coin</option>
        {coins.map((coin) => (
          <option key={coin} value={coin}>
            {coin}
          </option>
        ))}
      </select>

      {/* Show Rates Button */}
      <button
        className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4"
        onClick={fetchRates}
      >
        Show Rates
      </button>

      {/* Display Rates */}
      {rate && <p className="text-blue-600 mt-2">{rate}</p>}
    </div>
  );
}
