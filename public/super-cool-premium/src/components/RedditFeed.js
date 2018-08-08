import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RedditFeed extends Component {
    static defaultProps = {};

    static propTypes = {
        post: PropTypes.array
    };

    render() {
        return (
            <div>
                <ul>
                    {this.props.posts.map(post =>
                        <li key={post.id}><a href={post.url} target="_blank">{post.title}</a></li>
                    )}
                </ul>
            </div>
        );
    }
}

export default RedditFeed;
