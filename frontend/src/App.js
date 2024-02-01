// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Define the function that renders the content in routes using State.
function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>

          <header>
            <h1>Exercise Tracker </h1>
            <Navigation />
            <p>This app uses MERN technology to track your work outs for you. Add a new entry 
              or edit an existing entry. Start entering to track your progress!
            </p>
            
          </header>

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/add-exercise">
              <AddExercisePage exercise={exercise} />
            </Route>
            
            <Route path="/edit-exercise">
              <EditExercisePage exercise={exercise} />
            </Route>
          </main>

          <footer>
          <p>Modified last August, 2022. <cite> &copy; 2022 Chantal Ramos</cite></p>
          </footer>

      </Router>
    </>
  );
}

export default App;