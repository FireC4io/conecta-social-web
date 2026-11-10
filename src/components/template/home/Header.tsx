'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { List } from '@phosphor-icons/react';
import NavigationHeader from '@/components/LandingPage/NavigationHeader';
import ProfileUser from '@/components/template/manager/ProfileUser';
interface HeaderProps {
   logged: boolean;
   onMenuToggle?: () => void;
   mobileMenuOpen?: boolean;
}

const Header = ({
   logged,
   onMenuToggle,
   mobileMenuOpen = false,
}: HeaderProps) => {
   return (
      <header
         className={`header-color flex justify-between items-center gap-3 p-3 sm:p-4 sticky top-0 z-50 ${
            !logged ? 'shadow-lg' : ''
         }`}
      >
         <Link href={'/'}>
            <div className="shrink-0">
               <Image
                  src="/images/logo.svg"
                  width={logged ? 140 : 180}
                  height={logged ? 124 : 160}
                  alt="logo"
                  className="h-auto w-[120px] sm:w-[140px]"
               />
            </div>
         </Link>
         {!logged ? (
            <NavigationHeader />
         ) : (
            <div className="ml-auto flex min-w-0 items-center gap-2">
               <button
                  type="button"
                  onClick={onMenuToggle}
                  aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                  aria-expanded={mobileMenuOpen}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary hover:bg-white/60 md:hidden"
               >
                  <List size={25} />
               </button>
               <ProfileUser />
            </div>
         )}
      </header>
   );
};

export default Header;
