// Playrun javascript
// This is a auto run on website's javascript file

// Website mobile device sidebar show & hide
function side() {
	if(!$('#sidctrl').hasClass('sidebar-open')){
		$('#sidctrl').addClass('sidebar-open');
	} else {
		$('#sidctrl').removeClass('sidebar-open');
	}
};

// Run a probe object website mobile device sidebar new feature
if ($('#sideaside').blur) {
	$('#sideaside').removeClass('sidebar-open');
};

// Website search framework
SimpleJekyllSearch({
	searchInput: document.getElementById('searchbox'),
    resultsContainer: document.getElementById('resultbox'),
    json: '{{ site.baseurl }}/search.json',
    searchResultTemplate: '<li><a href="{url}" class="sidebar-heading nav-item nav-link">{title}</a></li>'
});

// Run a probe object resultbox show & hide on website
if ($("#searchbox").focus) {
	$('#resultbox').show();
};
if ($("#searchbox").blur) {
	$('#resultbox').hide();
};