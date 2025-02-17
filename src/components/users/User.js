import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            followers,
            following,
            public_repos,
        } = this.props.user;

        const { loading } = this.props;

        if (loading) return <Spinner />

        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back</Link>

                <div className="card grid-2">
                    <div className="all-center" >
                        <img
                            src={avatar_url}
                            className='round-img'
                            style={{ width: '180px' }}
                            alt=''
                        />
                        <h1>{name}</h1>
                        <p>Location:{location}</p>
                    </div>
                    <div>
                        <Fragment>
                            <h1>Bio</h1>
                            <p>{bio}</p>
                            <p>Repositories: {public_repos}</p>
                            <p>Followers:{followers}</p>
                            <p>Following:{following}</p>
                            <p>Blog:<a href='blog'>{blog}</a></p>
                        </Fragment>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default User
