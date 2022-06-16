import AppRouter from "./components/AppRouter";
import './styles/app.scss'
import TopBar from "./components/TopBar";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";

const App = observer(() => {
    useEffect(() => {
        console.log('%cWebShiningAviaApp(Artem)!', 'line-height: 70px; font-size: 50px; color: #11eef6; font-weight: 600; text-shadow: 5px 5px 10px #11eef6;')
    })
    return (
      <>
        <TopBar/>
        <AppRouter/>
      </>
    );
})

export default App;
