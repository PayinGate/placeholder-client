"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const PaymentForm = () => {
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
    // Simulate an API call
    setAccountName("John Doe");
  };

  const fetchRates = async () => {
    // Simulate an API call
    setRate("1 USDT = 500 NGN");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white text-center mb-6">💳 Crypto Payment</h2>

          {/* Select Bank */}
          <label className="text-white text-sm font-medium">Select Bank</label>
          <Select onValueChange={setSelectedBank}>
            <SelectTrigger className="mt-2 mb-4 bg-white/20 text-white border-none">
              <SelectValue placeholder="Choose a bank" />
            </SelectTrigger>
            <SelectContent>
              {banks.map((bank) => (
                <SelectItem key={bank} value={bank}>
                  {bank}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Account Number */}
          <label className="text-white text-sm font-medium">Account Number</label>
          <Input 
            type="text" 
            className="mt-2 mb-2 bg-white/20 text-white border-none" 
            value={accountNumber} 
            onChange={(e) => setAccountNumber(e.target.value)}
            onBlur={fetchAccountName}
            placeholder="Enter your account number"
          />

          {/* Display Account Name */}
          {accountName && <p className="text-green-400 text-sm mt-1">✅ Account Name: {accountName}</p>}

          {/* Select Chain */}
          <label className="text-white text-sm font-medium mt-4">Select Chain</label>
          <Select onValueChange={setSelectedChain}>
            <SelectTrigger className="mt-2 mb-4 bg-white/20 text-white border-none">
              <SelectValue placeholder="Choose a blockchain" />
            </SelectTrigger>
            <SelectContent>
              {chains.map((chain) => (
                <SelectItem key={chain} value={chain}>
                  {chain}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Select Coin */}
          <label className="text-white text-sm font-medium mt-4">Select Coin</label>
          <Select onValueChange={setSelectedCoin}>
            <SelectTrigger className="mt-2 mb-4 bg-white/20 text-white border-none">
              <SelectValue placeholder="Choose a cryptocurrency" />
            </SelectTrigger>
            <SelectContent>
              {coins.map((coin) => (
                <SelectItem key={coin} value={coin}>
                  {coin}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Show Rates Button */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button 
              className="w-full bg-blue-600 text-white py-3 mt-4 rounded-xl transition-all hover:bg-blue-500"
              onClick={fetchRates}
            >
              Show Rates
            </Button>
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
        </Card>
      </motion.div>
    </div>
  );
};

export default PaymentForm;
