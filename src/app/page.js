"use client"
import React, { useEffect } from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import persons from './components/persons';
import { useAddress } from "@thirdweb-dev/react";

import { useRouter } from 'next/navigation'



export default function page() {
  const address = useAddress();
  const router = useRouter();
  useEffect(() => {
    if(!address){
      router.push('/');
    }
    if (address) {
      const authorized=persons.find((person)=>person.account===address)
      if (authorized) {
        router.push('/hello');
    }
    else{
      alert('You are not authorized to use this app');
  }
    }
  }, [address])
  console.log(address);
  return (
    <div className='flex justify-center items-center h-screen'>
      <ConnectWallet />
    </div>
  )
}
