import api from './api';
import { EAPI } from '../app/constants/endpoints';

class EbooksService {
	//this should be typed better
	public async list(params?: { productType: string; subProductType: string }): Promise<any> {
		const { data } = await api.get(EAPI.EBOOKS, { params });
		return data;
	}
	public async details(id: string): Promise<any> {
		const { data } = await api.get(`${EAPI.EBOOKS}/${id}`);
		return data;
	}
}

export default Object.freeze(new EbooksService());
