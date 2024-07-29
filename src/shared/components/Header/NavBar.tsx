import { useState } from 'react';
import { MdKeyboardArrowDown, MdOutlineShoppingCart } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../app/constants/routes';

const Navbar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<nav className='bg-[#1e1e1e] p-[6px]'>
			<div className='flex mx-6 items-center gap-12 text-white font-medium'>
				<NavLink to='/' className='cursor-pointer'>
					Home
				</NavLink>
				<div className='relative'>
					<button onClick={toggleDropdown} className='text-white focus:outline-none flex items-center gap-2'>
						News
						<MdKeyboardArrowDown size={20} />
					</button>
					{isDropdownOpen && (
						<div className='absolute w-48 bg-black rounded-md'>
							<div className='block px-4 py-2  hover:bg-[#55e748] hover:text-black'>All News</div>
							<div className='block px-4 py-2 hover:bg-[#55e748] hover:text-black'>Olympia Tournaments</div>
						</div>
					)}
				</div>
				<div className='cursor-pointer'>Courses</div>
				<NavLink to={ROUTES.EBOOKS} className='cursor-pointer'>
					E-books
				</NavLink>
				<div className='cursor-pointer'>Contact Us</div>
				<div className='ms-auto flex items-center gap-2'>
					<MdOutlineShoppingCart size={24} />
					<div>Cart</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
