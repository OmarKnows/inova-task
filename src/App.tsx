import { Outlet } from 'react-router-dom';
import Header from './shared/components/Header/Header';
import Footer from './shared/components/Footer/Footer';

const App = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<div className='flex-grow'>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default App;
