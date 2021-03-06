<?php
/**
 * The template for displaying all single posts.
 *
 * @package origin
 */

get_header(); ?>

	<main id="primary" class="site-main" role="main" itemprop="mainContentOfPage">

		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'content', 'single' ); ?>

			<?php the_post_navigation(); ?>

			<?php
				// If comments are open or we have at least one comment, load up the comment template
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
			?>

		<?php endwhile; // end of the loop. ?>

	</main><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
