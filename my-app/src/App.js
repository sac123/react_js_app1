import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
          {id:'id1', name:'Sachin', age:22},
          {id:'id2', name:'Sameer', age:25},
          {id:'id3', name:'Saurav', age:26},
          {id:'id4', name:'Srinath', age:24},
          ],

    showPersons : false 

  }

  buttonClickHandler = ()=>  {

              this.setState({

              persons: [
                        {id:'id1', name:'Kedar', age:22},
                        {id:'id2',name:'Sameer', age:25},
                        {id:'id3',name:'Saurav', age:26},
                        {id:'id4',name:'Srinath', age:20},
                       ]
                    })
            
    }

    togglePersonHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
    }

    deletePersonHandler = (personIndex) =>{
      // const persons = this.state.persons;

      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});  

    }

    nameChangedHandler = (event, id)=> {

      const personIndex = this.state.persons.findIndex(p => {

          return p.id === id;

      })  

      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;  

      this.setState({persons:persons})
    }

  render() {

  const style = {

        margin:'10px',
        backgroundColor : 'green',
        color :'white',
        border :'1px solid blue',
        padding :'8px',
        width : '50%',
      }

    let personslist = null;

    if(this.state.showPersons){
      personslist =(  <div>  
            
            {this.state.persons.map((person, index) =>{

                  return <Person 

                  onClick={()=> this.deletePersonHandler(index)} 
                  name={person.name} 
                  age = {person.age}
                  key={person.id}
                  changed={(event)=>this.nameChangedHandler(event,person.id)} />
                })
            }

            {
              //Multiline comments in ReactJS
              /* 
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> I Love to play Soccer</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
            <Person name={this.state.persons[3].name} age={this.state.persons[3].age}></Person>*/}
          </div>
          );

          style.backgroundColor = 'red';
    }

    const classes = [];

    if(this.state.persons.length <=2){
        classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

  return (
    
      <div className="App">
       
       <h1>First react App </h1>
       <p className={classes.join(' ')}> This is working correctly </p>

        <button 
        style= {style}
        
        onClick ={ this.togglePersonHandler }> Click</button>
        {personslist}
        
      </div>
      
    );
  }
}


       /* <button 
        style= {style}
        onClick ={ this.buttonClickHandler }> Click</button>*/

export default App;
