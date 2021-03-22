import Search from "./components/search";

import Character from "./components/character";

import Collection from "./components/collection";

import {BrowserRouter,Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>

      <div className="App">
          <Route path="/" exact component={Search} />
          <Route path="/character/:id" component={Character}/>
          <Route path="/myCollection" component={Collection}/>
      </div>

    </BrowserRouter>
  );
}

export default App;
