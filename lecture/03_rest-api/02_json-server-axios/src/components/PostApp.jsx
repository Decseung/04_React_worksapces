import { useState, useEffect } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import postAPI from "../api/postAPI";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //선택된 게시글 데이터 관리
  const [selectedPost, setSelectedPost] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });
  useEffect(() => {
    // 게시글 목록(자원, Resource) 데이터 조회(행위, GET) 요청
    setLoading(true);
    const fetchPost = async () => {
      try {
        const posts = await postAPI.getAllPosts();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  useEffect(() => {
    console.log("선택된 게시글:", selectedPost);
    if (selectedPost) {
      setFormData({
        title: selectedPost.title,
        content: selectedPost.content,
        author: selectedPost.author,
      });
    } else {
      setFormData({ title: "", content: "", author: "" });
    }
  }, [selectedPost]);

  // 폼에 입력값 change 발생시 실행될 이벤트 핸들러
  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // 폼에서 등록 요청시 실행될 이벤트 핸들러
  const handleRegistSubmit = async (e) => {
    e.preventDefault();
    // 게시글(자원), 데이터 생성(행위, Post) 요청
    setLoading(true);
    try {
      await postAPI.addPost(formData);
      const data = await postAPI.getAllPosts();
      setPosts(data);
      setFormData({
        title: "",
        content: "",
        author: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // 폼에서 수정 요청시 실행할 이벤트 핸들러
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    // 현재 선택된 게시글 데이터(자원) 수정(PUT) 요청
    setLoading(true);
    try {
      await postAPI.updatePost(formData, selectedPost.id);
      const newDatas = await postAPI.getAllPosts();

      setPosts(newDatas);
      setSelectedPost(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>대기중</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      {/* 게시글 목록 */}
      <PostList
        posts={posts}
        setSelectedPost={setSelectedPost}
        setPosts={setPosts}
      />

      <hr />
      {/* 게시글 등록 폼 */}
      {!selectedPost ? (
        <PostForm
          formData={formData}
          onChange={handleFormDataChange}
          onSubmit={handleRegistSubmit}
        />
      ) : (
        <PostForm
          formData={formData}
          onChange={handleFormDataChange}
          onSubmit={handleUpdateSubmit}
        />
      )}
    </>
  );
}

export default App;
