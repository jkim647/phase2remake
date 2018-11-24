import * as React from 'react';
import './Toolbar.css'
import Logo from '../logo/logo';



const toolbar = (props:any) => (

  <header className="toolbar">
    <nav className="toolbar__navigation">
        
        <div className="toolbar__logo"><a href="/"> <Logo /></a></div>
        <div className="spacer"/>
        <div className ="toolbar__navigation-items">
            
            <ul>
                
                <button onClick={props.drawerToggleClickHandler} className="btn btn-warning">Add word</button>

        
            </ul>
        
        </div>
            
            
    </nav>
  </header>
  
);

export default toolbar;