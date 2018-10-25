
import React from 'react';
import './Person.css';

const person = (props) => {
	
	return (
		
		<div className="person">
			<p onClick={props.onClick} > This is {props.name} and {props.age} year old</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>   

		)
}


export default person
