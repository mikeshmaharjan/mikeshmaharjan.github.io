$(document).ready(function() {

	var tileHeight = $('.tile').height();
	var tileWidth = $('.tile').width();

	var transitionTime = 290;
	var easingType = 'easeOutBack';//'easeOutElastic';//

	var tileIndex = 0;
	var lastTileIndex = '';
	var lastTile = '';

	// $('.active-tile').on('hover', function() {
		
	// });

	$('.tile').on('click', function() {

		if( lastTileIndex === '' || lastTileIndex != $(this).index() ) {
			resizeTiles( $(this) );
			contentManager( $(this) );
			
			// if(lastTile !== '') {
			// 	lastTile.removeClass('active-tile');
			// }
			// $(this).addClass('active-tile');

			lastTileIndex = $(this).index();
			// lastTile = $(this);
		}
	});

	function resizeTiles(tile) {

		tileIndex = tile.index() + 1;

		if( (tileIndex % 2) === 0 ) {

			$('.tile').not(tile).not(tile.prev()).animate({
				'height' : tileHeight - (tileHeight * 0.5) + 'px',
				'width' : tileWidth + 'px'
			}, transitionTime, easingType);

			tile.prev().animate({
				'height' : tileHeight + (tileHeight * 0.5) + 'px',
				'width' : tileWidth - (tileWidth * 0.5) + 'px'
			}, transitionTime, easingType);

		} else {

			$('.tile').not(tile).not(tile.next()).animate({
				'height' : tileHeight - (tileHeight * 0.5) + 'px',
				'width' : tileWidth + 'px'
			}, transitionTime, easingType);

			tile.next().animate({
				'height' : tileHeight + (tileHeight * 0.5) + 'px',
				'width' : tileWidth - (tileWidth * 0.5) + 'px'
			}, transitionTime, easingType);
		}

		tile.animate({
			'height' : tileHeight + (tileHeight * 0.5) + 'px',
			'width'  : tileWidth + (tileWidth * 0.5) + 'px'
		}, transitionTime, easingType);

		$('.tile').css('cursor', 'pointer');
		tile.css('cursor', 'default');

	}

	function contentManager(tile) {
		$('.tile-container').fadeOut( transitionTime/2 )
		tile.children('.tile-container').fadeIn( transitionTime/2 );
	}

    var e = new Date;
    $("#copyright-year").html(e.getFullYear());


    var barFullWidth = '';
	$('.bar').hover(function(){
	    // var title = $(this).attr('title');
	    // var title = $(this).width();
	    if(barFullWidth === '') {
	    	barFullWidth = $(this).parent().width();
	    }
	    var title = getRemark( getWidthPercent( $(this).width() ) );
	    $(this).data('tipText', title).removeAttr('title');
	    $('<p class="tooltip"></p>')
	    .text(title)
	    .appendTo('body')
	    .fadeIn('fast');
	}, function() {
	    $(this).attr('title', $(this).data('tipText'));
	    $('.tooltip').remove();
	}).mousemove(function(e) {
	    var mousex = e.pageX + 20;
	    var mousey = e.pageY + 10;
	    $('.tooltip')
	    .css({ top: mousey, left: mousex })
	});

	function getWidthPercent(itemWidth) {
		return parseInt( (itemWidth/barFullWidth)*100 );
	}

	function getRemark(percentage) {
		if( percentage <= 30 ) {
			return 'i\'m amature in this';
		} else if( percentage <= 50 ) {
			return 'i\'m used to this';
		} else if( percentage <= 70) {
			return 'have been working for a while';
		} else if( percentage <= 100) {
			return 'have been working for a long time';
		}
	}

});

		// tileIndex = $(this).index() + 1;

		// if( (tileIndex % 2) === 0 ) {

		// 	$('.tile').not($(this)).not($(this).prev()).animate({
		// 		'height' : tileHeight - (tileHeight * 0.5) + 'px'
		// 	}, transitionTime, easingType);

		// 	$(this).prev().animate({
		// 		'height' : tileHeight + (tileHeight * 0.5) + 'px',
		// 		'width' : tileWidth - (tileWidth * 0.5) + 'px'
		// 	}, transitionTime, easingType);

		// } else {

		// 	$('.tile').not($(this)).not($(this).next()).animate({
		// 		'height' : tileHeight - (tileHeight * 0.5) + 'px'
		// 	}, transitionTime, easingType);

		// 	$(this).next().animate({
		// 		'height' : tileHeight + (tileHeight * 0.5) + 'px',
		// 		'width' : tileWidth - (tileWidth * 0.5) + 'px'
		// 	}, transitionTime, easingType);
		// }

		// $(this).animate({
		// 	'height' : tileHeight + (tileHeight * 0.5) + 'px',
		// 	'width'  : tileWidth + (tileWidth * 0.5) + 'px'
		// }, transitionTime, easingType);