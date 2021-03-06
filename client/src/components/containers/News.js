import React, {Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';
import {connect} from 'react-redux';
import {fetchNews} from '../../actions/actions.js';

class News extends Component {

    componentDidMount() {
        // const fakeNews = [{
        //     id: '1',
        //     title: 'Mad owl chases car',
        //     teaser: 'Mad owl seen tormenting drivers in Morecambe'
        // }, {
        //     id: '2',
        //     title: 'Owl stowaway',
        //     teaser: 'Despicable owl impersonates passenger to board flight to Luton'
        // }];
        //
        // this.props.dispatch(fetchNews(fakeNews));
        
        this.props.dispatch(fetchNews());
    }


    render() {
        return (
            <div>
                <div>News Items</div>
                {this.props.loading ? 
                <div>Loading ...</div> :
                <ul>
                    {this.props.news.length ?
                        this.props.news.map( newsItem => (
                            <li key={newsItem._id}><NewsItemListing data={newsItem} /></li>
                        ))
                    :
                    <div>Sorry, no news</div>
                    }
                </ul>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news.news,
        loading: state.news.loading
    }
}

export default connect(mapStateToProps)(News);