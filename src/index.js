import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const MyApp = () => {
    return(
        <div>
            <App />
        </div>
    )
}
ReactDOM.render(
    <MyApp />,
    document.querySelector('#root')
) 

