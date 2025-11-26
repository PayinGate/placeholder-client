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

  const pay = () => {
    const config = {
      apiKey: "sk_test_a8eb6f6cbeb539bb35ac87c27ee42418f699519b2d9cb857a46cbda9f5fd6d36"
    }
    const gw = new Gateway(config);
    gw.Transaction.initialize({amount: 20_000, currency: "ngn", customer: {email: "awakintade@gmail.com"}, container: "#container"}, {
      onComplete: () => { 
        if(document.getElementById("gateway_frame")) {
          document.getElementById("gateway_frame").style.display = 'none'; 
          document.getElementById('successToast').style.display = "flex";
        }
      },
      onCancelled: () => { 
        if(document.getElementById("gateway_frame")) {
          document.getElementById("gateway_frame").style.display = 'none'; 
          document.getElementById('errorToast').style.display = "flex";
        }
      },
    });
  }

  return (
    <div className="App h-screen w-screen p-10 " id="#container">
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        <img src={image} alt="Product" className="w-full md:w-1/4" />
        <div className="md:ml-8">
          <h1 className="text-2xl font-bold">Product Name</h1>
          <p className="text-xl text-gray-600">#20,000</p>
          <p className="mt-4">Description goes here...</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded" onClick={pay}>Pay</button>
        </div>
      </div>
    </div>


        
<div id="successToast" class="fixed top-5 right-5 hidden  items-center p-4 mb-4 w-80 text-green-700 bg-green-100 rounded-lg shadow-md" role="alert">
    <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
    </svg>
    <div>
      <span class="font-medium">Success!</span> Your action was successful.
    </div>
    <button onclick="hideToast('successToast')" class="ml-auto text-green-700 hover:text-green-900">
      ✕
    </button>
  </div>

  <div id="errorToast" class="fixed top-5 right-5 hidden items-center p-4 mb-4 w-80 text-red-700 bg-red-100 rounded-lg shadow-md" role="alert">
    <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9V7a1 1 0 112 0v2a1 1 0 11-2 0zm1 4a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
    </svg>
    <div>
      <span class="font-medium">Error!</span> Something went wrong.
    </div>
    <button onclick="hideToast('errorToast')" class="ml-auto text-red-700 hover:text-red-900">
      ✕
    </button>
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
