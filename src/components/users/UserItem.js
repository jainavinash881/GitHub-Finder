import React from 'react'
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItems = (props) => {
    const { login, avatar_url } = props.user;
    return (
        <div className="card text-center">
            <img src={avatar_url}
                alt="avatar_missing"
                className="round-img"
                style={{ width: "60px" }}

            />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
    )

}
UserItems.propTypes = {
    user: propTypes.object.isRequired,
}
export default UserItems
