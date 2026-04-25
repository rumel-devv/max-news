import Image from 'next/image';
import logo from '@/assets/logo.png'
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-8 space-y-2'>
           <Image className='mx-auto' src={logo} width={300} height={200} alt='logo'/>
           <p className='text-gray-500'>Journalisim without fear or feavour</p>
    <p> {format(new Date(),"EEEE.MMM dd.yyyy" )} </p>
        </div>
    );
};

export default Header;