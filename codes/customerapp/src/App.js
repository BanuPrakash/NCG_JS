import './App.css';
import CustomerList from './components/CustomerList';
import ParentComponent from './trial/ParentComponent';

function App() {
  return (
    <div className="App">
        <h1>Customer Application</h1>
        <ParentComponent />
        <CustomerList />
    </div>
  );
}
export default App;
