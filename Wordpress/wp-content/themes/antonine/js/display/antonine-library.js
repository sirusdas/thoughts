var window_width = parseInt(jQuery(window).width());
function antonine_aria(setting){
	jQuery("h1 a")
		.each(
				function(index, value){
					jQuery(value)
						.attr("aria-hidden",setting);
				}
		);
		
	jQuery("h2 a")
		.each(
				function(index, value){
					jQuery(value)
						.attr("aria-hidden",setting);
				}
		);
}

function antonine_menu_slide(items){
	if(items.length!=0){
		article = items.shift();
		jQuery(article)
			.css("display","none")
			.css("left","0");
		jQuery(article)
			.fadeIn(600, function(){antonine_menu_slide(items);});
	}else{
		scrolling = false;
	}
}

function antonine_search_menu_slide(items){
	if(items.length!=0){
		article = items.shift();
		jQuery(article)
			.css("display","none")
			.css("left","0");
		jQuery(article)
			.fadeIn(50, function(){antonine_search_menu_slide(items);});
	}else{
		scrolling = false;
	}
}

function antonine_menu_slide_filter(items){
	if(items.length!=0){
		article = items.shift();
		jQuery(article)
			.fadeIn(600, function(){antonine_menu_slide_filter(items);});
	}else{
		jQuery('#scroll_bottom').html(antonine_library.noMorePosts);
		scrolling = false;
	}
}

function antonine_article_align(){

	jQuery( "article.status-publish" )
		.each(
			function(index,value){
				if(window_width>640){
					jQuery(value)
						.height((jQuery(window).height()/4));
				}
				else{
					jQuery(value)
					.height((jQuery(window).height()/4));
				}
			}
		);

	jQuery( "footer#colophon" )
		.each(
			function(index,value){
				jQuery(value)
					.height((jQuery(window).height()/4));
			}
		);	

	jQuery( "article.status-publish .content-holder" )
		.each(
			function(index,value){
				if(window_width>640){
					//alert(parseInt(jQuery(window).width()));
					jQuery(value)
						.height(jQuery(value).parent().height());
				}
				else{
					jQuery(value)
					.height('235.75');
					//jQuery(value)
					//.height(jQuery(value).parent().height() - (jQuery(value).parent().height()/4));
					//console.log(jQuery(value).parent().height() - (jQuery(value).parent().height()/4));
				}
			}
		);

	jQuery( "article .home-align" )
		.each(
			function(index,value){
				width = jQuery(value).width();
				parent_width = jQuery(value).parent().width();
				height = jQuery(value).height();
				parent_height = jQuery(value).parent().height();
				if(window_width>640){
					leftpx = (parent_width - width)/2;
					toppx = (parent_height - height)/2;
					jQuery(value)
					.css("position", "relative")
					.css("top", toppx + "px")
					.css("left", leftpx + "px");
				}
				else{
					leftpx = ((parent_width - width)/2);
					toppx = -55;
					jQuery(value)
					.css("position", "relative")
					.css("bottom", toppx + "px")
					.css("left", leftpx + "px");
				}
			}
		);
		
	jQuery( "article .home-align-title" )
		.each(
			function(index,value){
				width = jQuery(value).width();
				parent_width = jQuery(value).parent().width();
				height = jQuery(value).height();
				parent_height = jQuery(value).parent().height();

				leftpx = (parent_width - width)/2;
				toppx = ((parent_height - height)/2);

				leftpx = (parent_width - width)/2;
				toppx = (parent_height - height)/2;

				jQuery(value)
					.css("position", "relative")
					.css("top", toppx + "px")
					.css("left", leftpx + "px");
			}
		);		
}

function antonine_search_align(){

	jQuery( "article.status-publish" )
		.each(
			function(index,value){
				jQuery(value)
					.height((jQuery(window).height()/4));
			}
		);

	jQuery( "footer#colophon" )
		.each(
			function(index,value){
				jQuery(value)
					.height((jQuery(window).height()/4));
			}
		);	

	jQuery( "article.status-publish .content-holder" )
		.each(
			function(index,value){
				if(window_width>640){
					//alert(window_width);
					jQuery(value)
						.height(jQuery(value).parent().height());
				}
				else{
					jQuery(value)
					.height('235.75');
					//jQuery(value)
					//.height(jQuery(value).parent().height() - (jQuery(value).parent().height()/4));
					//console.log('are bhai'.jQuery(value).parent().height() - (jQuery(value).parent().height()/4))
				}
			}
		);

	jQuery( "article .home-align" )
		.each(
			function(index,value){
				width = jQuery(value).width();
				parent_width = jQuery(value).parent().width();
				height = jQuery(value).height();
				parent_height = jQuery(value).parent().parent().height();
				
				if(window_width>640){
					leftpx = (parent_width - width)/2;
					toppx = (parent_height - height)/2;
					
					jQuery(value)
					.css("position", "relative")
					.css("top", toppx + "px")
					.css("left", leftpx + "px");
				}
				else{
					leftpx = ((parent_width - width)/2);
					toppx = -55;
					
					jQuery(value)
					.css("position", "relative")
					.css("bottom", toppx + "px")
					.css("left", leftpx + "px");
				}
			}
		);
		
	jQuery( "article .home-align-title" )
		.each(
			function(index,value){
				width = jQuery(value).width();
				parent_width = jQuery(value).parent().width();
				height = jQuery(value).height();
				parent_height = jQuery(value).parent().parent().height();

				leftpx = (parent_width - width)/2;
				toppx = ((parent_height - height)/2);

				leftpx = (parent_width - width)/2;
				toppx = (parent_height - height)/2;

				jQuery(value)
					.css("position", "relative")
					.css("top", toppx + "px")
					.css("left", leftpx + "px");
			}
		);		
}
