import logo from '../../../assets/logo.svg';
import { ReactSVG } from 'react-svg';
import Navbar from './NavBar';

const Header = () => {
	return (
		<div className='bg-black'>
			<div className='border-b border-gray-600 text-white py-2 flex justify-end px-6'>العربية</div>
			<div className='flex justify-between py-4 px-6 items-center'>
				<ReactSVG src={logo} />
				<div className='flex text-white gap-1'>
					<div className='cursor-pointer'>Sign In</div>
					<div>or</div>
					<div className='cursor-pointer'>Sign Up</div>
				</div>
			</div>
			<Navbar />
		</div>
	);
};

export default Header;
