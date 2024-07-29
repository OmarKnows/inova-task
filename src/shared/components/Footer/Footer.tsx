import { ReactSVG } from 'react-svg';
import logo from '../../../assets/logo.svg';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
	return (
		<div>
			<footer className='bg-[#1e1e1e] text-white  h-[561px] py-32 px-6 '>
				<div className='flex justify-between'>
					<ReactSVG src={logo} />
					<div className='text-xl'>
						<div className='text-gray-300 '>Join our</div>
						<div>Newsletter</div>
					</div>
					<div className='w-[542px] relative'>
						<input
							type='text'
							placeholder='What are you looking for?'
							className='w-full p-2 border border-gray-500 placeholder-gray-500 h-[42px] bg-transparent '
						/>
						<button className='absolute top-0 right-0 bg-[#55e748] w-[100px] text-black h-[42px] duration-300 px-2 font-semibold hover:bg-[#1a1a1a]'>
							Subscribe
						</button>
					</div>
				</div>
				<div className='border-t border-gray-500 my-8'></div>
				<div className='flex  gap-20'>
					<div>
						<div className='w-[300px] text-sm text-gray-300'>
							Lorem Ipsum is simply dummy text of the printing and typesett ing industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s
						</div>
						<div className='my-4'>Follow us on</div>
						<div className='flex gap-3 text-[#55e748]'>
							<AiFillTwitterCircle size={40} />
							<AiFillLinkedin size={40} />
							<AiFillInstagram size={40} />
						</div>
					</div>
					<div className='flex flex-col gap-8'>
						<div>News</div>
						<div>Tournaments</div>
						<div>Courses</div>
						<div>E-Books</div>
					</div>
					<div className='flex flex-col gap-8'>
						<div>Privacy policies</div>
						<div>Terms & Conditions</div>
						<div>Contact Us</div>
					</div>
				</div>
			</footer>
			<div className='bg-black text-white flex justify-center py-1'>2024 LOGO. All Rights Reserved.</div>
		</div>
	);
};

export default Footer;
