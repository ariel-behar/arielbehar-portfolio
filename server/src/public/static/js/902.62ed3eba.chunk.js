"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[902],{902:function(n,e,i){i.r(e),i.d(e,{default:function(){return f}});var a=i(168),t=i(2791),r=i(4261),o=i(6934),c=JSON.parse('[{"language":"English","flag":"American flag","image":"usa.png","proficiencies":"5 / 5 / 5 / 5"},{"language":"Spanish","flag":"Spanish flag","image":"spain.png","proficiencies":"4 / 4 / 5 / 5"},{"language":"Bulgarian","flag":"Bulgarian flag","image":"bulgaria.png","proficiencies":"Native"},{"language":"Hebrew","flag":"Israeli flag","image":"israel.png","proficiencies":"5 / 5 / 5 / 5"},{"language":"French","flag":"French flag","image":"france.png","proficiencies":"2 / 2 / 3 / 3"},{"language":"Russian","flag":"Russian flag","image":"russia.png","proficiencies":"2 / 1 / 3 / 3"}]'),s=i(697),l=i(3767),p=i(890),g=i(184);var d,h=function(n){var e=n.language;return(0,g.jsxs)(l.Z,{direction:"column",alignItems:"center",children:[(0,g.jsx)(p.Z,{variant:"body1",component:"p",children:e.language}),(0,g.jsx)(s.Z,{component:"img",width:{xs:"45px",md:"auto"},src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/flags/".concat(e.image),alt:e.flag}),(0,g.jsxs)(p.Z,{variant:"body2",component:"p",color:"text.muted",children:[" ",e.proficiencies," "]})]})},m=i(9164),u=i(1889),x=(0,o.ZP)(s.Z)(d||(d=(0,a.Z)(["\n    background-color: ",";\n    color: ",';\n\n    background-image: url("https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/ariel.png");\n    background-position: right bottom;\n    background-repeat: no-repeat;\n\n    text-shadow: 1px 1px 7px #000;\n\n    @media (max-width: 600px) {\n        background-image: none;\n    }\n\n    .float-container {\n        @media (min-width: 200px) {\n            height: 610px;\n        }\n\n        @media (min-width: 250px) {\n            height: 490px;\n        }\n\n        @media (min-width: 300px) {\n            height: 450px;\n        }\n\n        @media (min-width: 350px) {\n            height: 345px;\n        }\n\n        @media (min-width: 375px) {\n            height: 340px;\n        }\n\n        @media (min-width: 400px) {\n            height: 310px;\n        }\n\n        @media (min-width: 450px) {\n            height: 270px;\n        }\n\n        @media (min-width: 500px) {\n            height: 240px;\n        }\n\n        @media (min-width: 550px) {\n            height: 210px;\n        }\n\n        @media (min-width: 600px) {\n            height: auto;\n        }\n    }\n'])),(function(n){return n.theme.palette.custom.black.main}),(function(n){return n.theme.palette.custom.grey.main}));var f=function(n){var e=n.loadSectionHandler;return(0,t.useEffect)((function(){e(3)}),[e]),(0,g.jsx)(x,{component:"section",py:{xs:3,lg:6},px:0,id:"second-section",children:(0,g.jsx)(m.Z,{sx:{padding:"0"},children:(0,g.jsxs)(l.Z,{direction:"column",rowGap:1,children:[(0,g.jsx)(s.Z,{maxWidth:"900px",position:"relative",children:(0,g.jsxs)(s.Z,{className:"float-container",children:[(0,g.jsx)(p.Z,{px:2,variant:"h4",component:"h4",mb:2,children:"About Me"}),(0,g.jsx)(s.Z,{display:{xs:"block",sm:"none"},height:"calc(100% - 175px)",sx:{float:"right"}}),(0,g.jsx)(s.Z,{display:{xs:"block",sm:"none"},sx:{float:"right",clear:"right"},height:"175px",component:"img",src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/ariel.png",alt:"Ariel Behar Photo"}),(0,g.jsx)(p.Z,{variant:"body1",component:"p",px:2,maxWidth:"900px",children:"Certified Full-Stack Web Developer with over 5 years of comprehensive experience. Multilingual and self-taught in a variety of web technologies and programming languages. Proficient in working with Next.js, MERN stack, Three.js, Shopify, and WordPress. Highly reliable and self-propelled to success and professionalism with a constant hunger for knowledge and improvement."})]})}),(0,g.jsxs)(s.Z,{maxWidth:"700px",mt:2,px:2,children:[(0,g.jsx)(p.Z,{variant:"h4",component:"h4",mb:2,children:"Languages"}),(0,g.jsx)(u.ZP,{container:!0,spacing:2,children:c.map((function(n){return(0,g.jsx)(u.ZP,{item:!0,xs:4,sm:2,md:2,children:(0,g.jsx)(h,{language:n})},(0,r.Z)())}))}),(0,g.jsxs)(p.Z,{variant:"body2",component:"p",color:"text.muted.light",my:1,textAlign:"center",children:["*Speaking / Writing / Reading / Understanding "," rated from 1 to 5 (5 being the highest)"]})]})]})})})}},4261:function(n,e,i){i.d(e,{Z:function(){return p}});var a,t={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},r=new Uint8Array(16);function o(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}for(var c=[],s=0;s<256;++s)c.push((s+256).toString(16).slice(1));function l(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return c[n[e+0]]+c[n[e+1]]+c[n[e+2]]+c[n[e+3]]+"-"+c[n[e+4]]+c[n[e+5]]+"-"+c[n[e+6]]+c[n[e+7]]+"-"+c[n[e+8]]+c[n[e+9]]+"-"+c[n[e+10]]+c[n[e+11]]+c[n[e+12]]+c[n[e+13]]+c[n[e+14]]+c[n[e+15]]}var p=function(n,e,i){if(t.randomUUID&&!e&&!n)return t.randomUUID();var a=(n=n||{}).random||(n.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){i=i||0;for(var r=0;r<16;++r)e[i+r]=a[r];return e}return l(a)}}}]);
//# sourceMappingURL=902.62ed3eba.chunk.js.map