import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import EbookCard from './components/EbookCard';
import ebooksService from '../../app/api/services/ebooks.service';
import { IEbook } from '../../app/api/types/ebook.types';

const EbooksListPage = () => {
	const [params] = useSearchParams();
	const { data: ebooksResponse, isLoading } = useSWR(['ebooks', 'list'], () => ebooksService.list());

	const ebooks = ebooksResponse?.data;
	console.log(ebooks);

	return (
		<div className='px-6'>
			<div className='text-white text-[46px] italic font-extrabold mt-10'>E-Books</div>
			<div className='my-5'>
				{ebooks?.map((ebook: IEbook) => (
					<EbookCard ebook={ebook} />
				))}
			</div>
		</div>
	);
};

export default EbooksListPage;
