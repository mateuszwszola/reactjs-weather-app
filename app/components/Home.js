import React from 'react';
import Enter from './Enter';
import api from './utils/api';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState(function () {
      return {
        city: value
      }
    });

    api.getCurrentWeather(value)
      .then(function (data) {
        console.log(data);
      })
  }


  render() {
    return (
      <div className='container'>
        <div className='navbar'>
          <h1>Main Header</h1>
          <Enter
            direction='row'
            onClick={this.handleClick}
          />
        </div>
        <div className='home-container' style={{ backgroundImage: "url('app/images/pattern.svg')"}}>
          <h1 className='header'>Enter a City and State</h1>
          <Enter
            direction='column'
            onClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

export default Home;
