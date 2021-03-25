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
var blobColors = ['#E2EFFE', '#FCEDF1', // '#FFFCDB',
'#FFEAE0', '#F2E7FD'];

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
  console.log(title, hash);

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
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blobBorder,
        style: {
          backgroundColor: blobColors[Math.abs(hash % blobColors.length)]
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), left && renderedImage]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
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
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroSubtitle,
              children: "From the first contact to the final donation, Prospr helps you engage your donors, all without making it feel like a chore."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn btn-primary btn-large",
            href: "#bookDemo",
            children: "Book a demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
            lineNumber: 94,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBanner,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBannerText,
            children: "Trusted by professionals from these organizations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
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
                src: "/logos_orgs/cof.png",
                alt: "Company of Fools",
                width: 158,
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
                src: "/logos_orgs/our_place.png",
                alt: "Our Place",
                width: 259,
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
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/logos_orgs/mr.png",
                alt: "Manuels River",
                width: 200,
                height: 72
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dividerHorizontal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
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
            lineNumber: 143,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
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
          lineNumber: 146,
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
          lineNumber: 159,
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
          lineNumber: 173,
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
              lineNumber: 188,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSubTitle,
              children: "Designed and optimized for better fundraising."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresGrid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Cloud hosted",
              icon: "icons/cloud.svg",
              children: "No software updates, no maintenance. All you need is an modern web browser."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Simple setup",
              icon: "icons/settings.svg",
              children: "Start managing your data and building donor journeys with a few simple clicks."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Countless integrations",
              icon: "icons/grid.svg",
              children: "Simplify your processes. Connect to existing tools that you use and reduce manual work."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Security first",
              icon: "icons/lock.svg",
              children: "Keep your data secure with a reliable database (hosted with MongoDB Atlas\u2122)."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Better collaboration",
              icon: "icons/collaboration.svg",
              children: "Reduce miscommunication. Instantly sync your work across your organization."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Easy-to-use",
              icon: "icons/checkmark.svg",
              children: "With our software, you don\u2019t need to worry about additional training to get the job done."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testimonial,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contentWrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\"I have always understood the importance of data, but I was never eager to utilize it until working with Prospr. The way the database has mapped out and turned donor engagement into a visual process is refreshing for anyone working in this field.\""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userName,
                children: "Ryan Ill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userJob,
                children: "Fundraising Officer at Our Place KW"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/our_place.png",
              alt: "Our Place Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: "bookDemo",
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.finalCtaPanel,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.background
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_EmailSignup__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRmVhdHVyZUNhcmQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInN0eWxlcyIsImZlYXR1cmVDYXJkIiwiZmVhdHVyZUNhcmRJbWFnZSIsIlNlY3Rpb25IZWFkZXIiLCJjZW50ZXIiLCJwYWRkZWQiLCJjbGFzc05hbWVzIiwic2VjdGlvbkhlYWRlciIsImNlbnRlcmVkIiwiaGFzaFN0cmluZyIsInMiLCJoYXNoIiwiaSIsImNociIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJibG9icyIsImJsb2JDb2xvcnMiLCJGZWF0dXJlU2VjdGlvbiIsImNsYXNzTmFtZSIsImltYWdlU3JjIiwiaW1hZ2VBbHQiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJibG9iIiwiY29uc29sZSIsImxvZyIsInJlbmRlcmVkSW1hZ2UiLCJpbWFnZVBhbmVsIiwiaW1hZ2VDb250YWluZXIiLCJibG9iQm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiTWF0aCIsImFicyIsInZhbHVlU2VjdGlvbiIsImluZm9QYW5lbCIsIkhvbWUiLCJjb250YWluZXIiLCJib2R5Q29udGFpbmVyIiwibWFpbiIsImhlcm8iLCJoZXJvVGV4dENvbnRhaW5lciIsImhlcm9UaXRsZSIsImhlcm9TdWJ0aXRsZSIsInByb2R1Y3RJbWFnZUNvbnRhaW5lciIsInByb2R1Y3RJbWFnZSIsInVzZXJzQmFubmVyIiwidXNlcnNCYW5uZXJUZXh0IiwidXNlcnNMaXN0IiwidXNlcnNMb2dvV3JhcHBlciIsImRpdmlkZXJIb3Jpem9udGFsIiwiZmVhdHVyZXNUYWdsaW5lIiwic3RyZW5ndGhlblJlbGF0aW9uc2hpcHNQYW5lbCIsImVuZ2FnZVBhbmVsIiwib25saW5lRG9uYXRpb25zUGFuZWwiLCJmZWF0dXJlc1NlY3Rpb24iLCJmZWF0dXJlc1RpdGxlQ29udGFpbmVyIiwiZmVhdHVyZXNTdWJUaXRsZSIsImZlYXR1cmVzR3JpZCIsInRlc3RpbW9uaWFsIiwiY29udGVudFdyYXBwZXIiLCJ1c2VyIiwidXNlck5hbWUiLCJ1c2VySm9iIiwiZmluYWxDdGFQYW5lbCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxNQUFvQkMsSUFBcEIsUUFBb0JBLElBQXBCO0FBQUEsc0JBQ2xCO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxXQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxnQkFBdkI7QUFBeUMsU0FBRyxFQUFFSCxJQUE5QztBQUFvRCxXQUFLLEVBQUUsRUFBM0Q7QUFBK0QsWUFBTSxFQUFFLEVBQXZFO0FBQTJFLFNBQUcsRUFBQztBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQXBCOztLQUFNRixXOztBQVFOLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHTCxRQUFILFNBQUdBLFFBQUg7QUFBQSwyQkFBYU0sTUFBYjtBQUFBLE1BQWFBLE1BQWIsNkJBQXNCLEtBQXRCO0FBQUEsMkJBQTZCQyxNQUE3QjtBQUFBLE1BQTZCQSxNQUE3Qiw2QkFBc0MsS0FBdEM7QUFBQSxzQkFDcEI7QUFBSSxhQUFTLEVBQUVDLGlEQUFVLENBQUNOLDhEQUFNLENBQUNPLGFBQVIsRUFBdUJILE1BQU0sSUFBSUosOERBQU0sQ0FBQ1EsUUFBeEMsRUFBa0RILE1BQU0sSUFBSUwsOERBQU0s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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhKRixlQStKRTtBQUFTLFlBQUUsRUFBQyxVQUFaO0FBQXVCLG1CQUFTLEVBQUVoRSw4REFBTSxDQUFDaUUsYUFBekM7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVqRSw4REFBTSxDQUFDa0U7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9KRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXNLRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUxELENBbExEOztNQUFNN0IsSTtBQW9MU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmU4NjRiZjcyNTI5ZWRkNDhjMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBFbWFpbFNpZ251cCBmcm9tICdjb21wb25lbnRzL0VtYWlsU2lnbnVwJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBGZWF0dXJlQ2FyZCA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgaWNvbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZUNhcmR9PlxuICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZUNhcmRJbWFnZX0gc3JjPXtpY29ufSB3aWR0aD17MzZ9IGhlaWdodD17MzZ9IGFsdD1cIkZlYXR1cmUgSWNvblwiIC8+XG4gICAgPGg1Pnt0aXRsZX08L2g1PlxuICAgIDxwPntjaGlsZHJlbn08L3A+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgU2VjdGlvbkhlYWRlciA9ICh7IGNoaWxkcmVuLCBjZW50ZXIgPSBmYWxzZSwgcGFkZGVkID0gZmFsc2UgfSkgPT4gKFxuICA8aDIgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5zZWN0aW9uSGVhZGVyLCBjZW50ZXIgJiYgc3R5bGVzLmNlbnRlcmVkLCBwYWRkZWQgJiYgc3R5bGVzLnBhZGRlZCl9PntjaGlsZHJlbn08L2gyPlxuKTtcblxuY29uc3QgaGFzaFN0cmluZyA9IChzKSA9PiB7XG4gIGxldCBoYXNoID0gMCwgaSwgY2hyO1xuICBpZiAocy5sZW5ndGggPT09IDApIHJldHVybiBoYXNoO1xuICBmb3IgKGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgIGNociA9IHMuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaHI7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuICByZXR1cm4gaGFzaDtcbn07XG5cbmNvbnN0IGJsb2JzID0gWycvZGVtb19mb3JtL3NoYXBlXzEuc3ZnJywgJy9kZW1vX2Zvcm0vc2hhcGVfMi5zdmcnXTtcbmNvbnN0IGJsb2JDb2xvcnMgPSBbXG4gICcjRTJFRkZFJyxcbiAgJyNGQ0VERjEnLFxuICAvLyAnI0ZGRkNEQicsXG4gICcjRkZFQUUwJyxcbiAgJyNGMkU3RkQnLFxuXTtcblxuY29uc3QgRmVhdHVyZVNlY3Rpb24gPSAoeyB0aXRsZSwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgaW1hZ2VTcmMsIGltYWdlQWx0LCBsZWZ0ID0gZmFsc2UsIHdpZHRoLCBoZWlnaHQsIGJsb2IgPSAnL2RlbW9fZm9ybS9zaGFwZV8xLnN2ZycgfSkgPT4ge1xuICBjb25zdCBoYXNoID0gaGFzaFN0cmluZyh0aXRsZSArIGltYWdlQWx0KTtcbiAgY29uc29sZS5sb2codGl0bGUsIGhhc2gpO1xuICBjb25zdCByZW5kZXJlZEltYWdlID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VQYW5lbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlU3JjfSBhbHQ9e2ltYWdlQWx0fSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICB7Lyo8aW1nIHNyYz17YmxvYn0gY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZUJsb2J9IGFsdD1cIlZpc3VhbCBmbG91cmlzaCBibG9iXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz4qL31cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmxvYkJvcmRlcn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBibG9iQ29sb3JzW01hdGguYWJzKGhhc2ggJSBibG9iQ29sb3JzLmxlbmd0aCldfX0vPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgc3R5bGVzLnZhbHVlU2VjdGlvbil9PlxuICAgICAgeyAhbGVmdCAmJiByZW5kZXJlZEltYWdlfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmluZm9QYW5lbCwgc3R5bGVzLmxlZnQpfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlcj57dGl0bGV9PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgbGVmdCAmJiByZW5kZXJlZEltYWdlfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlByb3NwcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5Q29udGFpbmVyfT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RleHRDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RpdGxlfT5cbiAgICAgICAgICAgICAgICBUaGUgZG9ub3IgbWFuYWdlbWVudCB0b29sIHlvdSdsbCBsb3ZlIHVzaW5nXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1N1YnRpdGxlfT5cbiAgICAgICAgICAgICAgICBGcm9tIHRoZSBmaXJzdCBjb250YWN0IHRvIHRoZSBmaW5hbCBkb25hdGlvbiwgUHJvc3ByIGhlbHBzIHlvdVxuICAgICAgICAgICAgICAgIGVuZ2FnZSB5b3VyIGRvbm9ycywgYWxsIHdpdGhvdXQgbWFraW5nIGl0IGZlZWwgbGlrZSBhIGNob3JlLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sYXJnZVwiIGhyZWY9XCIjYm9va0RlbW9cIj5cbiAgICAgICAgICAgICAgQm9vayBhIGRlbW9cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2hlcm9faW1nLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlByb3NwciBQcm9kdWN0IEltYWdlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlfVxuICAgICAgICAgICAgICB3aWR0aD17MTE4OX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs5NjN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNCYW5uZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0Jhbm5lclRleHR9PlRydXN0ZWQgYnkgcHJvZmVzc2lvbmFscyBmcm9tIHRoZXNlIG9yZ2FuaXphdGlvbnM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMaXN0fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy90b3VyZXR0ZV9jYW5hZGEucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlRvdXJldHRlIENhbmFkYVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTgxfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3NH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9jb2YucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbXBhbnkgb2YgRm9vbHNcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1OH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ29zX29yZ3Mvb3VyX3BsYWNlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJPdXIgUGxhY2VcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1OX1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ29zX29yZ3MvbXIucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIk1hbnVlbHMgUml2ZXJcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlckhvcml6b250YWx9IC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlc1wiIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzVGFnbGluZX0+XG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlciBjZW50ZXIgcGFkZGVkPlVzZSBQcm9zcHIgdG8gYnVpbGQgYmV0dGVyIHJlbGF0aW9uc2hpcHMgd2l0aCBkb25vcnM8L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPEZlYXR1cmVTZWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdHJlbmd0aGVuUmVsYXRpb25zaGlwc1BhbmVsfVxuICAgICAgICAgICAgdGl0bGU9XCJTdHJlbmd0aGVuIGRvbm9yIHJlbGF0aW9uc2hpcHNcIlxuICAgICAgICAgICAgaW1hZ2VTcmM9XCIvZG9ub3JfcHJvZmlsZS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiU2FtcGxlIGRvbm9yIHByb2ZpbGVcIlxuICAgICAgICAgICAgd2lkdGg9ezEwMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezU3MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBJdCBjYW4gYmUgY2hhbGxlbmdpbmcgdG8gYnVpbGQgcmVsYXRpb25zaGlwcyB3aXRoIGRvbm9ycy4gQ3V0XG4gICAgICAgICAgICB0aHJvdWdoIHRoZSBoYXNzbGUgYW5kIGNyZWF0ZSBpbmZvcm1hdGl2ZSBkb25vciBwcm9maWxlcyB0b1xuICAgICAgICAgICAgZ3VpZGUgeW91ciBmdW5kcmFpc2luZyBwcm9jZXNzLlxuICAgICAgICAgIDwvRmVhdHVyZVNlY3Rpb24+XG5cbiAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVuZ2FnZVBhbmVsfVxuICAgICAgICAgICAgdGl0bGU9XCJFZmZlY3RpdmVseSBlbmdhZ2Ugd2l0aCB5b3VyIGRvbm9yc1wiXG4gICAgICAgICAgICBpbWFnZVNyYz1cIi9qb3VybmV5X2J1aWxkZXIucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkpvdXJuZXkgQnVpbGRlciBEZW1vIEltYWdlXCJcbiAgICAgICAgICAgIHdpZHRoPXsxMDg0fVxuICAgICAgICAgICAgaGVpZ2h0PXs2MTl9XG4gICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWlzc2luZyBvdXQgb24gb3Bwb3J0dW5pdGllcyB3aXRoIGRvbm9ycyBjYW4gYmUgZnJ1c3RyYXRpbmcuXG4gICAgICAgICAgICBQbGFuIHlvdXIgZG9ub3IgaW50ZXJhY3Rpb25zIGluIGFkdmFuY2Ugc28geW91IGNhbiBtYWtlIHRoZSBtb3N0XG4gICAgICAgICAgICBvZiBldmVyeSBvcHBvcnR1bml0eS5cbiAgICAgICAgICA8L0ZlYXR1cmVTZWN0aW9uPlxuXG4gICAgICAgICAgPEZlYXR1cmVTZWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vbmxpbmVEb25hdGlvbnNQYW5lbH1cbiAgICAgICAgICAgIHRpdGxlPVwiSW1wcm92ZSBvbmxpbmUgZ2l2aW5nXCJcbiAgICAgICAgICAgIGltYWdlU3JjPVwiL2RvbmF0aW9ucy5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiU2FtcGxlIGRvbmF0aW9uIGZvcm1cIlxuICAgICAgICAgICAgd2lkdGg9ezEwODR9XG4gICAgICAgICAgICBoZWlnaHQ9ezYxOX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBEb24ndCByaXNrIGxvc2luZyB5b3VyIGRvbm9ycyBhdCB0aGUgZmluaXNoIGxpbmUuIFVzZSBvdXJcbiAgICAgICAgICAgIGN1c3RvbWl6ZWFibGUgZG9uYXRpb24gZm9ybXMgdG8gcHJvdmlkZSBhIGJldHRlciBkb25vclxuICAgICAgICAgICAgZXhwZXJpZW5jZSBhbmQgY29udmVydCBtb3JlIG9mdGVuLlxuICAgICAgICAgIDwvRmVhdHVyZVNlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc1NlY3Rpb259PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc1RpdGxlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXIgY2VudGVyPkFsbCB5b3VyIGZhdm9yaXRlIGZlYXR1cmVzIGluIGEgc2luZ2xlIHRvb2w8L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNTdWJUaXRsZX0+XG4gICAgICAgICAgICAgICAgRGVzaWduZWQgYW5kIG9wdGltaXplZCBmb3IgYmV0dGVyIGZ1bmRyYWlzaW5nLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc0dyaWR9PlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJDbG91ZCBob3N0ZWRcIiBpY29uPVwiaWNvbnMvY2xvdWQuc3ZnXCI+XG4gICAgICAgICAgICAgICAgTm8gc29mdHdhcmUgdXBkYXRlcywgbm8gbWFpbnRlbmFuY2UuIEFsbCB5b3UgbmVlZCBpcyBhbiBtb2Rlcm5cbiAgICAgICAgICAgICAgICB3ZWIgYnJvd3Nlci5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiU2ltcGxlIHNldHVwXCIgaWNvbj1cImljb25zL3NldHRpbmdzLnN2Z1wiPlxuICAgICAgICAgICAgICAgIFN0YXJ0IG1hbmFnaW5nIHlvdXIgZGF0YSBhbmQgYnVpbGRpbmcgZG9ub3Igam91cm5leXMgd2l0aCBhIGZld1xuICAgICAgICAgICAgICAgIHNpbXBsZSBjbGlja3MuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkNvdW50bGVzcyBpbnRlZ3JhdGlvbnNcIiBpY29uPVwiaWNvbnMvZ3JpZC5zdmdcIj5cbiAgICAgICAgICAgICAgICBTaW1wbGlmeSB5b3VyIHByb2Nlc3Nlcy4gQ29ubmVjdCB0byBleGlzdGluZyB0b29scyB0aGF0IHlvdSB1c2VcbiAgICAgICAgICAgICAgICBhbmQgcmVkdWNlIG1hbnVhbCB3b3JrLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJTZWN1cml0eSBmaXJzdFwiIGljb249XCJpY29ucy9sb2NrLnN2Z1wiPlxuICAgICAgICAgICAgICAgIEtlZXAgeW91ciBkYXRhIHNlY3VyZSB3aXRoIGEgcmVsaWFibGUgZGF0YWJhc2UgKGhvc3RlZCB3aXRoXG4gICAgICAgICAgICAgICAgTW9uZ29EQiBBdGxhc+KEoikuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkJldHRlciBjb2xsYWJvcmF0aW9uXCIgaWNvbj1cImljb25zL2NvbGxhYm9yYXRpb24uc3ZnXCI+XG4gICAgICAgICAgICAgICAgUmVkdWNlIG1pc2NvbW11bmljYXRpb24uIEluc3RhbnRseSBzeW5jIHlvdXIgd29yayBhY3Jvc3MgeW91clxuICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbi5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiRWFzeS10by11c2VcIiBpY29uPVwiaWNvbnMvY2hlY2ttYXJrLnN2Z1wiPlxuICAgICAgICAgICAgICAgIFdpdGggb3VyIHNvZnR3YXJlLCB5b3UgZG9u4oCZdCBuZWVkIHRvIHdvcnJ5IGFib3V0IGFkZGl0aW9uYWxcbiAgICAgICAgICAgICAgICB0cmFpbmluZyB0byBnZXQgdGhlIGpvYiBkb25lLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudGVzdGltb25pYWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50V3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxwPlwiSSBoYXZlIGFsd2F5cyB1bmRlcnN0b29kIHRoZSBpbXBvcnRhbmNlIG9mIGRhdGEsIGJ1dCBJIHdhcyBuZXZlclxuICAgICAgICAgICAgICAgIGVhZ2VyIHRvIHV0aWxpemUgaXQgdW50aWwgd29ya2luZyB3aXRoIFByb3Nwci4gVGhlIHdheSB0aGUgZGF0YWJhc2VcbiAgICAgICAgICAgICAgICBoYXMgbWFwcGVkIG91dCBhbmQgdHVybmVkIGRvbm9yIGVuZ2FnZW1lbnQgaW50byBhIHZpc3VhbCBwcm9jZXNzIGlzXG4gICAgICAgICAgICAgICAgcmVmcmVzaGluZyBmb3IgYW55b25lIHdvcmtpbmcgaW4gdGhpcyBmaWVsZC5cIjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlck5hbWV9PlJ5YW4gSWxsPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudXNlckpvYn0+RnVuZHJhaXNpbmcgT2ZmaWNlciBhdCBPdXIgUGxhY2UgS1c8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9vdXJfcGxhY2UucG5nXCIgYWx0PVwiT3VyIFBsYWNlIExvZ29cIiAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImJvb2tEZW1vXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmluYWxDdGFQYW5lbH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9IC8+XG4gICAgICAgICAgICA8RW1haWxTaWdudXAgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvbWFpbj5cblxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9