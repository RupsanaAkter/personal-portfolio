import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';



function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div className='App max-w-[1440px] mx-auto' >
    <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;
