(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{336:function(t,e,o){"use strict";var n=o(4),r=o(337).start;n({target:"String",proto:!0,forced:o(338)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},337:function(t,e,o){var n=o(14),r=o(9),c=o(191),l=o(19),d=Math.ceil,f=function(t){return function(e,o,f){var h,w,x=r(l(e)),v=x.length,m=void 0===f?" ":r(f),_=n(o);return _<=v||""==m?x:(h=_-v,(w=c.call(m,d(h/m.length))).length>h&&(w=w.slice(0,h)),t?x+w:w+x)}};t.exports={start:f(!1),end:f(!0)}},338:function(t,e,o){var n=o(48);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},340:function(t,e,o){var content=o(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(127).default)("28f1127f",content,!0,{sourceMap:!1})},344:function(t,e,o){"use strict";o(340)},345:function(t,e,o){var n=o(126)(!1);n.push([t.i,"section.latest-posts{padding:10px}section.latest-posts .posts{max-width:900px;margin:0 auto;padding:10px;display:flex;flex-direction:row;flex-wrap:wrap;background:#ddd}section.latest-posts .posts a.post{width:calc(50% - 20px);margin:10px;background:#fff;text-decoration:none;color:#111}@media (min-width:768px){section.latest-posts .posts a.post{width:calc(33.33333% - 20px)}}section.latest-posts .posts a.post .thumb{width:100%;padding-bottom:75%;position:relative;overflow:hidden}section.latest-posts .posts a.post .thumb img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:100%}section.latest-posts .posts a.post .post-text{padding:5px 10px 10px}section.latest-posts .posts a.post .post-text h2{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:20px}",""]),t.exports=n},349:function(t,e,o){"use strict";o.r(e);o(336),o(87);var n=o(118),r=o.n(n),c={asyncData:function(t){t.params;return r.a.getEntries({content_type:"post",order:"-sys.createdAt"}).then((function(t){return{posts:t.items}})).catch((function(t){return console.log(t)}))},head:{title:"記事一覧"},methods:{formatDate:function(t){var e=new Date(t),o=new String(e.getFullYear()),n=new String(e.getMonth()+1).padStart(2,"0"),dd=new String(e.getDate()).padStart(2,"0");return"".concat(o,".").concat(n,".").concat(dd)}}},l=(o(344),o(38)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"latest-posts"},[o("div",{staticClass:"posts"},t._l(t.posts,(function(e,n){return o("nuxt-link",{key:n,staticClass:"post",attrs:{to:"posts/"+e.fields.slug}},[o("div",{staticClass:"thumb"},[o("img",{attrs:{src:e.fields.image.fields.file.url}})]),t._v(" "),o("h1",[t._v("2回目のテストです")]),t._v(" "),o("div",{staticClass:"post-text"},[o("p",[t._v(t._s(t.formatDate(e.sys.createdAt)))]),t._v(" "),o("h2",[t._v(t._s(e.fields.title))])])])})),1)])}),[],!1,null,null,null);e.default=component.exports}}]);