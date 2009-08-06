/*
 * accordion_options.js
 */
(function($) {

module("accordion: options");

test("{ active: first child }, default", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ active: Selector }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ active: Element }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ active: jQuery Object }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ active: true }", function() {
	$("#list1").accordion({
		active: true,
		collapsible: false
	});
	equals( $("#list1 .ui-accordion-header.ui-state-active").size(), 1, "one header selected" );
});

test("{ active: false }", function() {
	$("#list1").accordion({
		active: false,
		collapsible: true
	});
	equals( $("#list1 .ui-accordion-header.ui-state-active").size(), 0, "no headers selected" );
});

test("{ active: Number }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ animated: false }, default", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ animated: true }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ animated: String }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ autoHeight: true }, default", function() {
	$('#navigation').accordion({ autoHeight: true });
	equals( $('#navigation > li:eq(0) > ul').height(), 126 );
	equals( $('#navigation > li:eq(1) > ul').height(), 126 );
	equals( $('#navigation > li:eq(2) > ul').height(), 126 );
});

test("{ autoHeight: false }", function() {
	$('#navigation').accordion({ autoHeight: false });
	equals( $('#navigation > li:eq(0) > ul').height(), 90 );
	equals( $('#navigation > li:eq(1) > ul').height(), 126 );
	equals( $('#navigation > li:eq(2) > ul').height(), 54 );
});

test("{ clearStyle: false }, default", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ clearStyle: true }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ collapsible: false }, default", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ collapsible: true }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ event: 'click' }, default", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ event: 'mouseover' }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ fillSpace: false }, default", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ fillSpace: true }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ header: '> li > :first-child,> :not(li):even' }, default", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ header: Selector }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ header: jQuery Object }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ icons: { 'header': 'ui-icon-triangle-1-e', 'headerSelected': 'ui-icon-triangle-1-s' } }, default", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ icons: { 'header': 'ui-icon-foo', 'headerSelected': 'ui-icon-bar' } }", function() {
	ok(false, 'missing test - untested code is broken code');
});

test("{ icons: false }", function() {
	function icons(on) {
		same($("#list1 span.ui-icon:visible").length, on ? 3 : 0);
		same( $("#list1").hasClass("ui-accordion-icons"), on );
	}
	$("#list1").accordion();
	icons(true);
	$("#list1").accordion("destroy").accordion({
		icons: false
	});
	icons(false);
	$("#list1").accordion("option", "icons", $.ui.accordion.defaults.icons);
	icons(true);
	$("#list1").accordion("option", "icons", false);
	icons(false);
});

test("{ navigation: true, navigationFilter: header }", function() {
	$("#navigation").accordion({
		navigation: true,
		navigationFilter: function() {
			return /\?p=1\.1\.3$/.test(this.href);
		}
	});
	equals( $("#navigation .ui-accordion-content:eq(2)").size(), 1, "third content active" );
});

test("{ navigation: true, navigationFilter: content }", function() {
	$("#navigation").accordion({
		navigation: true,
		navigationFilter: function() {
			return /\?p=1\.1\.3\.2$/.test(this.href);
		}
	});
	equals( $("#navigation .ui-accordion-content:eq(2)").size(), 1, "third content active" );
});

})(jQuery);
