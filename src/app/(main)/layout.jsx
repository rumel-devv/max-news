import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import BreakingNews from "@/components/shared/BreakingNews";

const MianLayout = ({children}) => {
    return (
        <div className='w-10/12 mx-auto '>
         <Header/>
         <BreakingNews/>
         <Navbar/>
         {children}
        </div>
    );
};

export default MianLayout;