import Greeting from './Greeting.tsx';
import Shouter from './Shouter.tsx';
import MouseTracker from './MouseTracker.tsx';

function App() {
	return (
		<main>
			<Greeting name='Halimah' />
			<Shouter />
			<MouseTracker />
		</main>
	);
}

export default App;
