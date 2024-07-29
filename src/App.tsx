import { Outlet } from 'react-router-dom';
import Header from './shared/components/Header/Header';

const App = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

export default App;
