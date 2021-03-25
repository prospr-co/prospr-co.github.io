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
      color = _ref3.color,
      blobBorder = _ref3.blobBorder;
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
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blobBorder,
        style: {
          backgroundColor: color,
          borderRadius: blobBorder
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), left && renderedImage]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
              lineNumber: 84,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroSubtitle,
              children: "From the first contact to the final donation, Prospr helps you engage your donors, all without making it feel like a chore."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn btn-primary btn-large",
            href: "#bookDemo",
            children: "Book a demo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
            lineNumber: 98,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBanner,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBannerText,
            children: "Trusted by professionals from these organizations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
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
                src: "/logos_orgs/cof.png",
                alt: "Company of Fools",
                width: 158,
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
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/logos_orgs/our_place.png",
                alt: "Our Place",
                width: 259,
                height: 72
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
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
                lineNumber: 135,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dividerHorizontal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
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
            lineNumber: 147,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.strengthenRelationshipsPanel,
          title: "Strengthen donor relationships",
          imageSrc: "/donor_profile.png",
          alt: "Sample donor profile",
          width: 1000,
          height: 571,
          color: "#E2EFFE",
          blobBorder: "30% 70% 70% 30% / 30% 48% 52% 70%",
          children: "It can be challenging to build relationships with donors. Cut through the hassle and create informative donor profiles to guide your fundraising process."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.engagePanel,
          title: "Effectively engage with your donors",
          imageSrc: "/journey_builder.png",
          alt: "Journey Builder Demo Image",
          width: 1084,
          height: 619,
          color: "#FCEDF1",
          blobBorder: "52% 48% 49% 51% / 59% 36% 64% 41% ",
          left: true,
          children: "Missing out on opportunities with donors can be frustrating. Plan your donor interactions in advance so you can make the most of every opportunity."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.onlineDonationsPanel,
          title: "Improve online giving",
          imageSrc: "/donations.png",
          alt: "Sample donation form",
          color: "#FFFCDB",
          width: 1084,
          height: 619,
          blobBorder: "67% 33% 38% 62% / 30% 64% 36% 70% ",
          children: "Don't risk losing your donors at the finish line. Use our customizeable donation forms to provide a better donor experience and convert more often."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
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
              lineNumber: 198,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSubTitle,
              children: "Designed and optimized for better fundraising."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresGrid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Cloud hosted",
              icon: "icons/cloud.svg",
              children: "No software updates, no maintenance. All you need is an modern web browser."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Simple setup",
              icon: "icons/settings.svg",
              children: "Start managing your data and building donor journeys with a few simple clicks."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Countless integrations",
              icon: "icons/grid.svg",
              children: "Simplify your processes. Connect to existing tools that you use and reduce manual work."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Security first",
              icon: "icons/lock.svg",
              children: "Keep your data secure with a reliable database (hosted with MongoDB Atlas\u2122)."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Better collaboration",
              icon: "icons/collaboration.svg",
              children: "Reduce miscommunication. Instantly sync your work across your organization."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
              title: "Easy-to-use",
              icon: "icons/checkmark.svg",
              children: "With our software, you don\u2019t need to worry about additional training to get the job done."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testimonial,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contentWrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\"I have always understood the importance of data, but I was never eager to utilize it until working with Prospr. The way the database has mapped out and turned donor engagement into a visual process is refreshing for anyone working in this field.\""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userName,
                children: "Ryan Ill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userJob,
                children: "Fundraising Officer at Our Place KW"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/our_place.png",
              alt: "Our Place Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: "bookDemo",
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.finalCtaPanel,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.background
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_EmailSignup__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRmVhdHVyZUNhcmQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInN0eWxlcyIsImZlYXR1cmVDYXJkIiwiZmVhdHVyZUNhcmRJbWFnZSIsIlNlY3Rpb25IZWFkZXIiLCJjZW50ZXIiLCJwYWRkZWQiLCJjbGFzc05hbWVzIiwic2VjdGlvbkhlYWRlciIsImNlbnRlcmVkIiwiaGFzaFN0cmluZyIsInMiLCJoYXNoIiwiaSIsImNociIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJibG9icyIsImJsb2JDb2xvcnMiLCJGZWF0dXJlU2VjdGlvbiIsImNsYXNzTmFtZSIsImltYWdlU3JjIiwiaW1hZ2VBbHQiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsImJsb2JCb3JkZXIiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyZWRJbWFnZSIsImltYWdlUGFuZWwiLCJpbWFnZUNvbnRhaW5lciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInZhbHVlU2VjdGlvbiIsImluZm9QYW5lbCIsIkhvbWUiLCJjb250YWluZXIiLCJib2R5Q29udGFpbmVyIiwibWFpbiIsImhlcm8iLCJoZXJvVGV4dENvbnRhaW5lciIsImhlcm9UaXRsZSIsImhlcm9TdWJ0aXRsZSIsInByb2R1Y3RJbWFnZUNvbnRhaW5lciIsInByb2R1Y3RJbWFnZSIsInVzZXJzQmFubmVyIiwidXNlcnNCYW5uZXJUZXh0IiwidXNlcnNMaXN0IiwidXNlcnNMb2dvV3JhcHBlciIsImRpdmlkZXJIb3Jpem9udGFsIiwiZmVhdHVyZXNUYWdsaW5lIiwic3RyZW5ndGhlblJlbGF0aW9uc2hpcHNQYW5lbCIsImVuZ2FnZVBhbmVsIiwib25saW5lRG9uYXRpb25zUGFuZWwiLCJmZWF0dXJlc1NlY3Rpb24iLCJmZWF0dXJlc1RpdGxlQ29udGFpbmVyIiwiZmVhdHVyZXNTdWJUaXRsZSIsImZlYXR1cmVzR3JpZCIsInRlc3RpbW9uaWFsIiwiY29udGVudFdyYXBwZXIiLCJ1c2VyIiwidXNlck5hbWUiLCJ1c2VySm9iIiwiZmluYWxDdGFQYW5lbCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxNQUFvQkMsSUFBcEIsUUFBb0JBLElBQXBCO0FBQUEsc0JBQ2xCO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxXQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxnQkFBdkI7QUFBeUMsU0FBRyxFQUFFSCxJQUE5QztBQUFvRCxXQUFLLEVBQUUsRUFBM0Q7QUFBK0QsWUFBTSxFQUFFLEVBQXZFO0FBQTJFLFNBQUcsRUFBQztBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQXBCOztLQUFNRixXOztBQVFOLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHTCxRQUFILFNBQUdBLFFBQUg7QUFBQSwyQkFBYU0sTUFBYjtBQUFBLE1BQWFBLE1BQWIsNkJBQXNCLEtBQXRCO0FBQUEsMkJBQTZCQyxNQUE3QjtBQUFBLE1BQTZCQSxNQUE3Qiw2QkFBc0MsS0FBdEM7QUFBQSxzQkFDcEI7QUFBSSxhQUFTLEVBQUVDLGlEQUFVLENBQUNOLDhEQUFNLENBQUNPLGFBQVIsRUFBdUJILE1BQU0sSUFBSUosOERBQU0sQ0FBQ1EsUUFBeEMsRUFBa0RILE1BQU0sSUFBSUwsOERB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QUE7QUFBQTtBQUFBO0FBQUEscUJBTEosZUFTRTtBQUFLLGlCQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsaUJBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEpGLGVBcUtFO0FBQVMsWUFBRSxFQUFDLFVBQVo7QUFBdUIsbUJBQVMsRUFBRS9ELDhEQUFNLENBQUNnRSxhQUF6QztBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRWhFLDhEQUFNLENBQUNpRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcktGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBNEtFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1S0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1TEQsQ0F4TEQ7O01BQU03QixJO0FBMExTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45OGQwZDM2YmI5OTYyN2ZjN2Q4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEVtYWlsU2lnbnVwIGZyb20gJ2NvbXBvbmVudHMvRW1haWxTaWdudXAnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEZlYXR1cmVDYXJkID0gKHsgdGl0bGUsIGNoaWxkcmVuLCBpY29uIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlQ2FyZH0+XG4gICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlQ2FyZEltYWdlfSBzcmM9e2ljb259IHdpZHRoPXszNn0gaGVpZ2h0PXszNn0gYWx0PVwiRmVhdHVyZSBJY29uXCIgLz5cbiAgICA8aDU+e3RpdGxlfTwvaDU+XG4gICAgPHA+e2NoaWxkcmVufTwvcD5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gKHsgY2hpbGRyZW4sIGNlbnRlciA9IGZhbHNlLCBwYWRkZWQgPSBmYWxzZSB9KSA9PiAoXG4gIDxoMiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnNlY3Rpb25IZWFkZXIsIGNlbnRlciAmJiBzdHlsZXMuY2VudGVyZWQsIHBhZGRlZCAmJiBzdHlsZXMucGFkZGVkKX0+e2NoaWxkcmVufTwvaDI+XG4pO1xuXG5jb25zdCBoYXNoU3RyaW5nID0gKHMpID0+IHtcbiAgbGV0IGhhc2ggPSAwLCBpLCBjaHI7XG4gIGlmIChzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2g7XG4gIGZvciAoaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hyID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNocjtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG4gIHJldHVybiBoYXNoO1xufTtcblxuY29uc3QgYmxvYnMgPSBbJy9kZW1vX2Zvcm0vc2hhcGVfMS5zdmcnLCAnL2RlbW9fZm9ybS9zaGFwZV8yLnN2ZyddO1xuY29uc3QgYmxvYkNvbG9ycyA9IFtcbiAgJyNFMkVGRkUnLFxuICAnI0ZDRURGMScsXG4gICcjRkZGQ0RCJyxcbiAgJyNGRkVBRTAnLFxuICAnI0YyRTdGRCcsXG5dO1xuXG5jb25zdCBGZWF0dXJlU2VjdGlvbiA9ICh7XG4gIHRpdGxlLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBpbWFnZVNyYywgaW1hZ2VBbHQsIGxlZnQgPSBmYWxzZSwgd2lkdGgsIGhlaWdodCwgY29sb3IsXG4gIGJsb2JCb3JkZXIsXG59KSA9PiB7XG4gIGNvbnN0IGhhc2ggPSBoYXNoU3RyaW5nKHRpdGxlICsgaW1hZ2VBbHQpO1xuICBjb25zb2xlLmxvZyh0aXRsZSwgaGFzaCk7XG4gIC8vIGNvbnN0IHJhbmRvbUNvbG9yID0gYmxvYkNvbG9yc1tNYXRoLmFicyhoYXNoICUgYmxvYkNvbG9ycy5sZW5ndGgpXTtcbiAgY29uc3QgcmVuZGVyZWRJbWFnZSA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlUGFuZWx9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZVNyY30gYWx0PXtpbWFnZUFsdH0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gLz5cbiAgICAgICAgey8qPGltZyBzcmM9e2Jsb2J9IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVCbG9ifSBhbHQ9XCJWaXN1YWwgZmxvdXJpc2ggYmxvYlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+Ki99XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJsb2JCb3JkZXJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IsIGJvcmRlclJhZGl1czogYmxvYkJvcmRlciB9fS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBzdHlsZXMudmFsdWVTZWN0aW9uKX0+XG4gICAgICB7ICFsZWZ0ICYmIHJlbmRlcmVkSW1hZ2V9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuaW5mb1BhbmVsLCBzdHlsZXMubGVmdCl9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyPnt0aXRsZX08L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBsZWZ0ICYmIHJlbmRlcmVkSW1hZ2V9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UHJvc3ByPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlDb250YWluZXJ9PlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvVGV4dENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZXJvVGl0bGV9PlxuICAgICAgICAgICAgICAgIFRoZSBkb25vciBtYW5hZ2VtZW50IHRvb2wgeW91J2xsIGxvdmUgdXNpbmdcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvU3VidGl0bGV9PlxuICAgICAgICAgICAgICAgIEZyb20gdGhlIGZpcnN0IGNvbnRhY3QgdG8gdGhlIGZpbmFsIGRvbmF0aW9uLCBQcm9zcHIgaGVscHMgeW91XG4gICAgICAgICAgICAgICAgZW5nYWdlIHlvdXIgZG9ub3JzLCBhbGwgd2l0aG91dCBtYWtpbmcgaXQgZmVlbCBsaWtlIGEgY2hvcmUuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxhcmdlXCIgaHJlZj1cIiNib29rRGVtb1wiPlxuICAgICAgICAgICAgICBCb29rIGEgZGVtb1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaGVyb19pbWcucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiUHJvc3ByIFByb2R1Y3QgSW1hZ2VcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW1hZ2V9XG4gICAgICAgICAgICAgIHdpZHRoPXsxMTg5fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezk2M31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0Jhbm5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzQmFubmVyVGV4dH0+VHJ1c3RlZCBieSBwcm9mZXNzaW9uYWxzIGZyb20gdGhlc2Ugb3JnYW5pemF0aW9uczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xpc3R9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzTG9nb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvc19vcmdzL3RvdXJldHRlX2NhbmFkYS5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiVG91cmV0dGUgQ2FuYWRhXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxODF9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezc0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzTG9nb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvc19vcmdzL2NvZi5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiQ29tcGFueSBvZiBGb29sc1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTU4fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9vdXJfcGxhY2UucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIk91ciBQbGFjZVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjU5fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xvZ29XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9tci5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiTWFudWVscyBSaXZlclwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZpZGVySG9yaXpvbnRhbH0gLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNUYWdsaW5lfT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIGNlbnRlciBwYWRkZWQ+VXNlIFByb3NwciB0byBidWlsZCBiZXR0ZXIgcmVsYXRpb25zaGlwcyB3aXRoIGRvbm9yczwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0cmVuZ3RoZW5SZWxhdGlvbnNoaXBzUGFuZWx9XG4gICAgICAgICAgICB0aXRsZT1cIlN0cmVuZ3RoZW4gZG9ub3IgcmVsYXRpb25zaGlwc1wiXG4gICAgICAgICAgICBpbWFnZVNyYz1cIi9kb25vcl9wcm9maWxlLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJTYW1wbGUgZG9ub3IgcHJvZmlsZVwiXG4gICAgICAgICAgICB3aWR0aD17MTAwMH1cbiAgICAgICAgICAgIGhlaWdodD17NTcxfVxuICAgICAgICAgICAgY29sb3I9XCIjRTJFRkZFXCJcbiAgICAgICAgICAgIGJsb2JCb3JkZXI9XCIzMCUgNzAlIDcwJSAzMCUgLyAzMCUgNDglIDUyJSA3MCVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEl0IGNhbiBiZSBjaGFsbGVuZ2luZyB0byBidWlsZCByZWxhdGlvbnNoaXBzIHdpdGggZG9ub3JzLiBDdXRcbiAgICAgICAgICAgIHRocm91Z2ggdGhlIGhhc3NsZSBhbmQgY3JlYXRlIGluZm9ybWF0aXZlIGRvbm9yIHByb2ZpbGVzIHRvXG4gICAgICAgICAgICBndWlkZSB5b3VyIGZ1bmRyYWlzaW5nIHByb2Nlc3MuXG4gICAgICAgICAgPC9GZWF0dXJlU2VjdGlvbj5cblxuICAgICAgICAgIDxGZWF0dXJlU2VjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZW5nYWdlUGFuZWx9XG4gICAgICAgICAgICB0aXRsZT1cIkVmZmVjdGl2ZWx5IGVuZ2FnZSB3aXRoIHlvdXIgZG9ub3JzXCJcbiAgICAgICAgICAgIGltYWdlU3JjPVwiL2pvdXJuZXlfYnVpbGRlci5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiSm91cm5leSBCdWlsZGVyIERlbW8gSW1hZ2VcIlxuICAgICAgICAgICAgd2lkdGg9ezEwODR9XG4gICAgICAgICAgICBoZWlnaHQ9ezYxOX1cbiAgICAgICAgICAgIGNvbG9yPVwiI0ZDRURGMVwiXG4gICAgICAgICAgICBibG9iQm9yZGVyPVwiNTIlIDQ4JSA0OSUgNTElIC8gNTklIDM2JSA2NCUgNDElIFwiXG4gICAgICAgICAgICBsZWZ0XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWlzc2luZyBvdXQgb24gb3Bwb3J0dW5pdGllcyB3aXRoIGRvbm9ycyBjYW4gYmUgZnJ1c3RyYXRpbmcuXG4gICAgICAgICAgICBQbGFuIHlvdXIgZG9ub3IgaW50ZXJhY3Rpb25zIGluIGFkdmFuY2Ugc28geW91IGNhbiBtYWtlIHRoZSBtb3N0XG4gICAgICAgICAgICBvZiBldmVyeSBvcHBvcnR1bml0eS5cbiAgICAgICAgICA8L0ZlYXR1cmVTZWN0aW9uPlxuXG4gICAgICAgICAgPEZlYXR1cmVTZWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vbmxpbmVEb25hdGlvbnNQYW5lbH1cbiAgICAgICAgICAgIHRpdGxlPVwiSW1wcm92ZSBvbmxpbmUgZ2l2aW5nXCJcbiAgICAgICAgICAgIGltYWdlU3JjPVwiL2RvbmF0aW9ucy5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiU2FtcGxlIGRvbmF0aW9uIGZvcm1cIlxuICAgICAgICAgICAgY29sb3I9XCIjRkZGQ0RCXCJcbiAgICAgICAgICAgIHdpZHRoPXsxMDg0fVxuICAgICAgICAgICAgaGVpZ2h0PXs2MTl9XG4gICAgICAgICAgICBibG9iQm9yZGVyPVwiNjclIDMzJSAzOCUgNjIlIC8gMzAlIDY0JSAzNiUgNzAlIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRG9uJ3QgcmlzayBsb3NpbmcgeW91ciBkb25vcnMgYXQgdGhlIGZpbmlzaCBsaW5lLiBVc2Ugb3VyXG4gICAgICAgICAgICBjdXN0b21pemVhYmxlIGRvbmF0aW9uIGZvcm1zIHRvIHByb3ZpZGUgYSBiZXR0ZXIgZG9ub3JcbiAgICAgICAgICAgIGV4cGVyaWVuY2UgYW5kIGNvbnZlcnQgbW9yZSBvZnRlbi5cbiAgICAgICAgICA8L0ZlYXR1cmVTZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNTZWN0aW9ufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNUaXRsZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIGNlbnRlcj5BbGwgeW91ciBmYXZvcml0ZSBmZWF0dXJlcyBpbiBhIHNpbmdsZSB0b29sPC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzU3ViVGl0bGV9PlxuICAgICAgICAgICAgICAgIERlc2lnbmVkIGFuZCBvcHRpbWl6ZWQgZm9yIGJldHRlciBmdW5kcmFpc2luZy5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNHcmlkfT5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiQ2xvdWQgaG9zdGVkXCIgaWNvbj1cImljb25zL2Nsb3VkLnN2Z1wiPlxuICAgICAgICAgICAgICAgIE5vIHNvZnR3YXJlIHVwZGF0ZXMsIG5vIG1haW50ZW5hbmNlLiBBbGwgeW91IG5lZWQgaXMgYW4gbW9kZXJuXG4gICAgICAgICAgICAgICAgd2ViIGJyb3dzZXIuXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIlNpbXBsZSBzZXR1cFwiIGljb249XCJpY29ucy9zZXR0aW5ncy5zdmdcIj5cbiAgICAgICAgICAgICAgICBTdGFydCBtYW5hZ2luZyB5b3VyIGRhdGEgYW5kIGJ1aWxkaW5nIGRvbm9yIGpvdXJuZXlzIHdpdGggYSBmZXdcbiAgICAgICAgICAgICAgICBzaW1wbGUgY2xpY2tzLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJDb3VudGxlc3MgaW50ZWdyYXRpb25zXCIgaWNvbj1cImljb25zL2dyaWQuc3ZnXCI+XG4gICAgICAgICAgICAgICAgU2ltcGxpZnkgeW91ciBwcm9jZXNzZXMuIENvbm5lY3QgdG8gZXhpc3RpbmcgdG9vbHMgdGhhdCB5b3UgdXNlXG4gICAgICAgICAgICAgICAgYW5kIHJlZHVjZSBtYW51YWwgd29yay5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiU2VjdXJpdHkgZmlyc3RcIiBpY29uPVwiaWNvbnMvbG9jay5zdmdcIj5cbiAgICAgICAgICAgICAgICBLZWVwIHlvdXIgZGF0YSBzZWN1cmUgd2l0aCBhIHJlbGlhYmxlIGRhdGFiYXNlIChob3N0ZWQgd2l0aFxuICAgICAgICAgICAgICAgIE1vbmdvREIgQXRsYXPihKIpLlxuICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJCZXR0ZXIgY29sbGFib3JhdGlvblwiIGljb249XCJpY29ucy9jb2xsYWJvcmF0aW9uLnN2Z1wiPlxuICAgICAgICAgICAgICAgIFJlZHVjZSBtaXNjb21tdW5pY2F0aW9uLiBJbnN0YW50bHkgc3luYyB5b3VyIHdvcmsgYWNyb3NzIHlvdXJcbiAgICAgICAgICAgICAgICBvcmdhbml6YXRpb24uXG4gICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkVhc3ktdG8tdXNlXCIgaWNvbj1cImljb25zL2NoZWNrbWFyay5zdmdcIj5cbiAgICAgICAgICAgICAgICBXaXRoIG91ciBzb2Z0d2FyZSwgeW91IGRvbuKAmXQgbmVlZCB0byB3b3JyeSBhYm91dCBhZGRpdGlvbmFsXG4gICAgICAgICAgICAgICAgdHJhaW5pbmcgdG8gZ2V0IHRoZSBqb2IgZG9uZS5cbiAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnRlc3RpbW9uaWFsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudFdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8cD5cIkkgaGF2ZSBhbHdheXMgdW5kZXJzdG9vZCB0aGUgaW1wb3J0YW5jZSBvZiBkYXRhLCBidXQgSSB3YXMgbmV2ZXJcbiAgICAgICAgICAgICAgICBlYWdlciB0byB1dGlsaXplIGl0IHVudGlsIHdvcmtpbmcgd2l0aCBQcm9zcHIuIFRoZSB3YXkgdGhlIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgaGFzIG1hcHBlZCBvdXQgYW5kIHR1cm5lZCBkb25vciBlbmdhZ2VtZW50IGludG8gYSB2aXN1YWwgcHJvY2VzcyBpc1xuICAgICAgICAgICAgICAgIHJlZnJlc2hpbmcgZm9yIGFueW9uZSB3b3JraW5nIGluIHRoaXMgZmllbGQuXCI8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyfT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJOYW1lfT5SeWFuIElsbDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJKb2J9PkZ1bmRyYWlzaW5nIE9mZmljZXIgYXQgT3VyIFBsYWNlIEtXPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvb3VyX3BsYWNlLnBuZ1wiIGFsdD1cIk91ciBQbGFjZSBMb2dvXCIgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9XCJib29rRGVtb1wiIGNsYXNzTmFtZT17c3R5bGVzLmZpbmFsQ3RhUGFuZWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfSAvPlxuICAgICAgICAgICAgPEVtYWlsU2lnbnVwIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L21haW4+XG5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==