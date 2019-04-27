// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Apollo = require("./Apollo.bs.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReFormNext = require("bs-reform/src/ReFormNext.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReForm_Helpers = require("bs-reform/src/ReForm_Helpers.js");
var Mutation$ReasonApolloHooks = require("reason-apollo-hooks/src/Mutation.bs.js");

function get(state, field) {
  switch (field) {
    case 0 : 
        return state[/* description */0];
    case 1 : 
        return state[/* title */1];
    case 2 : 
        return state[/* acceptTerms */2];
    
  }
}

function set(state, field, value) {
  switch (field) {
    case 0 : 
        return /* record */[
                /* description */value,
                /* title */state[/* title */1],
                /* acceptTerms */state[/* acceptTerms */2]
              ];
    case 1 : 
        return /* record */[
                /* description */state[/* description */0],
                /* title */value,
                /* acceptTerms */state[/* acceptTerms */2]
              ];
    case 2 : 
        return /* record */[
                /* description */state[/* description */0],
                /* title */state[/* title */1],
                /* acceptTerms */value
              ];
    
  }
}

var StateLenses = /* module */[
  /* get */get,
  /* set */set
];

var PostAddForm = ReFormNext.Make([
      set,
      get
    ]);

var ppx_printed_query = "mutation PostAddMutation($description: String!, $title: String!)  {\ncreatePost(description: $description, title: $title)  {\nid  \ntitle  \ndescription  \n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "createPost");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$1);
      if (match$2 !== undefined) {
        tmp = undefined;
      } else {
        var match$3 = Js_json.decodeObject(value$1);
        var tmp$1;
        if (match$3 !== undefined) {
          var value$2 = Caml_option.valFromOption(match$3);
          var match$4 = Js_dict.get(value$2, "id");
          var tmp$2;
          if (match$4 !== undefined) {
            var value$3 = Caml_option.valFromOption(match$4);
            var match$5 = Js_json.decodeString(value$3);
            tmp$2 = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
          } else {
            tmp$2 = Js_exn.raiseError("graphql_ppx: Field id on type Post is missing");
          }
          var match$6 = Js_dict.get(value$2, "title");
          var tmp$3;
          if (match$6 !== undefined) {
            var value$4 = Caml_option.valFromOption(match$6);
            var match$7 = Js_json.decodeString(value$4);
            tmp$3 = match$7 !== undefined ? match$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
          } else {
            tmp$3 = Js_exn.raiseError("graphql_ppx: Field title on type Post is missing");
          }
          var match$8 = Js_dict.get(value$2, "description");
          var tmp$4;
          if (match$8 !== undefined) {
            var value$5 = Caml_option.valFromOption(match$8);
            var match$9 = Js_json.decodeString(value$5);
            tmp$4 = match$9 !== undefined ? match$9 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$5));
          } else {
            tmp$4 = Js_exn.raiseError("graphql_ppx: Field description on type Post is missing");
          }
          tmp$1 = {
            id: tmp$2,
            title: tmp$3,
            description: tmp$4
          };
        } else {
          tmp$1 = Js_exn.raiseError("graphql_ppx: Object is not a value");
        }
        tmp = Caml_option.some(tmp$1);
      }
    } else {
      tmp = undefined;
    }
    return {
            createPost: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make(description, title, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[
                /* tuple */[
                  "description",
                  description
                ],
                /* tuple */[
                  "title",
                  title
                ]
              ]),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var description = variables.description;
  var title = variables.title;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[
                /* tuple */[
                  "description",
                  description
                ],
                /* tuple */[
                  "title",
                  title
                ]
              ]),
          parse: parse
        };
}

function ret_type(f) {
  return /* module */[];
}

var MT_Ret = /* module */[];

var PostAddMutationConfig = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var PostAddMutation = Mutation$ReasonApolloHooks.Make([
      ppx_printed_query,
      parse
    ]);

function PostAddNext(Props) {
  var mutate = Curry._2(PostAddMutation[/* use */0], {
        client: Apollo.client
      }, /* () */0);
  var match = React.useState((function () {
          return undefined;
        }));
  var setResult = match[1];
  var result = match[0];
  var match$1 = Curry._5(PostAddForm[/* use */6], /* record */[
        /* description */"",
        /* title */"",
        /* acceptTerms */false
      ], /* Schema */[/* array */[
          /* Custom */Block.__(3, [
              /* Title */1,
              (function (values) {
                  var match = values[/* title */1].length > 20;
                  if (match) {
                    return /* Error */["Keep it short!"];
                  } else {
                    return /* Valid */1;
                  }
                })
            ]),
          /* Custom */Block.__(3, [
              /* Description */0,
              (function (values) {
                  var match = values[/* description */0] === "";
                  if (match) {
                    return /* Error */["Can't be empty"];
                  } else {
                    return /* Valid */1;
                  }
                })
            ]),
          /* Custom */Block.__(3, [
              /* AcceptTerms */2,
              (function (values) {
                  var match = values[/* acceptTerms */2] === false;
                  if (match) {
                    return /* Error */["You must accept all the terms"];
                  } else {
                    return /* Valid */1;
                  }
                })
            ])
        ]], (function (param) {
          var state = param[/* state */1];
          Curry._1(mutate, {
                  variables: make(state[/* values */1][/* description */0], state[/* values */1][/* title */1], /* () */0).variables
                }).then((function (result) {
                  return Promise.resolve(Curry._1(setResult, (function (param) {
                                    return result;
                                  })));
                }));
          return undefined;
        }), undefined, /* () */0);
  var submit = match$1[/* submit */6];
  var handleChange = match$1[/* handleChange */2];
  var getFieldState = match$1[/* getFieldState */1];
  var state = match$1[/* state */0];
  if (result !== undefined) {
    var match$2 = result;
    if (typeof match$2 === "number" || match$2.tag) {
      return React.createElement("p", undefined, "Something went wrong...");
    } else {
      var data = match$2[0];
      var __x = data.createPost;
      var __x$1 = Belt_Option.map(__x, (function (post) {
              return "Post#" + (post.id + (" " + post.title));
            }));
      var __x$2 = data.createPost;
      var __x$3 = Belt_Option.map(__x$2, (function (post) {
              return post.description;
            }));
      return React.createElement("div", undefined, React.createElement("h2", undefined, Belt_Option.getWithDefault(__x$1, "")), React.createElement("p", undefined, Belt_Option.getWithDefault(__x$3, "")));
    }
  } else {
    var partial_arg = Curry._1(handleChange, /* Title */1);
    var param = Curry._1(getFieldState, /* Field */[/* Title */1]);
    var __x$4 = typeof param === "number" ? undefined : param[0];
    var partial_arg$1 = Curry._1(handleChange, /* Description */0);
    var param$1 = Curry._1(getFieldState, /* Field */[/* Description */0]);
    var __x$5 = typeof param$1 === "number" ? undefined : param$1[0];
    var param$2 = Curry._1(getFieldState, /* Field */[/* AcceptTerms */2]);
    var __x$6 = typeof param$2 === "number" ? undefined : param$2[0];
    var match$3 = state[/* formState */0] === /* Submitting */1;
    return React.createElement("form", {
                onSubmit: (function ($$event) {
                    $$event.preventDefault();
                    return Curry._1(submit, /* () */0);
                  })
              }, React.createElement("label", undefined, React.createElement("span", undefined, "Title:"), React.createElement("input", {
                        value: state[/* values */1][/* title */1],
                        onChange: (function (param) {
                            return ReForm_Helpers.handleDomFormChange(partial_arg, param);
                          })
                      }), React.createElement("p", undefined, Belt_Option.getWithDefault(__x$4, ""))), React.createElement("label", undefined, React.createElement("span", undefined, "Description:"), React.createElement("textarea", {
                        rows: 4,
                        value: state[/* values */1][/* description */0],
                        onChange: (function (param) {
                            return ReForm_Helpers.handleDomFormChange(partial_arg$1, param);
                          })
                      }), React.createElement("p", undefined, Belt_Option.getWithDefault(__x$5, ""))), React.createElement("label", undefined, React.createElement("p", undefined, React.createElement("span", undefined, "Accept terms? "), React.createElement("input", {
                            type: "checkbox",
                            value: Pervasives.string_of_bool(state[/* values */1][/* acceptTerms */2]),
                            onChange: (function ($$event) {
                                return Curry._2(handleChange, /* AcceptTerms */2, $$event.target.checked);
                              })
                          })), React.createElement("p", undefined, Belt_Option.getWithDefault(__x$6, ""))), match$3 ? React.createElement("p", undefined, "Saving...") : React.createElement("button", {
                      type: "submit"
                    }, "Submit"));
  }
}

var make$1 = PostAddNext;

exports.StateLenses = StateLenses;
exports.PostAddForm = PostAddForm;
exports.PostAddMutationConfig = PostAddMutationConfig;
exports.PostAddMutation = PostAddMutation;
exports.make = make$1;
/* PostAddForm Not a pure module */
