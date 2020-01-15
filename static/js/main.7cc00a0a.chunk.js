(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"key":1,"img":"images/1.jpeg","clicked":false},{"key":2,"img":"images/2.jpeg","clicked":false},{"key":3,"img":"images/3.jpeg","clicked":false},{"key":4,"img":"images/4.jpeg","clicked":false},{"key":5,"img":"images/5.jpeg","clicked":false},{"key":6,"img":"images/6.jpeg","clicked":false},{"key":7,"img":"images/7.jpeg","clicked":false},{"key":8,"img":"images/8.jpeg","clicked":false},{"key":9,"img":"images/9.jpeg","clicked":false},{"key":10,"img":"images/10.jpeg","clicked":false},{"key":11,"img":"images/11.jpeg","clicked":false},{"key":12,"img":"images/12.jpeg","clicked":false},{"key":13,"img":"images/13.jpeg","clicked":false},{"key":14,"img":"images/14.jpeg","clicked":false},{"key":15,"img":"images/15.jpeg","clicked":false}]')},19:function(e,t,a){e.exports=a(47)},24:function(e,t,a){},25:function(e,t){window.onscroll=function(){!function(){var e=document.getElementById("header");document.body.scrollTop>50||document.documentElement.scrollTop>50?(e.style.fontSize="20px",e.style.backgroundColor="#94baecdd",e.style.boxShadow="2px 5px 8px"):(e.style.fontSize="30px",e.style.backgroundColor="#94baecff",e.style.boxShadow="2px 1px 8px")}()}},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(16),r=a.n(s),i=a(2),l=a(3),o=a(5),u=a(4),m=a(6),f=(a(24),a(25),a(26),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateScoreMessage",value:function(){this.guessMessage("correct"),this.props.message="correct"}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{key:"2",className:"nav-item message ".concat(this.props.message)},this.props.message?"correct"===this.props.message?"That's right!":"You've already clicked that one":"Click an image below"),c.a.createElement("li",{key:"3",className:"nav-item"},"Your score: ",this.props.score))}}]),t}(n.Component)),g=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-dark d-block sticky-top",id:"header"},c.a.createElement("ul",{className:"navbar-nav d-flex justify-content-between flex-row"},c.a.createElement("li",{key:"1",className:"nav-item"},"Clickyman"),c.a.createElement(f,{score:this.props.score,message:this.props.message}))))}}]),t}(n.Component),p=(a(27),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid d-flex"},c.a.createElement("div",{className:"container flex-column"},c.a.createElement("h1",{className:"display-3 align-items-center"},"Make a Click"),c.a.createElement("h2",{className:"display-5"},"Click on the images below and watch your score go up. ",c.a.createElement("br",null)," But watch out! ",c.a.createElement("br",null),"If you click the same image twice the game will be over and your score will be reset.")))}}]),t}(n.Component)),k=(a(28),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={clicked:!1},a.click=function(){a.state.clicked?(a.props.resetScore(),a.props.setMessage("incorrect")):(a.setState({clicked:!0}),a.props.increaseScore(),a.props.setMessage("correct")),a.props.shuffleClickables()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("button",{key:this.props.id,className:"btn col",onClick:this.click,"data-clicked":this.state.clicked},c.a.createElement("img",{src:this.props.img,alt:this.props.alt}))}}]),t}(n.Component)),h=a(17),d=a.n(h),b=function(){return d.a.get("https://api.unsplash.com/photos/random?count=15&orientation=squarish&client_id=b457260525de27ea96e1a5e2e4f91b8ef35e5adc6bb8a6118c7d224657cbbf8d")},y=a(18);function v(e){return c.a.createElement("div",{className:"w-100"})}var j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={clickables:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(t){return{clickables:e.makeClickables(y)}}))}},{key:"makeClickables",value:function(e){var t=this;return e.map((function(e,a){return c.a.createElement(k,{key:e.key,img:e.img,id:e.key,clicked:e.clicked,increaseScore:t.props.increaseScore,resetScore:t.props.resetScore,setMessage:t.props.setMessage,registerClick:function(e){return t.registerClick(e)},shuffleClickables:function(){return t.shuffleClickables()}})}))}},{key:"getPictures",value:function(){var e=this;b().then((function(e){return e.data})).then((function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];t.push({key:n.id,img:n.urls.raw,clicked:!1})}return t})).then((function(t){e.setState({pictures:t})})).then((function(){e.setState({clickables:e.makeClickables()})}))}},{key:"shuffle",value:function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}},{key:"shuffleClickables",value:function(){var e=this.shuffle(this.state.clickables);this.setState({clickables:e})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.state.clickables.map((function(e,t){return(t+1)%5===0?c.a.createElement(c.a.Fragment,null,e,c.a.createElement(v,null)):e}))))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,message:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"increaseScore",value:function(){this.setState((function(e){return{score:e.score+1}}))}},{key:"resetScore",value:function(){this.setState((function(e){return{score:0}}))}},{key:"setMessage",value:function(e){this.setState((function(t){return{message:e}}))}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{score:this.state.score,message:this.state.message}),c.a.createElement(p,null),c.a.createElement(j,{increaseScore:function(){return e.increaseScore()},resetScore:function(){return e.resetScore()},setMessage:function(t){return e.setMessage(t)}}))}}]),t}(n.Component);var O=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.7cc00a0a.chunk.js.map