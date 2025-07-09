
import { useState } from 'react';
import ParentComponent from './hooks/ParentComponent';
import UserDetailsComponent from './hooks/UserDetailsComponent';
import UsersComponent from './hooks/UsersComponent';
import TodoList from './hooks/TodoList';
import Base from './context/Base';

function App() {
  let [id, setId] = useState(1);
  return (
    <div>
      <ParentComponent />
      {/* <Base />
      <TodoList /> */}
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
