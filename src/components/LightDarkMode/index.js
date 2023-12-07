// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}
  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modesClassName = isDarkMode ? 'light-mode' : 'dark-mode'
    const buttonTxtMode = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="app-container">
        <div className={`container ${modesClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonTxtMode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
