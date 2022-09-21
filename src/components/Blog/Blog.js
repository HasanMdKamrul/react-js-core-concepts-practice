import React from 'react';

const h2Styles = {
    color:"blue",
    backgroundColor:"lightblue",
    padding: "30px"
}

const Blog = ({title,author}) => {
    return (
        <div >
            <article className='blog'>
                <h1 style={h2Styles}>Title:{title}</h1>
                <small style={{color:'lightblue',fontSize:'40px'}} >Author:{author} </small>
            </article>  
        </div>
    );
};

export default Blog;