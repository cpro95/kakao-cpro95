import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Talk from './Routes/Talk';
import TalkWithImage from './Routes/TalkWithImage';
// import About from './Routes/About';

const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Talk} />
            <Route path='/talkwithimage' component={TalkWithImage} />
            {/* <Route path='/about' component={About} /> */}
        </Switch>

    </div>
)

export default Main;