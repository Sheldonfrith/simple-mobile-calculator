(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{85:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(62),o=n.n(r),a=n(63),i=n(1),c=n.n(i),s=n(3),u=n(20),l=n(5),f=n(36),g=n(51),b=n(18),d=n.n(b),m=n(84);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=e.onPress,n=e.onPressParam,r=e.title,o=e.fontSize,a=e.margin,i=e.backgroundColor,s=e.fontColor,l=e.style;i||(i="white"),s||(s="black");var g=f.a.get("window").fontScale,b={buttonContainer:{backgroundColor:i,flex:1,justifyContent:"center",alignItems:"center",borderWidth:3,paddingHorizontal:20,paddingVertical:5,margin:a=a||3,overflow:"visible"},buttonText:{fontSize:o=o?o/g:30/g,justifyContent:"center",alignItems:"center",textTransform:"uppercase",color:s,overflow:"visible"}};return b=h(h({},b),l),c.a.createElement(m.a,{onPress:function(){return t(n)},style:b.buttonContainer},c.a.createElement(u.a,{style:b.buttonText,adjustsFontSizeToFit:!0,numberOfLines:1},r))}function k(e){var t=e.onPress,n=e.backgroundColor,r=function(e){switch(e){case 1:return[1,2,3];case 2:return[4,5,6];case 3:return[7,8,9];case 4:return[0];default:return void console.log("invalid input to getNumbers in NumberArea")}};return c.a.createElement(l.a,{style:w.view},c.a.createElement(l.a,{style:w.row},r(1).map((function(e,r){return c.a.createElement(v,{onPress:t,backgroundColor:n,onPressParam:e,key:"numberButtonRow4"+r,title:JSON.stringify(e)})}))),c.a.createElement(l.a,{style:w.row},r(2).map((function(e,r){return c.a.createElement(v,{onPress:t,backgroundColor:n,onPressParam:e,key:"numberButtonRow4"+r,title:JSON.stringify(e)})}))),c.a.createElement(l.a,{style:w.row},r(3).map((function(e,r){return c.a.createElement(v,{onPress:t,backgroundColor:n,onPressParam:e,key:"numberButtonRow4"+r,title:JSON.stringify(e)})}))),c.a.createElement(l.a,{style:w.row},r(4).map((function(e,r){return c.a.createElement(v,{onPress:t,backgroundColor:n,onPressParam:e,key:"numberButtonRow4"+r,title:JSON.stringify(e)})}))))}var w=s.a.create({view:{flex:.88},row:{flex:1,flexDirection:"row",alignItems:"stretch"}});function P(e){var t=e.onPress,n=e.backgroundColor;return c.a.createElement(l.a,{style:C.view},c.a.createElement(v,{onPress:t,backgroundColor:n,onPressParam:"CE",fontSize:25,title:"CE"}),c.a.createElement(v,{onPress:t,backgroundColor:n,onPressParam:"+",title:"+"}),c.a.createElement(v,{onPress:t,backgroundColor:n,onPressParam:"-",title:"-"}),c.a.createElement(v,{onPress:t,backgroundColor:n,onPressParam:"/",title:"/"}),c.a.createElement(v,{onPress:t,backgroundColor:n,onPressParam:"x",fontSize:25,title:"x"}),c.a.createElement(v,{onPress:t,backgroundColor:n,onPressParam:"=",title:"="}))}var C=s.a.create({view:{flex:.22}}),y=f.a.get("window"),E=(y.windowWidth,y.windowHeight),S=y.fontScale;function O(){var e=Object(i.useState)("0"),t=o()(e,2),n=t[0],r=t[1],s=Object(i.useCallback)((function(e){g.a.canOpenURL(e).then((function(t){t?g.a.openURL(e):console.log("Don't know how to open URI: "+e)}))}),[]),f=Object(i.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=n.length-1,o=n.substring(t),a=n.substring(t-1,t);return void 0===+o&&(void 0===+a&&"-"!==o&&!1===e?(r((function(e){return e.slice(0,e.length-1)})),!0):!(e&&n.length>1&&void 0!==+a))}),[n,r]),b=Object(i.useCallback)((function(){return!!n.indexOf("+")}),[n]),d=(Object(i.useCallback)((function(){return+n.substring(n.length)}),[n]),Object(i.useCallback)((function(){if(b()){for(var e=new RegExp(/[\D^\s]/g),t=[],o=[],a=[];t=e.exec(n);)a.push(t.index),o.push(t[0]);for(var i=new RegExp(/\d+/g),c=[],s=[],u=[];c=i.exec(n);)u.push(c.index),s.push(c[0]);s.forEach((function(e,t){var r=u[t];if("-"===n[r-1]&&(r<2||void 0===+n[r-2])){s[t]=-1*s[t];var i=a.findIndex((function(e){return e===r-1}));o.splice(i,1),a.splice(i,1)}})),f()&&o.pop();var l=m(s,o);r(l.toString())}}),[n,b,f,m])),m=Object(i.useCallback)((function(e,t){var n=t.length;e=e.map((function(e){return 1*e}));var r=[],o=[],a=[],i=[],c=[],s=[];t.forEach((function(e,t){switch(e){case"(":r.push(t);break;case"^":o.push(t);break;case"/":a.push(t);break;case"x":i.push(t);break;case"+":c.push(t);break;case"-":s.push(t);break;default:return void console.log("no valid operators, in getResultFromSequence")}}));var u=function(n,r){var o=r(e[n],e[n+1]);e.splice(n,2,o),t.splice(n,1)},l=function(e,t){return e/t};a.forEach((function(e){e-=n-t.length,u(e,l)}));var f=function(e,t){return e*t};i.forEach((function(e){e-=n-t.length,u(e,f)}));var g=function(e,t){return e+t};c.forEach((function(e){e-=n-t.length,u(e,g)}));var b=function(e,t){return e-t};return s.forEach((function(e){e-=n-t.length,u(e,b)})),e[0]}),[]),p=Object(i.useCallback)((function(e){if(void 0!==e)switch(e=e.toString()){case"+":if(!n||"0"===n)return;return void(f()?r((function(t){return(t.substring(0,t.length-1)+e).toString()})):r((function(t){return(t+e).toString()})));case"-":return"0"===n?void r("-"):void(f(!0)?r((function(t){return(t.substring(0,t.length-1)+e).toString()})):r((function(t){return(t+e).toString()})));case"/":case"x":if(!n||"0"===n)return;return void(f()?r((function(t){return(t.substring(0,t.length-1)+e).toString()})):r((function(t){return(t+e).toString()})));case"CE":if(!n||"0"===n)return;return void r("0");case"=":if(!n||"0"===n)return;return void d();default:return f()&&n.length<2&&"-"!==n[0]?void r(e.toString()):void r((function(t){return("0"===t?e:t+""+e).toString()}))}}),[d,f,n,r]);return c.a.createElement(l.a,{style:x.app},c.a.createElement(l.a,{style:x.statusBarBackground}),c.a.createElement(l.a,{style:x.header},c.a.createElement(u.a,{style:x.title,adjustsFontSizeToFit:!0,numberOfLines:1},"Simple Mobile Calculator"),c.a.createElement(l.a,{style:x.headerButtons},c.a.createElement(v,{title:"By Sheldon Frith",backgroundColor:"#C04CFD",fontSize:15,onPress:function(){return s("https://sheldonfrith.com")}}),c.a.createElement(v,{title:"View on GitHub",backgroundColor:"#FC6DAB",fontSize:15,onPress:function(){return s("https://github.com/Sheldonfrith/simple-mobile-calculator")}})),c.a.createElement(a.StatusBar,{style:"auto"})),c.a.createElement(l.a,{style:x.display},c.a.createElement(u.a,{style:{fontSize:48},adjustsFontSizeToFit:!0,numberOfLines:1},n)),c.a.createElement(l.a,{style:x.input},c.a.createElement(k,{onPress:p,backgroundColor:"#C04CFD"}),c.a.createElement(P,{onPress:p,backgroundColor:"#FC6DAB"})))}var x=s.a.create({app:{maxHeight:E,flex:1,backgroundColor:"#3d1952"},header:{flex:.3,justifyContent:"center",alignItems:"center"},title:{color:"#F7F6C5",fontSize:30/S},headerButtons:{flexDirection:"row"},display:{flex:.33,backgroundColor:"#F7F6C5",alignItems:"center",justifyContent:"center",borderStyle:"solid",borderWidth:2,margin:10},input:{flexDirection:"row",flex:1,flexWrap:"nowrap"},statusBarBackground:{backgroundColor:"white",flex:.07}})},88:function(e,t,n){n(89),e.exports=n(122)},89:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[88,1,2]]]);
//# sourceMappingURL=app.1babc6d1.chunk.js.map