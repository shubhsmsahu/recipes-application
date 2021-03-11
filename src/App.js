import React from "react";
import Nav from "./components/Nav";
import { RecipesState } from "./context/RecipesContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/Hero";
import "./App.css";
import FullRecipe from "./components/FullRecipe";

function App() {
  return (
    <RecipesState>
      <Router>
        <Nav />
        <Route exact path="/" component={Hero} />
        <Route path="/recipes/:id" component={FullRecipe} />
      </Router>
    </RecipesState>
  );
}

export default App;
