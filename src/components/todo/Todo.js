import React from 'react';
import './todo.css'
const Todo = () =>{
    return(
        <div className="mainDiv">
            <div className='childDiv'>
                <figure>
                    <figcaption>Add you list Here 👍</figcaption>
                </figure>
                <div className='addItems'>
                    <input type='text' placeholder='✍️  add items'/>
                    <button className="fa fa-plus add-btn"></button>
                    {/* <button>ADD</button> */}
                </div>
            </div>
        </div>
    )
}


export default Todo;