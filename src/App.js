import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import './components/Head';
import Head from './components/Head';
import store from './utils/store';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

//whatever we have to change it like if we want to
// change the ony body not header , we have to just
//write body in front of element
const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path:"watch",
      element: <WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
   <div>

   <Head></Head>
   {/* here body component will render over here */}
   <RouterProvider router={appRouter}/>
{/*
Head
Body
 Sidebar
   MenuItems
 MainConatiner
      ButtonList
      VideoCOntainer
        VideoCard
 */}


   </div>
   </Provider>
  );
}

export default App;
