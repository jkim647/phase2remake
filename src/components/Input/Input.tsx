import * as React from 'react';
import './Input.css'

const input  = (props:any) => (
    <form className="search-form">
        <input type ="text" placeholder="Search" />
        <button>Search</button>
        
    </form>

);

export default input;