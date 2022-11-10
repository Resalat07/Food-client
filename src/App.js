
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes/Routes';

function App() {
  return (
    <div className="App max-w-screen-lg mx-auto">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
