import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
	it('renders without crashing', () => {
		render(<Dashboard />);
	});
	it('handleResetButton', () => {
		let clicked = false;
		const { getByText } = render(<Dashboard reset={() => (clicked = true)} />);
		const handleResetButton = getByText(/reset/i);
		fireEvent.click(handleResetButton);
		expect(clicked).toBe(true);
	});
	it('reset with mocked function', () => {
		const click = jest.fn();
		const { getByText } = render(<Dashboard reset={click} />);
		const resetButton = getByText(/reset/i);
		fireEvent.click(resetButton);
		expect(click).toBeCalled();
	});
	it('ball with mocked function', () => {
		const click = jest.fn();
		const { getByText } = render(<Dashboard ball={click} />);
		const ballButton = getByText(/ball/i);
		fireEvent.click(ballButton);
		expect(click).toBeCalled();
	});
	it('strike with mocked function', () => {
		const click = jest.fn();
		const { getByText } = render(<Dashboard strike={click} />);
		const strikeButton = getByText(/strike/i);
		fireEvent.click(strikeButton);
		expect(click).toBeCalled();
	});
	it('hit with mocked function', () => {
		const click = jest.fn();
		const { getByText } = render(<Dashboard hit={click} />);
		const hitButton = getByText(/hit/i);
		fireEvent.click(hitButton);
		expect(click).toBeCalled();
	});
	it('foul with mocked function', () => {
		const click = jest.fn();
		const { getByText } = render(<Dashboard foul={click} />);
		const foulButton = getByText(/foul/i);
		fireEvent.click(foulButton);
		expect(click).toBeCalled();
	});
});
