import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { FaBeer, FaGithub, FaLinkedinIn } from "react-icons/fa";
class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    
  }

 

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center',columnGap:'20px'}}>
                <a href='https://www.linkedin.com/in/sathiya-arthanari/' style={{color:'black'}}>
            < FaLinkedinIn size='2em' />
            </a>
         
              <button type="button" className="btn btn-secondary"> <a href='CV/SATHIYA ARTHANARI Resume.pdf' style={{color:'white',textDecoration:'none',fontSize:'14px'}}>Download CV</a></button>
              < a href='https://github.com/Sathiya-A' style={{color:'black'}}>              
              <FaGithub size='2em' />
              </a>

              </div>
             
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
