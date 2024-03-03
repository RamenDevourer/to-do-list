import React, {useState} from 'react'

function List(){

    const [tasks, setLists] = useState(["Brush Teeth", "Maths Homework", "Go to dentist"]);

    function handleAddList(){
        const newList = document.getElementById("addList").value;        
        setLists(f => [...f, newList]);
        document.getElementById("addList").value = "";
    }

    function handleRemoveList(index){
        
        setLists(f => f = tasks.filter((_, i) => i !== index));
    }

    return (
        <div className='List'>
            <h1>To-Do List:</h1>
            <ul>
                {tasks.map((task, index) => 
                <li key={index}
                    onClick={() => handleRemoveList(index)}>
                    {task}
                </li>)}
            </ul>
            <div className='add-task'>
                <div>
                    <input type="text" id='addList' placeholder='Enter task here'/>
                    <button onClick={handleAddList}>+</button>
                </div>
            </div>
        </div>
    );
}

export default List;