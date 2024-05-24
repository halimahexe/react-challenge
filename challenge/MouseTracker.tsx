import { useState, useEffect } from 'react';

export default function MouseTracker() {
	const [startPoint, setCoords] = useState([0, 0]);

	useEffect(() => {
		function updateCoords(event: MouseEvent) {
			event.preventDefault();
			const x: number = event.clientX;
			const y: number = event.clientY;
			setCoords([x, y]);
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
