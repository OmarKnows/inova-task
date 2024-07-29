import useSWR from 'swr';
import ebooksService from '../../app/api/services/ebooks.service';
import { useParams } from 'react-router-dom';

const EbooksDetailsPage = () => {
	const { id } = useParams<{ id: string }>();
	const { data: ebooksResponse, isLoading } = useSWR(['ebooks', 'get', id], ([, , id]) => ebooksService.details(id));

	const ebook = ebooksResponse?.data;

	return (
		<div className='px-6 text-white '>
			<div className='text-[46px] italic font-extrabold mt-10'>{ebook?.attributes?.name}</div>
			<div className='my-5 text-xl'>USD {ebook?.attributes?.price}</div>
			<div>
				<div className='text-[46px] italic font-extrabold'>Descriptions</div>
				<div className='my-5 text-xl'>{ebook?.attributes?.book?.description}</div>
			</div>
		</div>
	);
};

export default EbooksDetailsPage;
