import ActionTypes from '../constants/actionTypes'

const initialState = {
    news: [],
    newsItem: {},
    loading: false
};

const newsReducer = (state = initialState, action) => {
    const updated = Object.assign({}, state);
    switch(action.type) {
        case ActionTypes.NEWS_RECEIVED:
            updated.news = action.news;
            updated.loading = false;
            return updated;
        case ActionTypes.NEWSITEM_RECEIVED:
            updated.newsItem = action.newsItem;
            updated.loading = false;
            return updated;
        case ActionTypes.NEWS_LOADING:
            updated.loading = true;
            return updated;
        default:
            return state;
    }
}

export default newsReducer;