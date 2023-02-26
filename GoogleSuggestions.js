/* eslint-disable arrow-body-style */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/alt-text */
// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchText: ''}

  searchingValue = event => {
    this.setState({searchText: event.target.value})
  }
  changingInputText = text => {
    this.setState({searchText: text})
  }

  render() {
    const {searchText} = this.state

    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(eachValue =>
      eachValue.suggestion.toLowerCase().includes(searchText),
    )

    return (
      <div className="google-card">
        <div className="img-container">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />

          <div className="card">
            <div className="search-card">
              <img
                className="search-img"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                onChange={this.searchingValue}
                className="input"
                value={searchText}
                placeholder="Search Google"
              />
            </div>
            <ul className="card-2">
              {searchResult.map(each => (
                <SuggestionItem
                  details={each}
                  key={each.id}
                  changingInputText={this.changingInputText}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
