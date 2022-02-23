import './app.css';
import Body from './component/Body';
import Header from './component/Header';
import LeftPanel from './component/LeftPanel';
import RightPanel from './component/RightPanel';




function App() {


  return (
      <div className="App">
        <Header />
        <LeftPanel />
        <Body />
        <RightPanel />
      </div>
  );
}

export default App;
