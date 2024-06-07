import React from "react";

export default function NewPost() {
  return (
    <form id="new-post">
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Write Something" />
      <div>
        <button>Adj</button>
        <button>Link</button>
        <button>YT</button>
        <button>Poll</button>
        <button>Emoji</button>
        <button>Gif</button>
        <button>Cat</button>
        <button>Send</button>
      </div>
    </form>
  );
}
