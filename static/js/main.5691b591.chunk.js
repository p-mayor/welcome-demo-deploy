(this["webpackJsonpwelcome-demo"]=this["webpackJsonpwelcome-demo"]||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),m=a.n(o),c=(a(26),a(1));a(27);var l=function(e){return r.a.createElement("div",{className:"Welcome"},"Welcome, ",e.name)},i=a(20),s=a(8),u=a(9),h=a(11),f=a(10),d=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=Object(i.a)({},n.state.formData);t[e.target.name]=e.target.value,n.setState({formData:t})},n.handleSubmit=function(e){e.preventDefault(),n.setState({submitted:!0})},n.resetForm=function(e){n.setState({submitted:!1,formData:{firstName:"",lastName:""}})},n.state={submitted:!1,formData:{firstName:"",lastName:""}},n}return Object(u.a)(a,[{key:"render",value:function(){return this.state.submitted?r.a.createElement("div",{className:"Contact"},r.a.createElement("p",null,"Thank you, ",this.state.formData.firstName,", for submitting the form."),r.a.createElement("button",{onClick:this.resetForm},"Reset Form")):r.a.createElement("div",{className:"Contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",name:"firstName",value:this.state.formData.firstName,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",name:"lastName",value:this.state.formData.lastName,onChange:this.handleChange})),r.a.createElement("button",null,"Submit Form"),r.a.createElement("div",null,this.state.formData.firstName,r.a.createElement("br",null),this.state.formData.lastName)))}}]),a}(r.a.Component),v=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Clock"},r.a.createElement("h2",null,"It is ",this.state.date.toLocaleTimeString(),"."))}}]),a}(r.a.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(l,Object.assign({},e,{name:"Davey Strus"}))}}),r.a.createElement(c.a,{path:"/clock",component:v}),r.a.createElement(c.a,{path:"/contact",component:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=a(13);m.a.render(r.a.createElement(E.a,{basename:"/welcome-demo-deploy"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.5691b591.chunk.js.map