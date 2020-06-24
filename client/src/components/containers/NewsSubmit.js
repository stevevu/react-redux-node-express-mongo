import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {submitNewsStory} from '../../actions/actions';

class NewsSubmit extends Component {
    constructor() {
        super();
        this.state = { submission: {}};
    }

    submitSubmission(event) {
        this.props.dispatch(submitNewsStory(this.state.submission));
        this.props.history.push("/");
    }

    updateSubmission(event) {
        const updated = Object.assign({}, this.state.submission);
        updated[event.target.id] = event.target.value;
        this.setState({submission: updated});
    }

    render() {
        return (
            <div>
                Title: <input onChange={this.updateSubmission.bind(this)} id="title" type="text" placeholder="Title" /><br />
                Teaser: <input onChange={this.updateSubmission.bind(this)} id="teaser" type="text" placeholder="Teaser" /><br />
                Body: <textarea onChange={this.updateSubmission.bind(this)} id="body"></textarea><br />
                <button onClick={this.submitSubmission.bind(this)}>Save</button>
            </div>
        )
    }
}

const mapStateToProps = state => { return {}; };

export default withRouter(connect(mapStateToProps)(NewsSubmit));