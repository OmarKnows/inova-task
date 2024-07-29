import React from 'react';
import { IEbook } from '../../../app/api/types/ebook.types';
import { MdOutlineShoppingCart } from 'react-icons/md';

interface IEBookCardProps {
	ebook: IEbook;
}

const EbookCard: React.FC<IEBookCardProps> = ({ ebook }) => {
	return (
		<div className='bg-[#1e1e1e] w-[287px] h-[450px] text-white'>
			<div className='w-[287px] h-[250px]'>
				<img src='' alt='ProductCard' className='w-full h-full object-cover' />
			</div>
			<div className='p-4'>
				<div className='text-[22px] font-bold'>{ebook?.attributes?.name}</div>
				<div>USD {ebook?.attributes?.price}</div>
			</div>
			<div className='flex gap-3 justify-center w-full'>
				<button className='bg-[#55e748] w-[213px] text-xl font-bold text-black py-2'>Pay</button>
				<button className='border-[#55e748] border p-2 text-[#55e748]'>
					<MdOutlineShoppingCart size={24} />
				</button>
			</div>
		</div>
	);
};

export default EbookCard;
