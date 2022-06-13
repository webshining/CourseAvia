import AppRouter from "./components/AppRouter";
import './styles/app.scss'
import TopBar from "./components/TopBar";

function App() {
  return (
      <>
        <TopBar/>
        <AppRouter/>
      </>
  );
}

export default App;
