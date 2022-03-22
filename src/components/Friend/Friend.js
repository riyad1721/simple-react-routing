import React from 'react';

const Friend = (props) => {
    const { name, username, email, address } = props.user;
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={friendStyle}>
            <h1>Name : {name}</h1>
            <h2>User-Name is : {username}</h2>
            <h3>Email : {email}</h3>
            <p>Address is : {address.street}</p>

        </div>
    );
};

export default Friend;