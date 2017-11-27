// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block       = require("bs-platform/lib/js/block.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var Caml_array  = require("bs-platform/lib/js/caml_array.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");

function Create(Config) {
  var component = ReasonReact.reducerComponent("ReForm");
  var make = function (onSubmit, validate, children) {
    var newrecord = component.slice();
    newrecord[/* render */9] = (function (self) {
        var handleChange = function (field) {
          return Curry._1(self[/* reduce */1], (function (value) {
                        return /* HandleChange */Block.__(1, [/* tuple */[
                                    field,
                                    value
                                  ]]);
                      }));
        };
        var handleValidation = Curry._1(self[/* reduce */1], (function (error) {
                return /* HandleError */Block.__(0, [error]);
              }));
        var handleFormSubmit = Curry._1(self[/* reduce */1], (function () {
                return /* HandleSubmit */0;
              }));
        var handleSubmit = function () {
          var validationError = Curry._1(validate, self[/* state */2][/* values */0]);
          Curry._1(handleValidation, validationError);
          var match = +(validationError === /* None */0);
          if (match !== 0) {
            return Curry._1(handleFormSubmit, /* () */0);
          } else {
            return /* () */0;
          }
        };
        return Curry._4(Caml_array.caml_array_get(children, 0), self[/* state */2], handleChange, handleSubmit, handleValidation);
      });
    newrecord[/* initialState */10] = (function () {
        return /* record */[
                /* values */Config[/* initialState */1],
                /* isSubmitting : false */0,
                /* error : None */0
              ];
      });
    newrecord[/* reducer */12] = (function (action, state) {
        if (typeof action === "number") {
          return /* UpdateWithSideEffects */Block.__(3, [
                    /* record */[
                      /* values */state[/* values */0],
                      /* isSubmitting : true */1,
                      /* error */state[/* error */2]
                    ],
                    (function () {
                        return Curry._1(onSubmit, state[/* values */0]);
                      })
                  ]);
        } else if (action.tag) {
          return /* Update */Block.__(0, [/* record */[
                      /* values */Curry._2(Config[/* handleChange */0], action, state[/* values */0]),
                      /* isSubmitting */state[/* isSubmitting */1],
                      /* error */state[/* error */2]
                    ]]);
        } else {
          return /* Update */Block.__(0, [/* record */[
                      /* values */state[/* values */0],
                      /* isSubmitting : false */0,
                      /* error */action[0]
                    ]]);
        }
      });
    return newrecord;
  };
  return /* module */[
          /* component */component,
          /* make */make
        ];
}

exports.Create = Create;
/* ReasonReact Not a pure module */