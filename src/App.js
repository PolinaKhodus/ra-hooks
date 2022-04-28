import './App.css';
import UsersWidget from './components/list/UsersWidget';
import CustomHookWidget from './components/custom/CustomHookWidget';

function App() {
  const url = process.env.REACT_APP_URL;

  return (
    <>      
      <div className="task-title">useEffect</div>
      <UsersWidget url={url}/>

      <div className="task-title">useJsonFetch</div>
      <CustomHookWidget />
    </>    
  );
}

export default App;
