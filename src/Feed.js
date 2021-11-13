import "./styles/Feed.css";
import React, { useState, useEffect } from "react";
import InputOption from "./InputOption";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import PhotoIcon from "@material-ui/icons/Photo";
import MovieIcon from "@material-ui/icons/Movie";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DescriptionIcon from "@material-ui/icons/Description";
import Post from "./Post.js";
import { db } from "./firebase.js";
import firebase from "firebase";
import "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";

function Feed() {
  const [inputPost, setInputPost] = useState("");
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);

  useEffect(() => {
    const unsub = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

    return unsub;
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: inputPost,
      photoUrl: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInputPost("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateTwoToneIcon />
          <form>
            <input
              type="text"
              value={inputPost}
              onChange={(e) => setInputPost(e.target.value)}
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption title="Photo" Icon={PhotoIcon} color="#adcfe6" />
          <InputOption title="Video" Icon={MovieIcon} color="#9ACD32" />
          <InputOption title="Event" Icon={CalendarTodayIcon} color="orange" />
          <InputOption
            title="Write Article"
            Icon={DescriptionIcon}
            color="#FF6347"
          />
        </div>
      </div>
      <div className="feed__posts">
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            id={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
