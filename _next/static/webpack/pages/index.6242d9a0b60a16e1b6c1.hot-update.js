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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blobBorder
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
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
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), left && renderedImage]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroSubtitle,
              children: "From the first contact to the final donation, Prospr helps you engage your donors, all without making it feel like a chore."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn btn-primary btn-large",
            href: "#bookDemo",
            children: "Book a demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
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
            lineNumber: 86,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBanner,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBannerText,
            children: "Trusted by professionals from these organizations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
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
                lineNumber: 99,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
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
                lineNumber: 107,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
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
                lineNumber: 115,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
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
                lineNumber: 123,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dividerHorizontal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
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
            lineNumber: 135,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
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
          lineNumber: 138,
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
          lineNumber: 151,
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
          lineNumber: 165,
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
              lineNumber: 180,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSubTitle,
              children: "Designed and optimized for better fundraising."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresGrid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Cloud hosted",
              icon: "icons/cloud.svg",
              children: "No software updates, no maintenance. All you need is an modern web browser."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Simple setup",
              icon: "icons/settings.svg",
              children: "Start managing your data and building donor journeys with a few simple clicks."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Countless integrations",
              icon: "icons/grid.svg",
              children: "Simplify your processes. Connect to existing tools that you use and reduce manual work."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Security first",
              icon: "icons/lock.svg",
              children: "Keep your data secure with a reliable database (hosted with MongoDB Atlas\u2122)."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Better collaboration",
              icon: "icons/collaboration.svg",
              children: "Reduce miscommunication. Instantly sync your work across your organization."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Easy-to-use",
              icon: "icons/checkmark.svg",
              children: "With our software, you don\u2019t need to worry about additional training to get the job done."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testimonial,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contentWrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\"I have always understood the importance of data, but I was never eager to utilize it until working with Prospr. The way the database has mapped out and turned donor engagement into a visual process is refreshing for anyone working in this field.\""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userName,
                children: "Ryan Ill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userJob,
                children: "Fundraising Officer at Our Place KW"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/our_place.png",
              alt: "Our Place Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: "bookDemo",
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.finalCtaPanel,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.background
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_EmailSignup__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRmVhdHVyZUNhcmQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInN0eWxlcyIsImZlYXR1cmVDYXJkIiwiZmVhdHVyZUNhcmRJbWFnZSIsIlNlY3Rpb25IZWFkZXIiLCJjZW50ZXIiLCJwYWRkZWQiLCJjbGFzc05hbWVzIiwic2VjdGlvbkhlYWRlciIsImNlbnRlcmVkIiwiaGFzaFN0cmluZyIsInMiLCJoYXNoIiwiaSIsImNociIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJibG9icyIsIkZlYXR1cmVTZWN0aW9uIiwiY2xhc3NOYW1lIiwiaW1hZ2VTcmMiLCJpbWFnZUFsdCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImJsb2IiLCJyZW5kZXJlZEltYWdlIiwiaW1hZ2VQYW5lbCIsImltYWdlQ29udGFpbmVyIiwiZmVhdHVyZUJsb2IiLCJibG9iQm9yZGVyIiwidmFsdWVTZWN0aW9uIiwiaW5mb1BhbmVsIiwiSG9tZSIsImNvbnRhaW5lciIsImJvZHlDb250YWluZXIiLCJtYWluIiwiaGVybyIsImhlcm9UZXh0Q29udGFpbmVyIiwiaGVyb1RpdGxlIiwiaGVyb1N1YnRpdGxlIiwicHJvZHVjdEltYWdlQ29udGFpbmVyIiwicHJvZHVjdEltYWdlIiwidXNlcnNCYW5uZXIiLCJ1c2Vyc0Jhbm5lclRleHQiLCJ1c2Vyc0xpc3QiLCJ1c2Vyc0xvZ29XcmFwcGVyIiwiZGl2aWRlckhvcml6b250YWwiLCJmZWF0dXJlc1RhZ2xpbmUiLCJzdHJlbmd0aGVuUmVsYXRpb25zaGlwc1BhbmVsIiwiZW5nYWdlUGFuZWwiLCJvbmxpbmVEb25hdGlvbnNQYW5lbCIsImZlYXR1cmVzU2VjdGlvbiIsImZlYXR1cmVzVGl0bGVDb250YWluZXIiLCJmZWF0dXJlc1N1YlRpdGxlIiwiZmVhdHVyZXNHcmlkIiwidGVzdGltb25pYWwiLCJjb250ZW50V3JhcHBlciIsInVzZXIiLCJ1c2VyTmFtZSIs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Q0FBQzZEO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFzS0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRLRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlMRCxDQWxMRDs7TUFBTTdCLEk7QUFvTFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYyNDJkOWEwYjYwYTE2ZTFiNmMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgRW1haWxTaWdudXAgZnJvbSAnY29tcG9uZW50cy9FbWFpbFNpZ251cCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgRmVhdHVyZUNhcmQgPSAoeyB0aXRsZSwgY2hpbGRyZW4sIGljb24gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVDYXJkfT5cbiAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVDYXJkSW1hZ2V9IHNyYz17aWNvbn0gd2lkdGg9ezM2fSBoZWlnaHQ9ezM2fSBhbHQ9XCJGZWF0dXJlIEljb25cIiAvPlxuICAgIDxoNT57dGl0bGV9PC9oNT5cbiAgICA8cD57Y2hpbGRyZW59PC9wPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSAoeyBjaGlsZHJlbiwgY2VudGVyID0gZmFsc2UsIHBhZGRlZCA9IGZhbHNlIH0pID0+IChcbiAgPGgyIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuc2VjdGlvbkhlYWRlciwgY2VudGVyICYmIHN0eWxlcy5jZW50ZXJlZCwgcGFkZGVkICYmIHN0eWxlcy5wYWRkZWQpfT57Y2hpbGRyZW59PC9oMj5cbik7XG5cbmNvbnN0IGhhc2hTdHJpbmcgPSAocykgPT4ge1xuICBsZXQgaGFzaCA9IDAsIGksIGNocjtcbiAgaWYgKHMubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaDtcbiAgZm9yIChpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICBjaHIgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hyO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cbiAgcmV0dXJuIGhhc2g7XG59O1xuXG5jb25zdCBibG9icyA9IFsnL2RlbW9fZm9ybS9zaGFwZV8xLnN2ZycsICcvZGVtb19mb3JtL3NoYXBlXzIuc3ZnJ107XG5cbmNvbnN0IEZlYXR1cmVTZWN0aW9uID0gKHsgdGl0bGUsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIGltYWdlU3JjLCBpbWFnZUFsdCwgbGVmdCA9IGZhbHNlLCB3aWR0aCwgaGVpZ2h0LCBibG9iID0gJy9kZW1vX2Zvcm0vc2hhcGVfMS5zdmcnIH0pID0+IHtcbiAgY29uc3QgaGFzaCA9IGhhc2hTdHJpbmcodGl0bGUgKyBpbWFnZUFsdCk7XG4gIGNvbnN0IHJlbmRlcmVkSW1hZ2UgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVBhbmVsfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VTcmN9IGFsdD17aW1hZ2VBbHR9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IC8+XG4gICAgICAgIDxpbWcgc3JjPXtibG9ifSBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlQmxvYn0gYWx0PVwiVmlzdWFsIGZsb3VyaXNoIGJsb2JcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ibG9iQm9yZGVyfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBzdHlsZXMudmFsdWVTZWN0aW9uKX0+XG4gICAgICB7ICFsZWZ0ICYmIHJlbmRlcmVkSW1hZ2V9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuaW5mb1BhbmVsLCBzdHlsZXMubGVmdCl9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyPnt0aXRsZX08L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBsZWZ0ICYmIHJlbmRlcmVkSW1hZ2V9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UHJvc3ByPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlDb250YWluZXJ9PlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvVGV4dENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZXJvVGl0bGV9PlxuICAgICAgICAgICAgICAgIFRoZSBkb25vciBtYW5hZ2VtZW50IHRvb2wgeW91J2xsIGxvdmUgdXNpbmdcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvU3VidGl0bGV9PlxuICAgICAgICAgICAgICAgIEZyb20gdGhlIGZpcnN0IGNvbnRhY3QgdG8gdGhlIGZpbmFsIGRvbmF0aW9uLCBQcm9zcHIgaGVscHMgeW91XG4gICAgICAgICAgICAgICAgZW5nYWdlIHlvdXIgZG9ub3JzLCBhbGwgd2l0aG91dCBtYWtpbmcgaXQgZmVlbCBsaWtlIGEgY2hvcmUuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxhcmdlXCIgaHJlZj1cIiNib29rRGVtb1wiPlxuICAgICAgICAgICAgICBCb29rIGEgZGVtb1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaGVyb19pbWcucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiUHJvc3ByIFByb2R1Y3QgSW1hZ2VcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW1hZ2V9XG4gICAgICAgICAgICAgIHdpZHRoPXsxMTg5fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezk2M31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0Jhbm5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzQmFubmVyVGV4dH0+VHJ1c3RlZCBieSBwcm9mZXNzaW9uYWxzIGZyb20gdGhlc2Ugb3JnYW5pemF0aW9uczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xpc3R9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzTG9nb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvc19vcmdzL3RvdXJldHRlX2NhbmFkYS5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiVG91cmV0dGUgQ2FuYWRhXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxODF9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezc0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzTG9nb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvc19vcmdzL2NvZi5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiQ29tcGFueSBvZiBGb29sc1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTU4fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9vdXJfcGxhY2UucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIk91ciBQbGFjZVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjU5fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9tci5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiTWFudWVscyBSaXZlclwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZpZGVySG9yaXpvbnRhbH0gLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNUYWdsaW5lfT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIGNlbnRlciBwYWRkZWQ+VXNlIFByb3NwciB0byBidWlsZCBiZXR0ZXIgcmVsYXRpb25zaGlwcyB3aXRoIGRvbm9yczwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0cmVuZ3RoZW5SZWxhdGlvbnNoaXBzUGFuZWx9XG4gICAgICAgICAgICB0aXRsZT1cIlN0cmVuZ3RoZW4gZG9ub3IgcmVsYXRpb25zaGlwc1wiXG4gICAgICAgICAgICBpbWFnZVNyYz1cIi9kb25vcl9wcm9maWxlLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJTYW1wbGUgZG9ub3IgcHJvZmlsZVwiXG4gICAgICAgICAgICB3aWR0aD17MTAwMH1cbiAgICAgICAgICAgIGhlaWdodD17NTcxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEl0IGNhbiBiZSBjaGFsbGVuZ2luZyB0byBidWlsZCByZWxhdGlvbnNoaXBzIHdpdGggZG9ub3JzLiBDdXRcbiAgICAgICAgICAgIHRocm91Z2ggdGhlIGhhc3NsZSBhbmQgY3JlYXRlIGluZm9ybWF0aXZlIGRvbm9yIHByb2ZpbGVzIHRvXG4gICAgICAgICAgICBndWlkZSB5b3VyIGZ1bmRyYWlzaW5nIHByb2Nlc3MuXG4gICAgICAgICAgPC9GZWF0dXJlU2VjdGlvbj5cblxuICAgICAgICAgIDxGZWF0dXJlU2VjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZW5nYWdlUGFuZWx9XG4gICAgICAgICAgICB0aXRsZT1cIkVmZmVjdGl2ZWx5IGVuZ2FnZSB3aXRoIHlvdXIgZG9ub3JzXCJcbiAgICAgICAgICAgIGltYWdlU3JjPVwiL2pvdXJuZXlfYnVpbGRlci5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiSm91cm5leSBCdWlsZGVyIERlbW8gSW1hZ2VcIlxuICAgICAgICAgICAgd2lkdGg9ezEwODR9XG4gICAgICAgICAgICBoZWlnaHQ9ezYxOX1cbiAgICAgICAgICAgIGxlZnRcbiAgICAgICAgICA+XG4gICAgICAgICAgICBNaXNzaW5nIG91dCBvbiBvcHBvcnR1bml0aWVzIHdpdGggZG9ub3JzIGNhbiBiZSBmcnVzdHJhdGluZy5cbiAgICAgICAgICAgIFBsYW4geW91ciBkb25vciBpbnRlcmFjdGlvbnMgaW4gYWR2YW5jZSBzbyB5b3UgY2FuIG1ha2UgdGhlIG1vc3RcbiAgICAgICAgICAgIG9mIGV2ZXJ5IG9wcG9ydHVuaXR5LlxuICAgICAgICAgIDwvRmVhdHVyZVNlY3Rpb24+XG5cbiAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm9ubGluZURvbmF0aW9uc1BhbmVsfVxuICAgICAgICAgICAgdGl0bGU9XCJJbXByb3ZlIG9ubGluZSBnaXZpbmdcIlxuICAgICAgICAgICAgaW1hZ2VTcmM9XCIvZG9uYXRpb25zLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJTYW1wbGUgZG9uYXRpb24gZm9ybVwiXG4gICAgICAgICAgICB3aWR0aD17MTA4NH1cbiAgICAgICAgICAgIGhlaWdodD17NjE5fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIERvbid0IHJpc2sgbG9zaW5nIHlvdXIgZG9ub3JzIGF0IHRoZSBmaW5pc2ggbGluZS4gVXNlIG91clxuICAgICAgICAgICAgY3VzdG9taXplYWJsZSBkb25hdGlvbiBmb3JtcyB0byBwcm92aWRlIGEgYmV0dGVyIGRvbm9yXG4gICAgICAgICAgICBleHBlcmllbmNlIGFuZCBjb252ZXJ0IG1vcmUgb2Z0ZW4uXG4gICAgICAgICAgPC9GZWF0dXJlU2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzU2VjdGlvbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzVGl0bGVDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRlciBjZW50ZXI+QWxsIHlvdXIgZmF2b3JpdGUgZmVhdHVyZXMgaW4gYSBzaW5nbGUgdG9vbDwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc1N1YlRpdGxlfT5cbiAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgb3B0aW1pemVkIGZvciBiZXR0ZXIgZnVuZHJhaXNpbmcuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzR3JpZH0+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkNsb3VkIGhvc3RlZFwiIGljb249XCJpY29ucy9jbG91ZC5zdmdcIj5cbiAgICAgICAgICAgICAgICBObyBzb2Z0d2FyZSB1cGRhdGVzLCBubyBtYWludGVuYW5jZS4gQWxsIHlvdSBuZWVkIGlzIGFuIG1vZGVyblxuICAgICAgICAgICAgICAgIHdlYiBicm93c2VyLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJTaW1wbGUgc2V0dXBcIiBpY29uPVwiaWNvbnMvc2V0dGluZ3Muc3ZnXCI+XG4gICAgICAgICAgICAgICAgU3RhcnQgbWFuYWdpbmcgeW91ciBkYXRhIGFuZCBidWlsZGluZyBkb25vciBqb3VybmV5cyB3aXRoIGEgZmV3XG4gICAgICAgICAgICAgICAgc2ltcGxlIGNsaWNrcy5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiQ291bnRsZXNzIGludGVncmF0aW9uc1wiIGljb249XCJpY29ucy9ncmlkLnN2Z1wiPlxuICAgICAgICAgICAgICAgIFNpbXBsaWZ5IHlvdXIgcHJvY2Vzc2VzLiBDb25uZWN0IHRvIGV4aXN0aW5nIHRvb2xzIHRoYXQgeW91IHVzZVxuICAgICAgICAgICAgICAgIGFuZCByZWR1Y2UgbWFudWFsIHdvcmsuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIlNlY3VyaXR5IGZpcnN0XCIgaWNvbj1cImljb25zL2xvY2suc3ZnXCI+XG4gICAgICAgICAgICAgICAgS2VlcCB5b3VyIGRhdGEgc2VjdXJlIHdpdGggYSByZWxpYWJsZSBkYXRhYmFzZSAoaG9zdGVkIHdpdGhcbiAgICAgICAgICAgICAgICBNb25nb0RCIEF0bGFz4oSiKS5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiQmV0dGVyIGNvbGxhYm9yYXRpb25cIiBpY29uPVwiaWNvbnMvY29sbGFib3JhdGlvbi5zdmdcIj5cbiAgICAgICAgICAgICAgICBSZWR1Y2UgbWlzY29tbXVuaWNhdGlvbi4gSW5zdGFudGx5IHN5bmMgeW91ciB3b3JrIGFjcm9zcyB5b3VyXG4gICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJFYXN5LXRvLXVzZVwiIGljb249XCJpY29ucy9jaGVja21hcmsuc3ZnXCI+XG4gICAgICAgICAgICAgICAgV2l0aCBvdXIgc29mdHdhcmUsIHlvdSBkb27igJl0IG5lZWQgdG8gd29ycnkgYWJvdXQgYWRkaXRpb25hbFxuICAgICAgICAgICAgICAgIHRyYWluaW5nIHRvIGdldCB0aGUgam9iIGRvbmUuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy50ZXN0aW1vbmlhbH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRXcmFwcGVyfT5cbiAgICAgICAgICAgICAgPHA+XCJJIGhhdmUgYWx3YXlzIHVuZGVyc3Rvb2QgdGhlIGltcG9ydGFuY2Ugb2YgZGF0YSwgYnV0IEkgd2FzIG5ldmVyXG4gICAgICAgICAgICAgICAgZWFnZXIgdG8gdXRpbGl6ZSBpdCB1bnRpbCB3b3JraW5nIHdpdGggUHJvc3ByLiBUaGUgd2F5IHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIGhhcyBtYXBwZWQgb3V0IGFuZCB0dXJuZWQgZG9ub3IgZW5nYWdlbWVudCBpbnRvIGEgdmlzdWFsIHByb2Nlc3MgaXNcbiAgICAgICAgICAgICAgICByZWZyZXNoaW5nIGZvciBhbnlvbmUgd29ya2luZyBpbiB0aGlzIGZpZWxkLlwiPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcn0+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VyTmFtZX0+UnlhbiBJbGw8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51c2VySm9ifT5GdW5kcmFpc2luZyBPZmZpY2VyIGF0IE91ciBQbGFjZSBLVzwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL291cl9wbGFjZS5wbmdcIiBhbHQ9XCJPdXIgUGxhY2UgTG9nb1wiIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uIGlkPVwiYm9va0RlbW9cIiBjbGFzc05hbWU9e3N0eWxlcy5maW5hbEN0YVBhbmVsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0gLz5cbiAgICAgICAgICAgIDxFbWFpbFNpZ251cCAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=