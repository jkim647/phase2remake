import * as React from 'react';
import './Backdrop.css';

const backdrop = (props:any) => (
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;