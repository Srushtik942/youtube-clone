import './App.css';
import Body from './components/Body';
import './components/Head';
import Head from './components/Head';
import store from './utils/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
   <div>

   <Head></Head>
   <Body></Body>
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
