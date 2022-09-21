import React from 'react';

const postStyles = {
    backgroundColor: 'skyblue',
    margin:"20px",
    padding:"10px",
    border: "2px solid gray"
}

const Post = ({post:{title,body}}) => {
    return (
        <div style={postStyles}>
            <h3>Title:{title}</h3>
            <small>{body}</small>
        </div>
    );
};

export default Post;