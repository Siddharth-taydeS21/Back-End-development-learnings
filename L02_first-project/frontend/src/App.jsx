import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos')
    .then(res => {
      setTodos(res.data)
    });
  })

  return (
    <>
      <h1>Hello my first basic Full stack project</h1>
      <hr />
      <h3>All todos: {todos.length}</h3>
      <hr />
      {
        todos.map(({id, todo, completed}) => (
          <div key={id}>
            <h3>Task {id}: {todo}</h3>
            <p>{completed ? 'Done✅' : 'Pending⚠️'}</p>
          </div>
        ))
      }
    </>
  )
}

export default App