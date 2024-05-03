import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const newPosts = response.data;
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setPage((prevPage) => prevPage + 1);
        setHasMore(newPosts.length > 0);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Post List</h1>
      <InfiniteScroll
        dataLength={posts.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more posts</p>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg mt-4 bg-secondary" >
              <img className="w-full" style={{ height: '200px', borderRadius:'13px'}} src={`https://source.unsplash.com/random/800x600?sig=${post.id}`} alt="Post" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{post.title}</div>
                <p className="text-gray-700 text-base text-white ">{post.body}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  @{post.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default PostList;
