import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {

  
  constructor(props) {
    let Obj1 = {firstName : "John", lastName : "Smith", salary: 3000}    
    let Obj2 = {...Obj1, salary: 5000}
    console.log(Obj1);
    console.log(Obj2)

    let a = [1,2,3,4];    
    let b = [...a,5,6];
    console.log(a)
    console.log(b)

    let ab = ['a','b'];    
    let bb = [...ab,'c'];
    console.log(ab)
    console.log(bb)

    let obj3  = {firstName : "John", lastName : "Smith"};
    let obj4 = Object.assign({},obj3,{salary:4000});
    console.log(obj3)
    console.log(obj4)

    let emp  = {empId: 1231, firstName : "John", lastName : "Smith", salary: 5000};    
    let {firstName,lastName,...rest} = emp;
    console.log(emp)
    console.log(firstName)
    console.log(lastName)
    console.log(rest)
    


    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
