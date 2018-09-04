import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '@/components/html/Header';
import Footer from '@/components/html/Footer';
import {paths} from '@/constants/config';

import Home from '@/containers/pages/Home';

import SkiCams from '@/containers/pages/SkiCams';

import Contact from '@/containers/pages/Contact';


class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <main className="main">
                    <div className="container">
                        <Switch>
                            <Route exact path={paths.SKICAMS} component={SkiCams}/>
                            <Route exact path={paths.CONTACT} component={Contact}/>
                            <Route exact path={paths.HOME} component={Home}/>
                        </Switch>
                    </div>
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
