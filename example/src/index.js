import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./ThemeContext";
import AppUseContext from "./hooks-example/AppUseContext";

// Phương thức chạy 1 lần duy nhất
// và thường được implement 1 lần
// Nhiệm vụ là render React Element lên DOM thật

// ReactDOM.render control các container truyền vào
// Nếu có bất kì sự thay đổi nào trong container
// nó sẽ dùng thuật toán difing so sánh
// và cập nhật những element cần thiết vào DOM

// ReactDOM.render(
//   <div className="init">Thao Lyy</div>,
//   document.getElementById("root")
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <div className="init">Thao Lyy</div>,
  <React.StrictMode>
    <ThemeProvider>
      <App />
      {/* <AppUseContext /> */}
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
