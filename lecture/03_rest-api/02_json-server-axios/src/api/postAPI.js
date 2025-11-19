import axios from "axios";

/*
  ## Axios ##
  1. 브라우저와 Node.js 에서 사용할 수 있는 HTTP 클라이언트 라이브러리
  2. Promise 기반 : async/await와 함께 사용 가능
  3. 자동 JSON 변환 : 요청/응답 -> 알아서 자동으로 JSON 변환
  4. 인터셉터 : 요청/응답을 가로채서 공통 로직 처리 가능
  5. 에러 처리 : HTTP 에러 상태 코드를 자동으로 처리

  ## Fetch API와의 차이점 ##
  - Fetch : 브라우저 내장 API (설치 필요 X), .json() 메소드로 수동 변환 필요, 인터셉터 기능 제공 x(fetch Wrapper로 대채)
  - Axios : 별도 설치 필요 o, 자동 JSON 변환, 더 간편한 문법
*/

/*
  ## Axios 인스턴스 생성 - axios.create() ##

  설정옵션
  - baseUrl : 모든 요청의 기본 URL
  - headers : 모든 요청에 포함될 기본 헤더
  - timeout : 요청 타임아웃 시간 (밀리초)
*/

const client = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});

/*
  client.get(엔드포인트) - GET 요청 보내기

  엔드포인트 앞에 baseURL이 자동으로 붙음
*/

const postAPI = {
  // 모든 게시글 조회 (GET)
  // GET => client.get(요청할 엔드 포인트)

  getAllPosts: async () => {
    const { data } = await client.get("/posts");
    return data;
  },

  getPostById: async (id) => {
    const { data } = await client.get(`/posts/${id}`);
    return data;
  },

  // 게시글 작성
  // client.post(url, data)
  addPost: async (postData) => {
    const { data } = await client.post("/posts", postData);
    return data;
  },

  updatePost: async (postData, id) => {
    const { data } = await client.put(`/posts/${id}`, postData);
    return data;
  },

  deletePost: async (id) => {
    await client.delete(`/posts/${id}`);
  },
};

/*
const BASE_URL = "http://localhost:3000";

const postAPI = {
  getAllPosts: async () => {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    return data;
  },

  getPostById: async (id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const data = await response.json();
    return data;
  },

  addPost: async (postData) => {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    const data = response.json();
    return data;
  },

  updatePost: async (postData, id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    const data = response.json();
    return data;
  },

  deletePost: async (id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });
    const data = response.json();
    return data;
  },
};

*/
export default postAPI;
