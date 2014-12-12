/*
 * Status tab click event
 *
 * @todo 1 => make generic
 * @todo 2 => move into JS blocks
 */
$(document).ready(function(){

	$('#tab-status a').click(function (e) {
		currentPanel = $(this).attr('href')
		if ($(currentPanel).has('.ajax-loader').length != 0 ) {
			loadStatusTab()
		}
	})

});

/*
 * Draft code for ajax-loading checks panel using Dashboards controller
 *
 * @todo Make generic
 */
function loadStatusTab() {
	var jqxhr = $.getJSON( 'dashboards/checks.json', function(data) {
		// loop through each category
		$.each( data, function( category, checks ) {
			failCount = 0

			// generate <li> items for each check in the current category
			$.each( data[category], function( index, check ) {
				if (check.pass == true ) {
					icon = '<i class="fa fa-check"></i>'
					$('#status-' + category + ' ul').append( '<li>' + icon + check.message + '</li>')
				} else {
					icon = '<i class="fa fa-times"></i>'
					$('#status-' + category + ' ul').append( '<li class="text-danger">' + icon + check.message + '</li>')
					failCount++
				}
			});

			// set panel header to danger for failed category
			if (failCount != 0) {
				$('#status-' + category).removeClass('panel-primary')
				$('#status-' + category).addClass('panel-danger')
			}
		});
	})
	.done(function() {
		$('#panel-status .ajax-loader').html('').remove()
		$('#panel-status .panel-content').removeClass('hidden')
	})
	.fail(function() {
		alert( 'So sorry, something went horribly wrong...' )
	})
}