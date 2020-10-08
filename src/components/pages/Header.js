import React from 'react';


class Header extends React.Component {
  

  render(){
    return(
      <div className = "Header">
  <ul>
  <li><a href="#News">News</a></li>
  <li><a href="#Opinions">Opinions</a></li>
  <li><a href="#Solutions">Solutions</a></li>
</ul>
      </div>
    )
  }
}

export default Header;

