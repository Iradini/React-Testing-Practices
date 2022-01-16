import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';

test('button has correct initial color', () => {
    render(<App />);
    //find an element with a role of button and text 'Change to blue'
    const colorButton = screen.getByRole('button', { name: 'Changed to blue' });
    let style = window.getComputedStyle(colorButton);
    // expect the background color to be red
    expect(style.backgroundColor).toBe('red');

    //click button
    fireEvent.click(colorButton);

    //expect the background color to be blue
    //expect(style.backgroundColor).toBe('blue');

    // expect the button text to be 'Changed to red'
    expect(colorButton.textContent).toBe('Changed to red');
});