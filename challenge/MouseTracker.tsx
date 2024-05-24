import { useState, useEffect } from 'react';

export default function MouseTracker() {
	const [startPoint, setCoords] = useState([0, 0]);

	useEffect(() => {
		function updateCoords(event: MouseEvent) {
			event.preventDefault();
			setCoords([event.clientX, event.clientY]);
		}
		window.addEventListener('mousemove', updateCoords);
		return () => window.removeEventListener('mousemove', updateCoords);
	}, []);

	return (
		<output>
			{startPoint[0]},{startPoint[1]}
		</output>
	);
}
