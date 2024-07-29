import { EAPI } from '../../constants/endpoints';
import api from '../api';
import { IEbook } from '../types/ebook.types';

class EbooksService {
	//this should be typed better
	public async list(): Promise<{
		data: IEbook[];
	}> {
		const { data } = await api.get(EAPI.EBOOKS);
		return data;
	}
	public async details(id: string): Promise<any> {
		const { data } = await api.get(`${EAPI.EBOOKS}/${id}`);
		return data;
	}
}

export default Object.freeze(new EbooksService());
