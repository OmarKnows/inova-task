import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../modules/home/HomePage';
import EbooksListPage from '../../modules/ebooks/EbooksListPage';
import EbooksDetailsPage from '../../modules/ebooks/EbooksDetailsPage';
import App from '../../App';
import { ROUTES } from '../constants/routes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: ROUTES.EBOOKS,
				children: [
					{
						index: true,
						element: <EbooksListPage />,
					},
					{
						path: ':id',
						element: <EbooksDetailsPage />,
					},
				],
			},
		],
	},
]);

export default router;
