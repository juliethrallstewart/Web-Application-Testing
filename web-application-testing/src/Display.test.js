import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		render(<Display />);
	});
	it('props work', () => {
		const balls = 3,
			strikes = 2,
			hits = 0;
		const display = render(<Display strikes={strikes} balls={balls} hits={hits} />);
		display.getByText(new RegExp(`${strikes}`, 'i'));
		display.getByText(new RegExp(`${balls}`, 'i'));
		display.getByText(new RegExp(`${hits}`, 'i'));
	});
	it('props work', () => {
		const display = render(<Display strikes={1} balls={2} />);
		display.getByText(/1/);
		display.getByText(/2/);
	});
	it('text is displayed', () => {
		const display = render(<Display />);
		display.getByText(/Strikes:/);
		display.getByText(/Balls:/);
		display.getByText(/Hits:/);
	});
});
