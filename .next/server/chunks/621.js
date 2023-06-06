"use strict";
exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 7091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_LoadingSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7208);


function Button({ children , type ="button" , style ="primary" , size ="md" , disabled , loading , align , gap , transition =true , onClick  }) {
    const xxs = "p-1";
    const xs = "py-2 px-4";
    const sm = "py-2.5 px-6";
    const md = "py-3.5 px-6";
    const lg = "py-4 px-6";
    function handleSize() {
        let buttonSize;
        if (size === "xxs") buttonSize = xxs;
        if (size === "xs") buttonSize = xs;
        if (size === "sm") buttonSize = sm;
        if (size === "md") buttonSize = md;
        if (size === "lg") buttonSize = lg;
        return buttonSize;
    }
    const base = `${handleSize()} rounded flex items-center ${align ? "justify-start" : "justify-center "} ${gap ? "gap-3" : "gap-1"}  text-sm font-medium box-border w-full sm:w-auto disabled:cursor-not-allowed ${transition ? "transition-colors" : ""}`;
    const primary = `${base} font-semibold bg-gradient-to-br from-primary bg-secondary hover:bg-primary active:from-secondary active:bg-secondary text-white disabled:from-primary disabled:bg-secondary disabled:opacity-50`;
    const secondary = `${base} bg-transparent text-primary border-[1.5px] border-primary hover:bg-komiser-130 active:bg-komiser-200 active:text-primary disabled:bg-transparent disabled:opacity-50`;
    const ghost = `${base} bg-transparent hover:bg-black-100 active:bg-black-400/20 text-black-800  disabled:bg-transparent disabled:opacity-50`;
    const text = `font-semibold text-sm text-komiser-700 hover:underline active:text-black-800`;
    const dropdown = `text-sm font-medium flex items-center gap-2 justify-start p-2 bg-transparent text-black-400 hover:bg-black-150 active:bg-black-200 rounded disabled:bg-transparent disabled:opacity-50`;
    const deleteStyle = `${base} border-[1.5px] border-error-600 text-error-600 hover:bg-error-100 active:bg-error-600/20 disabled:opacity-50`;
    function handleStyle() {
        let buttonStyle;
        if (style === "primary") buttonStyle = primary;
        if (style === "secondary") buttonStyle = secondary;
        if (style === "ghost") buttonStyle = ghost;
        if (style === "text") buttonStyle = text;
        if (style === "dropdown") buttonStyle = dropdown;
        if (style === "delete") buttonStyle = deleteStyle;
        return buttonStyle;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: type,
        onClick: onClick,
        className: handleStyle(),
        disabled: disabled || loading,
        "data-testid": style,
        children: [
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_LoadingSpinner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            children
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 7208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function LoadingSpinner() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: "h-5 w-5 animate-spin text-inherit",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "data-testid": "loading-spinner",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSpinner);


/***/ }),

/***/ 6696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialContext = {
    displayBanner: false,
    dismissBanner: ()=>{},
    loading: false,
    data: undefined,
    error: false,
    hasNoAccounts: false,
    fetch: ()=>{}
};
const GlobalAppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialContext);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalAppContext);


/***/ }),

/***/ 8393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const environment = {
    production: false,
    API_URL: process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : "",
    GA_TRACKING_ID: "G-9HF3HT6S6W",
    SENTRY_URL: "https://b4b98ad60a89468284cf8aa5d66cf2cd@o1267000.ingest.sentry.io/4504797672701952"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (environment);


/***/ }),

/***/ 6250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8393);

const BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__/* ["default"].API_URL */ .Z.API_URL;
function settings(arg, payload) {
    const settingsObj = {
        method: undefined,
        headers: {
            "Content-Type": "application/json"
        },
        body: undefined
    };
    if (arg === "GET") {
        settingsObj.method = "GET";
        delete settingsObj.body;
    }
    if (arg === "PUT") {
        settingsObj.method = "PUT";
        delete settingsObj.body;
    }
    if (arg === "PUT" && payload) {
        settingsObj.method = "PUT";
        settingsObj.body = payload;
    }
    if (arg === "POST") {
        settingsObj.method = "POST";
        delete settingsObj.body;
    }
    if (arg === "POST" && payload) {
        settingsObj.method = "POST";
        settingsObj.body = payload;
    }
    if (arg === "DELETE") {
        settingsObj.method = "DELETE";
    }
    return settingsObj;
}
const settingsService = {
    async getGlobalStats () {
        try {
            const res = await fetch(`${BASE_URL}/global/stats`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getTelemetry () {
        try {
            const res = await fetch(`${BASE_URL}/telemetry`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getGlobalLocations () {
        try {
            const res = await fetch(`${BASE_URL}/global/locations`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getGlobalResources (payload) {
        try {
            const res = await fetch(`${BASE_URL}/global/resources`, settings("POST", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getCostExplorer (payload) {
        try {
            const res = await fetch(`${BASE_URL}/costs/explorer`, settings("POST", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getInventory (urlParams, payload = "[]") {
        try {
            const res = await fetch(`${BASE_URL}/resources/search${urlParams}`, settings("POST", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getInventoryStats () {
        try {
            const res = await fetch(`${BASE_URL}/stats`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getFilteredInventoryStats (payload) {
        try {
            const res = await fetch(`${BASE_URL}/stats/search`, settings("POST", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async saveTags (serviceId, payload) {
        try {
            const res = await fetch(`${BASE_URL}/resources/${serviceId}/tags`, settings("POST", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async bulkSaveTags (payload) {
        try {
            const res = await fetch(`${BASE_URL}/resources/tags`, settings("POST", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getProviders () {
        try {
            const res = await fetch(`${BASE_URL}/providers`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getAccounts () {
        try {
            const res = await fetch(`${BASE_URL}/accounts`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getRegions () {
        try {
            const res = await fetch(`${BASE_URL}/regions`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getServices () {
        try {
            const res = await fetch(`${BASE_URL}/services`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getViews () {
        try {
            const res = await fetch(`${BASE_URL}/views`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getHiddenResourcesFromView (id) {
        try {
            const res = await fetch(`${BASE_URL}/views/${id}/hidden/resources`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async hideResourceFromView (id, payload) {
        try {
            const res = await fetch(`${BASE_URL}/views/${id}/resources/hide`, settings("POST", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async unhideResourceFromView (id, payload) {
        try {
            const res = await fetch(`${BASE_URL}/views/${id}/resources/unhide`, settings("POST", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async saveView (payload) {
        try {
            const res = await fetch(`${BASE_URL}/views`, settings("POST", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async updateView (id, payload) {
        try {
            const res = await fetch(`${BASE_URL}/views/${id}`, settings("PUT", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async deleteView (id) {
        try {
            const res = await fetch(`${BASE_URL}/views/${id}`, settings("DELETE"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async getSlackIntegration () {
        try {
            const res = await fetch(`${BASE_URL}/slack`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async testEndpoint (endpoint) {
        if (!endpoint) return {
            success: false,
            message: "Endpoint is required."
        };
        try {
            const response = await fetch(`${BASE_URL}/alerts/test`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: endpoint
                })
            });
            const data = await response.json();
            return data;
        } catch  {
            return {
                success: false,
                message: "Something went wrong!"
            };
        }
    },
    async getAlertsFromAView (id) {
        try {
            const res = await fetch(`${BASE_URL}/views/${id}/alerts`, settings("GET"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async createAlert (payload) {
        try {
            const res = await fetch(`${BASE_URL}/alerts`, settings("POST", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async editAlert (id, payload) {
        try {
            const res = await fetch(`${BASE_URL}/alerts/${id}`, settings("PUT", payload));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    async deleteAlert (id) {
        try {
            const res = await fetch(`${BASE_URL}/alerts/${id}`, settings("DELETE"));
            const data = await res.json();
            return data;
        } catch (error) {
            return Error;
        }
    },
    exportCSV (id) {
        return window.location.replace(`${BASE_URL}/resources/export-csv${id ? `/${id}` : ""}`);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settingsService);


/***/ }),

/***/ 8978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function formatNumber(number, display) {
    if (display === "full") {
        return new Intl.NumberFormat(undefined, {
            notation: "standard"
        }).format(number);
    }
    if (display === "currency") {
        return new Intl.NumberFormat("en-US", {
            notation: "compact",
            compactDisplay: "short",
            style: "currency",
            currency: "USD"
        }).format(number);
    }
    return new Intl.NumberFormat(undefined, {
        notation: "compact",
        compactDisplay: "short"
    }).format(number);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatNumber);


/***/ })

};
;