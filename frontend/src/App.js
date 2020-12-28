import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import GalleryScreen from './screens/GalleryScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
   <Router>
     <Route path='/' component={HomeScreen} exact/>
     <Route path='/gallery' component={GalleryScreen}/>
     <Route path='/login' component={LoginScreen}/>  
   </Router>  
  );
}

export default App;
