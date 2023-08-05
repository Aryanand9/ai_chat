'use client'
import {Menu} from 'lucide-react'
export const Navbar=()=>{
    return(
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-2 border-b border-primary/10 bg-secondary">
            <div className="flex items-start">
                <Menu className='block md:hidden'/>
            </div>
        </div>
    )
}