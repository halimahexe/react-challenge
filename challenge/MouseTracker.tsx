import { useState, useEffect } from 'react';

export default function MouseTracker() {
	const [startPoint, setCoords] = useState<[number, number]>([0, 0]);

	useEffect(() => {
		function updateCoords(event: MouseEvent) {
			event.preventDefault();
			setCoords([event.clientX, event.clientY]);
		}
		window.addEventListener('mousemove', updateCoords);
		return () => window.removeEventListener('mousemove', updateCoords);
	}, []);

	const [x, y] = startPoint;
	return (
		<output>
			{x},{y}
		</output>
	);
}
