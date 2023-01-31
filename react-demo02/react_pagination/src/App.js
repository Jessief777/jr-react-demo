import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line 
  const [currentPosts, setCurrentPosts] = useState([]);
  const [postsPerPage] = useState(10);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log("res", res);
      setPosts(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    //get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPostsArr = posts.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPage(currentPostsArr);
  }, [currentPage, postsPerPage, posts]);

  //2.change page-callback(son to father)
  const updateActivePage=(number)=>setCurrentPage(number)

  return (
    <div className="container">
      <h1 className="title">My Blog</h1>
      <Posts currentPosts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        //1.
        //setCurrentPage={setCurrentPage}
        updateActivePage={updateActivePage}
      />
    </div>
  );
};

export default App;
