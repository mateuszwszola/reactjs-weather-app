import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
