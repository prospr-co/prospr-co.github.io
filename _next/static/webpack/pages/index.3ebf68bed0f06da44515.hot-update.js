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
      height = _ref3.height,
      _ref3$blob = _ref3.blob,
      blob = _ref3$blob === void 0 ? '/demo_form/shape_1.svg' : _ref3$blob;
  var hash = hashString(title + imageAlt);

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
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: blob,
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featureBlob,
        alt: "Visual flourish blob",
        "aria-hidden": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), left && renderedImage]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
              lineNumber: 71,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroSubtitle,
              children: "From the first contact to the final donation, Prospr helps you engage your donors, all without making it feel like a chore."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn btn-primary btn-large",
            href: "#bookDemo",
            children: "Book a demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
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
            lineNumber: 85,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBanner,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBannerText,
            children: "Trusted by professionals from these organizations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
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
                lineNumber: 98,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
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
                lineNumber: 106,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
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
                lineNumber: 114,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
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
                lineNumber: 122,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dividerHorizontal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
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
            lineNumber: 134,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
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
          lineNumber: 137,
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
          lineNumber: 150,
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
          lineNumber: 164,
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
              lineNumber: 179,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSubTitle,
              children: "Designed and optimized for better fundraising."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresGrid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Cloud hosted",
              icon: "icons/cloud.svg",
              children: "No software updates, no maintenance. All you need is an modern web browser."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Simple setup",
              icon: "icons/settings.svg",
              children: "Start managing your data and building donor journeys with a few simple clicks."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Countless integrations",
              icon: "icons/grid.svg",
              children: "Simplify your processes. Connect to existing tools that you use and reduce manual work."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Security first",
              icon: "icons/lock.svg",
              children: "Keep your data secure with a reliable database (hosted with MongoDB Atlas\u2122)."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Better collaboration",
              icon: "icons/collaboration.svg",
              children: "Reduce miscommunication. Instantly sync your work across your organization."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Easy-to-use",
              icon: "icons/checkmark.svg",
              children: "With our software, you don\u2019t need to worry about additional training to get the job done."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testimonial,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contentWrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\"I have always understood the importance of data, but I was never eager to utilize it until working with Prospr. The way the database has mapped out and turned donor engagement into a visual process is refreshing for anyone working in this field.\""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userName,
                children: "Ryan Ill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userJob,
                children: "Fundraising Officer at Our Place KW"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/our_place.png",
              alt: "Our Place Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: "bookDemo",
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.finalCtaPanel,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.background
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_EmailSignup__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRmVhdHVyZUNhcmQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInN0eWxlcyIsImZlYXR1cmVDYXJkIiwiZmVhdHVyZUNhcmRJbWFnZSIsIlNlY3Rpb25IZWFkZXIiLCJjZW50ZXIiLCJwYWRkZWQiLCJjbGFzc05hbWVzIiwic2VjdGlvbkhlYWRlciIsImNlbnRlcmVkIiwiaGFzaFN0cmluZyIsInMiLCJoYXNoIiwiaSIsImNociIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJibG9icyIsIkZlYXR1cmVTZWN0aW9uIiwiY2xhc3NOYW1lIiwiaW1hZ2VTcmMiLCJpbWFnZUFsdCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImJsb2IiLCJyZW5kZXJlZEltYWdlIiwiaW1hZ2VQYW5lbCIsImltYWdlQ29udGFpbmVyIiwiZmVhdHVyZUJsb2IiLCJ2YWx1ZVNlY3Rpb24iLCJpbmZvUGFuZWwiLCJIb21lIiwiY29udGFpbmVyIiwiYm9keUNvbnRhaW5lciIsIm1haW4iLCJoZXJvIiwiaGVyb1RleHRDb250YWluZXIiLCJoZXJvVGl0bGUiLCJoZXJvU3VidGl0bGUiLCJwcm9kdWN0SW1hZ2VDb250YWluZXIiLCJwcm9kdWN0SW1hZ2UiLCJ1c2Vyc0Jhbm5lciIsInVzZXJzQmFubmVyVGV4dCIsInVzZXJzTGlzdCIsInVzZXJzTG9nb1dyYXBwZXIiLCJkaXZpZGVySG9yaXpvbnRhbCIsImZlYXR1cmVzVGFnbGluZSIsInN0cmVuZ3RoZW5SZWxhdGlvbnNoaXBzUGFuZWwiLCJlbmdhZ2VQYW5lbCIsIm9ubGluZURvbmF0aW9uc1BhbmVsIiwiZmVhdHVyZXNTZWN0aW9uIiwiZmVhdHVyZXNUaXRsZUNvbnRhaW5lciIsImZlYXR1cmVzU3ViVGl0bGUiLCJmZWF0dXJlc0dyaWQiLCJ0ZXN0aW1vbmlhbCIsImNvbnRlbnRXcmFwcGVyIiwidXNlciIsInVzZXJOYW1lIiwidXNlckpvYiIsImZp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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0pGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBc0tFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0S0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpTEQsQ0FsTEQ7O01BQU03QixJO0FBb0xTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZWJmNjhiZWQwZjA2ZGE0NDUxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEVtYWlsU2lnbnVwIGZyb20gJ2NvbXBvbmVudHMvRW1haWxTaWdudXAnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEZlYXR1cmVDYXJkID0gKHsgdGl0bGUsIGNoaWxkcmVuLCBpY29uIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlQ2FyZH0+XG4gICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlQ2FyZEltYWdlfSBzcmM9e2ljb259IHdpZHRoPXszNn0gaGVpZ2h0PXszNn0gYWx0PVwiRmVhdHVyZSBJY29uXCIgLz5cbiAgICA8aDU+e3RpdGxlfTwvaDU+XG4gICAgPHA+e2NoaWxkcmVufTwvcD5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gKHsgY2hpbGRyZW4sIGNlbnRlciA9IGZhbHNlLCBwYWRkZWQgPSBmYWxzZSB9KSA9PiAoXG4gIDxoMiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnNlY3Rpb25IZWFkZXIsIGNlbnRlciAmJiBzdHlsZXMuY2VudGVyZWQsIHBhZGRlZCAmJiBzdHlsZXMucGFkZGVkKX0+e2NoaWxkcmVufTwvaDI+XG4pO1xuXG5jb25zdCBoYXNoU3RyaW5nID0gKHMpID0+IHtcbiAgbGV0IGhhc2ggPSAwLCBpLCBjaHI7XG4gIGlmIChzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2g7XG4gIGZvciAoaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hyID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNocjtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG4gIHJldHVybiBoYXNoO1xufTtcblxuY29uc3QgYmxvYnMgPSBbJy9kZW1vX2Zvcm0vc2hhcGVfMS5zdmcnLCAnL2RlbW9fZm9ybS9zaGFwZV8yLnN2ZyddO1xuXG5jb25zdCBGZWF0dXJlU2VjdGlvbiA9ICh7IHRpdGxlLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBpbWFnZVNyYywgaW1hZ2VBbHQsIGxlZnQgPSBmYWxzZSwgd2lkdGgsIGhlaWdodCwgYmxvYiA9ICcvZGVtb19mb3JtL3NoYXBlXzEuc3ZnJyB9KSA9PiB7XG4gIGNvbnN0IGhhc2ggPSBoYXNoU3RyaW5nKHRpdGxlICsgaW1hZ2VBbHQpO1xuICBjb25zdCByZW5kZXJlZEltYWdlID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VQYW5lbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlU3JjfSBhbHQ9e2ltYWdlQWx0fSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICA8aW1nIHNyYz17YmxvYn0gY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZUJsb2J9IGFsdD1cIlZpc3VhbCBmbG91cmlzaCBibG9iXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIHN0eWxlcy52YWx1ZVNlY3Rpb24pfT5cbiAgICAgIHsgIWxlZnQgJiYgcmVuZGVyZWRJbWFnZX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5pbmZvUGFuZWwsIHN0eWxlcy5sZWZ0KX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXI+e3RpdGxlfTwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7IGxlZnQgJiYgcmVuZGVyZWRJbWFnZX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qcm9zcHI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keUNvbnRhaW5lcn0+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9UZXh0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9UaXRsZX0+XG4gICAgICAgICAgICAgICAgVGhlIGRvbm9yIG1hbmFnZW1lbnQgdG9vbCB5b3UnbGwgbG92ZSB1c2luZ1xuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9TdWJ0aXRsZX0+XG4gICAgICAgICAgICAgICAgRnJvbSB0aGUgZmlyc3QgY29udGFjdCB0byB0aGUgZmluYWwgZG9uYXRpb24sIFByb3NwciBoZWxwcyB5b3VcbiAgICAgICAgICAgICAgICBlbmdhZ2UgeW91ciBkb25vcnMsIGFsbCB3aXRob3V0IG1ha2luZyBpdCBmZWVsIGxpa2UgYSBjaG9yZS5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGFyZ2VcIiBocmVmPVwiI2Jvb2tEZW1vXCI+XG4gICAgICAgICAgICAgIEJvb2sgYSBkZW1vXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9oZXJvX2ltZy5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJQcm9zcHIgUHJvZHVjdCBJbWFnZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbWFnZX1cbiAgICAgICAgICAgICAgd2lkdGg9ezExODl9XG4gICAgICAgICAgICAgIGhlaWdodD17OTYzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzQmFubmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNCYW5uZXJUZXh0fT5UcnVzdGVkIGJ5IHByb2Zlc3Npb25hbHMgZnJvbSB0aGVzZSBvcmdhbml6YXRpb25zPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzTGlzdH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ29zX29yZ3MvdG91cmV0dGVfY2FuYWRhLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJUb3VyZXR0ZSBDYW5hZGFcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE4MX1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ29zX29yZ3MvY29mLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJDb21wYW55IG9mIEZvb2xzXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTh9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzTG9nb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvc19vcmdzL291cl9wbGFjZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiT3VyIFBsYWNlXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNTl9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzTG9nb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvc19vcmdzL21yLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJNYW51ZWxzIFJpdmVyXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdmlkZXJIb3Jpem9udGFsfSAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZXNcIiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc1RhZ2xpbmV9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXIgY2VudGVyIHBhZGRlZD5Vc2UgUHJvc3ByIHRvIGJ1aWxkIGJldHRlciByZWxhdGlvbnNoaXBzIHdpdGggZG9ub3JzPC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxGZWF0dXJlU2VjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3RyZW5ndGhlblJlbGF0aW9uc2hpcHNQYW5lbH1cbiAgICAgICAgICAgIHRpdGxlPVwiU3RyZW5ndGhlbiBkb25vciByZWxhdGlvbnNoaXBzXCJcbiAgICAgICAgICAgIGltYWdlU3JjPVwiL2Rvbm9yX3Byb2ZpbGUucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlNhbXBsZSBkb25vciBwcm9maWxlXCJcbiAgICAgICAgICAgIHdpZHRoPXsxMDAwfVxuICAgICAgICAgICAgaGVpZ2h0PXs1NzF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSXQgY2FuIGJlIGNoYWxsZW5naW5nIHRvIGJ1aWxkIHJlbGF0aW9uc2hpcHMgd2l0aCBkb25vcnMuIEN1dFxuICAgICAgICAgICAgdGhyb3VnaCB0aGUgaGFzc2xlIGFuZCBjcmVhdGUgaW5mb3JtYXRpdmUgZG9ub3IgcHJvZmlsZXMgdG9cbiAgICAgICAgICAgIGd1aWRlIHlvdXIgZnVuZHJhaXNpbmcgcHJvY2Vzcy5cbiAgICAgICAgICA8L0ZlYXR1cmVTZWN0aW9uPlxuXG4gICAgICAgICAgPEZlYXR1cmVTZWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lbmdhZ2VQYW5lbH1cbiAgICAgICAgICAgIHRpdGxlPVwiRWZmZWN0aXZlbHkgZW5nYWdlIHdpdGggeW91ciBkb25vcnNcIlxuICAgICAgICAgICAgaW1hZ2VTcmM9XCIvam91cm5leV9idWlsZGVyLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJKb3VybmV5IEJ1aWxkZXIgRGVtbyBJbWFnZVwiXG4gICAgICAgICAgICB3aWR0aD17MTA4NH1cbiAgICAgICAgICAgIGhlaWdodD17NjE5fVxuICAgICAgICAgICAgbGVmdFxuICAgICAgICAgID5cbiAgICAgICAgICAgIE1pc3Npbmcgb3V0IG9uIG9wcG9ydHVuaXRpZXMgd2l0aCBkb25vcnMgY2FuIGJlIGZydXN0cmF0aW5nLlxuICAgICAgICAgICAgUGxhbiB5b3VyIGRvbm9yIGludGVyYWN0aW9ucyBpbiBhZHZhbmNlIHNvIHlvdSBjYW4gbWFrZSB0aGUgbW9zdFxuICAgICAgICAgICAgb2YgZXZlcnkgb3Bwb3J0dW5pdHkuXG4gICAgICAgICAgPC9GZWF0dXJlU2VjdGlvbj5cblxuICAgICAgICAgIDxGZWF0dXJlU2VjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMub25saW5lRG9uYXRpb25zUGFuZWx9XG4gICAgICAgICAgICB0aXRsZT1cIkltcHJvdmUgb25saW5lIGdpdmluZ1wiXG4gICAgICAgICAgICBpbWFnZVNyYz1cIi9kb25hdGlvbnMucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlNhbXBsZSBkb25hdGlvbiBmb3JtXCJcbiAgICAgICAgICAgIHdpZHRoPXsxMDg0fVxuICAgICAgICAgICAgaGVpZ2h0PXs2MTl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRG9uJ3QgcmlzayBsb3NpbmcgeW91ciBkb25vcnMgYXQgdGhlIGZpbmlzaCBsaW5lLiBVc2Ugb3VyXG4gICAgICAgICAgICBjdXN0b21pemVhYmxlIGRvbmF0aW9uIGZvcm1zIHRvIHByb3ZpZGUgYSBiZXR0ZXIgZG9ub3JcbiAgICAgICAgICAgIGV4cGVyaWVuY2UgYW5kIGNvbnZlcnQgbW9yZSBvZnRlbi5cbiAgICAgICAgICA8L0ZlYXR1cmVTZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNTZWN0aW9ufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNUaXRsZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIGNlbnRlcj5BbGwgeW91ciBmYXZvcml0ZSBmZWF0dXJlcyBpbiBhIHNpbmdsZSB0b29sPC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzU3ViVGl0bGV9PlxuICAgICAgICAgICAgICAgIERlc2lnbmVkIGFuZCBvcHRpbWl6ZWQgZm9yIGJldHRlciBmdW5kcmFpc2luZy5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNHcmlkfT5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiQ2xvdWQgaG9zdGVkXCIgaWNvbj1cImljb25zL2Nsb3VkLnN2Z1wiPlxuICAgICAgICAgICAgICAgIE5vIHNvZnR3YXJlIHVwZGF0ZXMsIG5vIG1haW50ZW5hbmNlLiBBbGwgeW91IG5lZWQgaXMgYW4gbW9kZXJuXG4gICAgICAgICAgICAgICAgd2ViIGJyb3dzZXIuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIlNpbXBsZSBzZXR1cFwiIGljb249XCJpY29ucy9zZXR0aW5ncy5zdmdcIj5cbiAgICAgICAgICAgICAgICBTdGFydCBtYW5hZ2luZyB5b3VyIGRhdGEgYW5kIGJ1aWxkaW5nIGRvbm9yIGpvdXJuZXlzIHdpdGggYSBmZXdcbiAgICAgICAgICAgICAgICBzaW1wbGUgY2xpY2tzLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJDb3VudGxlc3MgaW50ZWdyYXRpb25zXCIgaWNvbj1cImljb25zL2dyaWQuc3ZnXCI+XG4gICAgICAgICAgICAgICAgU2ltcGxpZnkgeW91ciBwcm9jZXNzZXMuIENvbm5lY3QgdG8gZXhpc3RpbmcgdG9vbHMgdGhhdCB5b3UgdXNlXG4gICAgICAgICAgICAgICAgYW5kIHJlZHVjZSBtYW51YWwgd29yay5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiU2VjdXJpdHkgZmlyc3RcIiBpY29uPVwiaWNvbnMvbG9jay5zdmdcIj5cbiAgICAgICAgICAgICAgICBLZWVwIHlvdXIgZGF0YSBzZWN1cmUgd2l0aCBhIHJlbGlhYmxlIGRhdGFiYXNlIChob3N0ZWQgd2l0aFxuICAgICAgICAgICAgICAgIE1vbmdvREIgQXRsYXPihKIpLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJCZXR0ZXIgY29sbGFib3JhdGlvblwiIGljb249XCJpY29ucy9jb2xsYWJvcmF0aW9uLnN2Z1wiPlxuICAgICAgICAgICAgICAgIFJlZHVjZSBtaXNjb21tdW5pY2F0aW9uLiBJbnN0YW50bHkgc3luYyB5b3VyIHdvcmsgYWNyb3NzIHlvdXJcbiAgICAgICAgICAgICAgICBvcmdhbml6YXRpb24uXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkVhc3ktdG8tdXNlXCIgaWNvbj1cImljb25zL2NoZWNrbWFyay5zdmdcIj5cbiAgICAgICAgICAgICAgICBXaXRoIG91ciBzb2Z0d2FyZSwgeW91IGRvbuKAmXQgbmVlZCB0byB3b3JyeSBhYm91dCBhZGRpdGlvbmFsXG4gICAgICAgICAgICAgICAgdHJhaW5pbmcgdG8gZ2V0IHRoZSBqb2IgZG9uZS5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnRlc3RpbW9uaWFsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudFdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8cD5cIkkgaGF2ZSBhbHdheXMgdW5kZXJzdG9vZCB0aGUgaW1wb3J0YW5jZSBvZiBkYXRhLCBidXQgSSB3YXMgbmV2ZXJcbiAgICAgICAgICAgICAgICBlYWdlciB0byB1dGlsaXplIGl0IHVudGlsIHdvcmtpbmcgd2l0aCBQcm9zcHIuIFRoZSB3YXkgdGhlIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgaGFzIG1hcHBlZCBvdXQgYW5kIHR1cm5lZCBkb25vciBlbmdhZ2VtZW50IGludG8gYSB2aXN1YWwgcHJvY2VzcyBpc1xuICAgICAgICAgICAgICAgIHJlZnJlc2hpbmcgZm9yIGFueW9uZSB3b3JraW5nIGluIHRoaXMgZmllbGQuXCI8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyfT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJOYW1lfT5SeWFuIElsbDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJKb2J9PkZ1bmRyYWlzaW5nIE9mZmljZXIgYXQgT3VyIFBsYWNlIEtXPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvb3VyX3BsYWNlLnBuZ1wiIGFsdD1cIk91ciBQbGFjZSBMb2dvXCIgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJib29rRGVtb1wiIGNsYXNzTmFtZT17c3R5bGVzLmZpbmFsQ3RhUGFuZWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfSAvPlxuICAgICAgICAgICAgPEVtYWlsU2lnbnVwIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L21haW4+XG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==