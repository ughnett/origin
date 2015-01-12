<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package origin
 */
?>

	</section><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'origin' ) ); ?>">
				<?php printf( __( 'Proudly powered by %s', 'origin' ), 'WordPress' ); ?>
			</a>
			<span class="sep"> | </span>
			<?php printf( __( 'Theme: %1$s by %2$s.', 'origin' ), 'origin', '<a href="http://jonbellah.com/" rel="designer">Jon Bellah</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
