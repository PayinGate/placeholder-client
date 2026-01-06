import { useEffect, useState } from 'react';
import Bag from './assets/bag.webp';
import Camera from './assets/camera.webp';
import Coke from './assets/coke.webp';
import Glasses from './assets/glasses.webp';
import Headset from './assets/headset.webp';
import Shoe from './assets/shoe.webp';
import Watch from './assets/watch.webp';
import { Gateway } from 'gateway-lib';


const ITEMS = [
    {
        name: "Ultimate Travel Companion Backpack",
        image: Bag,
        price: 10000,
    },
    {
        name: "ProVision Digital Camera Kit",
        image: Camera,
        price: 25000,
    },
    {
        name: "Coca-Cola Original Classic Refreshment",
        image: Coke,
        price: 40000,
    },
    {
        name: "VisionMax Precision Lens Glasses",
        image: Glasses,
        price: 50000
    },
    {
        name: "AudioWave Wireless Over-Ear Headset",
        image: Headset,
        price: 20000
    },
    {
        name: "StrideFlex Performance Running Shoes",
        image: Shoe,
        price: 15000
    },
    {
        name: "Timeless Elegance Smart Watch",
        image: Watch,
        price: 1000
    }
]


export default function Item(){

    const [ total, setTotal ] = useState(0);
    const [ cartItems, setCartItems ] = useState([]);
    const [ paying, setPaying ] = useState(false);
    const [ email, setEmail ] = useState("");

    const handleAddToCart = (name) => {
        setTotal(total + ITEMS.find((item)=>item.name === name).price)
        setCartItems([...cartItems, name]);
    }
    const removeCart = (name) => {
        if(cartItems.includes(name)){
            setTotal(total - ITEMS.find((item)=>item.name === name).price)
            const nItem = cartItems
            nItem.splice(nItem.indexOf(name), 1);
            setCartItems(nItem)
        }
        else {
            
        }
    }

      const pay = () => {
        if(paying) return;
        setPaying(true);
        const config = {
          apiKey: "sk_test_57f4c665e16417f2127e086082f09741dc0dd84c81690b32fd7ad4dafbd8895c"
        }
        const gw = new Gateway(config);
          gw.Transaction.initialize({amount: total, currency: "ngn", customer: {email: email}, container: "#container"}, {
            onComplete: () => { 
              if(document.getElementById("gateway_frame")) {
                document.getElementById("gateway_frame").remove(); 
                document.getElementById('successToast').style.display = "flex";
              }
              setTotal(0);
              setCartItems([]);
              setPaying(false);
            },
            onCancelled: () => { 
              if(document.getElementById("gateway_frame")) {
                document.getElementById("gateway_frame").remove(); 
                document.getElementById('errorToast').style.display = "flex";
              }
                            setPaying(false);
            },
            onError: () => {
              console.log("error");
                            setPaying(false);
            }
        });
    }



        return <div className='mx-auto p-6 relative hidden md:block'><div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
            {ITEMS.map((item, key) => {
                return <div className="bg-white shadow-md rounded-lg p-4">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-[17px] font-normal text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-lg font-semibold text-gray-900">N{noToLocale(item.price ?? 0)} {cartItems.includes(item.name) && <span className='text-[12px]'>(x{cartItems.filter((name)=>name===item.name).length})</span>}</p>
                    <div className="flex items-center gap-2">
                    <button className='bg-[#1e90ff] rounded-lg py-3 text-white px-5 border-none cursor-pointer' onClick={()=>handleAddToCart(item.name)}>Add</button>
                    {cartItems.includes(item.name) &&
                    <button className='rounded-lg py-3 text-white px-5 border-none cursor-pointer' style={cartItems.includes(item.name) ? {backgroundColor: "#ce0624"} : {backgroundColor: "#b60b2593"}} onClick={()=>removeCart(item.name)}>Remove</button> }
                    </div>
                    </div>
            })}
        </div>
        {total > 0 &&
            <div className='fixed bottom-[80px] right-[20px]'>
                <input value={email} placeholder={"Please enter email to complete payment"} type='email' className='border-[1px] w-[300px] p-2 rounded-lg border-gray-600' onChange={e=>setEmail(e.target.value)}/>
            </div>
        }
        {total > 0 && <div className="bubble cursor-pointer" onClick={pay} style={paying|| !isValidEmail(email)? {backgroundColor: "gray"} : {}}>
        <span className="bubble-text">{paying ? "Pay" : "Paying"} N{noToLocale(total)}</span>
    </div>}
        </div>
}
export function noToLocale(number){
  // eslint-disable-next-line no-unused-vars
  const numbers = [1, 1000, 2345.67, 21589.334719999995];
    const options = { 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2 
    };
    return  Number(number).toLocaleString('en', options);
}

export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}