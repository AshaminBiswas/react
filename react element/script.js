const createElementReact = React.createElement(
  "div",
  { className: "subHeading", id: "subtitle" },
  [
    React.createElement("section", { className: "section", key: 1 }, [
      React.createElement(
        "p",
        { className: "heading", key: 1 },
        "this is react"
      ),
      React.createElement(
        "img",
        {
          key: 2,
          style:{ width:300},
          src: "https://avatars.githubusercontent.com/u/152035553?v=4"
        },
      ),
    ]),
  ],

  [
    React.createElement("section", { className: "section", key: 2 }, [
      React.createElement({  key: 1 },[
        React.createElement("label", {htmlfor:"username", key:1}, "name"),
        React.createElement("input", {type:"text", id:"username", key:2})
      ]),
      
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(createElementReact);

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: "h2",
//   ref: null,
//   props: {

//     children:[
//         {
//             $$typeof: Symbol.for("react.element"),
//             type: "b",
//             ref: null,
//             props:{
//                 children:[
//                     {
//                         $$typeof: Symbol.for("react.element"),
//                         type: "button",
//                         ref: null,
//                         props:{
//                             children: "click",
//                         }
//                     },
//                 ]
//             }
//         },
//         {
//             $$typeof: Symbol.for("react.element"),
//             type: "button",
//             ref: null,
//             props:{
//                 children: "hello react",
//             }
//         },
//         {
//             $$typeof: Symbol.for("react.element"),
//             type: "div",
//             ref: null,
//             props:{
//                 children: "hello react",
//             }
//         },
//     ]

//   },
// });
