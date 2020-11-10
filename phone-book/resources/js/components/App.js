import React,{ Component } from 'react' ;
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Create from './Create';
import Edit from './Edit';


axios.defaults.baseURL = 'http://127.0.0.1:8000';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <nav style={{marginLeft: '20px'}}>
                        |
                        <Link exact="true" to="/home" style={{margin: '5px 10px'}}> Home</Link> 
                        |
                        <Link exact="true" to="/create" style={{margin: '5px 10px'}}> Create</Link> 
                        |
                    </nav>
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path="/create" exact component={Create} />
                        <Route path="/edit/:id" exact component={Edit} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('content_placeholder'));

