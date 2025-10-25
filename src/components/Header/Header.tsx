"use client"

import { CiMenuFries } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import Link from "next/link"
import { Navbar } from '../Navbar'
import { useState } from 'react'

export function Header() {
    const [openMenuMobile, setOpenMenuMobile] = useState(false)

    return (
        <div className="container mx-auto my-5">
            <div className="flex items-center justify-between px-5 md:px-0">
                <Link href="/">
                    <h1 className="font-medium">KevState</h1>
                </Link>

                <CiMenuFries className='block text-2xl md:hidden' onClick={() => setOpenMenuMobile(!openMenuMobile)} />

                <Navbar openMobileMenu={openMenuMobile} />

                <div className='flex items-center gap-2 md:gap-5'>
                    <Link href="tel:653230000" className=' flex items-center gap-4 cursor-pointer'>
                        <BsTelephone />
                        <span className='hidden md:block'>+57 300 555 0044</span>
                    </Link>
                    <Link href="/login" className='px-3 py-2 text-white rounded-lg bg-slate-600 hover:bg-black'>Login
                    </Link>

                </div>

            </div>
        </div>
    )
}
