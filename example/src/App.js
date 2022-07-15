import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import Lifecycle from "./components/Lifecycle";

function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <Header />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <p> Edit {state} </p>
      <button onClick={() => setState(state + 1)}>Click</button>
      {/* thuat toan difing  */}
      {/* <Props /> */}
      <div>
        {/* childern component */}
        <Feature />
        <Feature />
        <Feature />

        <YoutubeItem
          image="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          avatar="https://media.istockphoto.com/photos/social-networking-group-of-people-picture-id1029144458?b=1&k=20&m=1029144458&s=170667a&w=0&h=G48LvPXxsz9t6yEQS-c7wglWy8phg8_IvIgLAT0OAPk="
          title="Learning Reactjs"
          author="Lyy"
        ></YoutubeItem>

        {/* <div class="feature">
          <img
            src="https://images.unsplash.com/photo-1657545173746-ac305e81a5ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="feature__img"
            className="feature__img"
          />
          <h3 class="feature__title"></h3>
          <p class="feature__desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            necessitatibus, autem corporis ea impedit eos neque beatae officiis
            doloribus cupiditate culpa saepe, repudiandae assumenda? Non
            adipisci eius vero placeat ex.
          </p>
        </div> */}
      </div>
      <Footer />
    </div>
  );

  // example component function

  function Feature() {
    return (
      <div className="feature">
        <img
          src="https://images.unsplash.com/photo-1657545173746-ac305e81a5ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="feature__img"
          className="feature__img"
        />
        <h3 className="feature__title">AAAA</h3>
        <p className="feature__desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          necessitatibus, autem corporis ea impedit eos neque beatae officiis
          doloribus cupiditate culpa saepe, repudiandae assumenda? Non adipisci
          eius vero placeat ex.
        </p>
      </div>
    );
  }
  // Props -> Properties:
  function YoutubeItem(props) {
    console.log(props);
    return (
      <div className="youtube__item">
        <div className="youtube__img" style={{ height:"250px"}}>
          <img src={props.image} alt="youtube__img" style={{ display:"block", maxWidth:"100%", width:"100%", height:"100%", objectFit:"cover"}}/>
        </div>
        <div className=" youtube__footer">
          <img
            src={props.avatar}
            alt="youtube__avatar"
            className="youtube__avatar"
            style={{ height:"250px"}}
          />
          <div className="youtube__info">
            <h3 className="youtube__title">
              {props.title || "this is example or title"}
            </h3>
            <h4 className="youtube__author">{props.author || "this is example or author name"}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
