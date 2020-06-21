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

function loading() {
    return {
        type: ActionTypes.NEWS_LOADING
    }
}

export function fetchNews() {
    return dispatch => {
        console.log("BEGIN FETCH NEWS");
        dispatch(loading());
        fetch("http://localhost:5000/news")
        .then(res => res.json())
        .then(json => {
            const news = json.data;
            dispatch(newsReceived(news))
        })
        .catch(error => {
            console.log("ERROR: fetching news");
        })
    }
}

export function fetchNewsItem(id) {
    return dispatch =>  {
        console.log(`BEGIN FETCH NEWS ARTICLE id ${id}`);
        dispatch(loading());
        fetch(`http://localhost:5000/news/${id}`)
        .then(res => res.json())
        .then(json => {
            const newsItem = json.data;
            dispatch(newsItemReceived(newsItem));
        })
        .catch( error => {
            console.log("ERROR: fetching news item");
        })
    }
}