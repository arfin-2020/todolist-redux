import React, { useState } from 'react';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import { useDispatch } from 'react-redux';
import './todo.css';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    // console.log(inputData);

    const dispatch = useDispatch();

    return (
        <div className="mainDiv">
            <div className='childDiv'>
                <figure>
                    <figcaption>Add you list Here 👍 </figcaption>
                </figure>
                <div className='addItems'>
                    <input type='text' placeholder='✍️  add items'
                        value={inputData} onChange={(event) => setInputData(event.target.value)}
                    />
                    <button className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(''))}></button>
                    {/* <button>ADD</button> */}
                </div>
            </div>
        </div>
    )
}


export default Todo;