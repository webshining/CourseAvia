import AppRouter from "./components/AppRouter";
import './styles/app.scss'
import TopBar from "./components/TopBar";
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";

const App = observer(() => {
  return (
      <BrowserRouter>
        <TopBar/>
        <AppRouter/>
      </BrowserRouter>
  );
})

export default App;
