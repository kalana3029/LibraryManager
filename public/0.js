(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/BookForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/BookForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    book: {
      type: Object,
      "default": function _default() {
        return {
          isbn: "",
          title: "",
          category_id: "",
          author: "",
          price: "",
          availbility: ""
        };
      }
    }
  },
  validations: {
    book: {
      isbn: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      title: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      category_id: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      author: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      },
      price: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
        decimal: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["decimal"]
      },
      availbility: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
      }
    }
  },
  data: function data() {
    return {
      categories: []
    };
  },
  created: function created() {
    this.getCategories();
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

    /**
     * Validate the input.
     *
     * @returns {Boolean}
     */
    validate: function validate() {
      // Touch begins validation.
      this.$v.$touch();
      return !this.$v.$invalid;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/BookForm.vue?vue&type=template&id=eb984450&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/BookForm.vue?vue&type=template&id=eb984450& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "isbn" } }, [_vm._v("ISBN")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.book.isbn,
            expression: "book.isbn"
          }
        ],
        staticClass: "form-control",
        class: { "is-invalid": _vm.$v.book.isbn.$error },
        attrs: { type: "text", id: "isbn" },
        domProps: { value: _vm.book.isbn },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.book, "isbn", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "title" } }, [_vm._v("Title")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.book.title,
            expression: "book.title"
          }
        ],
        staticClass: "form-control",
        class: { "is-invalid": _vm.$v.book.title.$error },
        attrs: { type: "text", id: "title" },
        domProps: { value: _vm.book.title },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.book, "title", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "category" } }, [_vm._v("Category")]),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.book.category_id,
              expression: "book.category_id"
            }
          ],
          staticClass: "form-control",
          class: { "is-invalid": _vm.$v.book.category_id.$error },
          attrs: { id: "category" },
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
              _vm.$set(
                _vm.book,
                "category_id",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            }
          }
        },
        [
          _c("option", [_vm._v("Select")]),
          _vm._v(" "),
          _vm._l(_vm.categories, function(category) {
            return _c(
              "option",
              { key: category.id, domProps: { value: category.id } },
              [_vm._v("\n\t\t\t\t\t" + _vm._s(category.name) + "\n\t\t\t\t")]
            )
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "author" } }, [_vm._v("Author")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.book.author,
            expression: "book.author"
          }
        ],
        staticClass: "form-control",
        class: { "is-invalid": _vm.$v.book.author.$error },
        attrs: { type: "text", id: "author" },
        domProps: { value: _vm.book.author },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.book, "author", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "price" } }, [_vm._v("Price ($)")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.book.price,
            expression: "book.price"
          }
        ],
        staticClass: "form-control",
        class: { "is-invalid": _vm.$v.book.price.$error },
        attrs: { type: "text", id: "price" },
        domProps: { value: _vm.book.price },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.book, "price", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group mt-3" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.book.availbility,
            expression: "book.availbility"
          }
        ],
        staticClass: "form-check-input",
        class: { "is-invalid": _vm.$v.book.availbility.$error },
        attrs: {
          type: "checkbox",
          "true-value": true,
          "false-value": false,
          id: "availbility"
        },
        domProps: {
          checked: Array.isArray(_vm.book.availbility)
            ? _vm._i(_vm.book.availbility, null) > -1
            : _vm.book.availbility
        },
        on: {
          change: function($event) {
            var $$a = _vm.book.availbility,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && _vm.$set(_vm.book, "availbility", $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  _vm.$set(
                    _vm.book,
                    "availbility",
                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                  )
              }
            } else {
              _vm.$set(_vm.book, "availbility", $$c)
            }
          }
        }
      }),
      _vm._v(" "),
      _c("label", { attrs: { for: "availbility" } }, [_vm._v("Availbility")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/forms/BookForm.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/forms/BookForm.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookForm_vue_vue_type_template_id_eb984450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookForm.vue?vue&type=template&id=eb984450& */ "./resources/js/components/forms/BookForm.vue?vue&type=template&id=eb984450&");
/* harmony import */ var _BookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookForm.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/BookForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookForm_vue_vue_type_template_id_eb984450___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookForm_vue_vue_type_template_id_eb984450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/BookForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/BookForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/forms/BookForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BookForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/BookForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/BookForm.vue?vue&type=template&id=eb984450&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/forms/BookForm.vue?vue&type=template&id=eb984450& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_template_id_eb984450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BookForm.vue?vue&type=template&id=eb984450& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/BookForm.vue?vue&type=template&id=eb984450&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_template_id_eb984450___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookForm_vue_vue_type_template_id_eb984450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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