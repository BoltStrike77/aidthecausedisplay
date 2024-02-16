"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function getStaticProps({ query  }) {\n    // Auth\n    const auth = await googleapis__WEBPACK_IMPORTED_MODULE_1__.google.auth.getClient({\n        scopes: [\n            \"https://www.googleapis.com/auth/spreadsheets.readonly\"\n        ]\n    });\n    const sheets = googleapis__WEBPACK_IMPORTED_MODULE_1__.google.sheets({\n        version: \"v4\",\n        auth\n    });\n    // Query\n    const { id  } = 0;\n    const range = `Sheet1!F:F`;\n    // const totCol = await sheets.spreadsheets.values.get({\n    //   spreadsheetId: process.env.SHEET_ID,\n    //   tot,\n    // });\n    const response = await sheets.spreadsheets.values.get({\n        spreadsheetId: process.env.SHEET_ID,\n        range\n    });\n    // Result\n    const data = response.data.values;\n    const totalVal = parseInt(data.slice(-1)[0][0]) * 4;\n    return {\n        props: {\n            totalVal\n        }\n    };\n}\nfunction Post({ totalVal  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"outer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"total-txt\",\n            children: \"$\" + totalVal\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\advay\\\\Desktop\\\\Coding\\\\GitHub Desktop\\\\aidthecausedisplay\\\\pages\\\\index.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\advay\\\\Desktop\\\\Coding\\\\GitHub Desktop\\\\aidthecausedisplay\\\\pages\\\\index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFvQztBQUU3QixlQUFlQyxlQUFlLEVBQUVDLE1BQUssRUFBRSxFQUFFO0lBRTlDLE9BQU87SUFDUCxNQUFNQyxPQUFPLE1BQU1ILDZEQUFxQixDQUFDO1FBQUVLLFFBQVE7WUFBQztTQUF3RDtJQUFDO0lBRTdHLE1BQU1DLFNBQVNOLHFEQUFhLENBQUM7UUFBRU8sU0FBUztRQUFNSjtJQUFLO0lBRW5ELFFBQVE7SUFFUixNQUFNLEVBQUVLLEdBQUUsRUFBRSxHQUFHO0lBQ2YsTUFBTUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUUxQix3REFBd0Q7SUFDeEQseUNBQXlDO0lBQ3pDLFNBQVM7SUFDVCxNQUFNO0lBRU4sTUFBTUMsV0FBVyxNQUFNSixPQUFPSyxZQUFZLENBQUNDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO1FBQ3BEQyxlQUFlQyxRQUFRQyxHQUFHLENBQUNDLFFBQVE7UUFDbkNSO0lBQ0Y7SUFJQSxTQUFTO0lBRVQsTUFBTVMsT0FBT1IsU0FBU1EsSUFBSSxDQUFDTixNQUFNO0lBQ2pDLE1BQU1PLFdBQVdDLFNBQVNGLEtBQUtHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJO0lBRWxELE9BQU87UUFDSEMsT0FBTztZQUNISDtRQUVKO0lBQ0o7QUFDRixDQUFDO0FBRWMsU0FBU0ksS0FBSyxFQUFFSixTQUFRLEVBQUUsRUFBRTtJQUN6QyxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFBYSxNQUFNTjs7Ozs7Ozs7Ozs7QUFHeEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ29vZ2xlIH0gZnJvbSAnZ29vZ2xlYXBpcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBxdWVyeSB9KSB7XHJcblxyXG4gIC8vIEF1dGhcclxuICBjb25zdCBhdXRoID0gYXdhaXQgZ29vZ2xlLmF1dGguZ2V0Q2xpZW50KHsgc2NvcGVzOiBbJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzLnJlYWRvbmx5J10gfSk7XHJcblxyXG4gIGNvbnN0IHNoZWV0cyA9IGdvb2dsZS5zaGVldHMoeyB2ZXJzaW9uOiAndjQnLCBhdXRoIH0pO1xyXG5cclxuICAvLyBRdWVyeVxyXG5cclxuICBjb25zdCB7IGlkIH0gPSAwO1xyXG4gIGNvbnN0IHJhbmdlID0gYFNoZWV0MSFGOkZgO1xyXG5cclxuICAvLyBjb25zdCB0b3RDb2wgPSBhd2FpdCBzaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5nZXQoe1xyXG4gIC8vICAgc3ByZWFkc2hlZXRJZDogcHJvY2Vzcy5lbnYuU0hFRVRfSUQsXHJcbiAgLy8gICB0b3QsXHJcbiAgLy8gfSk7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuZ2V0KHtcclxuICAgIHNwcmVhZHNoZWV0SWQ6IHByb2Nlc3MuZW52LlNIRUVUX0lELFxyXG4gICAgcmFuZ2UsXHJcbiAgfSk7XHJcblxyXG4gIFxyXG5cclxuICAvLyBSZXN1bHRcclxuXHJcbiAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGEudmFsdWVzO1xyXG4gIGNvbnN0IHRvdGFsVmFsID0gcGFyc2VJbnQoZGF0YS5zbGljZSgtMSlbMF1bMF0pICogNDtcclxuXHJcbiAgcmV0dXJuIHsgXHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICB0b3RhbFZhbCxcclxuICAgICAgICAgIC8vIHRvdGFsVmFsLFxyXG4gICAgICB9IFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHRvdGFsVmFsIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J291dGVyJz4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvdGFsLXR4dCc+e1wiJFwiICsgdG90YWxWYWx9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJnb29nbGUiLCJnZXRTdGF0aWNQcm9wcyIsInF1ZXJ5IiwiYXV0aCIsImdldENsaWVudCIsInNjb3BlcyIsInNoZWV0cyIsInZlcnNpb24iLCJpZCIsInJhbmdlIiwicmVzcG9uc2UiLCJzcHJlYWRzaGVldHMiLCJ2YWx1ZXMiLCJnZXQiLCJzcHJlYWRzaGVldElkIiwicHJvY2VzcyIsImVudiIsIlNIRUVUX0lEIiwiZGF0YSIsInRvdGFsVmFsIiwicGFyc2VJbnQiLCJzbGljZSIsInByb3BzIiwiUG9zdCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();