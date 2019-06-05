import React from 'react'
import Header from '../Header/Header'
import Main from '../Movies/Main/Main'
import SignUpForm from '../SignUpForm/SignUpForm'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.scss'

class App extends React.Component<any> {
    render() {
        return(
            <div className="App">
                <Header data={"Header data"} />
                <Switch>
                    <Route exact path="/auth/signup" component={SignUpForm}/>
                    <Route exact path="/movies" component={Main}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        )
    }
}

export default App