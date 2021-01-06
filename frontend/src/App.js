import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import GalleryScreen from './screens/GalleryScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  return (
   <Router>
     <Route path='/' component={HomeScreen} exact/>
     <Route path='/gallery' component={GalleryScreen}/>
     <Route path='/login' component={LoginScreen}/> 
     <Route path='/register' component={RegisterScreen}/>  
   </Router>  
  );
}

export default App;
