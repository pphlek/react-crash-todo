(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(t,e,n){t.exports=n(63)},62:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(30),c=n.n(r),l=n(19),i=n(6),s=n(7),d=n(9),u=n(8),p=n(10),m=n(14),h=n(11);var f={background:"#333",color:"#fff",padding:"10px",textAlign:"center"},b={color:"#fff",textDecoration:"none"},g=function(){return a.a.createElement("header",{style:f},a.a.createElement("h1",null,"TodoList"),a.a.createElement(m.b,{style:b,to:"/react-todo"},"Home")," | ",a.a.createElement(m.b,{style:b,to:"/react-todo/about"},"About"))},y=n(1),j=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,e),checked:this.props.completed})," ",n,a.a.createElement("button",{style:v,onClick:this.props.deleteTodo.bind(this,e)},"x")))}}]),e}(o.PureComponent),v={background:"#ff0000",border:"none",borderRadius:"50%",color:"#fff",cursor:"pointer",float:"right",padding:"5px 9px"},E=j,O=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){var n=Object(y.a)({},e);return a.a.createElement(E,Object.assign({deleteTodo:t.props.deleteTodo,key:e.id,toggleComplete:t.props.toggleComplete},n))}))}}]),e}(o.Component),x=n(33),C=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){return n.setState(Object(x.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{name:"title",onChange:this.onChange,placeholder:"Add Todo...",style:{flex:"10",padding:"5px"},type:"text",value:this.state.title}),a.a.createElement("input",{className:"btn",style:{flex:"1"},type:"submit",value:"Submit"}))}}]),e}(o.Component);var k=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app v1.0.0. It is part of a React crash course."))},T=n(15),S=n.n(T),A=(n(62),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.addTodo=function(t){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})}))},n.deleteTodo=function(t){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return n.setState({todos:n.state.todos.filter((function(e){return e.id!==t}))})}))},n.toggleComplete=function(t){n.setState({todos:Object(l.a)(n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e})))})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(g,null),a.a.createElement(h.a,{exact:!0,path:"/react-todo",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{addTodo:t.addTodo}),a.a.createElement(O,{deleteTodo:t.deleteTodo,todos:t.state.todos,toggleComplete:t.toggleComplete}))}}),a.a.createElement(h.a,{path:"/react-todo/about",component:k}))))}}]),e}(o.Component));c.a.render(a.a.createElement(A,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.62216b9c.chunk.js.map