(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(1),a=n(9),r=(n(0),n(274)),o={id:"index",title:"Hooks"},s={id:"self-service/hooks/index",title:"Hooks",description:"Hooks execute logic before or after a flow (login, registration, settings, ...):",source:"@site/docs/self-service/hooks/index.mdx",permalink:"/kratos/docs/next/self-service/hooks/index",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/hooks/index.mdx",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1588432912,sidebar:"docs",previous:{title:"User Profile",permalink:"/kratos/docs/next/self-service/strategies/user-settings-profile"},next:{title:"Sign in with GitHub",permalink:"/kratos/docs/next/guides/sign-in-with-github"}},c=[{value:"Login",id:"login",children:[{value:"Before",id:"before",children:[]},{value:"After",id:"after",children:[]}]},{value:"Registration",id:"registration",children:[{value:"Before",id:"before-1",children:[]},{value:"After",id:"after-1",children:[]},{value:"<code>verify</code>",id:"verify",children:[]}]},{value:"Settings",id:"settings",children:[{value:"Before",id:"before-2",children:[]},{value:"After",id:"after-2",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Hooks execute logic before or after a flow (login, registration, settings, ...):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Before login:")," is executed when a login is initiated."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"After login:")," is executed after a login was successful."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Before registration:")," is executed when a registration is initiated."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"After registration:")," is executed when a registration was successful:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"After settings:")," is executed when a settings was successful:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Before persisting:")," runs before the identity is saved in the database."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"After persisting:")," runs after the identity was saved in the database.")))),Object(r.b)("h2",{id:"login"},"Login"),Object(r.b)("p",null,"Hooks running before & after successful user authentication are defined per\nSelf-Service Login Strategy in ORY Kratos' configuration file."),Object(r.b)("h3",{id:"before"},"Before"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    before:\n      - hook: redirect\n        config:\n          to: https://www.ory.sh/maintenance\n")),Object(r.b)("h4",{id:"redirect"},Object(r.b)("inlineCode",{parentName:"h4"},"redirect")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"redirect")," job sends HTTP 302 Found and redirects the client\nto the specified endpoint. This is useful\nwhen you want to disable any settings functionality (e.g. due to maintenance)."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    before:\n      - hook: redirect\n        config:\n          to: https://www.ory.sh/maintenance\n")),Object(r.b)("h3",{id:"after"},"After"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    after:\n      oidc:\n        - hook: redirect\n          config:\n            to: https://www.ory.sh/\n      password:\n        - hook: revoke_active_sessions\n")),Object(r.b)("h4",{id:"redirect-1"},Object(r.b)("inlineCode",{parentName:"h4"},"redirect")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"redirect")," job sends HTTP 302 Found and redirects the client\nto the specified endpoint. This hook overrides the default redirection\nbehaviour and enforces the specified redirect URL."),Object(r.b)("p",null,"Using this hook should be an exception."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    after:\n      <strategy>:\n        - hook: redirect\n          config:\n            to: https://url-to-redirect/to\n")),Object(r.b)("h4",{id:"revoke_active_sessions"},Object(r.b)("inlineCode",{parentName:"h4"},"revoke_active_sessions")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"revoke_active_sessions")," will delete all active sessions for that user on\nsuccessful login:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  login:\n    after:\n      <strategy>:\n        - hook: revoke_active_sessions\n          # can not be configured\n")),Object(r.b)("h2",{id:"registration"},"Registration"),Object(r.b)("p",null,"Hooks running before & after successful user registration are defined per\nSelf-Service Registration Strategy in ORY Kratos' configuration file."),Object(r.b)("h3",{id:"before-1"},"Before"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  registration:\n    before:\n    - hook: redirect\n      config:\n        to: https://www.ory.sh/maintenance\n")),Object(r.b)("h4",{id:"redirect-2"},Object(r.b)("inlineCode",{parentName:"h4"},"redirect")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"redirect")," job sends HTTP 302 Found and redirects the client\nto the specified endpoint. This is useful\nwhen you want to disable any settings functionality (e.g. due to maintenance)."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  registration:\n    before:\n    - hook: redirect\n      config:\n        to: https://www.ory.sh/maintenance\n")),Object(r.b)("h3",{id:"after-1"},"After"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  registration:\n    after:\n      oidc:\n        - hook: session\n      password:\n        - hook: session\n")),Object(r.b)("h4",{id:"session"},Object(r.b)("inlineCode",{parentName:"h4"},"session")),Object(r.b)("p",null,"Adding the ",Object(r.b)("inlineCode",{parentName:"p"},"session")," hook signs the user immediately in once the account has been created.\nIt runs after the identity has been saved to the database."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Using this job as part of your post-registration workflow makes your system\nvulnerable to\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../../concepts/security.md#account-enumeration-attacks"}),"Account Enumeration Attacks"),"\nbecause a threat agent can distinguish between existing and non-existing\naccounts by checking if ",Object(r.b)("inlineCode",{parentName:"p"},"Set-Cookie")," was sent as part of the registration\nresponse."))),Object(r.b)("p",null,"It sends  a ",Object(r.b)("inlineCode",{parentName:"p"},"Set-Cookie")," header which contains the session\ncookie. To use it, you must first define one or more (for secret rotation)\nsession secrets and then use it in one of the ",Object(r.b)("inlineCode",{parentName:"p"},"after")," work flows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),'secrets:\n  session:\n    - something-super-secret # The first entry will be used to sign and verify session cookies\n\n    # All other entries will be used to verify session cookies that were signed before "something-super-secret" became\n    # the current signing secret.\n    - old-session-secret\n    - older-session-secret\n    - ancient-session-secret\n\nselfservice:\n  registration:\n    after:\n      <strategy>:\n        - hook: session\n          # can not be configured\n')),Object(r.b)("h4",{id:"redirect-3"},Object(r.b)("inlineCode",{parentName:"h4"},"redirect")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"redirect")," hook sends HTTP 302 Found and redirects the client\nto the specified endpoint."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Using this hook for registration disables user registration because it runs\nbefore the identity is saved to the database. It may\nbe useful in cases where you temporary suspend user registration."))),Object(r.b)("p",null,"Using this hook should be an exception."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  registration:\n    after:\n      <strategy>:\n        - hook: redirect\n          config:\n            to: https://url-to-redirect/to\n")),Object(r.b)("h3",{id:"verify"},Object(r.b)("inlineCode",{parentName:"h3"},"verify")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"verify")," hook checks for verifiable email addresses and sends a verification / activation\nemail. For more information,\nplease read ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/verify-email-account-activation"}),"User Verification and Account Activation"),"."),Object(r.b)("h2",{id:"settings"},"Settings"),Object(r.b)("p",null,"Hooks running before & after successfully updating user settings and are defined per\nSelf-Service Settings Strategy in ORY Kratos' configuration file."),Object(r.b)("h3",{id:"before-2"},"Before"),Object(r.b)("p",null,"Settings flows do not have before hooks."),Object(r.b)("h3",{id:"after-2"},"After"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  settings:\n    after:\n      - hook: redirect\n        config:\n         to: https://www.ory.sh/\n")),Object(r.b)("h4",{id:"redirect-4"},Object(r.b)("inlineCode",{parentName:"h4"},"redirect")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"redirect")," job sends HTTP 302 Found and redirects the client\nto the specified endpoint."),Object(r.b)("p",null,"Per default, the settings endpoint returns to the settings page\nwith the original settings request ID. This is useful\nwhen you want to show e.g. a success message indicating\nthat the data has successfully been saved."),Object(r.b)("p",null,"To override this behaviour, use this redirect hook."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  settings:\n    after:\n      <strategy>:\n        - hook: redirect\n          config:\n            to: https://www.ory.sh/settings-updated\n")))}b.isMDXComponent=!0},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=i,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?a.a.createElement(f,s({ref:t},l,{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);