import React from 'react';
import './css/Blog.css'


const BlogPage = () => {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const postStyle = {
    marginBottom: '30px',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const contentStyle = {
    fontSize: '16px',
  };

  // Sample blog post data (you can fetch this from an API or database)
  const blogPosts = [
    {
      id: 1,
      title: 'Sample Blog Post 1',
      content: 'This is the content of the first blog post.',
    },
    {
      id: 2,
      title: 'Sample Blog Post 2',
      content: 'This is the content of the second blog post.',
    },
    {
      id: 3,
      title: 'Sample Blog Post 3',
      content: 'This is the content of the third blog post.',
    },
  ];

  return (
    <div className='pageStyle'>
      <h1 className='headingStyle'>Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className='postStyle'>
          <h2 className={titleStyle}>{post.title}</h2>
          <p className={contentStyle}>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
