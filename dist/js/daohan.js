"use strict";var viewHeight,viewWidth,pageHeight,pageWidth;function getValue(){viewHeight=$(window).height(),viewWidth=$(window).width(),pageHeight=$(document).height(),pageWidth=$(document).width()}function pageAdjust(){var e="860px";$("#header_menu_list").width(e);$("#header_menu_list").css("marginLeft",168),$("#section_button").css("top",viewHeight/2-50+"px");for(var t=0;t<6;t++)$(".header_detail_container").eq(t).css("left",1e3*t+"px");$("#bg").height(viewHeight),$(".bg").height(viewHeight)}$(document).ready(function(){}),window.onload=function(){setTimeout(function(){getValue(),pageAdjust()},300)},$(window).resize(function(){getValue(),pageAdjust()}),function(){var t=!1,i=!1,n=!1;$(".header_menu_list").on("mouseenter",function(){if(t){if(!i){i=!0;var e=$(this).index();$("#header_menu_details_mask").animate({left:-1e3*e+"px"},300,function(){i=!1})}}else{e=$(this).index();$("#header_menu_details_mask").css("left",-1e3*e+"px"),n||($("#header_menu_details").slideDown(),t=n=!0)}}),$("#header_nav").on("mouseleave",function(){$("#header_menu_details").slideUp(300,function(){n=!1}),t=!1})}(),$("#header_search_text").on("focus",function(){$(this).css("color","black"),"输入搜索内容"==$(this).val()&&$(this).val("")}).on("blur",function(){$(this).css("color","#8e8e8e"),""==$(this).val()&&$(this).val("输入搜索内容")});var val={fa_id:"bg",son_class:"bg",speed:7e3,interval:1e4};function banner(e){document.getElementById(e.fa_id);var t=$("#"+e.fa_id).children("."+e.son_class),n=t.length,a=e.speed,o=e.interval,s=0;!function(){a||(a=1e3,console.log(a));o||(o=3e3,console.log(o));a<50&&(a=50,alert("速度时间间隔不得小于50ms"));o<a&&(o=2*a,alert("变化时间不得大于变化间隔"));for(i=1;i<n;i++)t.eq(i).hide();t1=setTimeout(function(){!function e(){t.eq(s).fadeOut(a);t.eq((s+1)%n).fadeIn(a);s=(s+1)%n;t2=setTimeout(function(){e()},o)}()},3e3)}()}banner(val);