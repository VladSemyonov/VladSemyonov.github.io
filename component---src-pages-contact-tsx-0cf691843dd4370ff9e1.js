(self.webpackChunktaro=self.webpackChunktaro||[]).push([[650],{7720:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return g}});var t=l(7294),c=l(5019),n=l(7136),a=l(810),r=l.n(a),i=l(9376),o=l(9901),d=l(8963),m=l(9543),u=l(5893),h=function(){var e=(0,c.$)("contact").t,s=(0,t.useState)("none"),l=s[0],n=s[1];return(0,u.jsxs)("form",{id:"contact-form",onSubmit:function(e){var s,l,t,c;e.preventDefault();var a=e.target,r=a.name,i=a.phone,o=a.email,d=a.message;n("submitting"),fetch("https://ruo56q293d.execute-api.eu-west-1.amazonaws.com/prod/contact",{method:"POST",mode:"cors",cache:"no-cache",credentials:"omit",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:null!==(s=null==r?void 0:r.value)&&void 0!==s?s:"",phone:null!==(l=null==i?void 0:i.value)&&void 0!==l?l:"",email:null!==(t=null==o?void 0:o.value)&&void 0!==t?t:"",message:null!==(c=null==d?void 0:d.value)&&void 0!==c?c:""})}).then((function(e){return e.json()})).then((function(e){e.success?n("success"):(console.error("Send email error"),n("error"))})).catch((function(e){console.error("Error:",e),n("error")}))},className:"flex flex-wrap w-full lg:w-1/2",children:[(0,u.jsx)("h2",{className:"font-bold w-full mt-8 mb-4",children:e("contact:callWithUs")}),(0,u.jsxs)("div",{className:"w-full pr-0 sm:pr-2 sm:w-1/2",children:[(0,u.jsxs)("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-600",children:[e("contact:formName")," *"]}),(0,u.jsx)("input",{type:"text",id:"name",name:"name",className:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",required:!0})]}),(0,u.jsxs)("div",{className:"w-full pl-0 sm:pl-2 sm:w-1/2",children:[(0,u.jsx)("label",{htmlFor:"phone",className:"leading-7 text-sm text-gray-600",children:e("contact:phoneNumber")}),(0,u.jsx)("input",{type:"phone",id:"phone",name:"phone",className:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),(0,u.jsxs)("div",{className:"w-full",children:[(0,u.jsxs)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-600",children:[e("contact:formEmail")," *"]}),(0,u.jsx)("input",{type:"email",id:"email",name:"email",className:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",required:!0})]}),(0,u.jsxs)("div",{className:"w-full",children:[(0,u.jsxs)("div",{className:"relative",children:[(0,u.jsxs)("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-600",children:[e("contact:formMessage")," *"]}),(0,u.jsx)("textarea",{id:"message",name:"message",className:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",required:!0})]}),"error"===l&&(0,u.jsx)("div",{className:"py-4",children:(0,u.jsx)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert",children:(0,u.jsx)("span",{className:"block sm:inline",children:e("contact:contactUsError")})})}),"success"!==l&&(0,u.jsx)("button",{type:"submit",className:"mt-2 px-4 py-1 border border-blue-500 rounded bg-white text-blue-500 font-medium hover:text-white hover:bg-blue-500",disabled:"submitting"===l,children:e("submitting"===l?"contact:submitting":"contact:submit")}),"success"===l&&(0,u.jsxs)("div",{className:"py-4",children:[(0,u.jsx)("div",{className:"bg-green-100 border border-green-500 text-green-900 px-4 py-3 rounded relative",role:"alert",children:(0,u.jsx)("span",{className:"block sm:inline",children:e("contact:contactUsSuccess")})}),(0,u.jsx)("button",{type:"button",onClick:function(){var e=document.getElementById("contact-form");null==e||e.reset(),n("none")},className:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 py-4",children:e("contact:sendMore")})]})]})]})},x=function(){var e=(0,c.$)("contact").t;return(0,u.jsxs)("div",{className:"w-full lg:w-1/2 h-auto",children:[(0,u.jsx)("h2",{className:"font-bold mt-8 mb-4",children:e("contact:onTouch")}),(0,u.jsxs)("ul",{className:"w-full lg:w-1/2",children:[(0,u.jsxs)("li",{className:"flex items-center",children:[(0,u.jsx)("div",{className:"my-2",children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current text-blue-500",enableBackground:"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:(0,u.jsxs)("g",{children:[(0,u.jsx)("rect",{fill:"none",height:"24",width:"24"}),(0,u.jsx)("path",{d:"M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h9v-2H4V8l8,5l8-5v5h2V6C22,4.9,21.1,4,20,4z M12,11L4,6h16L12,11z M19,15l4,4 l-4,4v-3h-4v-2h4V15z"})]})})}),(0,u.jsx)("a",{href:"mailto:unost123@i.ua",className:"pl-8",children:"unost123@i.ua"})]}),(0,u.jsxs)("li",{className:"flex items-center",children:[(0,u.jsx)("div",{className:"my-2",children:(0,u.jsxs)("svg",{className:"fill-current text-blue-500",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",enableBackground:"new 0 0 24 24",fill:"#000000",children:[(0,u.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,u.jsx)("path",{d:"M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z"})]})}),(0,u.jsx)("a",{href:"tel:+380554221302",className:"pl-8",children:"+38(05542) 2-13-02"})]}),(0,u.jsxs)("li",{className:"flex items-center",children:[(0,u.jsx)("div",{className:"my-2",children:(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24px",className:"fill-current text-blue-500",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,u.jsx)("rect",{fill:"none",height:"24",width:"24"}),(0,u.jsx)("path",{d:"M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"})]})}),(0,u.jsx)("a",{href:"https://www.facebook.com",className:"pl-8",children:"facebook"})]})]})]})},g=function(e){var s=e.data,l=(0,c.$)(["contact","company","site"]).t,a=(0,n.ql)().locale,g=s.cmsApi,f=(0,t.useState)(g),p=f[0],b=f[1],v=p.page,j=(0,d.s)(v,"title"),w=(0,d.s)(v,"img"),N=(0,d.s)(v,"seoTitle"),z=(0,d.s)(v,"seoDescription");return(0,t.useEffect)((function(){(0,o.Z)('query ContactPageQuery($locale: String!) {\n        page(content: "contact_page", locale: $locale) {\n          name\n          type\n          value\n        }\n      }',{locale:a}).then((function(e){e.error||!e.data||r()(p,e.data)||b(e.data)}))}),[]),(0,u.jsxs)(i.Z,{title:N,description:z,children:[(0,u.jsx)(m.Z,{title:j,img:w}),(0,u.jsxs)("div",{className:"container mx-auto px-6 lg:px-12 pb-8",children:[(0,u.jsxs)("div",{className:"container mx-auto flex flex-wrap lg:mt-8",children:[(0,u.jsx)(x,{}),(0,u.jsx)(h,{})]}),(0,u.jsxs)("section",{className:"container mx-auto block mt-16",children:[(0,u.jsx)("h2",{className:"font-bold",children:l("contact:locateUs")}),(0,u.jsxs)("div",{className:"content-between mb-2",children:[(0,u.jsx)("div",{className:"w-full my-4",children:(0,u.jsx)("address",{children:(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsx)("div",{className:"w-50px h-full justify-center",children:(0,u.jsx)("div",{className:"justify-center",children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",className:"flex w-12 h-12 fill-current text-red-500",children:(0,u.jsxs)("g",{fillRule:"evenodd",clipRule:"evenodd",children:[(0,u.jsx)("path",{d:"M49.549 13.399v36.146H1.133c-.55-.335-.683-.829-.682-1.455.016-7.62.011-15.238.011-22.858 0-5.113-.006-10.224.015-15.335.001-.334.129-.757.355-.977.215-.208.636-.281.966-.283 4.121-.017 8.242-.01 12.363-.009h.609v-.62c-.001-2.108-.004-4.217 0-6.326.001-.821.392-1.226 1.186-1.226 6.038-.002 12.078-.002 18.114 0 .771 0 1.193.456 1.191 1.238-.008 3.545-.016 7.092-.02 10.637 0 .122.021.244.035.396h.551c4.105 0 8.209.011 12.314-.013.623-.003 1.078.171 1.408.685zM33.143 47.483V2.522H16.88v44.944h4.025v-.611c0-1.389-.001-2.779.001-4.169.002-.979.341-1.314 1.332-1.314 1.869-.001 3.739-.002 5.608 0 .896.001 1.292.444 1.278 1.335-.023 1.518-.015 3.035-.017 4.553 0 .073.033.146.052.224l3.984-.001zm-18.418.025V10.722H2.526c-.01.168-.026.308-.026.449-.001 11.949 0 23.896-.01 35.845 0 .41.134.5.52.499 3.722-.013 7.444-.007 11.166-.007h.549zm20.548-.001h.422c3.756 0 7.51-.007 11.264.01.441.001.563-.12.563-.562a13901.39 13901.39 0 0 1 0-31.637c0-.44-.119-.565-.561-.563-3.756.018-7.51.01-11.264.012-.139 0-.275.019-.424.029v32.711zm-8.268-.061v-4.015h-4v4.015h4z"}),(0,u.jsx)("path",{d:"M22.027 16.827c-.652-.008-1.134-.465-1.116-1.057.018-.595.514-1.021 1.167-1.004.628.016 1.09.454 1.091 1.033.001.594-.489 1.036-1.142 1.028zM27.994 16.828c-.655.007-1.146-.43-1.151-1.023-.005-.594.478-1.038 1.132-1.039.646-.002 1.135.451 1.127 1.045-.007.572-.486 1.01-1.108 1.017zM22.032 29.098c-.646 0-1.135-.457-1.123-1.05.011-.574.49-1.008 1.115-1.012.653-.004 1.143.436 1.145 1.028.001.595-.482 1.036-1.137 1.034zM27.973 29.098c-.651.003-1.136-.444-1.131-1.04.004-.579.473-1.012 1.103-1.02.657-.01 1.146.42 1.155 1.017.009.593-.477 1.043-1.127 1.043zM22.053 6.592c.656.004 1.132.45 1.116 1.046-.016.595-.493 1-1.166.99-.634-.009-1.095-.438-1.093-1.016.002-.597.481-1.024 1.143-1.02zM27.979 8.628c-.666.001-1.142-.423-1.138-1.019.003-.594.485-1.021 1.146-1.018.638.004 1.099.418 1.113 1.001.015.597-.456 1.034-1.121 1.036zM21.995 12.728c-.631-.013-1.089-.447-1.084-1.03.004-.612.499-1.026 1.198-1.005.623.018 1.083.472 1.06 1.047-.024.597-.503 1.001-1.174.988zM27.982 12.728c-.663.001-1.141-.428-1.141-1.024 0-.593.479-1.017 1.146-1.012.641.003 1.099.412 1.112.994.016.596-.459 1.04-1.117 1.042zM22.068 20.902c-.672.005-1.149-.405-1.157-1-.008-.598.463-1.035 1.125-1.037.654-.004 1.138.433 1.135 1.027-.003.573-.473 1.004-1.103 1.01zM27.946 20.902c-.633-.006-1.102-.433-1.104-1.006-.004-.614.491-1.047 1.18-1.033.623.012 1.092.461 1.08 1.036-.011.596-.488 1.009-1.156 1.003zM22.034 33.172c-.662-.002-1.135-.438-1.124-1.033.011-.581.475-.999 1.11-1.001.666-.005 1.144.417 1.149 1.013.007.594-.472 1.023-1.135 1.021zM28 31.138c.635.007 1.095.429 1.102 1.013.006.61-.488 1.038-1.183 1.021-.628-.014-1.09-.456-1.077-1.031.012-.598.491-1.013 1.158-1.003zM22.042 37.271c-.661.001-1.137-.432-1.131-1.03.004-.599.478-1.011 1.149-1.006.641.006 1.1.42 1.108 1.001.01.593-.469 1.035-1.126 1.035zM27.982 37.271c-.662.004-1.14-.424-1.141-1.022-.001-.592.478-1.017 1.143-1.014.644.004 1.102.411 1.115.993.015.596-.459 1.042-1.117 1.043zM22.026 25.001c-.632-.001-1.103-.423-1.117-1-.014-.595.461-1.036 1.12-1.041.661-.004 1.146.428 1.141 1.019-.004.597-.482 1.024-1.144 1.022zM27.96 25c-.65-.002-1.133-.45-1.119-1.043.012-.576.483-.993 1.117-.996.665-.001 1.145.425 1.144 1.015-.002.6-.476 1.025-1.142 1.024zM8.755 16.829c-.653 0-1.306.004-1.959-.002-.754-.008-1.234-.422-1.225-1.043.009-.607.478-1.014 1.202-1.017 1.323-.007 2.645-.007 3.967 0 .715.003 1.175.424 1.169 1.041-.007.614-.472 1.011-1.195 1.021H8.755zM8.698 29.1c-.653 0-1.306.006-1.959-.002-.704-.009-1.183-.444-1.17-1.05.012-.588.483-1.007 1.164-1.01 1.338-.007 2.676-.007 4.015.002.721.004 1.171.426 1.16 1.048-.011.602-.457.999-1.154 1.01-.685.009-1.37.002-2.056.002zM8.706 41.371c-.653 0-1.306.007-1.959-.001-.715-.009-1.185-.434-1.175-1.043.009-.593.47-1.011 1.156-1.015 1.338-.01 2.676-.009 4.015-.002.719.005 1.171.422 1.165 1.045-.007.604-.448 1.005-1.146 1.014-.686.01-1.37.002-2.056.002zM8.74 18.863c.685 0 1.37-.005 2.055.001.658.005 1.101.406 1.114.993.014.615-.421 1.038-1.106 1.042-1.37.009-2.739.009-4.109.001-.674-.003-1.139-.444-1.123-1.034.017-.583.464-.992 1.115-.999.685-.009 1.37-.002 2.055-.002l-.001-.002zM8.729 25.001c-.686 0-1.371.007-2.056-.001-.638-.007-1.101-.438-1.104-1.012-.004-.578.449-1.019 1.089-1.023 1.386-.01 2.771-.01 4.158.001.668.004 1.088.406 1.092 1.003.003.613-.437 1.021-1.124 1.028-.686.008-1.371.003-2.055.004zM8.749 31.138c.685 0 1.371-.007 2.055 0 .66.007 1.093.407 1.104 1.001.011.615-.424 1.029-1.114 1.032-1.369.007-2.74.007-4.11-.001-.653-.004-1.099-.414-1.113-.995-.013-.596.452-1.031 1.123-1.037.684-.005 1.369 0 2.055 0zM8.715 37.271c-.685 0-1.37.009-2.055-.001-.639-.011-1.092-.445-1.09-1.025s.45-1.003 1.1-1.007a360.19 360.19 0 0 1 4.158 0c.659.004 1.083.419 1.079 1.018-.003.595-.437 1.007-1.089 1.015-.701.008-1.402 0-2.103 0zM41.451 29.1c-.67 0-1.338.008-2.008-.002-.693-.011-1.129-.413-1.133-1.026-.004-.609.434-1.027 1.125-1.031 1.354-.009 2.709-.009 4.063 0 .688.004 1.145.428 1.146 1.024.004.591-.457 1.021-1.137 1.031-.685.011-1.37.004-2.056.004zM41.457 41.371c-.668 0-1.338.008-2.008-.002-.699-.012-1.133-.408-1.137-1.02-.006-.612.428-1.031 1.119-1.036 1.355-.012 2.709-.011 4.063-.001.686.004 1.143.426 1.15 1.021.01.605-.467 1.029-1.18 1.037-.669.007-1.337.002-2.007.001zM41.492 33.172c-.701 0-1.402.008-2.102-.002-.668-.009-1.08-.406-1.08-1.015.002-.601.43-1.013 1.084-1.017 1.387-.008 2.771-.008 4.158.001.641.003 1.092.44 1.092 1.02 0 .577-.451 1.003-1.098 1.011-.683.009-1.368.002-2.054.002zM41.447 18.863c.686 0 1.371-.005 2.055.001.674.005 1.143.429 1.143 1.02 0 .592-.455 1.011-1.143 1.015a351.74 351.74 0 0 1-4.109.001c-.666-.004-1.086-.411-1.082-1.014.004-.599.43-1.01 1.082-1.02.685-.01 1.369-.002 2.054-.003zM41.496 22.964c.686 0 1.371-.009 2.055.002.646.01 1.098.438 1.094 1.015-.002.577-.457 1.013-1.096 1.016-1.385.008-2.773.008-4.158.001-.646-.004-1.084-.426-1.08-1.021 0-.602.42-1.003 1.084-1.012.699-.01 1.402-.003 2.102-.003v.002zM41.455 35.235c.699 0 1.4-.008 2.102.003.641.009 1.096.444 1.088 1.02-.004.58-.459 1.008-1.1 1.013-1.387.007-2.771.007-4.158-.001-.65-.004-1.078-.425-1.076-1.025.004-.605.418-.997 1.09-1.007.683-.01 1.369-.003 2.054-.003z"})]})})})}),(0,u.jsxs)("div",{className:"ml-4 ",children:[(0,u.jsx)("strong",{className:"block",children:l("company:addressHeader")}),(0,u.jsx)("span",{className:"w-1/2 text-black",children:l("company:address")})]})]})})}),(0,u.jsx)("div",{className:"w-full h-96 border-2 border-white",children:(0,u.jsx)("iframe",{className:"h-full w-full",frameBorder:"0",title:"map",scrolling:"no",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.944753194748!2d32.72212161499619!3d46.62785356306549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c40f670b27b8ef%3A0xcea91d5ee76fed07!2z0J7QkNCeIMKr0KbRjtGA0YPQv9C40L3RgdC60LDRjyDRiNCy0LXQudC90LDRjyDRhNCw0LHRgNC40LrQsCDCq9Cu0L3QvtGB0YLRjMK7!5e0!3m2!1sru!2sua!4v1624545632808!5m2!1sru!2sua",loading:"lazy"})})]})]})]})]})}}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-0cf691843dd4370ff9e1.js.map