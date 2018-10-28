/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"../../node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_hacker_guide_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/hacker-guide.md */ \"./pages/hacker-guide.md\");\n/* harmony import */ var _pages_hacker_guide_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_hacker_guide_md__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: _pages_hacker_guide_md__WEBPACK_IMPORTED_MODULE_3___default.a\n  });\n};\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\"content\"));\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./pages/hacker-guide.md":
/*!*******************************!*\
  !*** ./pages/hacker-guide.md ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"## Dear Hacker,\\r\\n\\r\\nWe’re super excited to have you at VandyHacks V from November 2nd-4th! In this document, we’ve included some basics to hackathons, logistics, the schedule, tech talk descriptions, mentor information, hardware/API/credits, and prizes. Should you have any questions, feel free to email info@vandyhacks.org.\\r\\n\\r\\nFor a live schedule and important info, head over to our [day-of page](live.vandyhacks.org). Now, let's jump right into things!\\r\\n\\r\\n# What is a hackathon?\\r\\n\\r\\nA hackathon is a sprint of innovation. The purpose is to meet new friends, learn new skills, and connect with potential employers. This still holds true whether it’s your first or 50th hackathon. If you’ve never done a hackathon before, you’re in for a treat. Never made your own website before? Check out our Web Dev beginner workshop track! Always wanted to create a virtual reality game? Stop by our hardware lab and get started! We’ve provided you with free food, travel, hardware, and mentors – everything you need to have an amazing weekend.\\r\\n\\r\\n# What to Bring\\r\\n\\r\\nWe’ll have a sleeping room with sleeping bags and mats, so bring a pillow! We’ll also be making a visit to Vanderbilt’s Recreation Center to use their showers on Saturday, so make sure you have a towel and any shower supplies. If you want to rent any hardware, a government-issued ID is required, no exceptions. Please do not bring weapons, drugs, or alcohol. If you’re not sure, please ask us ahead of time!\\r\\n\\r\\n- **Student ID** (required) + government ID\\r\\n- Social Security number (if you win a prize!)\\r\\n- Laptop and Phone\\r\\n- Chargers\\r\\n- Extra clothes (bring lots of layers!)\\r\\n- Pillow\\r\\n- Toiletries (shampoo, toothbrush + toothpaste, deodorant, towel, shower shoes)\\r\\n\\r\\n# How to Prepare\\r\\n\\r\\n- Read this guide completely. Familiarize yourself with the APIs and hardware. Make sure you understand the schedule and venue. You don’t want any logistics to distract you while you’re “in the zone” this weekend, so get all of your the questions out of the way beforehand!\\r\\n\\r\\n- Join the VandyHacks Facebook event [here](https://www.facebook.com/events/270869640227150/). Use this event page to share ideas, ask for help, team up for adventures, and meet new friends. The event page is here.\\r\\n\\r\\n- Join our Slack [here](). Use this link to join our workspace. We’ll be using Slack for important announcements, live updates, and connecting you with our technical mentors.\\r\\n\\r\\n- Look at previous projects. All of the projects from VandyHacks I, II, III, and IV can be found here: [VH1](https://vandyhacks.devpost.com/submissions), [VH2](https://vandyhacks2.devpost.com/submissions), [VH3]( https://vandyhacks3.devpost.com/submissions), and [VH4](https://vandyhacks4.devpost.com/submissions).\\r\\n\\r\\n- Get your homework done. This may sound silly, but double-check that you have all of your work done for Monday. You’ll be exhausted, so make sure to do it before or earlier in the weekend.\\r\\n\\r\\n# Finding a Team\\r\\n\\r\\nThere are a couple of ways to find a team. If you join our Facebook event, listed above, you can post to see if anyone wants to work on your idea with you. If you don’t have an idea, that’s OK too! Just post and say your background, any languages or technical experience you have, and say you’re looking for a team. Remember that everyone is in the same boat – don’t be afraid to put yourself out there!\\r\\n\\r\\nWe will be providing a Slack channel to help facilitate team creation, as well as a meetup session right after the opening ceremony.\\r\\n\\r\\n# Electronics\\r\\n\\r\\nYou can use our WiFi by connecting to the network with SSID “vummiv”. If you’re having trouble, check out this webpage for troubleshooting.\\r\\n\\r\\nWe will also have power strips and ethernet cords available at our hardware desk for checkout. Ethernet ports will be active on the third floor.\\r\\n\\r\\n# Sleeping & Eating\\r\\n\\r\\nWe will have a sleeping room on the third floor of the Wondr’y with sleeping bags, so bring a pillow! Free food and drink will be provided. If you have any dietary restrictions, please confirm with an organizer or volunteer before getting meals. Those with dietary restrictions will eat first, so please be there early if you need special accommodation.\\r\\n\\r\\n# Composting\\r\\n\\r\\nThis year, we're super excited to have composting available!\\r\\n\\r\\nPlease make sure to place the following items into compost bins:\\r\\n\\r\\n- Food scraps/leftovers\\r\\n\\r\\n# Opening Ceremony\\r\\n\\r\\nOpening ceremony will be held at Langford Auditorium. You’ll hear from our sponsors and get all of the logistics for the weekend. We’ll cover what a hackathon is, how to get the most out of your weekend, prizes, mentors, and hardware. By the end of the opening ceremony, you’ll have everything you need to get hacking!\\r\\n\\r\\n# Closing Ceremony\\r\\n\\r\\nClosing ceremony will be held in the Student Life Center. The top six teams will present to a panel of guest judges at the closing ceremony. From these six, judges will pick overall first, second, and third winners of VandyHacks. All prizes will be awarded at this time. Buses will leave immediately following the ceremony.\\r\\n\\r\\n# Prizes\\r\\n\\r\\nThe members of the top three teams selected by our judges will pick from a pool of prizes:  Amazon gift cards, pairs of Sennheiser headphones, or Nintendo Switches. Each member of the winning groups will pick from the pool. Here are our prize categories:\\r\\n\\r\\n- Best Overall - \\r\\n\\r\\n- Best Overall Runner Up - \\r\\n\\r\\n- Best Beginner Hack - \\r\\n\\r\\n- Best Workshop Hack - \\r\\n\\r\\n- Hack For A Cause - \\r\\n\\r\\n# Submitting Your Project\\r\\n\\r\\nYou have a finished project, YAY! You will be submitting hard work online via Devpost, at vandyhacksiv.devpost.com. All submissions are due by 10AM on Sunday, so be aware of the time because you will not be allowed to submit afterwards. Please register on Devpost and join the hackathon here. You will be asked to write a title and short description for your project, along with what prizes your project is eligible to win. A video is optional, but highly recommended! Remember, this is something you can show off to recruiters, family, and friends in the future!\\r\\n\\r\\n# Presenting Your Project\\r\\n\\r\\nAfter everyone has submitted their project, you will get a chance to present yours during the expo round! The expo will take place in the Wond’ry starting at 10:00 AM on Sunday. Your team will be assigned a table number, so make sure you get to your table early so that you can smooth out any technical difficulties. We’ll have power strips ready for you, but be sure to have a demo and your pitch planned out. If you’re not sure how to demo, don’t worry! We’ll be hosting a tech talk teaching you how to present your project to judges and other hackers.\\r\\n\\r\\nIn order to encourage people to check out other teams’ projects, we require that only one team member be at the table each time. Walk around, check out other projects, and ask them questions! Plan with your team how you want to rotate shifts. If your presentation absolutely needs more than one member at a time, please talk to an organizer first.\\r\\n\\r\\nDuring the expo, judges will be walking around to score your project. This is when they will pick the top 6 hacks for the weekend (and winners of our sponsor categories), so be friendly, have a demo ready, and be prepared to answer any questions they ask you!\\r\\n\\r\\n# Reimbursements\\r\\n\\r\\nIn order to receive travel reimbursement, you must have already been contacted and had the reimbursement confirmed. You will also need to fill out a form on Saturday at the event, so make sure you’ve filled it out before you leave. You will need to know your social security number to complete the form, so have it ready to go. Check out our travel reimbursement polciy here:\\r\\n\\r\\n# Parking\\r\\n\\r\\nParking will be provided free of charge at the 25th Avenue Parking Garage located at 2461 Highland Ave, Nashville, TN 37212. Please use the Highland Avenue entrance, located along Highland Ave between 25th Ave S and 24th Ave S. Park in any non-reserved Zone 3 parking space.\\r\\n*pic of parking garage*\\r\\n\\r\\n# Venue\\r\\n\\r\\nVandyHacks will be hosted in The Wond’ry and Vanderbilt’s Engineering and Science Building (they’re the same building) located directly across the street from the 25th Avenue Garage. Just in case, here’s the address:\\r\\n\\r\\n2414 Highland Avenue\\r\\nNashville, TN, 37212\\r\\n*pic of wondry*\\r\\n\\r\\n*walking map*\\r\\n\\r\\n# Code of Conduct\\r\\n\\r\\nBy attending VandyHacks, you agree to abide by the MLH Code of Conduct. If you’d like to review the Code of Conduct, it can be found here.\\r\\n\\r\\n# Event Descriptions\\r\\n\\r\\n- Pitch Session - Meet with other hackers and form teams\\r\\n\\r\\n- Beginner Workshop - Learn how to use Git and Github to collaborate with your teammates\\r\\n\\r\\n- Tech Talks (Switch Sessions, Beginner, Intermediate, and Advanced Sessions) - Come learn something new or brush up your hacking skills. Survey the four options at the beginner switch session, then learn one of the following: Web Development, Unity Game Engine, Android Development, or Arduino Hacking\\r\\n\\r\\n- BOS Sponsor Talk -\\r\\n\\r\\n- MicroStrategy Sponsor Talk - \\r\\n\\r\\n- Fulcrum GT Sponsor Talk - \\r\\n\\r\\n- ___ Sponsor Talk - \\r\\n\\r\\n- ___ Sponsor Talk - \\r\\n\\r\\n- ___ Sponsor Talk - \\r\\n\\r\\n- ___ Sponsor Talk - \\r\\n\\r\\n- ___ Sponsor Talk - \\r\\n\\r\\n- Wellness Night - Join the VandyHacks team for a relaxing night of massages and a hand spa\\r\\n\\r\\n- Cup Stacking - Compete to build the tallest cup tower! Hosted by MLH and the VandyHacks team\\r\\n\\r\\n- Women in Computing Smoothie Night - \\r\\n\\r\\n- How to Demo Talk - Learn how to present your project’s best face before demoing\\r\\n\\r\\n# Emergencies\\r\\n\\r\\nWhile we don’t expect any problems, if you should see anything that requires our immediate attention, please feel free to contact our organizing team through the #emergencies channel on slack, or find someone wearing the green organizer shirt. For extreme circumstances, call Vanderbilt Police Department at (615) 322-2745. If someone is hurt, please call 911.\\r\\n\"\n\n//# sourceURL=webpack:///./pages/hacker-guide.md?");

/***/ })

/******/ });