/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var Storm;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entities/storm_course/CourseForm.ts":
/*!*************************************************!*\
  !*** ./src/entities/storm_course/CourseForm.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CourseForm\": () => (/* binding */ CourseForm)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nclass CourseForm {\r\n    static addCustomPane(executionContext) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const formContext = executionContext.getFormContext();\r\n            if (!formContext) {\r\n                return;\r\n            }\r\n            let pane = Xrm.App.sidePanes.getPane(\"EnrollmentsPane\");\r\n            if (!pane) {\r\n                pane = yield Xrm.App.sidePanes.createPane({\r\n                    title: \"Course Enrollments\",\r\n                    imageSrc: \"WebResources/storm_/CourseManagement/img/enrollment.svg\",\r\n                    paneId: \"EnrollmentsPane\",\r\n                    canClose: true,\r\n                    width: 400,\r\n                });\r\n            }\r\n            const pageInput = {\r\n                pageType: \"custom\",\r\n                name: \"storm_enrollmentssidepane_da81c\",\r\n                entityName: \"storm_course\",\r\n                recordId: formContext.data.entity.getId(),\r\n            };\r\n            pane.navigate(pageInput);\r\n        });\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50aXRpZXMvc3Rvcm1fY291cnNlL0NvdXJzZUZvcm0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU0sVUFBVTtJQUNyQixNQUFNLENBQU8sYUFBYSxDQUFDLGdCQUF5Qzs7WUFDbEUsTUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdEQsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsT0FBTzthQUNSO1lBRUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7b0JBQ3hDLEtBQUssRUFBRSxvQkFBb0I7b0JBQzNCLFFBQVEsRUFBRSx5REFBeUQ7b0JBQ25FLE1BQU0sRUFBRSxpQkFBaUI7b0JBQ3pCLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRSxHQUFHO2lCQUNYLENBQUMsQ0FBQzthQUNKO1lBRUQsTUFBTSxTQUFTLEdBQThCO2dCQUMzQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsSUFBSSxFQUFFLGlDQUFpQztnQkFDdkMsVUFBVSxFQUFFLGNBQWM7Z0JBQzFCLFFBQVEsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7YUFDMUMsQ0FBQztZQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsQ0FBQztLQUFBO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdG9ybS5Db3Vyc2VNYW5hZ2VtZW50Ly4vc3JjL2VudGl0aWVzL3N0b3JtX2NvdXJzZS9Db3Vyc2VGb3JtLnRzP2MxNzAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvdXJzZUZvcm0ge1xyXG4gIHN0YXRpYyBhc3luYyBhZGRDdXN0b21QYW5lKGV4ZWN1dGlvbkNvbnRleHQ6IFhybS5FdmVudHMuRXZlbnRDb250ZXh0KSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGV4dCA9IGV4ZWN1dGlvbkNvbnRleHQuZ2V0Rm9ybUNvbnRleHQoKTtcclxuXHJcbiAgICBpZiAoIWZvcm1Db250ZXh0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGFuZSA9IFhybS5BcHAuc2lkZVBhbmVzLmdldFBhbmUoXCJFbnJvbGxtZW50c1BhbmVcIik7XHJcbiAgICBpZiAoIXBhbmUpIHtcclxuICAgICAgcGFuZSA9IGF3YWl0IFhybS5BcHAuc2lkZVBhbmVzLmNyZWF0ZVBhbmUoe1xyXG4gICAgICAgIHRpdGxlOiBcIkNvdXJzZSBFbnJvbGxtZW50c1wiLFxyXG4gICAgICAgIGltYWdlU3JjOiBcIldlYlJlc291cmNlcy9zdG9ybV8vQ291cnNlTWFuYWdlbWVudC9pbWcvZW5yb2xsbWVudC5zdmdcIixcclxuICAgICAgICBwYW5lSWQ6IFwiRW5yb2xsbWVudHNQYW5lXCIsXHJcbiAgICAgICAgY2FuQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFnZUlucHV0OiBYcm0uTmF2aWdhdGlvbi5DdXN0b21QYWdlID0ge1xyXG4gICAgICBwYWdlVHlwZTogXCJjdXN0b21cIixcclxuICAgICAgbmFtZTogXCJzdG9ybV9lbnJvbGxtZW50c3NpZGVwYW5lX2RhODFjXCIsXHJcbiAgICAgIGVudGl0eU5hbWU6IFwic3Rvcm1fY291cnNlXCIsXHJcbiAgICAgIHJlY29yZElkOiBmb3JtQ29udGV4dC5kYXRhLmVudGl0eS5nZXRJZCgpLFxyXG4gICAgfTtcclxuXHJcbiAgICBwYW5lLm5hdmlnYXRlKHBhZ2VJbnB1dCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/entities/storm_course/CourseForm.ts\n");

/***/ }),

/***/ "./src/entities/storm_course/CourseRibbon.ts":
/*!***************************************************!*\
  !*** ./src/entities/storm_course/CourseRibbon.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CourseRibbon\": () => (/* binding */ CourseRibbon)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nclass CourseRibbon {\r\n    static openCancelCourseDialog(entityName, selectedIds, dialogId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!selectedIds.length) {\r\n                return;\r\n            }\r\n            const pageInput = {\r\n                pageType: \"custom\",\r\n                name: dialogId,\r\n                entityName: entityName,\r\n                recordId: selectedIds[0],\r\n            };\r\n            const navigationOptions = {\r\n                target: 2,\r\n                position: 1,\r\n                width: { value: 500, unit: \"px\" },\r\n                height: { value: 400, unit: \"px\" },\r\n                title: \"Cancel Course\",\r\n            };\r\n            try {\r\n                const result = yield Xrm.Navigation.navigateTo(pageInput, navigationOptions);\r\n                console.log(result);\r\n            }\r\n            catch (error) {\r\n                // handle error\r\n                console.log(error);\r\n            }\r\n        });\r\n    }\r\n    static openCancelCourseSideDialog(entityName, selectedIds, dialogId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!selectedIds.length) {\r\n                return;\r\n            }\r\n            const pageInput = {\r\n                pageType: \"custom\",\r\n                name: dialogId,\r\n                entityName: entityName,\r\n                recordId: selectedIds[0],\r\n            };\r\n            const navigationOptions = {\r\n                target: 2,\r\n                position: 2,\r\n                width: { value: 20, unit: \"%\" },\r\n                title: \"Cancel Course\",\r\n            };\r\n            try {\r\n                const result = yield Xrm.Navigation.navigateTo(pageInput, navigationOptions);\r\n                console.log(result);\r\n            }\r\n            catch (error) {\r\n                // handle error\r\n                console.log(error);\r\n            }\r\n        });\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50aXRpZXMvc3Rvcm1fY291cnNlL0NvdXJzZVJpYmJvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxZQUFZO0lBQ3ZCLE1BQU0sQ0FBTyxzQkFBc0IsQ0FBQyxVQUFrQixFQUFFLFdBQXFCLEVBQUUsUUFBZ0I7O1lBQzdGLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN2QixPQUFPO2FBQ1I7WUFFRCxNQUFNLFNBQVMsR0FBOEI7Z0JBQzNDLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUUsVUFBVTtnQkFDdEIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDekIsQ0FBQztZQUVGLE1BQU0saUJBQWlCLEdBQXFDO2dCQUMxRCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Z0JBQ2pDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtnQkFDbEMsS0FBSyxFQUFFLGVBQWU7YUFDdkIsQ0FBQztZQUVGLElBQUk7Z0JBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLGVBQWU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQjtRQUNILENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTywwQkFBMEIsQ0FBQyxVQUFrQixFQUFFLFdBQXFCLEVBQUUsUUFBZ0I7O1lBQ2pHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN2QixPQUFPO2FBQ1I7WUFFRCxNQUFNLFNBQVMsR0FBOEI7Z0JBQzNDLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUUsVUFBVTtnQkFDdEIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDekIsQ0FBQztZQUVGLE1BQU0saUJBQWlCLEdBQXFDO2dCQUMxRCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7Z0JBQy9CLEtBQUssRUFBRSxlQUFlO2FBQ3ZCLENBQUM7WUFFRixJQUFJO2dCQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7Z0JBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxlQUFlO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEI7UUFDSCxDQUFDO0tBQUE7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL1N0b3JtLkNvdXJzZU1hbmFnZW1lbnQvLi9zcmMvZW50aXRpZXMvc3Rvcm1fY291cnNlL0NvdXJzZVJpYmJvbi50cz81MzRmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb3Vyc2VSaWJib24ge1xyXG4gIHN0YXRpYyBhc3luYyBvcGVuQ2FuY2VsQ291cnNlRGlhbG9nKGVudGl0eU5hbWU6IHN0cmluZywgc2VsZWN0ZWRJZHM6IHN0cmluZ1tdLCBkaWFsb2dJZDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXNlbGVjdGVkSWRzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFnZUlucHV0OiBYcm0uTmF2aWdhdGlvbi5DdXN0b21QYWdlID0ge1xyXG4gICAgICBwYWdlVHlwZTogXCJjdXN0b21cIixcclxuICAgICAgbmFtZTogZGlhbG9nSWQsXHJcbiAgICAgIGVudGl0eU5hbWU6IGVudGl0eU5hbWUsXHJcbiAgICAgIHJlY29yZElkOiBzZWxlY3RlZElkc1swXSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2aWdhdGlvbk9wdGlvbnM6IFhybS5OYXZpZ2F0aW9uLk5hdmlnYXRpb25PcHRpb25zID0ge1xyXG4gICAgICB0YXJnZXQ6IDIsXHJcbiAgICAgIHBvc2l0aW9uOiAxLFxyXG4gICAgICB3aWR0aDogeyB2YWx1ZTogNTAwLCB1bml0OiBcInB4XCIgfSxcclxuICAgICAgaGVpZ2h0OiB7IHZhbHVlOiA0MDAsIHVuaXQ6IFwicHhcIiB9LFxyXG4gICAgICB0aXRsZTogXCJDYW5jZWwgQ291cnNlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFhybS5OYXZpZ2F0aW9uLm5hdmlnYXRlVG8ocGFnZUlucHV0LCBuYXZpZ2F0aW9uT3B0aW9ucyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIG9wZW5DYW5jZWxDb3Vyc2VTaWRlRGlhbG9nKGVudGl0eU5hbWU6IHN0cmluZywgc2VsZWN0ZWRJZHM6IHN0cmluZ1tdLCBkaWFsb2dJZDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXNlbGVjdGVkSWRzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFnZUlucHV0OiBYcm0uTmF2aWdhdGlvbi5DdXN0b21QYWdlID0ge1xyXG4gICAgICBwYWdlVHlwZTogXCJjdXN0b21cIixcclxuICAgICAgbmFtZTogZGlhbG9nSWQsXHJcbiAgICAgIGVudGl0eU5hbWU6IGVudGl0eU5hbWUsXHJcbiAgICAgIHJlY29yZElkOiBzZWxlY3RlZElkc1swXSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2aWdhdGlvbk9wdGlvbnM6IFhybS5OYXZpZ2F0aW9uLk5hdmlnYXRpb25PcHRpb25zID0ge1xyXG4gICAgICB0YXJnZXQ6IDIsXHJcbiAgICAgIHBvc2l0aW9uOiAyLFxyXG4gICAgICB3aWR0aDogeyB2YWx1ZTogMjAsIHVuaXQ6IFwiJVwiIH0sXHJcbiAgICAgIHRpdGxlOiBcIkNhbmNlbCBDb3Vyc2VcIixcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgWHJtLk5hdmlnYXRpb24ubmF2aWdhdGVUbyhwYWdlSW5wdXQsIG5hdmlnYXRpb25PcHRpb25zKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGhhbmRsZSBlcnJvclxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/entities/storm_course/CourseRibbon.ts\n");

/***/ }),

/***/ "./src/entries/CourseLibrary.ts":
/*!**************************************!*\
  !*** ./src/entries/CourseLibrary.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CourseForm\": () => (/* reexport safe */ _entities_storm_course_CourseForm__WEBPACK_IMPORTED_MODULE_1__.CourseForm),\n/* harmony export */   \"CourseRibbon\": () => (/* reexport safe */ _entities_storm_course_CourseRibbon__WEBPACK_IMPORTED_MODULE_0__.CourseRibbon)\n/* harmony export */ });\n/* harmony import */ var _entities_storm_course_CourseRibbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/storm_course/CourseRibbon */ \"./src/entities/storm_course/CourseRibbon.ts\");\n/* harmony import */ var _entities_storm_course_CourseForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/storm_course/CourseForm */ \"./src/entities/storm_course/CourseForm.ts\");\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50cmllcy9Db3Vyc2VMaWJyYXJ5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBcUU7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL1N0b3JtLkNvdXJzZU1hbmFnZW1lbnQvLi9zcmMvZW50cmllcy9Db3Vyc2VMaWJyYXJ5LnRzPzY1ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgQ291cnNlUmliYm9uIH0gZnJvbSBcIi4uL2VudGl0aWVzL3N0b3JtX2NvdXJzZS9Db3Vyc2VSaWJib25cIjtcclxuZXhwb3J0IHsgQ291cnNlRm9ybSB9IGZyb20gXCIuLi9lbnRpdGllcy9zdG9ybV9jb3Vyc2UvQ291cnNlRm9ybVwiO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/entries/CourseLibrary.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entries/CourseLibrary.ts");
/******/ 	((Storm = typeof Storm === "undefined" ? {} : Storm).CourseManagement = Storm.CourseManagement || {}).CourseLibrary = __webpack_exports__;
/******/ 	
/******/ })()
;