<article id="post-<?php the_ID(); ?>" <?php post_class("home-page"); ?> resource="?<?php the_ID() ; ?>#id" vocab="http://schema.org/" typeof="Blog">
	<header class="entry-header title-holder">
		<p class="entry-title home-align-title">
			<a href="<?PHP echo get_permalink(); ?>" rel="bookmark"><?PHP echo substr(get_the_title(),0,37).'...'; ?></a>
		</p>
	</header>	
	<div class="content-holder">
		<div class="entry-content-index home-align">
		<?php
			$content = trim(strip_tags(get_the_content()));
			$excerpt_pos = 130;
			echo substr($content,0,$excerpt_pos) . "...by ".get_the_author();
			//get_the_author_link();
		?>
		</div>
	</div>
	<div class="read-more-holder preview_link" target="<?PHP echo the_ID(); ?>">
		<div class="entry-read-more home-align">
			<?PHP echo __("Read more", "antonine"); ?>
		</div>
	</div>
</article>