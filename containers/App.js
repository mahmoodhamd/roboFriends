import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
// we remove the robots import file beacuse we are fetching it from the server.
import Scroll from '../components/Scroll';
import './App.css';
// To declare our state we first make our class and extend with compmenet.
// then make the state inside we state we define the robots and search field.
// most importantly it lives in the parent component.
class App extends Component{
    constructor() {
        super()
        this.state={
        Robot:[],
        Searchfield:'',
        }
      
    }

       componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({Robot:users}));
            
       }


       OnSearchChange=(event)=>{
        this.setState({Searchfield:event.target.value})   
        
       
        

    } 
   render(){
    console.log('render');
    const filteredRobots=this.state.Robot.filter(Robot=>{
      
        return Robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        
    })
    if(this.state.Robot.length===0){
        return <h1>Loading</h1>
    }else{
    return ( 
        <div className="tc"> 
         <h1 className="f1"> RoboFriends </h1>
         <Searchbox searchange={this.OnSearchChange}/>
         <Scroll>
         <CardList Robots={filteredRobots}/>
        </Scroll>
        </div>
    );

   }
}
}
 
export default App;