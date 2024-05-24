import { useState, type ChangeEvent } from 'react';

function Shouter() {
	const [textInput, capText] = useState('');

	function updateText(event: ChangeEvent<HTMLInputElement>) {
		capText(event.target.value);
	}

	return (
		<form>
			<input value={textInput} aria-label='text input' onChange={updateText} />
			<output>{textInput.toUpperCase()}</output>
		</form>
	);
}

export default Shouter;
