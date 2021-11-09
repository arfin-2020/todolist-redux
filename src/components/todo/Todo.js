import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import './todo.css';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    // console.log(inputData);

    const dispatch = useDispatch();
    let list = useSelector((state) => state.todoReducers.list);
    // console.log(list);
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

                </div>
                <div className='showItem'>
                    {
                        list.map((element)=>{
                            return(
                        <div className='eachItem' key={element.id}>
                            <h3> {element.data} </h3>
                            <button className="far fa-trash-alt add-btn" onClick={() => dispatch(deleteTodo(element.id))}></button>
                        </div>
                            )
                        
                        })
                    }
                </div>
          
                    <button onClick={() => dispatch(removeTodo())}>Remove All</button>
               
            </div>
        </div>
    )
}


export default Todo;