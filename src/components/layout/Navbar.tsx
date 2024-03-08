"use client";

import { Bell, ChevronLeftCircle, Compass, Home, LogIn, LogOutIcon, Menu, TrendingUp, User2 } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname} from 'next/navigation';

function Navbar() {
  const [isCliked, setisClicked] = useState(true);
  const [isHovering, setisHovering] = useState(true);
  const pathname = usePathname();
  return (
    <div className='h-full p-4'>
      <Menu color='white' onClick={() => setisClicked(!isCliked)} className='md:hidden' />
      <div className={cn("absolute left-0 top-0 h-full w-60 bg-[url('/honeycombbg.svg')] bg-center bg-cover border-r-[0.5px] border-opacity-50 md:transition-transform duration-300 md:duration-1000", {
        ["-translate-x-full scale-0 opacity-0 md:scale-100 md:opacity-100 md:translate-x-0 w-18"]: isCliked,
        ["translate-x-0 opacity-100 scale-100"]: !isCliked,
      })} onMouseEnter={() => setisHovering(false)} onMouseLeave={() => setisHovering(true)}>
        <div className='h-full backdrop-blur-sm flex flex-col pt-20 pb-5'>
          <div id='logo' className='flex items-center justify-center space-x-3'>
            <Image src={'logo.svg'} alt={''} width={50} height={50} className={cn('rounded-full backdrop-blur-3xl',{
              ["scale-90"] : isCliked,
            })} />
            <p className={cn('text-yellow-400 font-bold text-2xl',{
              ["hidden"]: isCliked,
              ["block"]: !isCliked,
            })}>BuzzHive</p>
          </div>
          <div className='h-full flex flex-col justify-between'>

            <div id='Navbar items' className={cn('flex flex-col pt-10 px-4',{
              ["space-y-8"] : isCliked,
              ["space-y-3"] : !isCliked,
            })}>
            <Link id='Items' className={cn('flex space-x-2 transition-color duration-300  p-5 h-12 rounded-full   hover:bg-yellow-400 hover:text-black items-center font-semibold text-white',{
                ["p-1 items-center justify-center -translate-x-3 h-9 w-9"] : isCliked,
                ["justify-start -translate-x-0"] : !isCliked,
                ["bg-yellow-400 text-black border-2"] : pathname === '/',
              })} href={'/'}>
                <Home />
                <p className={cn('text-lg',{
                  ["hidden"] : isCliked,
                  ["block"] : !isCliked,
                })}>Home</p>
              </Link>
              <Link id='Items' className={cn('flex space-x-2 transition-color duration-300  p-5 h-12 rounded-full   hover:bg-yellow-400 hover:text-black items-center font-semibold text-white',{
                ["p-1 items-center justify-center -translate-x-3 h-9 w-9"] : isCliked,
                ["justify-start -translate-x-0"] : !isCliked,
                ["bg-yellow-400 text-black border-2"] : pathname === '/explore',
              })} href={'/explore'}>
                <Compass />
                <p className={cn('text-lg',{
                  ["hidden"] : isCliked,
                  ["block"] : !isCliked,
                })}>Explore</p>
              </Link>
              <div className='flex items-center -space-x-1'>
              <Link id='Items' className={cn('flex space-x-2 transition-color duration-300  p-5 h-12 rounded-full   hover:bg-yellow-400 hover:text-black items-center font-semibold text-white',{
                ["p-1 items-center justify-center -translate-x-3 h-9 w-9"] : isCliked,
                ["justify-start -translate-x-0"] : !isCliked,
                ["bg-yellow-400 text-black border-2"] : pathname === '/notications',
              })} href={'/notications'}>
                  <Bell/>
                  <p className={cn('text-lg',{
                    ["hidden"] : isCliked,
                    ["block"] : !isCliked,
                  })}>Notifications</p>
                </Link>
                <div className={cn('flex justify-end',{
                  ["translate-x-2 rotate-180"]:isCliked,
                  [" px-4 translate-x-0 rotate-0"]:!isCliked,
                })} onClick={() => setisClicked(!isCliked)}>

                  <ChevronLeftCircle color='white' size={25} className={cn('hover:scale-110 transition-all duration-500 cursor-pointer',{
                    ["opacity-0"] : isHovering,
                    ["opacity-100"] : !isHovering,
                  })} />
                </div>
              </div>
              <Link id='Items' className={cn('flex space-x-2 transition-color duration-300  p-5 h-12 rounded-full   hover:bg-yellow-400 hover:text-black items-center font-semibold text-white',{
                ["p-1 items-center justify-center -translate-x-3 h-9 w-9"] : isCliked,
                ["justify-start -translate-x-0"] : !isCliked,
                ["bg-yellow-400 text-black border-2"] : pathname === '/profile',
              })} href={'/profile'}>
                <User2/>
                <p className={cn('text-lg',{
                  ["hidden"] : isCliked,
                  ["block"] : !isCliked,
                })}>Profile</p>
              </Link>
              <Link id='Items' className={cn('flex space-x-2 transition-color duration-300  p-5 h-12 rounded-full   hover:bg-yellow-400 hover:text-black items-center font-semibold text-white',{
                ["p-1 items-center justify-center -translate-x-3 h-9 w-9"] : isCliked,
                ["justify-start -translate-x-0"] : !isCliked,
                ["bg-yellow-400 text-black border-2"] : pathname === '/trending',
              })} href={'/trending'}>
                <TrendingUp/>
                <p className={cn('text-lg',{
                  ["hidden"] : isCliked,
                  ["block"] : !isCliked,
                })}>Trending</p>
              </Link>
            </div>

            <div className={cn('px-5',{
              ["px-2"]:isCliked
            })}>
              <Link id='Items' className='flex space-x-2 justify-center transition-color duration-300 w-full h-12 rounded-full border-2   hover:bg-yellow-400 hover:text-black items-center font-semibold text-white' href={''}>
                <LogIn />
                <p className={cn('text-lg',{
                  ["hidden"] : isCliked,
                  ["block"] : !isCliked,
                })}>Sign In</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar