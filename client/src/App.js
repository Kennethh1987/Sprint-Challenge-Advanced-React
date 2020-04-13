import React from 'react';
import axios from "axios";
import './App.css';
import SuperWoman from './Components/SuperWoman';
import CustomHook from './Components/CustomHook';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      womenSports: [],
      
    }

  }

  componentDidMount() {

    axios.get(`http://localhost:5000/api/players`)
    .then(response => {
      this.setState({...this.state, womenSports: response.data});
      console.log(response.data)
    })
    .catch(error => {console.log("Error!", error)});
  }

  render() {

  
    return (

      <div className="App">
        <CustomHook />
        <h1>What is styling</h1>
        <br/><br/>
        <div>
          {this.state.womenSports && this.state.womenSports.map((player, index) => {
            return <SuperWoman {...player} key={index}/>
          })}
        </div>
      
      </div>
    ); 
  }
}
export default App;