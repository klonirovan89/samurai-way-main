import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppType} from "./redux/State";


const App: React.FC<AppType> = ({appState}) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/Dialogs'
                           render={() => <Dialogs
                               dialogs={appState.dialogs}
                               messages={appState.messages}/>}/>
                    <Route exact path='/Profile'
                           render={() => <Profile
                               posts={appState.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
