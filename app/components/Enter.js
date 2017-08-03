import React from 'react';

class Enter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.props.onClick(this.state.inputText);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(function () {
      return {
        inputText: value
      }
    });
  }

  render() {
    return (
      <div className='enter-container' style={{ flexDirection: this.props.direction }}>
        <input
          className='form-control'
          type='text'
          placeholder='St. George, Utah'
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <button
          className='btn'
          onClick={this.handleClick}
          disabled={!this.state.inputText}
          >
          Get Weather
        </button>
      </div>
    )
  }
}

export default Enter;
