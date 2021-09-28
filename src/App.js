import { BrowserRouter, Route } from "react-router-dom";
import { TelaHome } from './pages/TelaHome/TelaHome.js';
//import TopBar from './components/topBar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={TelaHome} />
        </BrowserRouter>
    </div>
  );
}

export default App;
