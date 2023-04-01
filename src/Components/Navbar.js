import { Component } from "react";
import { Menuitems } from "./Menuitems";
import Search from "./Search";
import Table from "./Table";
import "./NavStyle.css"
import App from "../App";
class Navbar extends Component {
   state ={clicked: false};
   handleClick =()=>{
    this.setState ({clicked: ! this.state.clicked})
  }
render (){
return(
  <>
<nav className="Navitems">
  <div className="menu-icon" onClick={this.handleClick}> <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>   </div>
 <ul className="nav-menu">
  {Menuitems.map((items, index)=> {
return(
    <li key= {index}> <a href={items.url} className ={items.cName}>{items.title}</a></li> );
    })}
</ul>
<Search />
</nav> 
<Table />
</>
);
}
}

export default Navbar;


