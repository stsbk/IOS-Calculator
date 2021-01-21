import React, { useState, useEffect } from 'react';
import "./App.css";
import Button from "../Button";
import desk from "../Pictures/desk.png";
import { actionButtons, actionOperator, functionOperators, memoryOperators } from './constants';

const App = () => {
    const [value, setValue] = useState('');
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);
    const [saver, setSaver] = useState('');
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setTime(new Date());
    }, [new Date().getMinutes()]);

    const handleClick = (content, type) => () => {
        switch (type) {
            case 'operator':
                setOperator(content);
                setMemory(value);
                setValue('');
                if (content === '%') {
                    setValue(actionOperator('%', value, memory));
                }
                break;
            case 'function':
                setMemory(value);
                setValue(functionOperators(content, value));
                break;
            case 'memory':
                memoryOperators(content, value, saver, setValue, setSaver);
                break;
            case 'memory-plus':
                memoryOperators(content, value, saver, setValue, setSaver);
                break;
            case 'equals':
                setValue(actionOperator(operator, value, memory));
                break;
            default:
                setValue((prevValue) => prevValue + content);
        }
    };

    return <div className='App'>
        <div className='top'>
            <div className="time">
                {time.getHours()}:{time.getMinutes()}
            </div>
            <div className="desk">
                <img src={desk} alt="desk"/>
            </div>
        </div>
        <div className='display'>{value || 0}</div>
        <div className='buttons'>
            {actionButtons.map((actionButton) => (
                <Button
                    key={actionButton.content}
                    buttonClick={handleClick(actionButton.content, actionButton.type)}
                    content={actionButton.content}
                    type={actionButton.type}
                />
            ))}
        </div>
        <div className='bottom'>-</div>
    </div>
};

export default App;
