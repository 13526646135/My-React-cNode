import React, { Component } from 'react';


import  RouterIndex  from './router/index';
import MainHeader from './view/main-header';
import MainFooter from './view/main-footer';
import './view/index.css';
class App extends Component {
  render() {
    return (
        <div className='pageWrap'>
            <MainHeader></MainHeader>
            <div className='main'>
                <RouterIndex></RouterIndex>
            </div>
            <MainFooter></MainFooter>
        </div>
    );
  }
}

export default App;
