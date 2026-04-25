'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({href,children}) => {

    const pathName = usePathname()
    const isActive = href === pathName ;

    return <Link className={`${isActive ? 'bg-red-500 py-1 px-3 rounded-xs text-white' : ''}`} href={href}>{children}</Link>
};

export default Navlink;