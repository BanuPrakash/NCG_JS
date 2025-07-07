
import { useState } from 'react';
import ParentComponent from './hooks/ParentComponent';
import UserDetailsComponent from './hooks/UserDetailsComponent';
import UsersComponent from './hooks/UsersComponent';
import TodoList from './hooks/TodoList';

function App() {
  let [id, setId] = useState(1);
  return (
    <div>
      <TodoList />
      {/* <ParentComponent />
      <table>
        <tbody>
          <tr>
            <td><UsersComponent setId={setId} /></td>
            <td><UserDetailsComponent id={id} /></td>
          </tr>
        </tbody>
      </table> */}

    </div>
  );
}

export default App;
