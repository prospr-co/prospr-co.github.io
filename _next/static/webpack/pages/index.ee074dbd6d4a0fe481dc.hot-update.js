webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Footer */ "./components/Footer.jsx");
/* harmony import */ var components_EmailSignup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/EmailSignup */ "./components/EmailSignup.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "B:\\workspace\\prospr-landing-page\\pages\\index.js",
    _this = undefined;








var FeatureCard = function FeatureCard(_ref) {
  var title = _ref.title,
      children = _ref.children,
      icon = _ref.icon;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featureCard,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featureCardImage,
      src: icon,
      width: 36,
      height: 36,
      alt: "Feature Icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, _this);
};

_c = FeatureCard;

var SectionHeader = function SectionHeader(_ref2) {
  var children = _ref2.children,
      _ref2$center = _ref2.center,
      center = _ref2$center === void 0 ? false : _ref2$center,
      _ref2$padded = _ref2.padded,
      padded = _ref2$padded === void 0 ? false : _ref2$padded;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sectionHeader, center && styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.centered, padded && styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.padded),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, _this);
};

_c2 = SectionHeader;

var hashString = function hashString(s) {
  var hash = 0,
      i,
      chr;
  if (s.length === 0) return hash;

  for (i = 0; i < s.length; i++) {
    chr = s.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};

var FeatureSection = function FeatureSection(_ref3) {
  var title = _ref3.title,
      className = _ref3.className,
      children = _ref3.children,
      imageSrc = _ref3.imageSrc,
      imageAlt = _ref3.imageAlt,
      _ref3$left = _ref3.left,
      left = _ref3$left === void 0 ? false : _ref3$left,
      width = _ref3.width,
      height = _ref3.height;
  var hash = hashString(title);

  var renderedImage = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imagePanel,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: imageSrc,
        alt: imageAlt,
        width: width,
        height: height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.valueSection),
    children: [!left && renderedImage, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.infoPanel, styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.left),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SectionHeader, {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), left && renderedImage]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_c3 = FeatureSection;

var Home = function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Prospr"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bodyContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hero,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroTextContainer,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroTitle,
              children: "The donor management tool you'll love using"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroSubtitle,
              children: "From the first contact to the final donation, Prospr helps you engage your donors, all without making it feel like a chore."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn btn-primary btn-large",
            href: "#bookDemo",
            children: "Book a demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.productImageContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/hero_img.png",
            alt: "Prospr Product Image",
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.productImage,
            width: 1189,
            height: 963
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBanner,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBannerText,
            children: "Trusted by professionals from these organizations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersList,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/logos_orgs/tourette_canada.png",
                alt: "Tourette Canada",
                width: 181,
                height: 74
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/logos_orgs/cof.png",
                alt: "Company of Fools",
                width: 158,
                height: 72
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/logos_orgs/our_place.png",
                alt: "Our Place",
                width: 259,
                height: 72
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/logos_orgs/mr.png",
                alt: "Manuels River",
                width: 200,
                height: 72
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dividerHorizontal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: "features",
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresTagline,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SectionHeader, {
            center: true,
            padded: true,
            children: "Use Prospr to build better relationships with donors"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.strengthenRelationshipsPanel,
          title: "Strengthen donor relationships",
          imageSrc: "/donor_profile.png",
          alt: "Sample donor profile",
          width: 1000,
          height: 571,
          children: "It can be challenging to build relationships with donors. Cut through the hassle and create informative donor profiles to guide your fundraising process."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.engagePanel,
          title: "Effectively engage with your donors",
          imageSrc: "/journey_builder.png",
          alt: "Journey Builder Demo Image",
          width: 1084,
          height: 619,
          left: true,
          children: "Missing out on opportunities with donors can be frustrating. Plan your donor interactions in advance so you can make the most of every opportunity."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.onlineDonationsPanel,
          title: "Improve online giving",
          imageSrc: "/donations.png",
          alt: "Sample donation form",
          width: 1084,
          height: 619,
          children: "Don't risk losing your donors at the finish line. Use our customizeable donation forms to provide a better donor experience and convert more often."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSection,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresTitleContainer,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SectionHeader, {
              center: true,
              children: "All your favorite features in a single tool"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSubTitle,
              children: "Designed and optimized for better fundraising."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresGrid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Cloud hosted",
              icon: "icons/cloud.svg",
              children: "No software updates, no maintenance. All you need is an modern web browser."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Simple setup",
              icon: "icons/settings.svg",
              children: "Start managing your data and building donor journeys with a few simple clicks."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Countless integrations",
              icon: "icons/grid.svg",
              children: "Simplify your processes. Connect to existing tools that you use and reduce manual work."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Security first",
              icon: "icons/lock.svg",
              children: "Keep your data secure with a reliable database (hosted with MongoDB Atlas\u2122)."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Better collaboration",
              icon: "icons/collaboration.svg",
              children: "Reduce miscommunication. Instantly sync your work across your organization."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Easy-to-use",
              icon: "icons/checkmark.svg",
              children: "With our software, you don\u2019t need to worry about additional training to get the job done."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testimonial,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contentWrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\"I have always understood the importance of data, but I was never eager to utilize it until working with Prospr. The way the database has mapped out and turned donor engagement into a visual process is refreshing for anyone working in this field.\""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userName,
                children: "Ryan Ill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userJob,
                children: "Fundraising Officer at Our Place KW"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/our_place.png",
              alt: "Our Place Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: "bookDemo",
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.finalCtaPanel,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.background
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_EmailSignup__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};

_c4 = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "FeatureCard");
$RefreshReg$(_c2, "SectionHeader");
$RefreshReg$(_c3, "FeatureSection");
$RefreshReg$(_c4, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRmVhdHVyZUNhcmQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInN0eWxlcyIsImZlYXR1cmVDYXJkIiwiZmVhdHVyZUNhcmRJbWFnZSIsIlNlY3Rpb25IZWFkZXIiLCJjZW50ZXIiLCJwYWRkZWQiLCJjbGFzc05hbWVzIiwic2VjdGlvbkhlYWRlciIsImNlbnRlcmVkIiwiaGFzaFN0cmluZyIsInMiLCJoYXNoIiwiaSIsImNociIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJGZWF0dXJlU2VjdGlvbiIsImNsYXNzTmFtZSIsImltYWdlU3JjIiwiaW1hZ2VBbHQiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZW5kZXJlZEltYWdlIiwiaW1hZ2VQYW5lbCIsImltYWdlQ29udGFpbmVyIiwidmFsdWVTZWN0aW9uIiwiaW5mb1BhbmVsIiwiSG9tZSIsImNvbnRhaW5lciIsImJvZHlDb250YWluZXIiLCJtYWluIiwiaGVybyIsImhlcm9UZXh0Q29udGFpbmVyIiwiaGVyb1RpdGxlIiwiaGVyb1N1YnRpdGxlIiwicHJvZHVjdEltYWdlQ29udGFpbmVyIiwicHJvZHVjdEltYWdlIiwidXNlcnNCYW5uZXIiLCJ1c2Vyc0Jhbm5lclRleHQiLCJ1c2Vyc0xpc3QiLCJ1c2Vyc0xvZ29XcmFwcGVyIiwiZGl2aWRlckhvcml6b250YWwiLCJmZWF0dXJlc1RhZ2xpbmUiLCJzdHJlbmd0aGVuUmVsYXRpb25zaGlwc1BhbmVsIiwiZW5nYWdlUGFuZWwiLCJvbmxpbmVEb25hdGlvbnNQYW5lbCIsImZlYXR1cmVzU2VjdGlvbiIsImZlYXR1cmVzVGl0bGVDb250YWluZXIiLCJmZWF0dXJlc1N1YlRpdGxlIiwiZmVhdHVyZXNHcmlkIiwidGVzdGltb25pYWwiLCJjb250ZW50V3JhcHBlciIsInVzZXIiLCJ1c2VyTmFtZSIsInVzZXJKb2IiLCJmaW5hbEN0YVBhbmVsIiwiYmFja2dyb3VuZCJdLCJt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QUFFbkQsOERBQU0sQ0FBQ29ELGNBQXZCO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLSTtBQUFLLHVCQUFTLEVBQUVwRCw4REFBTSxDQUFDcUQsSUFBdkI7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUVyRCw4REFBTSxDQUFDc0QsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFHLHlCQUFTLEVBQUV0RCw4REFBTSxDQUFDdUQsT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBU0U7QUFBSyxpQkFBRyxFQUFDLGdCQUFUO0FBQTBCLGlCQUFHLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhKRixlQStKRTtBQUFTLFlBQUUsRUFBQyxVQUFaO0FBQXVCLG1CQUFTLEVBQUV2RCw4REFBTSxDQUFDd0QsYUFBekM7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUV4RCw4REFBTSxDQUFDeUQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9KRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXNLRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUxELENBbExEOztNQUFNN0IsSTtBQW9MU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWUwNzRkYmQ2ZDRhMGZlNDgxZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBFbWFpbFNpZ251cCBmcm9tICdjb21wb25lbnRzL0VtYWlsU2lnbnVwJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBGZWF0dXJlQ2FyZCA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgaWNvbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZUNhcmR9PlxuICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZUNhcmRJbWFnZX0gc3JjPXtpY29ufSB3aWR0aD17MzZ9IGhlaWdodD17MzZ9IGFsdD1cIkZlYXR1cmUgSWNvblwiIC8+XG4gICAgPGg1Pnt0aXRsZX08L2g1PlxuICAgIDxwPntjaGlsZHJlbn08L3A+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgU2VjdGlvbkhlYWRlciA9ICh7IGNoaWxkcmVuLCBjZW50ZXIgPSBmYWxzZSwgcGFkZGVkID0gZmFsc2UgfSkgPT4gKFxuICA8aDIgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5zZWN0aW9uSGVhZGVyLCBjZW50ZXIgJiYgc3R5bGVzLmNlbnRlcmVkLCBwYWRkZWQgJiYgc3R5bGVzLnBhZGRlZCl9PntjaGlsZHJlbn08L2gyPlxuKTtcblxuY29uc3QgaGFzaFN0cmluZyA9IChzKSA9PiB7XG4gIGxldCBoYXNoID0gMCwgaSwgY2hyO1xuICBpZiAocy5sZW5ndGggPT09IDApIHJldHVybiBoYXNoO1xuICBmb3IgKGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgIGNociAgID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaHI7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuICByZXR1cm4gaGFzaDtcbn07XG5cbmNvbnN0IEZlYXR1cmVTZWN0aW9uID0gKHsgdGl0bGUsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIGltYWdlU3JjLCBpbWFnZUFsdCwgbGVmdCA9IGZhbHNlLCB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgY29uc3QgaGFzaCA9IGhhc2hTdHJpbmcodGl0bGUpO1xuICBjb25zdCByZW5kZXJlZEltYWdlID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VQYW5lbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlU3JjfSBhbHQ9e2ltYWdlQWx0fSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgc3R5bGVzLnZhbHVlU2VjdGlvbil9PlxuICAgICAgeyAhbGVmdCAmJiByZW5kZXJlZEltYWdlfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmluZm9QYW5lbCwgc3R5bGVzLmxlZnQpfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlcj57dGl0bGV9PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgbGVmdCAmJiByZW5kZXJlZEltYWdlfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlByb3NwcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5Q29udGFpbmVyfT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RpdGxlfT5cbiAgICAgICAgICAgICAgICBUaGUgZG9ub3IgbWFuYWdlbWVudCB0b29sIHlvdSdsbCBsb3ZlIHVzaW5nXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1N1YnRpdGxlfT5cbiAgICAgICAgICAgICAgICBGcm9tIHRoZSBmaXJzdCBjb250YWN0IHRvIHRoZSBmaW5hbCBkb25hdGlvbiwgUHJvc3ByIGhlbHBzIHlvdVxuICAgICAgICAgICAgICAgIGVuZ2FnZSB5b3VyIGRvbm9ycywgYWxsIHdpdGhvdXQgbWFraW5nIGl0IGZlZWwgbGlrZSBhIGNob3JlLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sYXJnZVwiIGhyZWY9XCIjYm9va0RlbW9cIj5cbiAgICAgICAgICAgICAgQm9vayBhIGRlbW9cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2hlcm9faW1nLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlByb3NwciBQcm9kdWN0IEltYWdlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlfVxuICAgICAgICAgICAgICB3aWR0aD17MTE4OX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs5NjN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNCYW5uZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0Jhbm5lclRleHR9PlRydXN0ZWQgYnkgcHJvZmVzc2lvbmFscyBmcm9tIHRoZXNlIG9yZ2FuaXphdGlvbnM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMaXN0fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy90b3VyZXR0ZV9jYW5hZGEucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlRvdXJldHRlIENhbmFkYVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTgxfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3NH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9jb2YucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbXBhbnkgb2YgRm9vbHNcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1OH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ29zX29yZ3Mvb3VyX3BsYWNlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJPdXIgUGxhY2VcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1OX1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ29zX29yZ3MvbXIucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIk1hbnVlbHMgUml2ZXJcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlckhvcml6b250YWx9IC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlc1wiIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzVGFnbGluZX0+XG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlciBjZW50ZXIgcGFkZGVkPlVzZSBQcm9zcHIgdG8gYnVpbGQgYmV0dGVyIHJlbGF0aW9uc2hpcHMgd2l0aCBkb25vcnM8L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPEZlYXR1cmVTZWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdHJlbmd0aGVuUmVsYXRpb25zaGlwc1BhbmVsfVxuICAgICAgICAgICAgdGl0bGU9XCJTdHJlbmd0aGVuIGRvbm9yIHJlbGF0aW9uc2hpcHNcIlxuICAgICAgICAgICAgaW1hZ2VTcmM9XCIvZG9ub3JfcHJvZmlsZS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiU2FtcGxlIGRvbm9yIHByb2ZpbGVcIlxuICAgICAgICAgICAgd2lkdGg9ezEwMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezU3MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBJdCBjYW4gYmUgY2hhbGxlbmdpbmcgdG8gYnVpbGQgcmVsYXRpb25zaGlwcyB3aXRoIGRvbm9ycy4gQ3V0XG4gICAgICAgICAgICB0aHJvdWdoIHRoZSBoYXNzbGUgYW5kIGNyZWF0ZSBpbmZvcm1hdGl2ZSBkb25vciBwcm9maWxlcyB0b1xuICAgICAgICAgICAgZ3VpZGUgeW91ciBmdW5kcmFpc2luZyBwcm9jZXNzLlxuICAgICAgICAgIDwvRmVhdHVyZVNlY3Rpb24+XG5cbiAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVuZ2FnZVBhbmVsfVxuICAgICAgICAgICAgdGl0bGU9XCJFZmZlY3RpdmVseSBlbmdhZ2Ugd2l0aCB5b3VyIGRvbm9yc1wiXG4gICAgICAgICAgICBpbWFnZVNyYz1cIi9qb3VybmV5X2J1aWxkZXIucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkpvdXJuZXkgQnVpbGRlciBEZW1vIEltYWdlXCJcbiAgICAgICAgICAgIHdpZHRoPXsxMDg0fVxuICAgICAgICAgICAgaGVpZ2h0PXs2MTl9XG4gICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWlzc2luZyBvdXQgb24gb3Bwb3J0dW5pdGllcyB3aXRoIGRvbm9ycyBjYW4gYmUgZnJ1c3RyYXRpbmcuXG4gICAgICAgICAgICBQbGFuIHlvdXIgZG9ub3IgaW50ZXJhY3Rpb25zIGluIGFkdmFuY2Ugc28geW91IGNhbiBtYWtlIHRoZSBtb3N0XG4gICAgICAgICAgICBvZiBldmVyeSBvcHBvcnR1bml0eS5cbiAgICAgICAgICA8L0ZlYXR1cmVTZWN0aW9uPlxuXG4gICAgICAgICAgPEZlYXR1cmVTZWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vbmxpbmVEb25hdGlvbnNQYW5lbH1cbiAgICAgICAgICAgIHRpdGxlPVwiSW1wcm92ZSBvbmxpbmUgZ2l2aW5nXCJcbiAgICAgICAgICAgIGltYWdlU3JjPVwiL2RvbmF0aW9ucy5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiU2FtcGxlIGRvbmF0aW9uIGZvcm1cIlxuICAgICAgICAgICAgd2lkdGg9ezEwODR9XG4gICAgICAgICAgICBoZWlnaHQ9ezYxOX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBEb24ndCByaXNrIGxvc2luZyB5b3VyIGRvbm9ycyBhdCB0aGUgZmluaXNoIGxpbmUuIFVzZSBvdXJcbiAgICAgICAgICAgIGN1c3RvbWl6ZWFibGUgZG9uYXRpb24gZm9ybXMgdG8gcHJvdmlkZSBhIGJldHRlciBkb25vclxuICAgICAgICAgICAgZXhwZXJpZW5jZSBhbmQgY29udmVydCBtb3JlIG9mdGVuLlxuICAgICAgICAgIDwvRmVhdHVyZVNlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc1NlY3Rpb259PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc1RpdGxlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXIgY2VudGVyPkFsbCB5b3VyIGZhdm9yaXRlIGZlYXR1cmVzIGluIGEgc2luZ2xlIHRvb2w8L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNTdWJUaXRsZX0+XG4gICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIG9wdGltaXplZCBmb3IgYmV0dGVyIGZ1bmRyYWlzaW5nLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc0dyaWR9PlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJDbG91ZCBob3N0ZWRcIiBpY29uPVwiaWNvbnMvY2xvdWQuc3ZnXCI+XG4gICAgICAgICAgICAgICAgTm8gc29mdHdhcmUgdXBkYXRlcywgbm8gbWFpbnRlbmFuY2UuIEFsbCB5b3UgbmVlZCBpcyBhbiBtb2Rlcm5cbiAgICAgICAgICAgICAgICB3ZWIgYnJvd3Nlci5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiU2ltcGxlIHNldHVwXCIgaWNvbj1cImljb25zL3NldHRpbmdzLnN2Z1wiPlxuICAgICAgICAgICAgICAgIFN0YXJ0IG1hbmFnaW5nIHlvdXIgZGF0YSBhbmQgYnVpbGRpbmcgZG9ub3Igam91cm5leXMgd2l0aCBhIGZld1xuICAgICAgICAgICAgICAgIHNpbXBsZSBjbGlja3MuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkNvdW50bGVzcyBpbnRlZ3JhdGlvbnNcIiBpY29uPVwiaWNvbnMvZ3JpZC5zdmdcIj5cbiAgICAgICAgICAgICAgICBTaW1wbGlmeSB5b3VyIHByb2Nlc3Nlcy4gQ29ubmVjdCB0byBleGlzdGluZyB0b29scyB0aGF0IHlvdSB1c2VcbiAgICAgICAgICAgICAgICBhbmQgcmVkdWNlIG1hbnVhbCB3b3JrLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJTZWN1cml0eSBmaXJzdFwiIGljb249XCJpY29ucy9sb2NrLnN2Z1wiPlxuICAgICAgICAgICAgICAgIEtlZXAgeW91ciBkYXRhIHNlY3VyZSB3aXRoIGEgcmVsaWFibGUgZGF0YWJhc2UgKGhvc3RlZCB3aXRoXG4gICAgICAgICAgICAgICAgTW9uZ29EQiBBdGxhc+KEoikuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkJldHRlciBjb2xsYWJvcmF0aW9uXCIgaWNvbj1cImljb25zL2NvbGxhYm9yYXRpb24uc3ZnXCI+XG4gICAgICAgICAgICAgICAgUmVkdWNlIG1pc2NvbW11bmljYXRpb24uIEluc3RhbnRseSBzeW5jIHlvdXIgd29yayBhY3Jvc3MgeW91clxuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbi5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiRWFzeS10by11c2VcIiBpY29uPVwiaWNvbnMvY2hlY2ttYXJrLnN2Z1wiPlxuICAgICAgICAgICAgICAgIFdpdGggb3VyIHNvZnR3YXJlLCB5b3UgZG9u4oCZdCBuZWVkIHRvIHdvcnJ5IGFib3V0IGFkZGl0aW9uYWxcbiAgICAgICAgICAgICAgICB0cmFpbmluZyB0byBnZXQgdGhlIGpvYiBkb25lLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudGVzdGltb25pYWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50V3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxwPlwiSSBoYXZlIGFsd2F5cyB1bmRlcnN0b29kIHRoZSBpbXBvcnRhbmNlIG9mIGRhdGEsIGJ1dCBJIHdhcyBuZXZlclxuICAgICAgICAgICAgICAgIGVhZ2VyIHRvIHV0aWxpemUgaXQgdW50aWwgd29ya2luZyB3aXRoIFByb3Nwci4gVGhlIHdheSB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICBoYXMgbWFwcGVkIG91dCBhbmQgdHVybmVkIGRvbm9yIGVuZ2FnZW1lbnQgaW50byBhIHZpc3VhbCBwcm9jZXNzIGlzXG4gICAgICAgICAgICAgICAgcmVmcmVzaGluZyBmb3IgYW55b25lIHdvcmtpbmcgaW4gdGhpcyBmaWVsZC5cIjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlck5hbWV9PlJ5YW4gSWxsPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlckpvYn0+RnVuZHJhaXNpbmcgT2ZmaWNlciBhdCBPdXIgUGxhY2UgS1c8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9vdXJfcGxhY2UucG5nXCIgYWx0PVwiT3VyIFBsYWNlIExvZ29cIiAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImJvb2tEZW1vXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmluYWxDdGFQYW5lbH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9IC8+XG4gICAgICAgICAgICA8RW1haWxTaWdudXAgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvbWFpbj5cblxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9