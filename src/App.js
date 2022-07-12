import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ViewMergeReports from './components/ViewMergeReports';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="w-full">
      <Router>
        <Switch>
          <div className='w-full flex justify-center'>
            <div className='w-full flex justify-center flex-col items-center' >
            <div className='w-9/12'>
              <Header />
              </div>
              <div id='bg' className='w-full flex justify-center'>
                <div className='w-9/12'>
              <Route exact path={'/'} component={Home} />
              <Route path={'/ViewMergeReports'} component={ViewMergeReports} />
                </div>
              </div>
            </div>
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
