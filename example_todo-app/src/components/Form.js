// we need useState and useEffect hooks
import React, { useState, useEffect } from "react";

// icons from react icons kit
// main Icon component
import { Icon } from "react-icons-kit";

// icons themselves
import { plus } from "react-icons-kit/feather/plus";
import { edit2 } from "react-icons-kit/feather/edit2";
import { trash } from "react-icons-kit/feather/trash";

// get todos from local storage
const getTodosFromLS = () => {
  const data = localStorage.getItem("Todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const Form = () => {
  const [todoValue, setTodoValue] = useState("");

  // todos array of objects
  const [todos, setTodos] = useState(getTodosFromLS());
  console.log(todos);

  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    // creating a ID form every todo
    const date = new Date();
    const time = date.getTime();

    // creating a todo object
    let todoObject = {
      ID: time,
      TodoValue: todoValue,
      completed: false,
    };

    // updating todos state
    setTodos([...todos, todoObject]);
    // clearing input field
    setTodoValue("");
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
    // we are updating todos in local storage whenever our todos state
    // is changing
  }, [todos]); /**useEffect wil run whenever our todos state changes */

  // delete a todo
  const handleDelete = (id) => {
    // console.log(id);
    const filtered = todos.filter((todo) => {
      return todo.ID !== id;
    });
    setTodos(filtered);
  };

  // edit form
  const [editForm, setEditForm] = useState(false);

  // id state
  const [id, setId] = useState();
  // handle edit icon
  const handleEdit = (todo, index) => {
    setEditForm(true);
    setId(index);
    setTodoValue(todo.TodoValue);
  };

  // handle edit submit
  const handleEditSubmit = (e) => {
    e.preventDefault()
    let items = [...todos]
    let item = items[id]
    // console.log(item);
    item.TodoValue = todoValue
    item.completed = false
    items[id] = item
    setTodos(items)
    setTodoValue('')
    setEditForm(false)
  };

  // handleCheckbox
  const handleCheckbox = (id) =>{
    let todoArray = []
    todos.forEach((todo)=>{
      if(todo.ID === id){
        if(todo.completed === false){
          todo.completed = true
        }
        else if(todo.completed === true) {
          todo.completed = false
        }
      }
      todoArray.push(todo)
      setTodos(todoArray)
    })
  }

  return (
    <>
      {/* form component */}
      {editForm === false && (
        <div className="form">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="input-and-button">
              <input
                type="text"
                placeholder="Add an Item"
                required
                onChange={(e) => setTodoValue(e.target.value)}
                value={todoValue}
              />
              <div className="button">
                <button type="submit">
                  <Icon icon={plus} size={20} />
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* end of form component */}

      {/* edit form component */}
      {editForm === true && (
        <div className="form">
          <form autoComplete="off" onSubmit={handleEditSubmit}>
            <div className="input-and-button">
              <input
                type="text"
                placeholder="Add an Item"
                required
                onChange={(e) => setTodoValue(e.target.value)}
                value={todoValue}
              />
              <div className="button edit">
                <button type="submit">Update</button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* end of edit form component */}

      {/* start of rendering todos if we have todos.length > 0 */}
      {todos.length > 0 && (
        <>
          {todos.map((individualTodo, index) => (
            <div className="todo" key={individualTodo.ID}>
              {/* checkbox and value div   */}
              <div>
                {editForm === false /**ko hien thi form */ && (
                  <input type="checkbox" checked={individualTodo.completed} onChange={() => handleCheckbox(individualTodo.ID)}/>
                )}
                <span style={individualTodo.completed===true ? {textDecoration: 'line-through'}:{textDecoration: 'none'}}>{individualTodo.TodoValue}</span>
              </div>

              {/* edit and delete icon div */}

              {editForm === false && (
                <div className="edit-and-delete">
                  <div
                    class="edit"
                    style={{ marginRight: 7 + "px" }}
                    onClick={() => handleEdit(individualTodo, index)}
                  >
                    <Icon icon={edit2} size={18} />
                  </div>
                  <div
                    class="delete"
                    onClick={() => handleDelete(individualTodo.ID)}
                  >
                    <Icon icon={trash} size={18} />
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* just after map closing brackets */}

          {/* delete all todos */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={() => setTodos([])} className="delete-all">
              DELETE ALL
            </button>
          </div>
        </>
      )}
    </>
  );

  // return (
  //     <>
  //       {/* form component */}
  //         <div className="form">
  //           <form autoComplete="off" onSubmit={handleSubmit}>
  //             <div className="input-and-button">
  //               <input type='text' placeholder="Add an Item" required onChange={(e)=>setTodoValue(e.target.value)} value={todoValue}/>
  //               <div className='button'>
  //                 <button type="submit">
  //                   <Icon icon={plus} size={20}/>
  //                 </button>
  //               </div>
  //             </div>
  //           </form>

  //           {/* start of rendering todos if we have todos.length > 0 */}
  //           {todos.lenght>0&&(
  //             <>
  //                 {todos.map((individualTodo, index)=>(
  //                     <div className='todo' key={individualTodo.ID}>
  //                     {/* checkbox and value div */}
  //                         <div>
  //                             <input type='checkbox'/>
  //                             <span>{individualTodo.TodoValue}</span>
  //                         </div>

  //                         {/* edit and delete icon div */}
  //                         <div className='edit-and-delete'>
  //                         <div style={{marinRight:7+'px'}}>
  //                             <Icon icon={edit2} size={18}/>
  //                         </div>
  //                         <div>
  //                             <Icon icon={trash} size={18}/>
  //                         </div>
  //                         </div>
  //                     </div>
  //                 ))}
  //             </>
  //           )}
  //         </div>
  //       {/* end of form component */}
  //     </>
  // )
};
