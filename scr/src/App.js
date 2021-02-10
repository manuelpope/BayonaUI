import logo from './logo.svg';
import './App.css';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import CenteredTabs from './components/CenteredTabs';
function App() {
  return (
    <div className="App">
      <h1>Logo & Bayona SAS</h1>
<BrowserRouter>
<Switch>
<Route exact path='/' component={CenteredTabs}>
</Route>


</Switch>


</BrowserRouter>

    </div>
    
  );
}

export default App;
