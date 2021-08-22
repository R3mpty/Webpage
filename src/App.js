import React, { Component , useState, useEffect, Suspense} from 'react'
import HeaderV2 from './components/HeaderV2/HeaderV2';
// import LandingPage from './components/LandingPage/LandingPage'
// import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import ContactMe from './components/ContactPage/Contact';
import ThreeHeader from './components/3DHeader/3DHeader'
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {motion, useMotionValue, UseTransform, AnimatePresence} from 'framer-motion';
import Timeline from './components/Timeline/Timeline';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


function Everything(){
  return (
    <motion.div className="everything" 
      initial = {{ opacity: 0}}
      animate = {{ opacity: 1}}
      exit = {{ opacity: 0}}>
      <ThreeHeader/>
      <AboutMe className="Section" id = "About"/>
      <Portfolio className="Section" id = "Portfolio"/>
      <ContactMe className="Section" id = "Contact"/>
    </motion.div>
  )
}


function App() {

  console.warn = () => {};
  
  // Loading screen setup
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
      setLoading(false);
    
  }, []);

  return (

    <div>

        {/* This is for normal websites */}
      <div className="App" >
  
        { loading ? 
          (<Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          loading = {loading}
          />)

          :

          (<AnimatePresence>
            <Switch> 
                <Route exact path = "/" component={Everything}/>
                <Route exact path = "/components/Timeline/Timeline" component={Timeline}/>
            </Switch>
          </AnimatePresence>)
        }

        {/* <AnimatePresence>
            <Switch> 
                <Route exact path = "/" component={Everything}/>
                <Route exact path = "/components/Timeline/Timeline" component={Timeline}/>
            </Switch>
        </AnimatePresence>   */}

      </div>
    </div>


  );
}


const AppWraper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  )
}

export default AppWraper;




