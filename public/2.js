(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/book/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../library/book */ "./resources/js/library/book.js");
/* harmony import */ var _library_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/category */ "./resources/js/library/category.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      books: [],
      searchTerm: "",
      serachCategory: "",
      categories: []
    };
  },
  computed: {
    deleteBtnToggle: function deleteBtnToggle() {
      var status = false;

      for (var key in this.books) {
        if (this.books[key].checked) {
          status = true;
          break;
        }
      }

      return status;
    }
  },
  created: function created() {
    this.getCategories();
    this.getBooks("?basic=on");
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;

      return _library_category__WEBPACK_IMPORTED_MODULE_1__["default"].getAll().then(function (res) {
        var _res$data = res.data,
            status = _res$data.status,
            data = _res$data.data;
        _this.categories = data.categories;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    getBooks: function getBooks(querystring) {
      var _this2 = this;

      return _library_book__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(querystring).then(function (res) {
        var _res$data2 = res.data,
            status = _res$data2.status,
            data = _res$data2.data;
        data.books.forEach(function (obj) {
          obj.checked = false;
        });
        _this2.books = data.books;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    checkBook: function checkBook(id) {
      var bookIndex = this.books.findIndex(function (obj) {
        return obj.id === id;
      });
      this.books[bookIndex].checked = !this.books[bookIndex].checked;
    },
    checkAll: function checkAll() {
      this.books.forEach(function (obj) {
        obj.checked = !obj.checked;
      });
    },
    search: function search() {
      this.getBooks("?basic=on&term=".concat(this.searchTerm, "&category=").concat(this.serachCategory));
    },
    reset: function reset() {
      this.searchTerm = "";
      this.serachCategory = "";
      this.getBooks("?basic=on");
    },

    /**
           * Delete a object.
           *
           * @param {Number} id
           * @returns {Boolean}
           */
    deleteObject: function deleteObject(id) {
      var _this3 = this;

      var bookObj = this.books.find(function (obj) {
        return obj.id === id;
      });
      var index = this.books.indexOf(bookObj);

      if (!confirm("Are you sure you want to delete the ".concat(bookObj.title, "?"))) {
        return false;
      }

      _library_book__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](bookObj.id).then(function (res) {
        var _res$data3 = res.data,
            status = _res$data3.status,
            message = _res$data3.message;

        if (status === 1) {
          _this3.books.splice(index, 1);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },

    /**
     * Handle delete button submission.
     *
     * @returns {Boolean}
     */
    deleteBtnSubmit: function deleteBtnSubmit() {
      if (!confirm("Are you sure you want to delete?")) {
        return false;
      }

      var pendingDeletion = this.books.filter(function (book) {
        return book.checked === true;
      });
      var safe = this.books.filter(function (obj) {
        return obj.checked === false;
      });
      pendingDeletion.forEach(function (obj) {
        _library_book__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](obj.id);
      });
      this.books = safe;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/Index.vue?vue&type=template&id=5b7ba097&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/book/Index.vue?vue&type=template&id=5b7ba097& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "d-flex flex-row justify-content-between" }, [
      _c("h2", [_vm._v(_vm._s(this.$route.meta.title))]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary text-nowrap",
              attrs: { to: { name: "admin.books.add" }, role: "button" }
            },
            [_c("i", { staticClass: "fa fa-plus" }), _vm._v("   Add New")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card mt-5" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("div", { staticClass: "d-flex flex-row justify-content-between" }, [
          _c("div", { staticClass: "col-md-8" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchTerm,
                      expression: "searchTerm"
                    }
                  ],
                  staticClass: "form-control input-search",
                  attrs: { type: "text", placeholder: "by title / author" },
                  domProps: { value: _vm.searchTerm },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchTerm = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.serachCategory,
                        expression: "serachCategory"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "category", placeholder: "by category" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.serachCategory = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(_vm.categories, function(category) {
                    return _c(
                      "option",
                      { key: category.id, domProps: { value: category.id } },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\t\t" +
                            _vm._s(category.name) +
                            "\n\t\t\t\t\t\t\t\t\t"
                        )
                      ]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-outline-secondary",
                    on: { click: _vm.search }
                  },
                  [_c("i", { staticClass: "fa fa-search" })]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-outline-warning",
                    on: { click: _vm.reset }
                  },
                  [_c("i", { staticClass: "fa fa-close" })]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pull-right" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-outline-secondary",
                class: { disabled: !_vm.deleteBtnToggle },
                on: { click: _vm.deleteBtnSubmit }
              },
              [_vm._v("Delete")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _vm.books.length
            ? _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-striped table-middle table-hover"
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [
                          _c("input", {
                            attrs: { type: "checkbox" },
                            on: { click: _vm.checkAll }
                          })
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v("ISBN")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Category")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Title")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Availability")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Actions")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.books, function(filObj) {
                        return _c("tr", { key: "book" + filObj.id }, [
                          _c("td", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: filObj.checked,
                                  expression: "filObj.checked"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(filObj.checked)
                                  ? _vm._i(filObj.checked, null) > -1
                                  : filObj.checked
                              },
                              on: {
                                click: function($event) {
                                  return _vm.checkBook(filObj.id)
                                },
                                change: function($event) {
                                  var $$a = filObj.checked,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          filObj,
                                          "checked",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          filObj,
                                          "checked",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(filObj, "checked", $$c)
                                  }
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t" +
                                _vm._s(filObj.isbn) +
                                "\n\t\t\t\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t" +
                                _vm._s(filObj.category) +
                                "\n\t\t\t\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t" +
                                _vm._s(filObj.title) +
                                "\n\t\t\t\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            filObj.availbility
                              ? _c(
                                  "span",
                                  {
                                    staticClass:
                                      "badge badge-success text-success"
                                  },
                                  [_vm._v("Available")]
                                )
                              : _c(
                                  "span",
                                  {
                                    staticClass:
                                      "badge badge-danger text-danger"
                                  },
                                  [_vm._v("Unavailable")]
                                )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-sm btn-link",
                                  attrs: {
                                    to: {
                                      name: "admin.books.edit",
                                      params: { id: filObj.id }
                                    },
                                    title: "Edit"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-pencil" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-link",
                                  attrs: { title: "Remove" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteObject(filObj.id)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-trash text-danger"
                                  })
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
            : [_vm._v(" No books have been added. ")]
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/book/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/book/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5b7ba097___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5b7ba097& */ "./resources/js/components/book/Index.vue?vue&type=template&id=5b7ba097&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/book/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5b7ba097___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5b7ba097___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/book/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/book/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/book/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/book/Index.vue?vue&type=template&id=5b7ba097&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/book/Index.vue?vue&type=template&id=5b7ba097& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5b7ba097___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5b7ba097& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/Index.vue?vue&type=template&id=5b7ba097&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5b7ba097___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5b7ba097___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/library/book.js":
/*!**************************************!*\
  !*** ./resources/js/library/book.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * 
   * @returns {window.axios}
   */
  getAll: function getAll() {
    var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return axios("/ajax/admin/books".concat(queryString));
  },

  /**
   * Return a book.
   * 
   * @param {Number} id
   * @returns {window.axios}
   */
  get: function get(id) {
    return axios("/ajax/admin/books/".concat(id));
  },

  /**
   * Create a book.
   * 
   * @param {Object} book
   * @returns {unresolved}
   */
  create: function create(book) {
    return axios.post('/ajax/admin/books', {
      book: book
    });
  },

  /**
   * Update a books.
   * 
   * @param {Object} book
   * @returns {unresolved}
   */
  update: function update(book) {
    return axios.patch("/ajax/admin/books/".concat(book.id), {
      book: book
    });
  },

  /**
   * Delete a books.
   * 
   * @param {Number} id
   * @returns {unresolved}
   */
  "delete": function _delete(id) {
    return axios["delete"]("/ajax/admin/books/".concat(id));
  }
});

/***/ }),

/***/ "./resources/js/library/category.js":
/*!******************************************!*\
  !*** ./resources/js/library/category.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * 
   * @returns {window.axios}
   */
  getAll: function getAll() {
    return axios('/ajax/admin/categories');
  }
});

/***/ })

}]);