import React, { Component } from 'react';
import  theImage from './codingpic.jpg';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <div className= "App__Aside"> 
        <img src={theImage} className="img"></img>
        </div>


      <div className= "App__Form">
      
       <center><div className= "FormTitle">
        <a href="#" className="FormTitle__Link">SIGN IN PAGE</a>
         </div>
         </center>
    

         <center><div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
             <label className="FormField__Label" htmlFor="name">Name</label>
             <input type="text" id="name" className="FormField__Input" placeholder="enter your full name" name="name"/>
             </div></form>
             </div></center>

             <center><div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
             <label className="FormField__Label" htmlFor="age">Age</label>
             <input type="int" id="age" className="FormField__Input"  placeholder="enter your age" name="age"/>
             </div>
             </form>
             </div>
             </center>

             <center><div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
             <label className="FormField__Label" htmlFor="address">address</label>
             <input type="text" id="address" className="FormField__Input" placeholder="enter your address" name="address"/>
             </div>
             </form>
             </div>
             </center>
             
             <center><div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
             <label className="FormField__Label" htmlFor="gender">Gender</label>
             <input type="text" id="gender" className="FormField__Input" placeholder="enter your gender" name="gender"/>
             </div>
             </form>
             </div>
             </center>

             <center><div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
             <label className="FormField__Label" htmlFor="dob">Date of Birth</label>
             <input type="dob" id="dob" className="FormField__Input" placeholder="enter your DOB" name="dob"/>
             </div>
             </form>
             </div>
             </center>

             <div className="FormField">
               <button className="FormField__Button mr-20">Signup</button><a href="#" className="FormField__Link">i'm already member</a>
             </div>
             
             
           </div>
           </div>

           
        );
}
}

export default App;
