import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppType} from "./redux/State";


const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/Dialogs' render={() => <Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/>}/>
                    <Route exact path='/Profile' render={() => <Profile posts={props.state.posts} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
