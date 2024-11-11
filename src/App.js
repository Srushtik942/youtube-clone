import './App.css';
import Body from './components/Body';
import './components/Head';
import Head from './components/Head';
function App() {
  return (
   <div>
    <h1 className="text-3xl font-bold">Namaste React</h1>
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
  );
}

export default App;
