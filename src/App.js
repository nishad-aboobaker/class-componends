import { Component } from 'react';
import './App.css';



///////class components///////



// function App() {
//   return (
//     <div className="App">
//       <h1>hello heyyy hoiii ooiii</h1>
//       <Second/>
//     </div>
//   );
// }


// class Second extends Component{
//   render(){
//     return(
//       <div style={{"background-Color":"red"}}>
//         <h1>hello</h1>
//         <h2>hiiiiii</h2>
//       </div>
//     )
//   }
// }




////////state,set-state//////////


class App extends Component{
  state={
    value:"Synnefo"
  }

  clk=()=>{
    this.setState({
      value:"Novavi"
    })
  }

  render(){
    return(
      <div style={{"background-color":"red"}}>

        <h1>hello</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.clk}>click</button>

      </div>
    )
  }


}









export default App;
