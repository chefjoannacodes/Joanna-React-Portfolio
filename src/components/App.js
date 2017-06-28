import React, { Component } from 'react';
import Header from './header/header';
import About from './about/about';
import Projects from './projects/projects';
// import Image from './images/image';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        {/* <Image /> */}
      </div>
    );
  }
}

export default App;
