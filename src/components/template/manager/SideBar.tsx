// components/Sidebar.js
'use client';
import {
   GaugeIcon,
   UsersIcon,
   UserIcon,
   UserSquareIcon,
   HandHeartIcon,
   CalendarIcon,
   SignOutIcon,
   IdentificationBadgeIcon,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useAuth from '@/data/hooks/useAuth';
import { canManageVolunteers } from '@/core/auth/permissions';

interface SidebarProps {
   mobileOpen?: boolean;
   onNavigate?: () => void;
}

export default function Sidebar({
   mobileOpen = false,
   onNavigate,
}: SidebarProps) {
   const pathname = usePathname();
   const { user } = useAuth();
   const sidebarTopics = [
      {
         description: 'Dashboard',
         link: '/dashboard',
         icon: <GaugeIcon size={24} />,
      },
      {
         description: 'Famílias',
         link: '/dashboard/families',
         icon: <UsersIcon size={24} />,
      },
      {
         description: 'Beneficiários',
         link: '/dashboard/beneficiaries',
         icon: <UserIcon size={24} />,
      },
      {
         description: 'Doações',
         link: '/dashboard/donations',
         icon: <HandHeartIcon size={24} />,
      },
      {
         description: 'Doação p/ Família',
         link: '/dashboard/donations-to-family',
         icon: <UserSquareIcon size={24} />,
      },
      {
         description: 'Eventos',
         link: '/dashboard/events',
         icon: <CalendarIcon size={24} />,
      },
      ...(canManageVolunteers(user?.role)
         ? [
              {
                 description: 'Voluntários',
                 link: '/dashboard/volunteers',
                 icon: <IdentificationBadgeIcon size={24} />,
              },
           ]
         : []),
   ];

   const navigation = (
      <div>
         {sidebarTopics.map((topic, index) => {
            const isActive =
               topic.link === '/dashboard'
                  ? pathname === topic.link
                  : pathname === topic.link ||
                    pathname.startsWith(`${topic.link}/`);
            return (
               <Link
                  key={index}
                  href={topic.link}
                  onClick={onNavigate}
                  className={`sidebar-menu flex items-center gap-2 p-2 mb-3 cursor-pointer rounded-lg ${
                     isActive ? 'sidebar-menu-selected' : ''
                  }`}
               >
                  {topic.icon}
                  {topic.description}
               </Link>
            );
         })}
      </div>
   );

   return (
      <>
         <aside className="sidebar-color hidden h-full w-64 flex-none flex-col justify-between overflow-y-auto p-4 md:flex">
            {navigation}
         </aside>
         {mobileOpen && (
            <div className="fixed inset-0 top-16 z-40 md:hidden">
               <button
                  type="button"
                  aria-label="Fechar menu"
                  className="absolute inset-0 bg-slate-900/40"
                  onClick={onNavigate}
               />
               <aside className="sidebar-color relative h-full w-[min(18rem,85vw)] overflow-y-auto border-l-0 border-b-0 p-4 shadow-xl">
                  {navigation}
               </aside>
            </div>
         )}
      </>
   );
}
