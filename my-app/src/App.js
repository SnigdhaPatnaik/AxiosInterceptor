import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>
        Axios Interceptor Examples
      </h2>
      {
        posts.slice(0, 5).map((p) => (
          <p key={p.id}>{p.title}</p>
        ))
      }
    </div>
  )
}
export default App;