import * as React from 'react';
import './style.scss';
import {SmallButton,} from './Components/buttons/smallbutton';
import {Home} from './pages/home';
import {Navbar,} from './Components/Navbar/Navbar';

export default function App() {
  return (
    <div>
      <SmallButton/>
      <Home/>
      <Navbar/>
    </div>
  );
}