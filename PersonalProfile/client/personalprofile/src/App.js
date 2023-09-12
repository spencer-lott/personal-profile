import { useState } from 'react';
import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';

import cx from 'classnames'


function App() {
  const [toggle, setToggle] = useState(false)

  const classes = cx(
    'pusher',
    'bototm',
    {'dimmed' : toggle}
  )

  const toggleMenu = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      {/* <Home /> */}
      <Header onToggleMenu={toggleMenu} />

      <div className='ui attached pushable' style={{height: '100vh'}}>
        <Sidebar toggleMenu={toggle} />
          <div className={classes}>
            <Main />
          </div>
      </div>
</div>
  );
}

export default App;
