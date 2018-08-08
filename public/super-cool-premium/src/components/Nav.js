import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Nav extends Component {
    // static defaultProps = {};
    //
    // static propTypes = {};
    //
    // state = {};

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="/">94-06-13</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" style={{marginTop: "5px"}}>
                            <a className="github-button" href="https://github.com/dongcai/94-06-13" data-size="large"
                               aria-label="Star dongcai/94-06-13 on GitHub">Star</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
