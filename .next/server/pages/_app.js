(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: external "@sentry/react"
const react_namespaceObject = require("@sentry/react");
;// CONCATENATED MODULE: external "@sentry/tracing"
const tracing_namespaceObject = require("@sentry/tracing");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./environments/environment.ts
var environment = __webpack_require__(8393);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./utils/formatNumber.ts
var formatNumber = __webpack_require__(8978);
// EXTERNAL MODULE: ./components/layout/context/GlobalAppContext.tsx
var GlobalAppContext = __webpack_require__(6696);
;// CONCATENATED MODULE: ./components/icons/StarIcon.tsx

const StarIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            d: "M9.153 2.34l1.174 2.346c.16.327.586.64.946.7l2.127.354c1.36.226 1.68 1.213.7 2.186L12.447 9.58c-.28.28-.434.82-.347 1.206l.473 2.047c.374 1.62-.486 2.247-1.92 1.4l-1.993-1.18c-.36-.213-.953-.213-1.32 0l-1.993 1.18c-1.427.847-2.294.213-1.92-1.4l.473-2.047c.087-.386-.067-.926-.347-1.206L1.9 7.926c-.973-.973-.66-1.96.7-2.186l2.127-.354c.353-.06.78-.373.94-.7L6.84 2.34c.64-1.274 1.68-1.274 2.313 0z"
        })
    });
/* harmony default export */ const icons_StarIcon = (StarIcon);

;// CONCATENATED MODULE: ./components/banner/Banner.tsx







function Banner({ githubStars  }) {
    const { displayBanner , dismissBanner  } = (0,external_react_.useContext)(GlobalAppContext/* default */.Z);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()("top-0 z-10 flex w-full animate-fade-in-down-short items-center justify-center gap-6 bg-gradient-to-br from-primary to-secondary py-3 opacity-0", {
            fixed: displayBanner,
            hidden: !displayBanner
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-sm font-medium text-white",
                children: "Support Komiser by giving us a star on GitHub."
            }),
            githubStars && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "https://github.com/tailwarden/komiser",
                target: "_blank",
                rel: "noreferrer",
                className: "group flex items-center gap-3 rounded border-[1.5px] border-white pl-4 text-sm text-white transition-colors hover:bg-white/10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/assets/img/others/github-white.svg",
                        width: "18",
                        height: "16",
                        alt: "Github logo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Star Komiser"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex h-full items-center justify-center gap-2 border-l border-white/10 bg-white/10 py-2.5 px-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_StarIcon, {
                                width: 16,
                                height: 16,
                                className: "group-hover:fill-warning-600 group-hover:text-warning-600"
                            }),
                            (0,formatNumber/* default */.Z)(githubStars)
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: dismissBanner,
                className: "absolute right-8 cursor-pointer rounded-lg p-3 text-white transition-colors hover:bg-white/10 active:bg-black-900/10",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        d: "M8 16l8-8M16 16L8 8"
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const banner_Banner = (Banner);

;// CONCATENATED MODULE: ./components/banner/hooks/useGithubStarBanner.tsx


async function getKomiserGithubStars() {
    try {
        const response = await fetch("https://api.github.com/repos/tailwarden/komiser").then((res)=>res.json());
        return response;
    } catch (error) {
        throw new Error("There was an error fetching the GitHub stars from Komiser project.");
    }
}
function useGithubStarBanner() {
    const [displayBanner, setDisplayBanner] = (0,external_react_.useState)(false);
    const [githubStars, setGithubStars] = (0,external_react_.useState)();
    const router = (0,router_.useRouter)();
    function checkLocalStorageForBannerStatus() {
        if (false) {}
        localStorage.displayGithubStarBanner = "true";
        return localStorage.displayGithubStarBanner;
    }
    function dismissBanner() {
        setDisplayBanner(false);
        localStorage.displayGithubStarBanner = "false";
    }
    (0,external_react_.useEffect)(()=>{
        const shouldDisplayBanner = checkLocalStorageForBannerStatus();
        if (shouldDisplayBanner !== "false" && router.query.view) {
            getKomiserGithubStars().then((res)=>{
                if (!res.stargazers_count) {
                    setGithubStars(undefined);
                    setDisplayBanner(false);
                } else {
                    setGithubStars(res.stargazers_count);
                    setDisplayBanner(true);
                }
            });
        }
    }, [
        router.query.view
    ]);
    return {
        displayBanner,
        dismissBanner,
        githubStars
    };
}
/* harmony default export */ const hooks_useGithubStarBanner = (useGithubStarBanner);

// EXTERNAL MODULE: ./components/button/Button.tsx
var Button = __webpack_require__(7091);
// EXTERNAL MODULE: ./components/empty-state/EmptyState.tsx
var EmptyState = __webpack_require__(550);
// EXTERNAL MODULE: ./components/error-state/ErrorState.tsx
var ErrorState = __webpack_require__(2587);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/navbar/Navbar.tsx






function Navbar() {
    const { displayBanner  } = (0,external_react_.useContext)(GlobalAppContext/* default */.Z);
    const router = (0,router_.useRouter)();
    const nav = [
        {
            label: "Dashboard",
            href: "/dashboard"
        },
        {
            label: "Inventory",
            href: "/inventory"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: `fixed ${displayBanner ? "top-[72px]" : "top-0"} z-30 flex w-full items-center justify-between gap-10 border-b border-black-200/30 bg-white py-4 px-6 xl:pr-8 2xl:pr-24`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center gap-8 text-sm font-semibold text-black-400",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/dashboard",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/assets/img/komiser.svg",
                        width: 40,
                        height: 40,
                        alt: "Komiser logo"
                    })
                }),
                nav.map((navItem, idx)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: navItem.href,
                        className: router.pathname === navItem.href ? "text-primary" : "text-black-400",
                        children: navItem.label
                    }, idx))
            ]
        })
    });
}
/* harmony default export */ const navbar_Navbar = (Navbar);

// EXTERNAL MODULE: ./services/settingsService.ts
var settingsService = __webpack_require__(6250);
;// CONCATENATED MODULE: ./components/layout/hooks/useGlobalStats.tsx


function useGlobalStats() {
    const [loading, setLoading] = (0,external_react_.useState)(true);
    const [data, setData] = (0,external_react_.useState)();
    const [error, setError] = (0,external_react_.useState)(false);
    const [hasNoAccounts, setHasNoAccounts] = (0,external_react_.useState)(false);
    function fetch() {
        if (!loading) {
            setLoading(true);
        }
        if (error) {
            setError(false);
        }
        settingsService/* default.getGlobalStats */.Z.getGlobalStats().then((res)=>{
            if (res === Error) {
                setLoading(false);
                setError(true);
            } else {
                setLoading(false);
                if (res.accounts === 0) {
                    setHasNoAccounts(true);
                } else {
                    setData(res);
                }
            }
        });
    }
    (0,external_react_.useEffect)(()=>{
        fetch();
    }, []);
    return {
        loading,
        data,
        error,
        hasNoAccounts,
        fetch
    };
}
/* harmony default export */ const hooks_useGlobalStats = (useGlobalStats);

;// CONCATENATED MODULE: ./components/layout/hooks/useTelemetry.tsx


function useTelemetry() {
    const [telemetry, setTelemetry] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        settingsService/* default.getTelemetry */.Z.getTelemetry().then((res)=>{
            if (res === Error) {
                throw new Error("Server could not be found. Refer to the logs and try again.");
            } else {
                setTelemetry(res);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    return {
        telemetry
    };
}
/* harmony default export */ const hooks_useTelemetry = (useTelemetry);

;// CONCATENATED MODULE: ./components/layout/Layout.tsx















function Layout({ children  }) {
    const { displayBanner , dismissBanner , githubStars  } = hooks_useGithubStarBanner();
    const { loading , data , error , hasNoAccounts , fetch  } = hooks_useGlobalStats();
    const { telemetry  } = hooks_useTelemetry();
    const router = (0,router_.useRouter)();
    const canRender = !error && !hasNoAccounts;
    (0,external_react_.useEffect)(()=>{
        if (telemetry?.telemetry_enabled && environment/* default.production */.Z.production) {
            react_namespaceObject.init({
                dsn: environment/* default.SENTRY_URL */.Z.SENTRY_URL,
                integrations: [
                    new tracing_namespaceObject.BrowserTracing()
                ],
                // We recommend adjusting this value in production, or using tracesSampler
                // for finer control
                tracesSampleRate: 1.0
            });
        }
    }, [
        telemetry
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GlobalAppContext/* default.Provider */.Z.Provider, {
        value: {
            displayBanner,
            dismissBanner,
            loading,
            data,
            error,
            hasNoAccounts,
            fetch
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(banner_Banner, {
                githubStars: githubStars
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: `relative ${displayBanner ? "mt-[145px] min-h-[calc(100vh-145px)]" : "mt-[73px] min-h-[calc(100vh-73px)]"} bg-black-100 p-6 pb-12 xl:px-8 2xl:px-24`,
                children: [
                    canRender && children,
                    hasNoAccounts && /*#__PURE__*/ jsx_runtime_.jsx(EmptyState/* default */.Z, {
                        title: "We could not find a cloud account",
                        message: "It seems you have not connected a cloud account to Komiser. Connect one right now so you can start managing it from your dashboard",
                        action: ()=>{
                            router.push("https://docs.komiser.io/docs/introduction/getting-started?utm_source=komiser&utm_medium=referral&utm_campaign=static");
                        },
                        actionLabel: "Guide to connect account",
                        secondaryAction: ()=>{
                            router.push("https://github.com/tailwarden/komiser/issues/new/choose");
                        },
                        secondaryActionLabel: "Report an issue",
                        mascotPose: "thinking"
                    }),
                    error && /*#__PURE__*/ jsx_runtime_.jsx(ErrorState/* default */.Z, {
                        title: "Network request error",
                        message: "There was an error fetching the cloud accounts. Please refer to the logs for more info and try again.",
                        action: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            size: "lg",
                            style: "secondary",
                            onClick: ()=>router.reload(),
                            children: "Refresh the page"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx



const printHiringMessage = ()=>{
    // eslint-disable-next-line no-console
    console.log(`                                         
  *   )        (                  (              
' )  /(   ) (  )\\(  (      ) (    )\\ )  (        
 ( )(_)( /( )\\((_)\\))(  ( /( )(  (()/( ))\\ (     
(_(_()))(_)((_)_((_)()\\ )(_)(()\\  ((_)/((_))\\ )  
|_   _((_)_ (_| _(()((_((_)_ ((_) _| (_)) _(_/(  
  | | / _' || | \\ V  V / _' | '_/ _' / -_| ' \\)) 
  |_| \\__,_||_|_|\\_/\\_/\\__,_|_| \\__,_\\___|_||_|  

  WE'RE HIRING REMOTELY IN 🇫🇷, 🇵🇹 and 🇩🇪! 
  
  ---> https://jobs.tailwarden.com <---

  `);
};
if (false) {}
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,676,664,621,969], () => (__webpack_exec__(4060)));
module.exports = __webpack_exports__;

})();