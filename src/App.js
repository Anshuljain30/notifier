import "./App.css";
import React from "react";
import Title from "./components/Title";
import AddNotification from "./components/AddNotification";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "./firebase";
import Noti from "./components/Noti";

function App() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const xxx = collection(db, "notification");
      const q = query(
        xxx,
        where("date", ">", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)),
        where("date", "<=", new Date(Date.now() + 24 * 60 * 60 * 1000))
      );
      const querySnapshot = await getDocs(q);
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setPosts(todosArray);
    }
    fetchData();
  }, []);
  console.log(posts.length);
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddNotification />
      </div>
      {posts.length > 0 && (
        <div className="todo_container">
          {posts.map((todo) => (
            <Noti key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
