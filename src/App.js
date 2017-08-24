import React, { Component } from 'react';
import {$,jQuery} from 'jquery';
import Landing from './Landing';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PictureFeed from './PictureFeed';
import VideoFeed from './VideoFeed';

class App extends Component {
    render() {
        return(
        <Router>
            <div>
                <Landing/>
                <Route path="/pictures" component={PictureFeed}/>
                <Route path="/videos" component={VideoFeed}/>
            </div>
        </Router>
        )
        ;
    }

}

export default App;
