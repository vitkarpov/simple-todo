var glob = ('undefined' === typeof window) ? global : window,
Handlebars = glob.Handlebars || require('handlebars');
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["stats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a href=\"#filter/";
  if (stack1 = helpers.action) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.action; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"filters-item ";
  stack1 = helpers['if'].call(depth0, depth0.active, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " js-filters-item\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "filters-item--active";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <button class=\"clear-completed js-clear-completed\">Удалить выполненные (";
  if (stack1 = helpers.completed) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.completed; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</button>\n";
  return buffer;
  }

  buffer += "<div class=\"stats\">Осталось выполнить: <strong class=\"stats-tasks-left js-stats-tasks-left\">";
  if (stack1 = helpers.remaining) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.remaining; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong></div>\n<div class=\"filters\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.filters, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  stack1 = helpers['if'].call(depth0, depth0.completed, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
this["app"]["templates"]["todoItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " checked ";
  }

  buffer += "<input type=\"text\" class=\"tasks-edit js-tasks-edit\">\n<a href=\"#delete/";
  if (stack1 = helpers.order) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.order; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"tasks-destroy\">Удалить</button>\n<a href=\"#edit/";
  if (stack1 = helpers.order) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.order; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"tasks-item-edit\">Редактировать</a>\n<label class=\"tasks-caption\">\n  <input type=\"checkbox\" class=\"tasks-check js-tasks-check\" ";
  stack1 = helpers['if'].call(depth0, depth0.completed, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</label>";
  return buffer;
  });
if (typeof exports === 'object' && exports) {module.exports = this["app"]["templates"];}