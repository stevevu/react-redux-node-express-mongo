import React, {Component} from 'react';
import News from '../containers/News';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to MadOwlNews</h2>
                <div><News /></div>
            </div>
        )
    }

}

export default Home;