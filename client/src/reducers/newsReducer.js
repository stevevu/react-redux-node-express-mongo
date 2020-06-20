import ActionTypes from '../constants/actionTypes'

const initialState = {
    news: [],
    newsItem: {}
};

const newsReducer = (state = initialState, action) => {
    const updated = Object.assign({}, state);
    switch(action.type) {
        case ActionTypes.NEWS_RECEIVED:
            updated.news = action.news;
            return updated;
        case ActionTypes.NEWSITEM_RECEIVED:
            updated.newsItem = action.newsItem
            return updated;
        default:
            return state;
    }
}

export default newsReducer;