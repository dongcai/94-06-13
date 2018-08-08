import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RedditFeed from './RedditFeed';

class TopicForm extends Component {
    static defaultProps = {};

    static propTypes = {
        topics: PropTypes.array
    };

    state = {
        value: 'reactjs',
        posts: []
    };

    getRedditFeed() {
        axios.get(`https://www.reddit.com/r/${this.state.value}.json`)
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({
                    ...this.state,
                    posts
                });
            }).catch(error => {
            console.log(error);
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value}, () => this.getRedditFeed());
    }

    componentDidMount() {
        this.getRedditFeed();
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>
                            Pick your favorite topic:
                            <select className="form-control" value={this.state.value} onChange={this.handleChange.bind(this)}>
                                {this.props.topics.map((topic, idx) =>
                                    <option key={idx} value={topic}>{topic}</option>
                                )}
                            </select>
                        </label>
                    </div>
                </form>
                <RedditFeed posts={this.state.posts}/>
            </div>
        );
    }
}

export default TopicForm;
