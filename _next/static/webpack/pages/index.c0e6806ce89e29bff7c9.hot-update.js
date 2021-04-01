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
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");



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
      lineNumber: 11,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
    lineNumber: 18,
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

  // const hash = hashString(title + imageAlt);
  // console.log(title, hash);
  // const randomColor = blobColors[Math.abs(hash % blobColors.length)];
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
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blobBorder,
        style: {
          backgroundColor: color,
          borderRadius: blobBorder
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), left && renderedImage]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};

_c3 = FeatureSection;

var Home = function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Prospr"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_7__["NextSeo"], {
        canonical: "https://prospr.cc/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bodyContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
          className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.hero,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroTextContainer,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroTitle,
                children: "Prospr is the donor management tool you'll love using"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroSubtitle,
                children: "From the first contact to the final donation, Prospr helps you engage your donors, all without making it feel like a chore."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "btn btn-primary btn-large",
              href: "#bookDemo",
              children: "Book a demo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
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
              lineNumber: 102,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBanner,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersBannerText,
              children: "Trusted by professionals from these organizations"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
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
                  lineNumber: 115,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/logos_orgs/cof.png",
                  alt: "Company of Fools",
                  width: 158,
                  height: 72
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/logos_orgs/our_place.png",
                  alt: "Our Place",
                  width: 259,
                  height: 72
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.usersLogoWrapper,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/logos_orgs/mr.png",
                  alt: "Manuels River",
                  width: 200,
                  height: 72
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dividerHorizontal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            id: "features",
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresTagline,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SectionHeader, {
              center: true,
              padded: true,
              children: "Use Prospr to build better relationships with donors"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
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
            lineNumber: 154,
            columnNumber: 13
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
            lineNumber: 169,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureSection, {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.onlineDonationsPanel,
            title: "Improve online giving",
            imageSrc: "/donations.png",
            alt: "Sample donation form",
            width: 1084,
            height: 619,
            color: "#D7FFE7",
            blobBorder: "67% 33% 38% 62% / 30% 64% 36% 70% ",
            children: "Don't risk losing your donors at the finish line. Use our customizeable donation forms to provide a better donor experience and convert more often."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSection,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresTitleContainer,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SectionHeader, {
                center: true,
                children: "All your favorite features in a single tool"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresSubTitle,
                children: "Designed and optimized for better fundraising."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.featuresGrid,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
                title: "Cloud hosted",
                icon: "icons/cloud.svg",
                children: "No software updates, no maintenance. All you need is an modern web browser."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
                title: "Simple setup",
                icon: "icons/settings.svg",
                children: "Start managing your data and building donor journeys with a few simple clicks."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
                title: "Countless integrations",
                icon: "icons/grid.svg",
                children: "Simplify your processes. Connect to existing tools that you use and reduce manual work."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
                title: "Security first",
                icon: "icons/lock.svg",
                children: "Keep your data secure with a reliable database (hosted with MongoDB Atlas\u2122)."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
                title: "Better collaboration",
                icon: "icons/collaboration.svg",
                children: "Reduce miscommunication. Instantly sync your work across your organization."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeatureCard, {
                title: "Easy-to-use",
                icon: "icons/checkmark.svg",
                children: "With our software, you don\u2019t need to worry about additional training to get the job done."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.testimonial,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contentWrapper,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\"I have always understood the importance of data, but I was never eager to utilize it until working with Prospr. The way the database has mapped out and turned donor engagement into a visual process is refreshing for anyone working in this field.\""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.user,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userAvatar,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/testimonials/ryan_ill.png",
                    alt: "Ryan Ill Profile Photo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userName,
                  children: "Ryan Ill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userJob,
                  children: "Fundraising Officer at Our Place KW"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            id: "bookDemo",
            className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.finalCtaPanel,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bookDemoBackground
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_EmailSignup__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRmVhdHVyZUNhcmQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInN0eWxlcyIsImZlYXR1cmVDYXJkIiwiZmVhdHVyZUNhcmRJbWFnZSIsIlNlY3Rpb25IZWFkZXIiLCJjZW50ZXIiLCJwYWRkZWQiLCJjbGFzc05hbWVzIiwic2VjdGlvbkhlYWRlciIsImNlbnRlcmVkIiwiaGFzaFN0cmluZyIsInMiLCJoYXNoIiwiaSIsImNociIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJibG9icyIsImJsb2JDb2xvcnMiLCJGZWF0dXJlU2VjdGlvbiIsImNsYXNzTmFtZSIsImltYWdlU3JjIiwiaW1hZ2VBbHQiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsImJsb2JCb3JkZXIiLCJyZW5kZXJlZEltYWdlIiwiaW1hZ2VQYW5lbCIsImltYWdlQ29udGFpbmVyIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidmFsdWVTZWN0aW9uIiwiaW5mb1BhbmVsIiwiSG9tZSIsImNvbnRhaW5lciIsImJvZHlDb250YWluZXIiLCJtYWluIiwiaGVybyIsImhlcm9UZXh0Q29udGFpbmVyIiwiaGVyb1RpdGxlIiwiaGVyb1N1YnRpdGxlIiwicHJvZHVjdEltYWdlQ29udGFpbmVyIiwicHJvZHVjdEltYWdlIiwidXNlcnNCYW5uZXIiLCJ1c2Vyc0Jhbm5lclRleHQiLCJ1c2Vyc0xpc3QiLCJ1c2Vyc0xvZ29XcmFwcGVyIiwiZGl2aWRlckhvcml6b250YWwiLCJmZWF0dXJlc1RhZ2xpbmUiLCJzdHJlbmd0aGVuUmVsYXRpb25zaGlwc1BhbmVsIiwiZW5nYWdlUGFuZWwiLCJvbmxpbmVEb25hdGlvbnNQYW5lbCIsImZlYXR1cmVzU2VjdGlvbiIsImZlYXR1cmVzVGl0bGVDb250YWluZXIiLCJmZWF0dXJlc1N1YlRpdGxlIiwiZmVhdHVyZXNHcmlkIiwidGVzdGltb25pYWwiLCJjb250ZW50V3JhcHBlciIsInVzZXIiLCJ1c2VyQXZhdGFyIiwidXNlck5hbWUiLCJ1c2VySm9iIiwiZmluYWxDdGFQYW5lbCIsImJvb2tEZW1vQmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxRQUFWLFFBQVVBLFFBQVY7QUFBQSxNQUFvQkMsSUFBcEIsUUFBb0JBLElBQXBCO0FBQUEsc0JBQ2xCO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxXQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxnQkFBdkI7QUFBeUMsU0FBRyxFQUFFSCxJQUE5QztBQUFvRCxXQUFLLEVBQUUsRUFBM0Q7QUFBK0QsWUFBTSxFQUFFLEVBQXZFO0FBQTJFLFNBQUcsRUFBQztBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURrQjtBQUFBLENBQXBCOztLQUFNRixXOztBQVFOLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHTCxRQUFILFNBQUdBLFFBQUg7QUFBQSwyQkFBYU0sTUFBYjtBQUFBLE1BQWFBLE1BQWIsNkJBQXNCLEtBQXRCO0FBQUEsMkJBQTZCQyxNQUE3QjtBQUFBLE1BQTZCQSxNQUE3Qiw2QkFBc0MsS0FBdEM7QUFBQSxzQkFDcEI7QUFBSSxhQUFTLEVBQUVDLGlEQUFVLENBQUNOLDhEQUFNLENBQUNPLGFBQVIsRUFBdUJILE1BQU0sSUFBSUosOERBQU0sQ0FBQ1EsUUFBeEMsRUFBa0RILE1B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MkJBQVMsRUFBRTdELDhEQUFNLENBQUM4RCxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0SkYsZUF3S0U7QUFBUyxjQUFFLEVBQUMsVUFBWjtBQUF1QixxQkFBUyxFQUFFOUQsOERBQU0sQ0FBQytELGFBQXpDO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFFL0QsOERBQU0sQ0FBQ2dFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF4S0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBK0tFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0tGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBLGtCQURGO0FBOExELENBL0xEOztNQUFNOUIsSTtBQWlNU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzBlNjgwNmNlODllMjliZmY3YzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBFbWFpbFNpZ251cCBmcm9tICdjb21wb25lbnRzL0VtYWlsU2lnbnVwJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcblxuY29uc3QgRmVhdHVyZUNhcmQgPSAoeyB0aXRsZSwgY2hpbGRyZW4sIGljb24gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVDYXJkfT5cbiAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVDYXJkSW1hZ2V9IHNyYz17aWNvbn0gd2lkdGg9ezM2fSBoZWlnaHQ9ezM2fSBhbHQ9XCJGZWF0dXJlIEljb25cIiAvPlxuICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICA8cD57Y2hpbGRyZW59PC9wPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSAoeyBjaGlsZHJlbiwgY2VudGVyID0gZmFsc2UsIHBhZGRlZCA9IGZhbHNlIH0pID0+IChcbiAgPGgyIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuc2VjdGlvbkhlYWRlciwgY2VudGVyICYmIHN0eWxlcy5jZW50ZXJlZCwgcGFkZGVkICYmIHN0eWxlcy5wYWRkZWQpfT57Y2hpbGRyZW59PC9oMj5cbik7XG5cbmNvbnN0IGhhc2hTdHJpbmcgPSAocykgPT4ge1xuICBsZXQgaGFzaCA9IDAsIGksIGNocjtcbiAgaWYgKHMubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaDtcbiAgZm9yIChpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICBjaHIgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hyO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cbiAgcmV0dXJuIGhhc2g7XG59O1xuXG5jb25zdCBibG9icyA9IFsnL2RlbW9fZm9ybS9zaGFwZV8xLnN2ZycsICcvZGVtb19mb3JtL3NoYXBlXzIuc3ZnJ107XG5jb25zdCBibG9iQ29sb3JzID0gW1xuICAnI0UyRUZGRScsXG4gICcjRkNFREYxJyxcbiAgJyNGRkZDREInLFxuICAnI0ZGRUFFMCcsXG4gICcjRjJFN0ZEJyxcbl07XG5cbmNvbnN0IEZlYXR1cmVTZWN0aW9uID0gKHtcbiAgdGl0bGUsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIGltYWdlU3JjLCBpbWFnZUFsdCwgbGVmdCA9IGZhbHNlLCB3aWR0aCwgaGVpZ2h0LCBjb2xvcixcbiAgYmxvYkJvcmRlcixcbn0pID0+IHtcbiAgLy8gY29uc3QgaGFzaCA9IGhhc2hTdHJpbmcodGl0bGUgKyBpbWFnZUFsdCk7XG4gIC8vIGNvbnNvbGUubG9nKHRpdGxlLCBoYXNoKTtcbiAgLy8gY29uc3QgcmFuZG9tQ29sb3IgPSBibG9iQ29sb3JzW01hdGguYWJzKGhhc2ggJSBibG9iQ29sb3JzLmxlbmd0aCldO1xuICBjb25zdCByZW5kZXJlZEltYWdlID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VQYW5lbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlU3JjfSBhbHQ9e2ltYWdlQWx0fSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgICB7Lyo8aW1nIHNyYz17YmxvYn0gY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZUJsb2J9IGFsdD1cIlZpc3VhbCBmbG91cmlzaCBibG9iXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz4qL31cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmxvYkJvcmRlcn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvciwgYm9yZGVyUmFkaXVzOiBibG9iQm9yZGVyIH19Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIHN0eWxlcy52YWx1ZVNlY3Rpb24pfT5cbiAgICAgIHsgIWxlZnQgJiYgcmVuZGVyZWRJbWFnZX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5pbmZvUGFuZWwsIHN0eWxlcy5sZWZ0KX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXI+e3RpdGxlfTwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7IGxlZnQgJiYgcmVuZGVyZWRJbWFnZX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UHJvc3ByPC90aXRsZT5cbiAgICAgICAgPE5leHRTZW9cbiAgICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL3Byb3Nwci5jYy9cIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keUNvbnRhaW5lcn0+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9UZXh0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RpdGxlfT5cbiAgICAgICAgICAgICAgICAgIFByb3NwciBpcyB0aGUgZG9ub3IgbWFuYWdlbWVudCB0b29sIHlvdSdsbCBsb3ZlIHVzaW5nXG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9TdWJ0aXRsZX0+XG4gICAgICAgICAgICAgICAgICBGcm9tIHRoZSBmaXJzdCBjb250YWN0IHRvIHRoZSBmaW5hbCBkb25hdGlvbiwgUHJvc3ByIGhlbHBzIHlvdVxuICAgICAgICAgICAgICAgICAgZW5nYWdlIHlvdXIgZG9ub3JzLCBhbGwgd2l0aG91dCBtYWtpbmcgaXQgZmVlbCBsaWtlIGEgY2hvcmUuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxhcmdlXCIgaHJlZj1cIiNib29rRGVtb1wiPlxuICAgICAgICAgICAgICAgIEJvb2sgYSBkZW1vXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCIvaGVyb19pbWcucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQcm9zcHIgUHJvZHVjdCBJbWFnZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMTg5fVxuICAgICAgICAgICAgICAgIGhlaWdodD17OTYzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzQmFubmVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0Jhbm5lclRleHR9PlRydXN0ZWQgYnkgcHJvZmVzc2lvbmFscyBmcm9tIHRoZXNlIG9yZ2FuaXphdGlvbnM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2Vyc0xpc3R9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvc19vcmdzL3RvdXJldHRlX2NhbmFkYS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJUb3VyZXR0ZSBDYW5hZGFcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTgxfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezc0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzTG9nb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9jb2YucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ29tcGFueSBvZiBGb29sc1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcnNMb2dvV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvc19vcmdzL291cl9wbGFjZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJPdXIgUGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjU5fVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJzTG9nb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nb3Nfb3Jncy9tci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJNYW51ZWxzIFJpdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdmlkZXJIb3Jpem9udGFsfSAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNUYWdsaW5lfT5cbiAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXIgY2VudGVyIHBhZGRlZD5Vc2UgUHJvc3ByIHRvIGJ1aWxkIGJldHRlciByZWxhdGlvbnNoaXBzIHdpdGggZG9ub3JzPC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3RyZW5ndGhlblJlbGF0aW9uc2hpcHNQYW5lbH1cbiAgICAgICAgICAgICAgdGl0bGU9XCJTdHJlbmd0aGVuIGRvbm9yIHJlbGF0aW9uc2hpcHNcIlxuICAgICAgICAgICAgICBpbWFnZVNyYz1cIi9kb25vcl9wcm9maWxlLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlNhbXBsZSBkb25vciBwcm9maWxlXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XG4gICAgICAgICAgICAgIGhlaWdodD17NTcxfVxuICAgICAgICAgICAgICBjb2xvcj1cIiNFMkVGRkVcIlxuICAgICAgICAgICAgICBibG9iQm9yZGVyPVwiMzAlIDcwJSA3MCUgMzAlIC8gMzAlIDQ4JSA1MiUgNzAlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSXQgY2FuIGJlIGNoYWxsZW5naW5nIHRvIGJ1aWxkIHJlbGF0aW9uc2hpcHMgd2l0aCBkb25vcnMuIEN1dFxuICAgICAgICAgICAgICB0aHJvdWdoIHRoZSBoYXNzbGUgYW5kIGNyZWF0ZSBpbmZvcm1hdGl2ZSBkb25vciBwcm9maWxlcyB0b1xuICAgICAgICAgICAgICBndWlkZSB5b3VyIGZ1bmRyYWlzaW5nIHByb2Nlc3MuXG4gICAgICAgICAgICA8L0ZlYXR1cmVTZWN0aW9uPlxuXG4gICAgICAgICAgICA8RmVhdHVyZVNlY3Rpb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZW5nYWdlUGFuZWx9XG4gICAgICAgICAgICAgIHRpdGxlPVwiRWZmZWN0aXZlbHkgZW5nYWdlIHdpdGggeW91ciBkb25vcnNcIlxuICAgICAgICAgICAgICBpbWFnZVNyYz1cIi9qb3VybmV5X2J1aWxkZXIucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiSm91cm5leSBCdWlsZGVyIERlbW8gSW1hZ2VcIlxuICAgICAgICAgICAgICB3aWR0aD17MTA4NH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs2MTl9XG4gICAgICAgICAgICAgIGNvbG9yPVwiI0ZDRURGMVwiXG4gICAgICAgICAgICAgIGJsb2JCb3JkZXI9XCI1MiUgNDglIDQ5JSA1MSUgLyA1OSUgMzYlIDY0JSA0MSUgXCJcbiAgICAgICAgICAgICAgbGVmdFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNaXNzaW5nIG91dCBvbiBvcHBvcnR1bml0aWVzIHdpdGggZG9ub3JzIGNhbiBiZSBmcnVzdHJhdGluZy5cbiAgICAgICAgICAgICAgUGxhbiB5b3VyIGRvbm9yIGludGVyYWN0aW9ucyBpbiBhZHZhbmNlIHNvIHlvdSBjYW4gbWFrZSB0aGUgbW9zdFxuICAgICAgICAgICAgICBvZiBldmVyeSBvcHBvcnR1bml0eS5cbiAgICAgICAgICAgIDwvRmVhdHVyZVNlY3Rpb24+XG5cbiAgICAgICAgICAgIDxGZWF0dXJlU2VjdGlvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5vbmxpbmVEb25hdGlvbnNQYW5lbH1cbiAgICAgICAgICAgICAgdGl0bGU9XCJJbXByb3ZlIG9ubGluZSBnaXZpbmdcIlxuICAgICAgICAgICAgICBpbWFnZVNyYz1cIi9kb25hdGlvbnMucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiU2FtcGxlIGRvbmF0aW9uIGZvcm1cIlxuICAgICAgICAgICAgICB3aWR0aD17MTA4NH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs2MTl9XG4gICAgICAgICAgICAgIGNvbG9yPVwiI0Q3RkZFN1wiXG4gICAgICAgICAgICAgIGJsb2JCb3JkZXI9XCI2NyUgMzMlIDM4JSA2MiUgLyAzMCUgNjQlIDM2JSA3MCUgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRG9uJ3QgcmlzayBsb3NpbmcgeW91ciBkb25vcnMgYXQgdGhlIGZpbmlzaCBsaW5lLiBVc2Ugb3VyXG4gICAgICAgICAgICAgIGN1c3RvbWl6ZWFibGUgZG9uYXRpb24gZm9ybXMgdG8gcHJvdmlkZSBhIGJldHRlciBkb25vclxuICAgICAgICAgICAgICBleHBlcmllbmNlIGFuZCBjb252ZXJ0IG1vcmUgb2Z0ZW4uXG4gICAgICAgICAgICA8L0ZlYXR1cmVTZWN0aW9uPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc1NlY3Rpb259PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzVGl0bGVDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIGNlbnRlcj5BbGwgeW91ciBmYXZvcml0ZSBmZWF0dXJlcyBpbiBhIHNpbmdsZSB0b29sPC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmVhdHVyZXNTdWJUaXRsZX0+XG4gICAgICAgICAgICAgICAgICBEZXNpZ25lZCBhbmQgb3B0aW1pemVkIGZvciBiZXR0ZXIgZnVuZHJhaXNpbmcuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVzR3JpZH0+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiQ2xvdWQgaG9zdGVkXCIgaWNvbj1cImljb25zL2Nsb3VkLnN2Z1wiPlxuICAgICAgICAgICAgICAgICAgTm8gc29mdHdhcmUgdXBkYXRlcywgbm8gbWFpbnRlbmFuY2UuIEFsbCB5b3UgbmVlZCBpcyBhbiBtb2Rlcm5cbiAgICAgICAgICAgICAgICAgIHdlYiBicm93c2VyLlxuICAgICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiU2ltcGxlIHNldHVwXCIgaWNvbj1cImljb25zL3NldHRpbmdzLnN2Z1wiPlxuICAgICAgICAgICAgICAgICAgU3RhcnQgbWFuYWdpbmcgeW91ciBkYXRhIGFuZCBidWlsZGluZyBkb25vciBqb3VybmV5cyB3aXRoIGEgZmV3XG4gICAgICAgICAgICAgICAgICBzaW1wbGUgY2xpY2tzLlxuICAgICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiQ291bnRsZXNzIGludGVncmF0aW9uc1wiIGljb249XCJpY29ucy9ncmlkLnN2Z1wiPlxuICAgICAgICAgICAgICAgICAgU2ltcGxpZnkgeW91ciBwcm9jZXNzZXMuIENvbm5lY3QgdG8gZXhpc3RpbmcgdG9vbHMgdGhhdCB5b3UgdXNlXG4gICAgICAgICAgICAgICAgICBhbmQgcmVkdWNlIG1hbnVhbCB3b3JrLlxuICAgICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIHRpdGxlPVwiU2VjdXJpdHkgZmlyc3RcIiBpY29uPVwiaWNvbnMvbG9jay5zdmdcIj5cbiAgICAgICAgICAgICAgICAgIEtlZXAgeW91ciBkYXRhIHNlY3VyZSB3aXRoIGEgcmVsaWFibGUgZGF0YWJhc2UgKGhvc3RlZCB3aXRoXG4gICAgICAgICAgICAgICAgICBNb25nb0RCIEF0bGFz4oSiKS5cbiAgICAgICAgICAgICAgICA8L0ZlYXR1cmVDYXJkPlxuICAgICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0aXRsZT1cIkJldHRlciBjb2xsYWJvcmF0aW9uXCIgaWNvbj1cImljb25zL2NvbGxhYm9yYXRpb24uc3ZnXCI+XG4gICAgICAgICAgICAgICAgICBSZWR1Y2UgbWlzY29tbXVuaWNhdGlvbi4gSW5zdGFudGx5IHN5bmMgeW91ciB3b3JrIGFjcm9zcyB5b3VyXG4gICAgICAgICAgICAgICAgICBvcmdhbml6YXRpb24uXG4gICAgICAgICAgICAgICAgPC9GZWF0dXJlQ2FyZD5cbiAgICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQgdGl0bGU9XCJFYXN5LXRvLXVzZVwiIGljb249XCJpY29ucy9jaGVja21hcmsuc3ZnXCI+XG4gICAgICAgICAgICAgICAgICBXaXRoIG91ciBzb2Z0d2FyZSwgeW91IGRvbuKAmXQgbmVlZCB0byB3b3JyeSBhYm91dCBhZGRpdGlvbmFsXG4gICAgICAgICAgICAgICAgICB0cmFpbmluZyB0byBnZXQgdGhlIGpvYiBkb25lLlxuICAgICAgICAgICAgICAgIDwvRmVhdHVyZUNhcmQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy50ZXN0aW1vbmlhbH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudFdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxwPlwiSSBoYXZlIGFsd2F5cyB1bmRlcnN0b29kIHRoZSBpbXBvcnRhbmNlIG9mIGRhdGEsIGJ1dCBJIHdhcyBuZXZlclxuICAgICAgICAgICAgICAgICAgZWFnZXIgdG8gdXRpbGl6ZSBpdCB1bnRpbCB3b3JraW5nIHdpdGggUHJvc3ByLiBUaGUgd2F5IHRoZSBkYXRhYmFzZVxuICAgICAgICAgICAgICAgICAgaGFzIG1hcHBlZCBvdXQgYW5kIHR1cm5lZCBkb25vciBlbmdhZ2VtZW50IGludG8gYSB2aXN1YWwgcHJvY2VzcyBpc1xuICAgICAgICAgICAgICAgICAgcmVmcmVzaGluZyBmb3IgYW55b25lIHdvcmtpbmcgaW4gdGhpcyBmaWVsZC5cIjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQXZhdGFyfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdGVzdGltb25pYWxzL3J5YW5faWxsLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUnlhbiBJbGwgUHJvZmlsZSBQaG90b1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJOYW1lfT5SeWFuIElsbDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJKb2J9PkZ1bmRyYWlzaW5nIE9mZmljZXIgYXQgT3VyIFBsYWNlIEtXPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImJvb2tEZW1vXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmluYWxDdGFQYW5lbH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9va0RlbW9CYWNrZ3JvdW5kfSAvPlxuICAgICAgICAgICAgICA8RW1haWxTaWdudXAgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==