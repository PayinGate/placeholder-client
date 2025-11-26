"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PaymentForm() {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedChain, setSelectedChain] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("");
  const [rate, setRate] = useState(null);

  const banks = ["Zenith Bank", "Access Bank", "GTBank", "UBA"];
  const chains = ["Ethereum", "Solana", "Polygon", "BSC"];
  const coins = ["USDT", "BTC", "ETH", "BNB"];

  const fetchAccountName = async () => {
    setAccountName("John Doe"); // Replace with API call
  };

  const fetchRates = async () => {
    setRate("1 USDT = 500 NGN"); // Replace with API call
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold text-black text-center mb-6">💳 Crypto Payment</h2>

        {/* Select Bank */}
        <label className="text-black text-sm font-medium">Select Bank</label>
        <select
          className="mt-2 mb-4 w-full p-3 bg-white/20 text-black border-none rounded-md outline-none"
          onChange={(e) => setSelectedBank(e.target.value)}
        >
          <option value="">Choose a bank</option>
          {banks.map((bank) => (
            <option key={bank} value={bank}>
              {bank}
            </option>
          ))}
        </select>

        {/* Account Number */}
        <label className="text-black text-sm font-medium">Account Number</label>
        <input
          type="text"
          className="mt-2 mb-2 w-full p-3 bg-white/20 text-black border-none rounded-md outline-none"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          onBlur={fetchAccountName}
          placeholder="Enter your account number"
        />

        {/* Display Account Name */}
        {accountName && <p className="text-green-400 text-sm mt-1">✅ Account Name: {accountName}</p>}

        {/* Select Chain */}
        <label className="text-black text-sm font-medium mt-4">Select Chain</label>
        <select
          className="mt-2 mb-4 w-full p-3 bg-white/20 text-black border-none rounded-md outline-none"
          onChange={(e) => setSelectedChain(e.target.value)}
        >
          <option value="">Choose a blockchain</option>
          {chains.map((chain) => (
            <option key={chain} value={chain}>
              {chain}
            </option>
          ))}
        </select>

        {/* Select Coin */}
        <label className="text-black text-sm font-medium mt-4">Select Coin</label>
        <select
          className="mt-2 mb-4 w-full p-3 bg-white/20 text-black border-none rounded-md outline-none"
          onChange={(e) => setSelectedCoin(e.target.value)}
        >
          <option value="">Choose a cryptocurrency</option>
          {coins.map((coin) => (
            <option key={coin} value={coin}>
              {coin}
            </option>
          ))}
        </select>

        {/* Show Rates Button */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <button
            className="w-full bg-blue-600 text-black py-3 mt-4 rounded-xl transition-all hover:bg-blue-500"
            onClick={fetchRates}
          >
            Show Rates
          </button>
        </motion.div>

        {/* Display Rates */}
        {rate && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-blue-400 text-lg font-semibold text-center mt-4"
          >
            {rate}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
