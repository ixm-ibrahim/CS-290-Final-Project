(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['posts'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n\r\n<tr class=\"post-row\">\r\n	\r\n	<td>\r\n	\r\n		<table>\r\n			<hr>\r\n			\r\n			<tbody class=\"post-image-container\">\r\n				\r\n				<tr>\r\n					<td valign=\"left\">\r\n						<a href="
    + alias4(((helper = (helper = helpers.reference || (depth0 != null ? depth0.reference : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reference","hash":{},"data":data}) : helper)))
    + " class=\"post-title\"><font size=\"5\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</font></a>\r\n					</td>\r\n				</tr>\r\n				\r\n				<tr>\r\n					<td>\r\n						<br>\r\n					</td>\r\n				</tr>\r\n				\r\n				<tr>\r\n					<td><a href="
    + alias4(((helper = (helper = helpers.image1 || (depth0 != null ? depth0.image1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image1","hash":{},"data":data}) : helper)))
    + "><img src="
    + alias4(((helper = (helper = helpers.image1 || (depth0 != null ? depth0.image1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image1","hash":{},"data":data}) : helper)))
    + " alt=\"image1\" class=\"post-image\"></a></td>\r\n					<td><a href="
    + alias4(((helper = (helper = helpers.image2 || (depth0 != null ? depth0.image2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image2","hash":{},"data":data}) : helper)))
    + "><img src="
    + alias4(((helper = (helper = helpers.image2 || (depth0 != null ? depth0.image2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image2","hash":{},"data":data}) : helper)))
    + " alt=\"image2\" class=\"post-image\"></a></td>\r\n					<td><a href="
    + alias4(((helper = (helper = helpers.image3 || (depth0 != null ? depth0.image3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image3","hash":{},"data":data}) : helper)))
    + "><img src="
    + alias4(((helper = (helper = helpers.image3 || (depth0 != null ? depth0.image3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image3","hash":{},"data":data}) : helper)))
    + " alt=\"image3\" class=\"post-image\"></a></td>\r\n				</tr>\r\n				\r\n				<tr>\r\n					<td valign=\"left\" class=\"post-image-description\">\r\n						<br>\r\n						<font size=\"4\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</font>\r\n						<br>\r\n					</td>\r\n				</tr>\r\n				\r\n			</tbody>\r\n			\r\n		</table>\r\n	\r\n	</td>\r\n	\r\n</tr>";
},"useData":true});
})();