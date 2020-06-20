import ActionTypes from '../constants/actionTypes';

function newsReceived(news) {
    return {
        type: ActionTypes.NEWS_RECEIVED,
        news: news
    }
}

function newsItemReceived(newsItem) {
    return {
        type: ActionTypes.NEWSITEM_RECEIVED,
        newsItem: newsItem
    }
}

export function fetchNews(fakeNews) {
    return dispatch => dispatch(newsReceived(fakeNews));
}

export function fetchNewsItem(fakeNewsItem) {
    return dispatch =>  dispatch(newsItemReceived(fakeNewsItem))
}