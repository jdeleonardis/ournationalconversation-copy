import React from 'react';
import App from '../App';
import '../App.css';

const SearchBox = (props) =>{
    return(
        <i class="fas fa-search">
        <input type = 'search'
        className = 'search'
        placeholder = {props.placeholder}
        onChange = {props.handleChange}
        
        /></i>
    )
}
export default SearchBox;
