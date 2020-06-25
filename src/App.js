import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Aux from './hoc/Aux';
import Routes from './components/Routes/Routes'
import Footer from './components/Footer/Footer'

class App extends React.Component {
  state = {
    navButton: true,
  }
  render() {
    const openNav = () => {

      if(this.state.navButton === true){
      document.getElementById("mySidenav").style.width = "100%";
      document.querySelector(".container").classList.add("change");

      this.setState({
        navButton:false
      })
      } else {
      document.getElementById("mySidenav").style.width = "0";
      document.querySelector(".container").classList.remove("change");

      this.setState({
        navButton:true
      })
    }
  }
    return (
      <Aux>
        <Navbar
          openNav = {openNav}
        />
        <Routes/>
        <Footer/>
      </Aux>
    )
  }

}

export default App;