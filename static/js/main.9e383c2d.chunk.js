(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/OpenSans-Bold.f9fc9780.woff"},26:function(e,t,a){e.exports=a.p+"static/media/OpenSans-Bold.7d3779b1.woff2"},30:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),l=a(32),i=(a(23),a(25),a(26),a(31)),s=a(34),u=a(33),d=a(6),m=a(7),p=a(10),h=a(8),y=a(9),f=a(3),b=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={msisdn:"",userToken:"",isPlaying:!1,player:"",rate:1},a.loadPlayer=a.loadPlayer.bind(Object(f.a)(Object(f.a)(a))),a.destroyPlayer=a.destroyPlayer.bind(Object(f.a)(Object(f.a)(a))),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){"number"!==typeof this.props.somUrl&&this.loadPlayer(this.props.somUrl,this.props.setRate,this.props.setTime)}},{key:"componentWillReceiveProps",value:function(e){console.log(e.somUrl),"number"!==typeof e.somUrl&&this.loadPlayer(e.somUrl,e.setRate,e.setTime)}},{key:"loadPlayer",value:function(e,t,a){if(this.player&&this.player.play){this.setState({isPlaying:!0}),e!==this.player.src&&(this.player.src=e);var n=this;n.player&&setTimeout(function(){"function"==typeof n.props.callbackPlay&&n.props.callbackPlay(e),n.player.play()},a)}}},{key:"destroyPlayer",value:function(e){this.player&&(this.setState({isPlaying:!1}),this.player.pause(),this.player.currentTime=0)}},{key:"render",value:function(){var e=this,t=null,a=null,n=null,r=null;return this.state.isPlaying?(t="icon-stop",r="ga-stop",n="stop",a=this.destroyPlayer):(t="icon-play",r="ga-play",n="play",a=this.loadPlayer),o.a.createElement("div",null,o.a.createElement("div",{ref:"updated",className:"btn-tone btn-tone-play "+r,onClick:a},o.a.createElement("i",{className:t}),n),o.a.createElement("audio",{className:"hidden",ref:function(t){return e.player=t},onEnded:this.destroyPlayer}))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={casas:[0,1,2,3,4,5,6,7,8,9,10,11,12],cordas:[1,2,3,4],nota:"",notas:[],somUrl:null,mute:!0,notasAcorde:[],notasPrimeiraCorda:["D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D"],notasSegundaCorda:["B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],notasTerceiraCorda:["G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G"]},a.handleClick=a.handleClick.bind(Object(f.a)(Object(f.a)(a))),a.printNota=a.printNota.bind(Object(f.a)(Object(f.a)(a))),a.printBullet=a.printBullet.bind(Object(f.a)(Object(f.a)(a))),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({notasAcorde:e.acorde})}},{key:"handleClick",value:function(e,t,a,n){var o=a,r=t,c=n,l=this.getNota(o);console.log("casa: "+r+" corda: "+o),console.log("Notas da corda: "+l),this.setState({nota:l[r],mute:!1,notas:["/cavacoweb/audios/corda-"+o+"/"+c+".mp3"]})}},{key:"getNota",value:function(e){switch("corda_"+e){case"corda_2":return this.state.notasSegundaCorda;case"corda_3":return this.state.notasTerceiraCorda;default:return this.state.notasPrimeiraCorda}}},{key:"printNota",value:function(e,t){return this.getNota(e)[t]}},{key:"printBullet",value:function(e){var t=this.state.notasAcorde?this.state.notasAcorde:[],a=parseInt(e),n=!1;return t.length>0&&t.forEach(function(e){e===a&&(n=!0)}),n}},{key:"playAcorde",value:function(){var e=[];(this.state.notasAcorde.length?this.state.notasAcorde:[40,30,20,10]).map(function(t,a){var n=t;n=(n=n.toString())[0],e.push("/cavacoweb/audios/corda-"+n+"/"+t+".mp3")}),this.setState({mute:!1,notas:e})}},{key:"callbackPlay",value:function(e){var t=e.split("/")[3];t=(t=t.split(".")[0])[0],console.log(t)}},{key:"render",value:function(){var e,t=this;return this.state.notas.length&&!this.state.mute&&(e=this.state.notas.map(function(e,a){var n="0."+a;return n=parseFloat(n),o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{somUrl:e,setTime:5e3*n,setRate:a,key:a,callbackPlay:t.callbackPlay}))})),o.a.createElement("section",{className:"cavaco"},o.a.createElement("div",{id:"nota"},"NOTA ",this.state.nota),o.a.createElement("div",{className:"braco"},this.state.casas.map(function(e,a){var n=a;return o.a.createElement("div",{className:0===n?"casa inicial":"casa",key:n,"data-casa":n},t.state.cordas.map(function(e,a){var r=Math.abs(a-4),c=r+""+n;return o.a.createElement("div",{className:"corda",key:a,"data-tablatura":c,id:c,"data-corda":r,"data-nota":t.printNota(r,n),onClick:function(e){t.handleClick(e,n,r,c)}},t.printBullet(c)&&o.a.createElement("div",{className:"bullet"}))}))})),o.a.createElement("button",{onClick:function(){t.playAcorde()}},"Tocar"),e)}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={notasAcorde:[]},a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"montarAcorde",value:function(e){this.setState({notasAcorde:e})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"--"),o.a.createElement(v,{acorde:this.state.notasAcorde}),o.a.createElement("button",{onClick:function(){e.montarAcorde([42,30,21,12])}},"Criar C Maior"),o.a.createElement("button",{onClick:function(){e.montarAcorde([44,32,23,14])}},"Criar D Maior"))}}]),t}(n.Component),O=function(){return o.a.createElement("h2",null,"P\xe1gina interna")},g=function(){return o.a.createElement("h2",null,"page not fount")},j=function(){return o.a.createElement(l.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.a,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(i.a,{to:"/dicionario-acordes"},"Dicion\xe1rio de Acordes"))),o.a.createElement(s.a,null,o.a.createElement(u.a,{exact:!0,path:"/",component:E}),o.a.createElement(u.a,{path:"/dicionario-acordes",component:k}),o.a.createElement(u.a,{path:"/page",component:O}),o.a.createElement(u.a,{component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(l.a,null,o.a.createElement(j,null)),document.getElementById("main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.9e383c2d.chunk.js.map