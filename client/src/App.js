import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './stores/store'
import './App.css';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import NewsArticle from './components/containers/NewsArticle';
import NewsSubmit from './components/containers/NewsSubmit';

class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route path="/about/" component={About} />
                    <Route path="/news/:id" component={NewsArticle} />
                    <Route path="/submit/" component={NewsSubmit} />
                </Layout>
            </BrowserRouter>
        </Provider>
        );
    }
}

export default App;
