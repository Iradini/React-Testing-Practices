import logo from './logo.jpg';
import './App.css';
import { useState } from 'react';

function App() {
    const [ buttonColor, setButtonColor ] = useState('red');
    const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

    return (
        <div>
            <button 
            style={{backgroundColor: buttonColor}}
            onClick={() => setButtonColor(newButtonColor)}
            >Changed to {newButtonColor}
            </button>
        </div>
    );
}

export default App;