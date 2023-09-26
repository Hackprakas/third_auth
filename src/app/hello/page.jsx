"use client"

import React, { useEffect } from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import { useDisconnect } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import { useAddress } from "@thirdweb-dev/react";
import persons from '../components/persons';


export default function page() {
    const router = useRouter();
    const disconnect = useDisconnect();
    const address = useAddress();
    const accountlist = persons.map((person) => person.account);
    const handleclick = () => {
        disconnect();
        router.push("/");
    }
    useEffect(() => {
        if (!address) {
            router.push("/");
        }
        if (address && !accountlist.includes(address)) {
            alert("You are not authorized to access this page");
            router.push("/");

        }
    }, [address]);

    return (<>
        <div className='flex justify-end mt-12 items-center'>
            <ConnectWallet />
            <button className="bg-white text-black rounded-xl h-[47px] px-1 ml-12" onClick={handleclick}>Disconnect</button>;

        </div>
        <div className='flex justify-center items-center h-full'>

            <div class="w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800">
                <div class="w-full h-full text-center">
                    <div class="flex flex-col justify-between h-full">
                        <svg class="w-12 h-12 m-auto mt-4 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        <p class="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">
                            You are an 
                            <span class="font-bold text-gray-800 dark:text-white">
                                AUTHORIZED<br />
                            </span>
                            user.Successfully logged in.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    </>
    )
}
