import { useState, type ChangeEvent } from 'react';

function Shouter() {
	const [textInput, capText] = useState('');

	function updateText(event: ChangeEvent<HTMLInputElement>) {
		const capitalise: string = event.target.value.toUpperCase();
		capText(capitalise);
	}

	return (
		<form>
			<input value={textInput} aria-label='text input' onChange={updateText} />
			<output>{textInput}</output>
		</form>
	);
}

export default Shouter;
