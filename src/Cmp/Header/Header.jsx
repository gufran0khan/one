import { useState } from "react";
import "./Header.css"
import {
    Navbar,
    Nav,
    Container,
    NavDropdown
} from "react-bootstrap";
import {Link} from "react-router-dom";
import Menu from "../../json-api/Menu";
import Brand from "../../json-api/Brand.json";
const NormlMenu = (data)=>{
  const textColor={
    color:data.color

  }
  const design = (
    <>
    <Link style={textColor} to= {data.Menuinfo.url} className={data.Menuinfo.button ? "nav-link btn btn-primary text-white px-3" :"nav-link"}>{data.Menuinfo.label}</Link>

    </>
  );
  return design;
}
const DropdownMenu = (data)=>{
  const design = (
    <>
      <NavDropdown title={data.Menuinfo.label} id="dropdown-container">
      <i className="fa fa-caret-up arrow-up"></i>
      {
        data.Menuinfo.dropdownMenu.map((item)=>{
          return <NormlMenu  color="black" Menuinfo={item} key={item.id}/>
        })
      }
              
            </NavDropdown>
    </>
  );
  return design;
}

const Header =()=>{
  const [sticky,changeSticky] = useState("py-3 border-bottom fixed-top main-nav");
  window.onscroll = ()=>{
    let tmp = "";
    let top = window.scrollY;
    if (top>100){
      tmp = "py-3 border-bottom fixed-top main-nav sticked";
    }
    else{
      tmp = "py-3 border-bottom fixed-top main-nav"
    }
    return changeSticky(tmp)
  }
    const design = (
        <>
           
            <Navbar expand="lg" className= {sticky} >
      <Container>
      <Link className="navbar-brand" to="/">{Brand.name}  </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end w-100">
          {
            Menu.map((data)=>{
              if (data.dropdown){
               return <DropdownMenu Menuinfo={data} key={data.id}/>
              }
              return <NormlMenu color="white" Menuinfo={data} key={data.id}/>

            })
          }
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
    return design;
}
export default Header;