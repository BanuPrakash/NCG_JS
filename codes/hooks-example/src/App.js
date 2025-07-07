
import { useState } from 'react';
import ParentComponent from './hooks/ParentComponent';
import UserDetailsComponent from './hooks/UserDetailsComponent';
import UsersComponent from './hooks/UsersComponent';

function App() {
  let [id, setId] = useState(1);
  return (
    <div>
      <ParentComponent />
      <table>
        <tbody>
          <tr>
            <td><UsersComponent setId={setId} /></td>
            <td><UserDetailsComponent id={id} /></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;
