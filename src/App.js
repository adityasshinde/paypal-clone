import './App.css';
import { useRoutes } from 'react-router-dom';
import Router from './routes/Router';

function App() {
  const routing=useRoutes(Router);
  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
