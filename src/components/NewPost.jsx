import React, { useState } from "react";
import Close from "@/icons/Close";

export default function NewPost() {
  const [state, setState] = useState(false);

  const toggleNewPostForm = () => {
    setState((prevState) => !prevState);
  };
  return (
    <div id="new-post" className={state ? "expanded" : "collapsed"}>
      {!state ? (
        <button
          onClick={toggleNewPostForm}
          id="open"
          className={state ? "expanded" : "collapsed"}
        >
          Nuevo Post
        </button>
      ) : (
        <>
          <div id="header" className={state ? "expanded" : "collapsed"}>
            <h2>New Post</h2>
            <button onClick={toggleNewPostForm} id="close">
              <Close />
            </button>
          </div>
          <form>
            <input type="text" placeholder="Title" id="title" />
            <input type="text" placeholder="Write Something" id="description" />
          </form>
        </>
      )}
    </div>
  );
}

/* <div>
<button>Adj</button>
<button>Link</button>
<button>YT</button>
<button>Poll</button>
<button>Emoji</button>
<button>Gif</button>
<button>Cat</button>
<button>Send</button>
</div> */
