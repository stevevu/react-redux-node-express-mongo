import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import newsReducer from '../reducers/newsReducer'

const store = createStore(

    // NOTE: the 'news' key is needed when getting any state that comes from `newsReducer`
    //      (see mapStateToProps in NewsArticle and News)
    combineReducers({
        news: newsReducer
        }),
    applyMiddleware(thunk)
)

export default store;