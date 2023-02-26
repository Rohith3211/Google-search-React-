import {Component} from 'react'
import './index.css'

const SuggestionItem = props => {
  const {details, changingInputText} = props
  const {id, suggestion} = details
  const changeText = () => {
    changingInputText(suggestion)
  }
  return (
    <li className="search-text">
      <p>{suggestion}</p>
      <img
        onClick={changeText}
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
