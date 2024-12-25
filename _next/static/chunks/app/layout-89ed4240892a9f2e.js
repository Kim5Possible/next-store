(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1547:function(e,t,r){Promise.resolve().then(r.t.bind(r,7960,23)),Promise.resolve().then(r.bind(r,9124)),Promise.resolve().then(r.bind(r,2530)),Promise.resolve().then(r.t.bind(r,2972,23)),Promise.resolve().then(r.t.bind(r,1511,23)),Promise.resolve().then(r.t.bind(r,2221,23))},9124:function(e,t,r){"use strict";r.d(t,{default:function(){return h}});var s=r(7437),a=r(2265),n=r(4521),l=(0,n.Z)((0,s.jsx)("path",{d:"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"}),"ShoppingCartOutlined"),i=(0,n.Z)((0,s.jsx)("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"}),"WbSunny"),o=(0,n.Z)((0,s.jsx)("path",{d:"M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96"}),"Bedtime"),d=(0,n.Z)((0,s.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),c=r(7648),u=r(2530),h=e=>{let t="hover:underline opacity-80 hover:opacity-100",[r,n]=(0,a.useState)(!1),[h,m]=(0,a.useState)(!1),[x,f]=(0,a.useState)("dark"),{cart:b}=(0,u.j)();(0,a.useEffect)(()=>{let e=document.getElementsByTagName("html")[0],t=localStorage.getItem("theme");t&&(f(t),"light"===t&&e.classList.remove("dark"))},[]);let p=()=>{n(e=>!e)};return(0,a.useEffect)(()=>{let e=()=>{m(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,s.jsx)("header",{className:"mb-10 py-5 border-b border-b-gray-400 dark:border-b-gray-500",children:(0,s.jsxs)("div",{className:"relative container flex justify-between items-center text-lg",children:[(0,s.jsx)(c.default,{href:"/",className:"font-[geist-sans] text-2xl sm:text-4xl font-bold gradient-purple bg-clip-text text-transparent",children:"Super Store"}),(0,s.jsx)("nav",{className:h?r?"absolute z-10 top-16 right-2":"hidden":"",children:(0,s.jsxs)("ul",{className:"".concat(r&&h?"flex-col gap-3 rounded-lg px-3 py-2 bg-[--color-light] dark:bg-[--color-dark]":"gap-16 rounded-full px-5 py-2"," flex border border-gray-500"),children:[(0,s.jsx)("li",{children:(0,s.jsx)(c.default,{onClick:p,href:"/",className:t,children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)(c.default,{onClick:p,href:"/store",className:t,children:"Store"})}),(0,s.jsx)("li",{children:(0,s.jsxs)(c.default,{onClick:p,href:"/cart",className:"".concat(t," relative"),children:["Cart ",(0,s.jsx)(l,{}),b.length>0&&(0,s.jsx)("span",{className:"absolute top-[-7px] right-[-5px] text-xs bg-red-500 text-white rounded-full px-1",children:b.length})]})})]})}),(0,s.jsxs)("div",{className:"flex gap-5 items-center",children:[(0,s.jsx)("button",{className:"gradient-purple px-2 py-1 rounded-lg text-[--color-light] hover:drop-shadow-[0_0_4px_#b61aff] transition-all duration-200",children:"Sign In"}),(0,s.jsx)("button",{onClick:()=>{let e=document.getElementsByTagName("html")[0],t="light"===x?"dark":"light";f(t),localStorage.setItem("theme",t),"dark"===t?e.classList.add("dark"):e.classList.remove("dark")},className:"h-full aspect-square border border-gray-500 rounded-lg px-1",children:(0,s.jsx)("div",{className:"flex justify-center items-center hover:rotate-[360deg] transition-all duration-500",children:"light"===x?(0,s.jsx)(i,{}):(0,s.jsx)(o,{})})}),h&&(0,s.jsxs)("button",{onClick:p,children:[" ",(0,s.jsx)(d,{})]})]})]})})}},2530:function(e,t,r){"use strict";r.d(t,{CartProvider:function(){return l},j:function(){return i}});var s=r(7437),a=r(2265);let n=(0,a.createContext)(void 0);function l(e){let{children:t}=e,[r,l]=(0,a.useState)([]);return(0,s.jsx)(n.Provider,{value:{cart:r,addToCart:e=>{l(t=>t.find(t=>t.id===e.id)?t.map(t=>t.id===e.id?{...t,quantity:t.quantity+1}:t):[...t,{...e,quantity:1}])},removeFromCart:e=>{l(t=>t.filter(t=>t.id!==e))},updateQuantity:(e,t)=>{l(r=>r.map(r=>r.id===e?{...r,quantity:t}:r))}},children:t})}function i(){let e=(0,a.useContext)(n);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}},7960:function(){},2221:function(e){e.exports={style:{fontFamily:"'__geistMono_071979', '__geistMono_Fallback_071979'"},className:"__className_071979",variable:"__variable_071979"}},1511:function(e){e.exports={style:{fontFamily:"'__geistSans_c7b624', '__geistSans_Fallback_c7b624'"},className:"__className_c7b624",variable:"__variable_c7b624"}}},function(e){e.O(0,[776,648,521,971,117,744],function(){return e(e.s=1547)}),_N_E=e.O()}]);