(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['posts'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n\n<tr class=\"post\">\n	\n	<td>\n	\n		<table>\n			<hr>\n			\n			<tbody class=\"post-image-container\">\n				\n				<tr>\n					<td valign=\"left\">\n						<a href="
    + alias4(((helper = (helper = helpers.reference || (depth0 != null ? depth0.reference : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reference","hash":{},"data":data}) : helper)))
    + " class=\"post-title\"><font size=\"5\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</font></a>\n					</td>\n				</tr>\n				\n				<tr>\n					<td>\n						<br>\n					</td>\n				</tr>\n				\n				<tr>\n					<td><a href="
    + alias4(((helper = (helper = helpers.image1 || (depth0 != null ? depth0.image1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image1","hash":{},"data":data}) : helper)))
    + "><img src="
    + alias4(((helper = (helper = helpers.image1 || (depth0 != null ? depth0.image1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image1","hash":{},"data":data}) : helper)))
    + " alt=\"image1\" class=\"post-image\"></a></td>\n					<td><a href="
    + alias4(((helper = (helper = helpers.image2 || (depth0 != null ? depth0.image2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image2","hash":{},"data":data}) : helper)))
    + "><img src="
    + alias4(((helper = (helper = helpers.image2 || (depth0 != null ? depth0.image2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image2","hash":{},"data":data}) : helper)))
    + " alt=\"image2\" class=\"post-image\"></a></td>\n					<td><a href="
    + alias4(((helper = (helper = helpers.image3 || (depth0 != null ? depth0.image3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image3","hash":{},"data":data}) : helper)))
    + "><img src="
    + alias4(((helper = (helper = helpers.image3 || (depth0 != null ? depth0.image3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image3","hash":{},"data":data}) : helper)))
    + " alt=\"image3\" class=\"post-image\"></a></td>\n				</tr>\n				\n				<tr>\n					<td valign=\"left\" class=\"post-image-description\">\n						<br>\n						<font size=\"4\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</font>\n						<br>\n					</td>\n				</tr>\n				\n			</tbody>\n			\n		</table>\n	\n	</td>\n	\n</tr>";
},"useData":true});
})();