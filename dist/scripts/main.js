"use strict";!function(t){function e(){var e,i=t("#cm"),a=i.find(".overlay"),n={init:function(){t(window).on("resize",this.onResize).trigger("resize"),i.css({backgroundSize:i.width()+"px "+i.height()+"px"}),i.on("mousemove",n.onMouseMove)},onResize:function(){i.css({backgroundSize:i.width()+"px "+i.height()+"px"}),e=76,a.css({width:e+"px",height:e+"px"})},onMouseMove:function(o){var s=n.calculateBackgroundPosition(o),h=o.pageX/t(window).width();a.css({top:o.pageY-e/2,left:o.pageX-e/2,backgroundSize:i.width()+"px "+i.height()+"px",backgroundPosition:s.left+"px "+s.top+"px"}),h<.01||h>.99?(a.css("opacity",0),i.css("cursor","default")):(a.css("opacity","1"),i.css("cursor","none"))},calculateBackgroundPosition:function(t){var a=t.pageX,n=t.pageY;return{left:i.width()-a+e/2,top:i.height()-n+e/2}}};return n}function i(t,e){return"width"===e?t[0].getBBox().width:t[0].getBBox().height}var a=t(".node-node"),n=t("#cm"),o=0;if(t(window).on("resize",function(){t(window).width()<1220?t(".cm-node").first().addClass("inverse"):t(".cm-node").first().removeClass("inverse")}),n.hasClass("auto")){if(!t(".touch").length){var s=e();s.init()}setInterval(function(){t(".active").removeClass("active"),a.each(function(e,a){if(e===o){var n=t(a),s=n.parents(".cm-node"),h=s.find("svg"),r=h.find("g"),c=r.find("polygon"),x=h.find("line"),g=h.width(),u=h.height(),d=i(r,"width"),v=i(r,"height"),f=g-d,y=u-v,l=[];s.hasClass("inverse")?(f=0,y=0,l.push({x1:5,y1:83,x2:255,y2:146}),l.push({x1:170,y1:83,x2:255,y2:146}),l.push({x1:775,y1:300,x2:255,y2:146}),x.each(function(e,i){var a=t(i);a.attr("x1",l[e].x1),a.attr("y1",l[e].y1),a.attr("x2",l[e].x2+f),a.attr("y2",l[e].y2+y)})):(l.push({x2:c[0].getBBox().x,y2:c[0].getBBox().y}),l.push({x2:c[0].getBBox().x,y2:c[0].getBBox().height}),l.push({x2:c[0].getBBox().width,y2:c[0].getBBox().height}),x.each(function(e,i){var a=t(i);a.attr("x2",l[e].x2+f),a.attr("y2",l[e].y2+y)})),r.attr("transform","translate("+f+" "+y+")"),s.addClass("active")}}),++o>=a.length&&(o=0)},3e3)}else if(t(".touch").length)a.on("touchstart",function(){t(".active").length&&t(".active").removeClass("active");var e=t(this),a=e.find("svg"),n=a.find("g"),o=n.find("polygon"),s=a.find("line"),h=a.width(),r=a.height(),c=i(n,"width"),x=i(n,"height"),g=h-c,u=r-x,d=[];e.addClass("active"),d.push({x2:o[0].getBBox().x,y2:o[0].getBBox().y}),d.push({x2:o[0].getBBox().x,y2:o[0].getBBox().height}),d.push({x2:o[0].getBBox().width,y2:o[0].getBBox().height}),s.each(function(e,i){var a=t(i);a.attr("x2",d[e].x2+g),a.attr("y2",d[e].y2+u)}),n.attr("transform","translate("+g+" "+u+")")}),t("body").on("touchstart",function(e){t(e.target).parents(".active").length||t(".active").removeClass("active")});else{var s=e();s.init(),a.hover(function(){var e=t(this).parents(".cm-node"),a=e.find("svg"),n=a.find("g"),o=n.find("polygon"),s=a.find("line"),h=a.width(),r=a.height(),c=i(n,"width"),x=i(n,"height"),g=h-c,u=r-x,d=[];e.hasClass("inverse")?(g=0,u=0,d.push({x1:5,y1:83,x2:255,y2:146}),d.push({x1:170,y1:83,x2:255,y2:146}),d.push({x1:775,y1:300,x2:255,y2:146}),s.each(function(e,i){var a=t(i);a.attr("x1",d[e].x1),a.attr("y1",d[e].y1),a.attr("x2",d[e].x2+g),a.attr("y2",d[e].y2+u)})):(d.push({x2:o[0].getBBox().x,y2:o[0].getBBox().y}),d.push({x2:o[0].getBBox().x,y2:o[0].getBBox().height}),d.push({x2:o[0].getBBox().width,y2:o[0].getBBox().height}),s.each(function(e,i){var a=t(i);a.attr("x2",d[e].x2+g),a.attr("y2",d[e].y2+u)})),n.attr("transform","translate("+g+" "+u+")"),e.addClass("active"),a.hover(function(){e.hasClass("active")||e.addClass("active")},function(){e.hasClass("active")&&e.removeClass("active")})},function(){t(".active").removeClass("active")})}}(jQuery);