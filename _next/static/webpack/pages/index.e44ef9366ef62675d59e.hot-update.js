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

var blobs = ['/demo_form/shape_1.svg', '/demo_form/shape_2.svg'];
var blobColors = ['#E2EFFE', '#FCEDF1', '#FFFCDB', '#FFEAE0', '#F2E7FD'];

var FeatureSection = function FeatureSection(_ref3) {
  var title = _ref3.title,
      className = _ref3.className,
      children = _ref3.children,
      imageSrc = _ref3.imageSrc,
      imageAlt = _ref3.imageAlt,
      _ref3$left = _ref3.left,
      left = _ref3$left === void 0 ? false : _ref3$left,
      width = _ref3.width,
      height = _ref3.height,
      color = _ref3.color;
  var hash = hashString(title + imageAlt);
  console.log(title, hash); // const randomColor = blobColors[Math.abs(hash % blobColors.length)];

  var renderedImage = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imagePanel,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: imageSrc,
        alt: imageAlt,
        width: width,
        height: height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blobBorder,
        style: {
          backgroundColor: color
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), left && renderedImage]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
              lineNumber: 81,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroSubtitle,
              children: "From the first contact to the final donation, Prospr helps you engage your donors, all without making it feel like a chore."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn btn-primary btn-large",
            href: "#bookDemo",
            children: "Book a demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
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
            lineNumber: 95,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBanner,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBannerText,
            children: "Trusted by professionals from these organizations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
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
                lineNumber: 108,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
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
                lineNumber: 116,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
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
                lineNumber: 124,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
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
                lineNumber: 132,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dividerHorizontal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
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
            lineNumber: 144,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.strengthenRelationshipsPanel,
          title: "Strengthen donor relationships",
          imageSrc: "/donor_profile.png",
          alt: "Sample donor profile",
          width: 1000,
          height: 571,
          color: "#E2EFFE",
          children: "It can be challenging to build relationships with donors. Cut through the hassle and create informative donor profiles to guide your fundraising process."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.engagePanel,
          title: "Effectively engage with your donors",
          imageSrc: "/journey_builder.png",
          alt: "Journey Builder Demo Image",
          width: 1084,
          height: 619,
          color: "#FCEDF1",
          left: true,
          children: "Missing out on opportunities with donors can be frustrating. Plan your donor interactions in advance so you can make the most of every opportunity."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.onlineDonationsPanel,
          title: "Improve online giving",
          imageSrc: "/donations.png",
          alt: "Sample donation form",
          color: "#FFFCDB",
          width: 1084,
          height: 619,
          children: "Don't risk losing your donors at the finish line. Use our customizeable donation forms to provide a better donor experience and convert more often."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
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
              lineNumber: 192,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSubTitle,
              children: "Designed and optimized for better fundraising."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresGrid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Cloud hosted",
              icon: "icons/cloud.svg",
              children: "No software updates, no maintenance. All you need is an modern web browser."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Simple setup",
              icon: "icons/settings.svg",
              children: "Start managing your data and building donor journeys with a few simple clicks."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Countless integrations",
              icon: "icons/grid.svg",
              children: "Simplify your processes. Connect to existing tools that you use and reduce manual work."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Security first",
              icon: "icons/lock.svg",
              children: "Keep your data secure with a reliable database (hosted with MongoDB Atlas\u2122)."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Better collaboration",
              icon: "icons/collaboration.svg",
              children: "Reduce miscommunication. Instantly sync your work across your organization."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Easy-to-use",
              icon: "icons/checkmark.svg",
              children: "With our software, you don\u2019t need to worry about additional training to get the job done."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testimonial,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contentWrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\"I have always understood the importance of data, but I was never eager to utilize it until working with Prospr. The way the database has mapped out and turned donor engagement into a visual process is refreshing for anyone working in this field.\""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userName,
                children: "Ryan Ill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userJob,
                children: "Fundraising Officer at Our Place KW"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/our_place.png",
              alt: "Our Place Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: "bookDemo",
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.finalCtaPanel,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.background
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_EmailSignup__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRmVhdHVyZUNhcmQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInN0eWxlcyIsImZlYXR1cmVDYXJkIiwiZmVhdHVyZUNhcmRJbWFnZSIsIlNlY3Rpb25IZWFkZXIiLCJjZW50ZXIiLCJwYWRkZWQiLCJjbGFzc05hbWVzIiwic2VjdGlvbkhlYWRlciIsImNlbnRlcmVkIiwiaGFzaFN0cmluZyIsInMiLCJoYXNoIiwiaSIsImNociIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJibG9icyIsImJsb2JDb2xvcnMiLCJGZWF0dXJlU2VjdGlvbiIsImNsYXNzTmFtZSIsImltYWdlU3JjIiwiaW1hZ2VBbHQiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJlZEltYWdlIiwiaW1hZ2VQYW5lbCIsImltYWdlQ29udGFpbmVyIiwiYmxvYkJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInZhbHVlU2VjdGlvbiIsImluZm9QYW5lbCIsIkhvbWUiLCJjb250YWluZXIiLCJib2R5Q29udGFpbmVyIiwibWFpbiIsImhlcm8iLCJoZXJvVGV4dENvbnRhaW5lciIsImhlcm9UaXRsZSIsImhlcm9TdWJ0aXRsZSIsInByb2R1Y3RJbWFnZUNvbnRhaW5lciIsInByb2R1Y3RJbWFnZSIsInVzZXJzQmFubmVyIiwidXNlcnNCYW5uZXJUZXh0IiwidXNlcnNMaXN0IiwidXNlcnNMb2dvV3JhcHBlciIsImRpdmlkZXJIb3Jpem9udGFsIiwiZmVhdHVyZXNUYWdsaW5lIiwic3RyZW5ndGhlblJlbGF0aW9uc2hpcHNQYW5lbCIsImVuZ2FnZVBhbmVsIiwib25saW5lRG9uYXRpb25zUGFuZWwiLCJmZWF0dXJlc1NlY3Rpb24iLCJmZWF0dXJlc1RpdGxlQ29udGFpbmVyIiwiZmVhdHVyZXNTdWJUaXRsZSIsImZlYXR1cmVzR3JpZCIsInRlc3RpbW9uaWFsIiwiY29udGVudFdyYXBwZXIiLCJ1c2VyIiwidXNlck5hbWUiLCJ1c2VySm9iIiwiZmluYWxDdGFQYW5lbCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxNQUFvQkMsSUFBcEIsUUFBb0JBLElBQXBCO0FBQUEsc0JBQ2xCO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxXQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxnQkFBdkI7QUFBeUMsU0FBRyxFQUFFSCxJQUE5QztBQUFvRCxXQUFLLEVBQUUsRUFBM0Q7QUFBK0QsWUFBTSxFQUFFLEVBQXZFO0FBQTJFLFNBQUcsRUFBQztBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQXBCOztLQUFNRixXOztBQVFOLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHTCxRQUFILFNBQUdBLFFBQUg7QUFBQSwyQkFBYU0sTUFBYjtBQUFBLE1BQWFBLE1BQWIsNkJBQXNCLEtBQXRCO0FBQUEsMkJBQTZCQyxNQUE3QjtBQUFBLE1BQTZCQSxNQUE3Qiw2QkFBc0MsS0FBdEM7QUFBQSxzQkFDcEI7QUFBSSxhQUFTLEVBQUVDLGlEQUFVLENBQUNOLDhEQUFNLENBQUNPLGFBQVIsRUFBdUJILE1BQU0sSUFBSUosOERBQU0sQ0FBQ1EsUUFBeEMsRUFBa0RILE1BQU0sSUFBSUwsOERBQU0sQ0FBQ0ssTUFBbkUs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QUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5KRixlQWtLRTtBQUFTLFlBQUUsRUFBQyxVQUFaO0FBQXVCLG1CQUFTLEVBQUU5RCw4REFBTSxDQUFDK0QsYUFBekM7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUUvRCw4REFBTSxDQUFDZ0U7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxLRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXlLRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBektGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0xELENBckxEOztNQUFNN0IsSTtBQXVMU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTQ0ZWY5MzY2ZWY2MjY3NWQ1OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBFbWFpbFNpZ251cCBmcm9tICdjb21wb25lbnRzL0VtYWlsU2lnbnVwJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBGZWF0dXJlQ2FyZCA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgaWNvbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZUNhcmR9PlxuICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZUNhcmRJbWFnZX0gc3JjPXtpY29ufSB3aWR0aD17MzZ9IGhlaWdodD17MzZ9IGFsdD1cIkZlYXR1cmUgSWNvblwiIC8+XG4gICAgPGg1Pnt0aXRsZX08L2g1PlxuICAgIDxwPntjaGlsZHJlbn08L3A+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgU2VjdGlvbkhlYWRlciA9ICh7IGNoaWxkcmVuLCBjZW50ZXIgPSBmYWxzZSwgcGFkZGVkID0gZmFsc2UgfSkgPT4gKFxuICA8aDIgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5zZWN0aW9uSGVhZGVyLCBjZW50ZXIgJiYgc3R5bGVzLmNlbnRlcmVkLCBwYWRkZWQgJiYgc3R5bGVzLnBhZGRlZCl9PntjaGlsZHJlbn08L2gyPlxuKTtcblxuY29uc3QgaGFzaFN0cmluZyA9IChzKSA9PiB7XG4gIGxldCBoYXNoID0gMCwgaSwgY2hyO1xuICBpZiAocy5sZW5ndGggPT09IDApIHJldHVybiBoYXNoO1xuICBmb3IgKGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgIGNociA9IHMuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaHI7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuICByZXR1cm4gaGFzaDtcbn07XG5cbmNvbnN0IGJsb2JzID0gWycvZGVtb19mb3JtL3NoYXBlXzEuc3ZnJywgJy9kZW1vX2Zvcm0vc2hhcGVfMi5zdmcnXTtcbmNvbnN0IGJsb2JDb2xvcnMgPSBbXG4gICcjRTJFRkZFJyxcbiAgJyNGQ0VERjEnLFxuICAnI0ZGRkNEQicsXG4gICcjRkZFQUUwJyxcbiAgJyNGMkU3RkQnLFxuXTtcblxuY29uc3QgRmVhdHVyZVNlY3Rpb24gPSAoeyB0aXRsZSwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgaW1hZ2VTcmMsIGltYWdlQWx0LCBsZWZ0ID0gZmFsc2UsIHdpZHRoLCBoZWlnaHQsIGNvbG9yIH0pID0+IHtcbiAgY29uc3QgaGFzaCA9IGhhc2hTdHJpbmcodGl0bGUgKyBpbWFnZUFsdCk7XG4gIGNvbnNvbGUubG9nKHRpdGxlLCBoYXNoKTtcbiAgLy8gY29uc3QgcmFuZG9tQ29sb3IgPSBibG9iQ29sb3JzW01hdGguYWJzKGhhc2ggJSBibG9iQ29sb3JzLmxlbmd0aCldO1xuICBjb25zdCByZW5kZXJlZEltYWdlID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VQYW5lbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlU3JjfSBhbHQ9e2ltYWdlQWx0fSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICB7Lyo8aW1nIHNyYz17YmxvYn0gY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZUJsb2J9IGFsdD1cIlZpc3VhbCBmbG91cmlzaCBibG9iXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz4qL31cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmxvYkJvcmRlcn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9fS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBzdHlsZXMudmFsdWVTZWN0aW9uKX0+XG4gICAgICB7ICFsZWZ0ICYmIHJlbmRlcmVkSW1hZ2V9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuaW5mb1BhbmVsLCBzdHlsZXMubGVmdCl9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyPnt0aXRsZX08L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBsZWZ0ICYmIHJlbmRlcmVkSW1hZ2V9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UHJvc3ByPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlDb250YWluZXJ9PlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvVGV4dENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZXJvVGl0bGV9PlxuICAgICAgICAgICAgICAgIFRoZSBkb25vciBtYW5hZ2VtZW50IHRvb2wgeW91J2xsIGxvdmUgdXNpbmdcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvU3VidGl0bGV9PlxuICAgICAgICAgICAgICAgIEZyb20gdGhlIGZpcnN0IGNvbnRhY3QgdG8gdGhlIGZpbmFsIGRvbmF0aW9uLCBQcm9zcHIgaGVscHMgeW91XG4gICAgICAgICAgICAgICAgZW5nYWdlIHlvdXIgZG9ub3JzLCBhbGwgd2l0aG91dCBtYWtpbmcgaXQgZmVlbCBsaWtlIGEgY2hvcmUuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxhcmdlXCIgaHJlZj1cIiNib29rRGVtb1wiPlxuICAgICAgICAgICAgICBCb29rIGEgZGVtb1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaGVyb19pbWcucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiUHJvc3ByIFByb2R1Y3QgSW1hZ2VcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW1hZ2V9XG4gICAgICAgICAgICAgIHdpZHRoPXsxMTg5fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezk2M31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0Jhbm5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzQmFubmVyVGV4dH0+VHJ1c3RlZCBieSBwcm9mZXNzaW9uYWxzIGZyb20gdGhlc2Ugb3JnYW5pemF0aW9uczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xpc3R9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzTG9nb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvc19vcmdzL3RvdXJldHRlX2NhbmFkYS5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiVG91cmV0dGUgQ2FuYWRhXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxODF9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezc0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzTG9nb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvc19vcmdzL2NvZi5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiQ29tcGFueSBvZiBGb29sc1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTU4fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9vdXJfcGxhY2UucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIk91ciBQbGFjZVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjU5fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9tci5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiTWFudWVscyBSaXZlclwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZpZGVySG9yaXpvbnRhbH0gLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNUYWdsaW5lfT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIGNlbnRlciBwYWRkZWQ+VXNlIFByb3NwciB0byBidWlsZCBiZXR0ZXIgcmVsYXRpb25zaGlwcyB3aXRoIGRvbm9yczwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0cmVuZ3RoZW5SZWxhdGlvbnNoaXBzUGFuZWx9XG4gICAgICAgICAgICB0aXRsZT1cIlN0cmVuZ3RoZW4gZG9ub3IgcmVsYXRpb25zaGlwc1wiXG4gICAgICAgICAgICBpbWFnZVNyYz1cIi9kb25vcl9wcm9maWxlLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJTYW1wbGUgZG9ub3IgcHJvZmlsZVwiXG4gICAgICAgICAgICB3aWR0aD17MTAwMH1cbiAgICAgICAgICAgIGhlaWdodD17NTcxfVxuICAgICAgICAgICAgY29sb3I9XCIjRTJFRkZFXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBJdCBjYW4gYmUgY2hhbGxlbmdpbmcgdG8gYnVpbGQgcmVsYXRpb25zaGlwcyB3aXRoIGRvbm9ycy4gQ3V0XG4gICAgICAgICAgICB0aHJvdWdoIHRoZSBoYXNzbGUgYW5kIGNyZWF0ZSBpbmZvcm1hdGl2ZSBkb25vciBwcm9maWxlcyB0b1xuICAgICAgICAgICAgZ3VpZGUgeW91ciBmdW5kcmFpc2luZyBwcm9jZXNzLlxuICAgICAgICAgIDwvRmVhdHVyZVNlY3Rpb24+XG5cbiAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVuZ2FnZVBhbmVsfVxuICAgICAgICAgICAgdGl0bGU9XCJFZmZlY3RpdmVseSBlbmdhZ2Ugd2l0aCB5b3VyIGRvbm9yc1wiXG4gICAgICAgICAgICBpbWFnZVNyYz1cIi9qb3VybmV5X2J1aWxkZXIucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkpvdXJuZXkgQnVpbGRlciBEZW1vIEltYWdlXCJcbiAgICAgICAgICAgIHdpZHRoPXsxMDg0fVxuICAgICAgICAgICAgaGVpZ2h0PXs2MTl9XG4gICAgICAgICAgICBjb2xvcj1cIiNGQ0VERjFcIlxuICAgICAgICAgICAgbGVmdFxuICAgICAgICAgID5cbiAgICAgICAgICAgIE1pc3Npbmcgb3V0IG9uIG9wcG9ydHVuaXRpZXMgd2l0aCBkb25vcnMgY2FuIGJlIGZydXN0cmF0aW5nLlxuICAgICAgICAgICAgUGxhbiB5b3VyIGRvbm9yIGludGVyYWN0aW9ucyBpbiBhZHZhbmNlIHNvIHlvdSBjYW4gbWFrZSB0aGUgbW9zdFxuICAgICAgICAgICAgb2YgZXZlcnkgb3Bwb3J0dW5pdHkuXG4gICAgICAgICAgPC9GZWF0dXJlU2VjdGlvbj5cblxuICAgICAgICAgIDxGZWF0dXJlU2VjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMub25saW5lRG9uYXRpb25zUGFuZWx9XG4gICAgICAgICAgICB0aXRsZT1cIkltcHJvdmUgb25saW5lIGdpdmluZ1wiXG4gICAgICAgICAgICBpbWFnZVNyYz1cIi9kb25hdGlvbnMucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlNhbXBsZSBkb25hdGlvbiBmb3JtXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI0ZGRkNEQlwiXG4gICAgICAgICAgICB3aWR0aD17MTA4NH1cbiAgICAgICAgICAgIGhlaWdodD17NjE5fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIERvbid0IHJpc2sgbG9zaW5nIHlvdXIgZG9ub3JzIGF0IHRoZSBmaW5pc2ggbGluZS4gVXNlIG91clxuICAgICAgICAgICAgY3VzdG9taXplYWJsZSBkb25hdGlvbiBmb3JtcyB0byBwcm92aWRlIGEgYmV0dGVyIGRvbm9yXG4gICAgICAgICAgICBleHBlcmllbmNlIGFuZCBjb252ZXJ0IG1vcmUgb2Z0ZW4uXG4gICAgICAgICAgPC9GZWF0dXJlU2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzU2VjdGlvbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzVGl0bGVDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRlciBjZW50ZXI+QWxsIHlvdXIgZmF2b3JpdGUgZmVhdHVyZXMgaW4gYSBzaW5nbGUgdG9vbDwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc1N1YlRpdGxlfT5cbiAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgb3B0aW1pemVkIGZvciBiZXR0ZXIgZnVuZHJhaXNpbmcuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzR3JpZH0+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkNsb3VkIGhvc3RlZFwiIGljb249XCJpY29ucy9jbG91ZC5zdmdcIj5cbiAgICAgICAgICAgICAgICBObyBzb2Z0d2FyZSB1cGRhdGVzLCBubyBtYWludGVuYW5jZS4gQWxsIHlvdSBuZWVkIGlzIGFuIG1vZGVyblxuICAgICAgICAgICAgICAgIHdlYiBicm93c2VyLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJTaW1wbGUgc2V0dXBcIiBpY29uPVwiaWNvbnMvc2V0dGluZ3Muc3ZnXCI+XG4gICAgICAgICAgICAgICAgU3RhcnQgbWFuYWdpbmcgeW91ciBkYXRhIGFuZCBidWlsZGluZyBkb25vciBqb3VybmV5cyB3aXRoIGEgZmV3XG4gICAgICAgICAgICAgICAgc2ltcGxlIGNsaWNrcy5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiQ291bnRsZXNzIGludGVncmF0aW9uc1wiIGljb249XCJpY29ucy9ncmlkLnN2Z1wiPlxuICAgICAgICAgICAgICAgIFNpbXBsaWZ5IHlvdXIgcHJvY2Vzc2VzLiBDb25uZWN0IHRvIGV4aXN0aW5nIHRvb2xzIHRoYXQgeW91IHVzZVxuICAgICAgICAgICAgICAgIGFuZCByZWR1Y2UgbWFudWFsIHdvcmsuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIlNlY3VyaXR5IGZpcnN0XCIgaWNvbj1cImljb25zL2xvY2suc3ZnXCI+XG4gICAgICAgICAgICAgICAgS2VlcCB5b3VyIGRhdGEgc2VjdXJlIHdpdGggYSByZWxpYWJsZSBkYXRhYmFzZSAoaG9zdGVkIHdpdGhcbiAgICAgICAgICAgICAgICBNb25nb0RCIEF0bGFz4oSiKS5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiQmV0dGVyIGNvbGxhYm9yYXRpb25cIiBpY29uPVwiaWNvbnMvY29sbGFib3JhdGlvbi5zdmdcIj5cbiAgICAgICAgICAgICAgICBSZWR1Y2UgbWlzY29tbXVuaWNhdGlvbi4gSW5zdGFudGx5IHN5bmMgeW91ciB3b3JrIGFjcm9zcyB5b3VyXG4gICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJFYXN5LXRvLXVzZVwiIGljb249XCJpY29ucy9jaGVja21hcmsuc3ZnXCI+XG4gICAgICAgICAgICAgICAgV2l0aCBvdXIgc29mdHdhcmUsIHlvdSBkb27igJl0IG5lZWQgdG8gd29ycnkgYWJvdXQgYWRkaXRpb25hbFxuICAgICAgICAgICAgICAgIHRyYWluaW5nIHRvIGdldCB0aGUgam9iIGRvbmUuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy50ZXN0aW1vbmlhbH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRXcmFwcGVyfT5cbiAgICAgICAgICAgICAgPHA+XCJJIGhhdmUgYWx3YXlzIHVuZGVyc3Rvb2QgdGhlIGltcG9ydGFuY2Ugb2YgZGF0YSwgYnV0IEkgd2FzIG5ldmVyXG4gICAgICAgICAgICAgICAgZWFnZXIgdG8gdXRpbGl6ZSBpdCB1bnRpbCB3b3JraW5nIHdpdGggUHJvc3ByLiBUaGUgd2F5IHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIGhhcyBtYXBwZWQgb3V0IGFuZCB0dXJuZWQgZG9ub3IgZW5nYWdlbWVudCBpbnRvIGEgdmlzdWFsIHByb2Nlc3MgaXNcbiAgICAgICAgICAgICAgICByZWZyZXNoaW5nIGZvciBhbnlvbmUgd29ya2luZyBpbiB0aGlzIGZpZWxkLlwiPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcn0+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyTmFtZX0+UnlhbiBJbGw8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VySm9ifT5GdW5kcmFpc2luZyBPZmZpY2VyIGF0IE91ciBQbGFjZSBLVzwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL291cl9wbGFjZS5wbmdcIiBhbHQ9XCJPdXIgUGxhY2UgTG9nb1wiIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYm9va0RlbW9cIiBjbGFzc05hbWU9e3N0eWxlcy5maW5hbEN0YVBhbmVsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0gLz5cbiAgICAgICAgICAgIDxFbWFpbFNpZ251cCAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=