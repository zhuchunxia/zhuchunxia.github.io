// -----------------创建页面元素-------------------

function setTotalPages(total) {
	$(".total-pages").text(total);
}
function createSidebarRealContent(total) {
	for (var i = 0; i < total; i++) {
		var elm = "<div data-page=\""+(i+1)+"\" class=\"nav-elem nav-"+(i+1)+"\"></div>";
		$(".sidebar-real").append(elm);
	}
	$(".sidebar-real div").eq(0).addClass("active");
}
function createSectionsContent(imgs) {
	for (var i = 0; i < imgs.length; i++) {
		var section = "<div class=\"section section-"+(i+1)+"\"></div>";
			var leftPart = "<div class=\"left-part\"></div>";
			var content = "<div class=\"content\"></div>";
				var bgPart = "<div class=\"bg-part\"></div>";
				var sectionHeading = "<h2 class=\"section-heading\"></h2>";
				var additionalText = "<p class=\"additional-text\"></p>";
		// 填充content
		for (var j = 0; j < imgs.length; j++) {
			$(content).append(bgPart);
		}
		if (imgs[i].title != null) {
			$(sectionHeading).text(imgs[i].title);
			$(content).append(sectionHeading);
		}
		if (imgs[i].desc != null) {
			$(additionalText).text(imgs[i].desc);
			$(content).append(additionalText);
		}
		// 填充 section
		$(section).append(leftPart);
		$(section).append(content);
		$(".sections").append(section);
	}
}

// -------------------填充数据-------------------

/*
 *
.sidebar-hover:hover ~ .sidebar-real .nav-elem.nav-1 {
  -webkit-transition-delay: 0.4s;
          transition-delay: 0.4s;
}
 */
function fillSidebarHoverData(total) {
	for (var i = 0; i < total; i++) {
		var sel = ".sidebar-hover:hover ~ .sidebar-real .nav-elem.nav-" + (i+1);
		$(sel).css("-webkit-transition-delay", (0.4+i*0.15)+"s");
		$(sel).css("transition-delay", (0.4+i*0.15)+"s");
	}
}
/*
 *
.sidebar-real:hover .nav-elem.nav-1 {
  -webkit-transition-delay: 0.4s;
          transition-delay: 0.4s;
}
 */
function fillSidebarRealData(total) {
	for (var i = 0; i < total; i++) {
		var sel = "sidebar-real:hover .nav-elem.nav-" + (i+1);
		$(sel).css("-webkit-transition-delay", (0.4+i*0.15)+"s");
		$(sel).css("transition-delay", (0.4+i*0.15)+"s");
	}
}
/*
 *
.nav-elem.nav-1 {
  background-image: url(../imgs/Portfolio/1_Original/0.jpg);
}
 */
function fillNavElemData(imgs) {
	for (var i = 0; i < imgs.length; i++) {
		var sel = ".nav-elem.nav-" + (i+1);
		$(sel).css("background-image", "url("+imgs[i].url+")");
	}
}
/*
 *
.section.section-1 .left-part {
  background-image: url("../imgs/Portfolio/1_Original/0.jpg");
}
.section.section-1 .bg-part {
  background-image: url("../imgs/Portfolio/1_Original/0.jpg");
}
 */
function fillSectionData(imgs) {
	for (var i = 0; i < imgs.length; i++) {
		var sel1 = ".section.section-"+(i+1)+" .left-part";
		var sel2 = ".section.section-"+(i+1)+" .bg-part";
		$(sel1).css("background-image", "url("+imgs[i].url+")");
		$(sel2).css("background-image", "url("+imgs[i].url+")");
	}
}
