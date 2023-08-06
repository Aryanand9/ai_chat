'use client'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import {Menu, Sparkles} from 'lucide-react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { Button } from './ui/button'
import { ModeToggle } from './ui/mode-toggle'
import { MobileSidebar } from './MobileSidebar'

const font= Poppins({
    weight:'600',
    subsets:['latin']
})

export const Navbar=()=>{
    return(
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-2 border-b h-16 border-primary/10 bg-secondary">
            <div className="flex items-start">
                <MobileSidebar/>
                                <Link href={'/'}>
                    <h1 className={cn('hidden md:block text-xl md:text-3xl font-bold text-primary',font.className)}>
                        companion.ai
                    </h1>
                </Link>
            </div>
            <div className='flex items-center gap-x-3'>
                <Button variant={'premium'} size={'sm'}>
                    Upgrade
                    <Sparkles className='ml-2'/>
                </Button>
                <ModeToggle/>
                <UserButton/>
            </div>
        </div>
    )
}