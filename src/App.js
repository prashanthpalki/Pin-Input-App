import React, { Component, useRef} from 'react';
import { render } from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const utilizeFocus = () => {
	const ref = React.createRef();
	const setFocus = () => {ref.current &&  ref.current.focus()};
	return {setFocus, ref} 
}

class App extends Component {
  constructor(props){
    super(props)
    this.firstRef = utilizeFocus(); 
    this.secondRef = utilizeFocus();
    this.thirdRef = utilizeFocus();
    this.fourthRef = utilizeFocus();
  }

  componentDidMount(){
    this.firstRef.setFocus();
  }

  render(){
    return (
      <div className="myForm mt-5">
        <h1 style={{color:"rebeccapurple",textAlign:'center'}}>Enter OTP</h1>
          <input type="number" maxLength="1" onChange={ (e)=>{ if (e.target.value.length===1) this.secondRef.setFocus() }} ref={this.firstRef.ref } />
          <input type="number" maxLength="1" onChange={ (e)=>{ if (e.target.value.length===1) this.thirdRef.setFocus() }} ref={this.secondRef.ref } />
          <input type="number" maxLength="1" onChange={ (e)=>{ if (e.target.value.length===1) this.fourthRef.setFocus() }} ref={this.thirdRef.ref } />
          <input type="number" maxLength="1" ref={this.fourthRef.ref } />
      </div>
    )

  } 
}

render(<App />, document.getElementById('root'));


export default App;
