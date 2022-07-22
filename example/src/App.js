import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
// import { createContext, useContext, useEffect, useState } from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import { Test } from "./components/Test";
import Lists from "./Lists";
import Calculator from "./Calculator";
import TodoList from "./components/TodoList";
import ColorBox from "./components/ColorBox";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import PostFilterForm from "./components/PostFiltersForm";
import FocusInput from "./hooks-example/FocusInput";
// import Content from "./hooks-example/Content";

// import { ThemeContext } from "./hooks-example/ThemeContext";

// const ThemeContext = createContext();
// console.log(ThemeContext);

function App() {
  const [state, setState] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love AA Frontend!! 😍😍" },
    { id: 2, title: "We love AA Frontend!! 😍🥰" },
    { id: 3, title: "They love AA Frontend!! 😍🚀" },
  ]);

  /**useEffect */
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      // có thể lỗi xảy ra nên đặt vào try catch
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=106_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log("Failed to fetch post list", error.message);
      }
    }

    console.log("POST list effect");
    fetchPostList();
  }, []);

  useEffect(() => {
    console.log("TODO list effect");
  }); /**[]: là chạy đúng 1 lần :giống componentDidMount*/
  /**useEffect */

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id == todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  /**todoForm */
  function handleTodoFormSubmit(formValues) {
    console.log("Form submit: ", formValues);
    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1 /**ID TAM THỜI */,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  /**todoForm */

  function handelFiltersChange(newFilters) {
    console.log("New Filters", newFilters);
  }

  // // ==========UseContent===========
  // const [theme, setTheme] = useState("dark");

  // const toggleTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };
  // // ==========UseContent===========
  // const context = useContext(ThemeContext);

  // ==========useRef===========
  const ref = useRef(null);
  console.log({ref});
  useEffect(() => {
    ref.current.focus();
  },[]);
  // const countRef = useRef(0); /**useRef: dung count số lần component bị render lại => cải thiện proformance, Stale Clousure*/
  // // const obj = {
  // //   current: 0,
  // // };

  // const [count, setCount] = useState(0);
  // /**
  //  * {
  //  * currrent: 0
  //  * }
  //  *
  //  * countRef ...///...obj
  //  */

  // const handleClick = () => {
  //   // setCount(count + 1);
  //   countRef.current = countRef.current + 1;
  //   // obj.current = obj.current + 1;
  // };
  // // console.log(count, countRef);

  // // 
  // useEffect(() => {
  //   setInterval(() => {
  //     countRef.current = countRef.current + 1;
  //     console.log({countRef:countRef.current});
  //   },1000)
  // },[])
const inputRef = useRef()
const outputRef = useRef()

const handleSubmit = (e) =>{
  e.preventDefault()
  // console.log(inputRef.current.value);
  // inputRef.current.value = 'Good bye!!'
  inputRef.current.style.color = 'red'

  outputRef.current.innerText = inputRef.current.value
}

  // ==========useRef===========
  return (
    <div className="App">
      <Header />
      <h1>React hook - UseRef</h1>
      <input type='text' ref={ref}/>
      <button >CLICK BUTTON</button>
      {/* <button onclick={handleClick}>CLICK BUTTON</button> */}
      <FocusInput />
      <br />
      <h1>UseRef</h1>
      <form onSubmit={handleSubmit}>
        <label>UseName:</label>
        <input type='text' id='username' name="username" ref={inputRef}/>
        <button>Submit</button>
      </form>
      <p ref={outputRef}> This is a text</p>

      <hr />
      <ColorBox />
      <h1>React hook - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      {/* conditional rendering react js */}

      <h1>React hook - PostList</h1>
      <PostFilterForm onSubmit={handelFiltersChange} />

      <PostList posts={postList} />

      <button onclick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled && <Test />}
      {isToggled ? <Test /> : <p>The value is false!</p>}
      <Lists />
      <Calculator />
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
        {/* <Notification msg="OK" />
        <Alert msg="OK" /> */}

        {/* <div style={{ padding: 20 }}>
            <button onClick={context.toggleTheme}>Toggle Theme</button>
            <Content />
          </div> */}
      </div>
      <Footer />
    </div>
  );

  // ReactJs Conditional Render
  // const Notification = (props) => {
  //   if (props.msg == "OK") {
  //     return <div>OK</div>;
  //   }
  //   return <div>Fail</div>;
  // };

  // const Alert = (props) => (props.msg == "OK" ? <p>OK</p> : <p>Fail</p>);

  // example component function
  function Feature() {
    // const { id, ...other } = props;

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
        <div className="youtube__img" style={{ height: "250px" }}>
          <img
            src={props.image}
            alt="youtube__img"
            style={{
              display: "block",
              maxWidth: "100%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className=" youtube__footer">
          <img
            src={props.avatar}
            alt="youtube__avatar"
            className="youtube__avatar"
            style={{ height: "250px" }}
          />
          <div className="youtube__info">
            <h3 className="youtube__title">
              {props.title || "this is example or title"}
            </h3>
            <h4 className="youtube__author">
              {props.author || "this is example or author name"}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
