import { Provider } from "react-redux"
import { store } from "./store/store";
import Navbar from "./components/Navbar";
import Content from "./components/Content";




function App() {
  return (
    
    <Provider store={store} >
     <Navbar/>
     <Content/>
    </Provider>

  );
}

export default App;
