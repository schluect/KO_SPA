var error = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "﻿<h1> "
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "</h1>\r\n<h2> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.error : depth0)) != null ? stack1.status : stack1), depth0))
    + "</h2>\r\n<pre> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.error : depth0)) != null ? stack1.stack : stack1), depth0))
    + "</pre>";
},"useData":true});