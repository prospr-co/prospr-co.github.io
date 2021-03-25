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
  var hash = hashString(title + imageAlt);
  var blob = blobs[Math.abs(hash % blobs.length)];
  console.log(Math.abs(hash % blobs.length), blobs.length);

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
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: blob,
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featureBlob,
        alt: "Visual flourish blob",
        "aria-hidden": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), left && renderedImage]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroSubtitle,
              children: "From the first contact to the final donation, Prospr helps you engage your donors, all without making it feel like a chore."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn btn-primary btn-large",
            href: "#bookDemo",
            children: "Book a demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
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
            lineNumber: 87,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBanner,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBannerText,
            children: "Trusted by professionals from these organizations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
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
                lineNumber: 100,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
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
                src: "/logos_orgs/our_place.png",
                alt: "Our Place",
                width: 259,
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
                src: "/logos_orgs/mr.png",
                alt: "Manuels River",
                width: 200,
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
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dividerHorizontal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
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
            lineNumber: 136,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
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
          lineNumber: 139,
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
          lineNumber: 152,
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
          lineNumber: 166,
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
              lineNumber: 181,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSubTitle,
              children: "Designed and optimized for better fundraising."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresGrid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Cloud hosted",
              icon: "icons/cloud.svg",
              children: "No software updates, no maintenance. All you need is an modern web browser."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Simple setup",
              icon: "icons/settings.svg",
              children: "Start managing your data and building donor journeys with a few simple clicks."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Countless integrations",
              icon: "icons/grid.svg",
              children: "Simplify your processes. Connect to existing tools that you use and reduce manual work."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Security first",
              icon: "icons/lock.svg",
              children: "Keep your data secure with a reliable database (hosted with MongoDB Atlas\u2122)."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Better collaboration",
              icon: "icons/collaboration.svg",
              children: "Reduce miscommunication. Instantly sync your work across your organization."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Easy-to-use",
              icon: "icons/checkmark.svg",
              children: "With our software, you don\u2019t need to worry about additional training to get the job done."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testimonial,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contentWrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\"I have always understood the importance of data, but I was never eager to utilize it until working with Prospr. The way the database has mapped out and turned donor engagement into a visual process is refreshing for anyone working in this field.\""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userName,
                children: "Ryan Ill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userJob,
                children: "Fundraising Officer at Our Place KW"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/our_place.png",
              alt: "Our Place Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: "bookDemo",
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.finalCtaPanel,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.background
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_EmailSignup__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRmVhdHVyZUNhcmQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInN0eWxlcyIsImZlYXR1cmVDYXJkIiwiZmVhdHVyZUNhcmRJbWFnZSIsIlNlY3Rpb25IZWFkZXIiLCJjZW50ZXIiLCJwYWRkZWQiLCJjbGFzc05hbWVzIiwic2VjdGlvbkhlYWRlciIsImNlbnRlcmVkIiwiaGFzaFN0cmluZyIsInMiLCJoYXNoIiwiaSIsImNociIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJibG9icyIsIkZlYXR1cmVTZWN0aW9uIiwiY2xhc3NOYW1lIiwiaW1hZ2VTcmMiLCJpbWFnZUFsdCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImJsb2IiLCJNYXRoIiwiYWJzIiwiY29uc29sZSIsImxvZyIsInJlbmRlcmVkSW1hZ2UiLCJpbWFnZVBhbmVsIiwiaW1hZ2VDb250YWluZXIiLCJmZWF0dXJlQmxvYiIsInZhbHVlU2VjdGlvbiIsImluZm9QYW5lbCIsIkhvbWUiLCJjb250YWluZXIiLCJib2R5Q29udGFpbmVyIiwibWFpbiIsImhlcm8iLCJoZXJvVGV4dENvbnRhaW5lciIsImhlcm9UaXRsZSIsImhlcm9TdWJ0aXRsZSIsInByb2R1Y3RJbWFnZUNvbnRhaW5lciIsInByb2R1Y3RJbWFnZSIsInVzZXJzQmFubmVyIiwidXNlcnNCYW5uZXJUZXh0IiwidXNlcnNMaXN0IiwidXNlcnNMb2dvV3JhcHBlciIsImRpdmlkZXJIb3Jpem9udGFsIiwiZmVhdHVyZXNUYWdsaW5lIiwic3RyZW5ndGhlblJlbGF0aW9uc2hpcHNQYW5lbCIsImVuZ2FnZVBhbmVsIiwib25saW5lRG9uYXRpb25zUGFuZWwiLCJmZWF0dXJlc1NlY3Rpb24iLCJmZWF0dXJlc1RpdGxlQ29udGFpbmVyIiwiZmVhdHVyZXNTdWJUaXRsZSIsImZlYXR1cmVzR3JpZCIsInRlc3RpbW9uaWFsIiwiY29udGVudFdyYXBwZXIiLCJ1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SkU7QUFBUyxZQUFFLEVBQUMsVUFBWjtBQUF1QixtQkFBUyxFQUFFOUQsOERBQU0sQ0FBQytELGFBQXpDO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFL0QsOERBQU0sQ0FBQ2dFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFzS0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRLRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlMRCxDQWxMRDs7TUFBTTdCLEk7QUFvTFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMwOGNjYjE3MGJmNTExMWM4ZjY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgRW1haWxTaWdudXAgZnJvbSAnY29tcG9uZW50cy9FbWFpbFNpZ251cCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgRmVhdHVyZUNhcmQgPSAoeyB0aXRsZSwgY2hpbGRyZW4sIGljb24gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVDYXJkfT5cbiAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVDYXJkSW1hZ2V9IHNyYz17aWNvbn0gd2lkdGg9ezM2fSBoZWlnaHQ9ezM2fSBhbHQ9XCJGZWF0dXJlIEljb25cIiAvPlxuICAgIDxoNT57dGl0bGV9PC9oNT5cbiAgICA8cD57Y2hpbGRyZW59PC9wPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSAoeyBjaGlsZHJlbiwgY2VudGVyID0gZmFsc2UsIHBhZGRlZCA9IGZhbHNlIH0pID0+IChcbiAgPGgyIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuc2VjdGlvbkhlYWRlciwgY2VudGVyICYmIHN0eWxlcy5jZW50ZXJlZCwgcGFkZGVkICYmIHN0eWxlcy5wYWRkZWQpfT57Y2hpbGRyZW59PC9oMj5cbik7XG5cbmNvbnN0IGhhc2hTdHJpbmcgPSAocykgPT4ge1xuICBsZXQgaGFzaCA9IDAsIGksIGNocjtcbiAgaWYgKHMubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaDtcbiAgZm9yIChpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICBjaHIgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hyO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cbiAgcmV0dXJuIGhhc2g7XG59O1xuXG5jb25zdCBibG9icyA9IFsnL2RlbW9fZm9ybS9zaGFwZV8xLnN2ZycsICcvZGVtb19mb3JtL3NoYXBlXzIuc3ZnJ11cblxuY29uc3QgRmVhdHVyZVNlY3Rpb24gPSAoeyB0aXRsZSwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgaW1hZ2VTcmMsIGltYWdlQWx0LCBsZWZ0ID0gZmFsc2UsIHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICBjb25zdCBoYXNoID0gaGFzaFN0cmluZyh0aXRsZSArIGltYWdlQWx0KTtcbiAgY29uc3QgYmxvYiA9IGJsb2JzW01hdGguYWJzKGhhc2ggJSBibG9icy5sZW5ndGgpXTtcbiAgY29uc29sZS5sb2coTWF0aC5hYnMoaGFzaCAlIGJsb2JzLmxlbmd0aCksIGJsb2JzLmxlbmd0aCk7XG4gIGNvbnN0IHJlbmRlcmVkSW1hZ2UgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVBhbmVsfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VTcmN9IGFsdD17aW1hZ2VBbHR9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IC8+XG4gICAgICAgIDxpbWcgc3JjPXtibG9ifSBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlQmxvYn0gYWx0PVwiVmlzdWFsIGZsb3VyaXNoIGJsb2JcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgc3R5bGVzLnZhbHVlU2VjdGlvbil9PlxuICAgICAgeyAhbGVmdCAmJiByZW5kZXJlZEltYWdlfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmluZm9QYW5lbCwgc3R5bGVzLmxlZnQpfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlcj57dGl0bGV9PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgbGVmdCAmJiByZW5kZXJlZEltYWdlfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlByb3NwcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5Q29udGFpbmVyfT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RpdGxlfT5cbiAgICAgICAgICAgICAgICBUaGUgZG9ub3IgbWFuYWdlbWVudCB0b29sIHlvdSdsbCBsb3ZlIHVzaW5nXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1N1YnRpdGxlfT5cbiAgICAgICAgICAgICAgICBGcm9tIHRoZSBmaXJzdCBjb250YWN0IHRvIHRoZSBmaW5hbCBkb25hdGlvbiwgUHJvc3ByIGhlbHBzIHlvdVxuICAgICAgICAgICAgICAgIGVuZ2FnZSB5b3VyIGRvbm9ycywgYWxsIHdpdGhvdXQgbWFraW5nIGl0IGZlZWwgbGlrZSBhIGNob3JlLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sYXJnZVwiIGhyZWY9XCIjYm9va0RlbW9cIj5cbiAgICAgICAgICAgICAgQm9vayBhIGRlbW9cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2hlcm9faW1nLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlByb3NwciBQcm9kdWN0IEltYWdlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlfVxuICAgICAgICAgICAgICB3aWR0aD17MTE4OX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs5NjN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNCYW5uZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0Jhbm5lclRleHR9PlRydXN0ZWQgYnkgcHJvZmVzc2lvbmFscyBmcm9tIHRoZXNlIG9yZ2FuaXphdGlvbnM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMaXN0fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy90b3VyZXR0ZV9jYW5hZGEucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlRvdXJldHRlIENhbmFkYVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTgxfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3NH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9jb2YucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbXBhbnkgb2YgRm9vbHNcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1OH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ29zX29yZ3Mvb3VyX3BsYWNlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJPdXIgUGxhY2VcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1OX1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ29zX29yZ3MvbXIucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIk1hbnVlbHMgUml2ZXJcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlckhvcml6b250YWx9IC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlc1wiIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzVGFnbGluZX0+XG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlciBjZW50ZXIgcGFkZGVkPlVzZSBQcm9zcHIgdG8gYnVpbGQgYmV0dGVyIHJlbGF0aW9uc2hpcHMgd2l0aCBkb25vcnM8L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPEZlYXR1cmVTZWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdHJlbmd0aGVuUmVsYXRpb25zaGlwc1BhbmVsfVxuICAgICAgICAgICAgdGl0bGU9XCJTdHJlbmd0aGVuIGRvbm9yIHJlbGF0aW9uc2hpcHNcIlxuICAgICAgICAgICAgaW1hZ2VTcmM9XCIvZG9ub3JfcHJvZmlsZS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiU2FtcGxlIGRvbm9yIHByb2ZpbGVcIlxuICAgICAgICAgICAgd2lkdGg9ezEwMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezU3MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBJdCBjYW4gYmUgY2hhbGxlbmdpbmcgdG8gYnVpbGQgcmVsYXRpb25zaGlwcyB3aXRoIGRvbm9ycy4gQ3V0XG4gICAgICAgICAgICB0aHJvdWdoIHRoZSBoYXNzbGUgYW5kIGNyZWF0ZSBpbmZvcm1hdGl2ZSBkb25vciBwcm9maWxlcyB0b1xuICAgICAgICAgICAgZ3VpZGUgeW91ciBmdW5kcmFpc2luZyBwcm9jZXNzLlxuICAgICAgICAgIDwvRmVhdHVyZVNlY3Rpb24+XG5cbiAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVuZ2FnZVBhbmVsfVxuICAgICAgICAgICAgdGl0bGU9XCJFZmZlY3RpdmVseSBlbmdhZ2Ugd2l0aCB5b3VyIGRvbm9yc1wiXG4gICAgICAgICAgICBpbWFnZVNyYz1cIi9qb3VybmV5X2J1aWxkZXIucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkpvdXJuZXkgQnVpbGRlciBEZW1vIEltYWdlXCJcbiAgICAgICAgICAgIHdpZHRoPXsxMDg0fVxuICAgICAgICAgICAgaGVpZ2h0PXs2MTl9XG4gICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWlzc2luZyBvdXQgb24gb3Bwb3J0dW5pdGllcyB3aXRoIGRvbm9ycyBjYW4gYmUgZnJ1c3RyYXRpbmcuXG4gICAgICAgICAgICBQbGFuIHlvdXIgZG9ub3IgaW50ZXJhY3Rpb25zIGluIGFkdmFuY2Ugc28geW91IGNhbiBtYWtlIHRoZSBtb3N0XG4gICAgICAgICAgICBvZiBldmVyeSBvcHBvcnR1bml0eS5cbiAgICAgICAgICA8L0ZlYXR1cmVTZWN0aW9uPlxuXG4gICAgICAgICAgPEZlYXR1cmVTZWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vbmxpbmVEb25hdGlvbnNQYW5lbH1cbiAgICAgICAgICAgIHRpdGxlPVwiSW1wcm92ZSBvbmxpbmUgZ2l2aW5nXCJcbiAgICAgICAgICAgIGltYWdlU3JjPVwiL2RvbmF0aW9ucy5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiU2FtcGxlIGRvbmF0aW9uIGZvcm1cIlxuICAgICAgICAgICAgd2lkdGg9ezEwODR9XG4gICAgICAgICAgICBoZWlnaHQ9ezYxOX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBEb24ndCByaXNrIGxvc2luZyB5b3VyIGRvbm9ycyBhdCB0aGUgZmluaXNoIGxpbmUuIFVzZSBvdXJcbiAgICAgICAgICAgIGN1c3RvbWl6ZWFibGUgZG9uYXRpb24gZm9ybXMgdG8gcHJvdmlkZSBhIGJldHRlciBkb25vclxuICAgICAgICAgICAgZXhwZXJpZW5jZSBhbmQgY29udmVydCBtb3JlIG9mdGVuLlxuICAgICAgICAgIDwvRmVhdHVyZVNlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc1NlY3Rpb259PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc1RpdGxlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXIgY2VudGVyPkFsbCB5b3VyIGZhdm9yaXRlIGZlYXR1cmVzIGluIGEgc2luZ2xlIHRvb2w8L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNTdWJUaXRsZX0+XG4gICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIG9wdGltaXplZCBmb3IgYmV0dGVyIGZ1bmRyYWlzaW5nLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc0dyaWR9PlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJDbG91ZCBob3N0ZWRcIiBpY29uPVwiaWNvbnMvY2xvdWQuc3ZnXCI+XG4gICAgICAgICAgICAgICAgTm8gc29mdHdhcmUgdXBkYXRlcywgbm8gbWFpbnRlbmFuY2UuIEFsbCB5b3UgbmVlZCBpcyBhbiBtb2Rlcm5cbiAgICAgICAgICAgICAgICB3ZWIgYnJvd3Nlci5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiU2ltcGxlIHNldHVwXCIgaWNvbj1cImljb25zL3NldHRpbmdzLnN2Z1wiPlxuICAgICAgICAgICAgICAgIFN0YXJ0IG1hbmFnaW5nIHlvdXIgZGF0YSBhbmQgYnVpbGRpbmcgZG9ub3Igam91cm5leXMgd2l0aCBhIGZld1xuICAgICAgICAgICAgICAgIHNpbXBsZSBjbGlja3MuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkNvdW50bGVzcyBpbnRlZ3JhdGlvbnNcIiBpY29uPVwiaWNvbnMvZ3JpZC5zdmdcIj5cbiAgICAgICAgICAgICAgICBTaW1wbGlmeSB5b3VyIHByb2Nlc3Nlcy4gQ29ubmVjdCB0byBleGlzdGluZyB0b29scyB0aGF0IHlvdSB1c2VcbiAgICAgICAgICAgICAgICBhbmQgcmVkdWNlIG1hbnVhbCB3b3JrLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJTZWN1cml0eSBmaXJzdFwiIGljb249XCJpY29ucy9sb2NrLnN2Z1wiPlxuICAgICAgICAgICAgICAgIEtlZXAgeW91ciBkYXRhIHNlY3VyZSB3aXRoIGEgcmVsaWFibGUgZGF0YWJhc2UgKGhvc3RlZCB3aXRoXG4gICAgICAgICAgICAgICAgTW9uZ29EQiBBdGxhc+KEoikuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkJldHRlciBjb2xsYWJvcmF0aW9uXCIgaWNvbj1cImljb25zL2NvbGxhYm9yYXRpb24uc3ZnXCI+XG4gICAgICAgICAgICAgICAgUmVkdWNlIG1pc2NvbW11bmljYXRpb24uIEluc3RhbnRseSBzeW5jIHlvdXIgd29yayBhY3Jvc3MgeW91clxuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbi5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiRWFzeS10by11c2VcIiBpY29uPVwiaWNvbnMvY2hlY2ttYXJrLnN2Z1wiPlxuICAgICAgICAgICAgICAgIFdpdGggb3VyIHNvZnR3YXJlLCB5b3UgZG9u4oCZdCBuZWVkIHRvIHdvcnJ5IGFib3V0IGFkZGl0aW9uYWxcbiAgICAgICAgICAgICAgICB0cmFpbmluZyB0byBnZXQgdGhlIGpvYiBkb25lLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudGVzdGltb25pYWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50V3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxwPlwiSSBoYXZlIGFsd2F5cyB1bmRlcnN0b29kIHRoZSBpbXBvcnRhbmNlIG9mIGRhdGEsIGJ1dCBJIHdhcyBuZXZlclxuICAgICAgICAgICAgICAgIGVhZ2VyIHRvIHV0aWxpemUgaXQgdW50aWwgd29ya2luZyB3aXRoIFByb3Nwci4gVGhlIHdheSB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICBoYXMgbWFwcGVkIG91dCBhbmQgdHVybmVkIGRvbm9yIGVuZ2FnZW1lbnQgaW50byBhIHZpc3VhbCBwcm9jZXNzIGlzXG4gICAgICAgICAgICAgICAgcmVmcmVzaGluZyBmb3IgYW55b25lIHdvcmtpbmcgaW4gdGhpcyBmaWVsZC5cIjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlck5hbWV9PlJ5YW4gSWxsPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlckpvYn0+RnVuZHJhaXNpbmcgT2ZmaWNlciBhdCBPdXIgUGxhY2UgS1c8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9vdXJfcGxhY2UucG5nXCIgYWx0PVwiT3VyIFBsYWNlIExvZ29cIiAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImJvb2tEZW1vXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmluYWxDdGFQYW5lbH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9IC8+XG4gICAgICAgICAgICA8RW1haWxTaWdudXAgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvbWFpbj5cblxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9