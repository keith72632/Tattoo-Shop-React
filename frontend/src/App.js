import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import GalleryScreen from './screens/GalleryScreen'

function App() {
  return (
   <Router>
     <Route path='/' component={HomeScreen} exact/>
     <Route path='/gallery' component={GalleryScreen}/> 
   </Router>  
  );
}

export default App;
