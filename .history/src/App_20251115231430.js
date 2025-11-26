import './App.css';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
// import { IoSearch } from "react-icons/io5";

import { Gateway } from 'gateway-lib';
import { useEffect } from 'react';
// import { useEffect } from 'react';

import image from './IMG_4330.WEBP';



function App() {
  // useEffect(()=>{
  //   const config = {
  //     apiKey: "sk_test_a8eb6f6cbeb539bb35ac87c27ee42418f699519b2d9cb857a46cbda9f5fd6d36"
  //   }
  //   const gw = new Gateway(config);
  //   gw.Transaction.initialize({amount: 200, currency: "ngn", customer: {email: "awakintade@gmail.com"}, container: "#container"}).then((rate)=>{ console.log(rate, ) });
  // }, [])
  return (
    <div className="App h-screen w-screen p-10 " id="#container">
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        <img src={image} alt="Product" className="w-full md:w-1/4" />
        <div className="md:ml-8">
          <h1 className="text-2xl font-bold">Product Name</h1>
          <p className="text-xl text-gray-600">$99.99</p>
          <p className="mt-4">Description goes here...</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded">Add to Cart</button>
        </div>
      </div>
    </div>


      {/* <div className='gap-2 h-full flex w-full justify-center'>
        <div className='flex-col flex items-center w-[30%]'>
          <div className='w-full h-full flex flex-col items-center bg-white rounded-lg px-3 py-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg'>
            <div className=''>Sendd</div>
            <div className=''>
              a
            </div>
          </div>
        </div>
        <BankList />
        <div className='w'>
        <iframe src='http://localhost:3001/pay/gwp_UqX0Eh16hMHgqksQfWges' width={"100%"} height={"100%"} title="a" style={{border: "0px", top: 0, left: 0, zIndex: 1000, position: "fixed"}} allow="clipboard-write"/>
        </div>

      </div> */}
    </div>
  );
}


function BankList(){
  return <div className='p-10'>
      <div className='flex flex-col gap-3 w-fit bg-white rounded-lg px-3 py-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg'>
      <div className="w-[20rem] py-1 rounded-2xl  flex gap-2 items-center">
            <span><FaSearch  className="text-[15px] text-[#4f4f4f]" /></span>
            <input className="w-full bg-transparent font-dmsans placeholder:font-semibold outline-none text-[14px] border-none" placeholder="Search"/>
      </div>
      <div className='flex flex-col gap-1'>
          {
            ["a", "a"].map((bank, key)=>{
              return <div className='flex items-center gap-2 text-[14px]' key={key} onClick>
                {/* <span>{bank image}</span> */}
                <span>Bank Name</span>
              </div>
            })
          }
      </div>
      </div>
  </div>
}

export default App;
