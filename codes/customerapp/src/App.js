import './App.css';
import CustomerList from './components/CustomerList';
import ParentComponent from './trial/ParentComponent';
import Quiz from './quiz/Quiz'
function App() {
  return (
    <div className="App">
      <h1>Customer Application</h1>
      <Quiz />
      <ParentComponent />
      <CustomerList />
    </div>
  );
}
export default App;
