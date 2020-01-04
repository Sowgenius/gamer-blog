import React from 'react';
import { BlogPost } from 'services';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';


const Image = styled.image `
  width: 80%;
  height: 300px;
  object-fit:cover;
`;

type BlogDetailProps = {
  post : BlogPost;
};

export const BlogDetail = ( BlogDetailProps ) => {
  const {post} = props;
  const mainTag =  post.tags.length > 0 ? post.tag[0] : '';
  return (
    <article className="post-full post">
      <header className="post-full-header">
        <h1 className="post-full-title"> {post.title}</h1>
        <div className="text-center meta"> {`${post.publishedDate} / ${maintag}`} </div>
      </header>
      <figure className="post-full-image text-center"> 
        <Image src={post.heroImage.imageUrl} alt={post.heroImage.title} /> 
      </figure>
      <section
        style = {{overflowY : inherit, marginBottom: '2em'}} className="post-full-content" >
          <ReactMarkdown source= {post.body}/>
      </section>
    </article>
  );
};