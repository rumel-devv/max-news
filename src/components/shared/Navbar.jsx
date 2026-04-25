import Link from 'next/link';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='max-w-9/12 mx-auto flex justify-between items-center mt-4'>
            <div></div>
            <ul className='flex gap-4'>
                <li> <Navlink href='/' >Home</Navlink></li>
                <li> <Navlink href='/about' >About</Navlink></li>
                <li> <Navlink href='/career' >Career</Navlink></li>
            </ul> 

            <div className='flex gap-2 items-center'>
                <Image src={userAvatar} width={50} height={50} alt='user png'/>
                <button className='btn bg-black text-white rounded-md'>Sign in</button>
            </div>

        </div>
    );
};

export default Navbar;