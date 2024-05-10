import React from "react";
import {NavLink} from "react-dom"
function Home(){
    return(
        <div>

<div class="site-mobile-menu site-navbar-target">
		<div class="site-mobile-menu-header">
			<div class="site-mobile-menu-close">
				<span class="icofont-close js-menu-toggle"></span>
			</div>
		</div>
		<div class="site-mobile-menu-body"></div>
	</div>

	<nav class="site-nav">
		<div class="container">
			<div class="site-navigation">
				<a href="index.html" class="logo m-0 float-left">TheChurch</a>

				<ul class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
					<li class="active"><a href="index.html">Home</a></li>
					<li class="has-children">
						<a href="sermons.html">Sermons</a>
						<ul class="dropdown">
							<li><a href="sermons.html">Sermons</a></li>
							<li><a href="sermons-single.html">Sermons Single</a></li>
							<li class="has-children">
								<a href="#">Dropdown</a>
								<ul class="dropdown">
									<li><a href="#">Sub Menu One</a></li>
									<li><a href="#">Sub Menu Two</a></li>
									<li><a href="#">Sub Menu Three</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li><a href="ministry.html">Ministries</a></li>
					<li><a href="events.html">Events</a></li>
					<li><a href="contact.html">Contact</a></li>
					<li class="cta-button"><a href="contact.html">Request a prayer</a></li>
				</ul>

				

				<a href="#" class="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
					<span></span>
				</a>

				
			</div>
		</div>
	</nav>
	
	<div class="hero overlay" style="background-image: url('images/landscape-1.jpg'); ">
		<div class="container">
			<div class="row align-items-center justify-content-between">
				<div class="col-lg-5 me-auto text-start pe-lg-5">
					<div class="intro-text">
						<div class="mb-4"> 
							<h1 data-aos="fade-left" class="hero-heading">Arise &amp; Shine</h1>
						</div>
						<div class="">
							<p class="mb-5 opacity-5" data-aos="fade-left" data-aos-delay="200">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
							<p data-aos="fade-left" data-aos-delay="300"><a href="#" class="btn btn-primary">Go to sermons</a></p>
						</div>
					</div>
				</div>

				<div class="col-lg-7" data-aos="fade-left">
					<a href="https://www.youtube.com/watch?v=mwtbEGNABWU" class="video-bg glightbox">
						<span class="icon"><span class="icon-play"></span></span>
						<img src="images/landscape-2.jpg" alt="Image" class="img-fluid rounded" />
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="section upcoming-sermon js-countdown py-5">
		<div class="container">
			<div class="row justify-content-between counter-wrap" id="clockdiv">
				<div class="col-lg-3 mb-4 mb-lg-0">
					<img src="images/sq-2.jpg" alt="Image" class="img-fluid rounded" />
				</div>
				<div class="col-lg-8">
					<span class="subheading d-block mb-4">Upcoming Sermons</span>
					<h2 class="text-black">We Must Be Doers of The Word Not Hearers Only</h2>
					<p class="sermon-meta mb-4">By Pastor <strong>James Smith</strong></p>

					<div class="row">
						<div class="col-6 col-sm-6 col-md-6 col-lg-3 text-left">
							<div class="counter">
								<span class="number d-block days" id="days">39</span>
								<span class="caption">Days</span>
							</div>
						</div>
						<div class="col-6 col-sm-6 col-md-6 col-lg-3 text-left">
							<div class="counter">
								<span class="number d-block hours" id="hours">27</span>
								<span class="caption">Hours</span>
							</div>
						</div>
						<div class="col-6 col-sm-6 col-md-6 col-lg-3 text-left">
							<div class="counter">
								<span class="number d-block minutes" id="minutes">51</span>
								<span class="caption">Minutes</span>
							</div>
						</div>
						<div class="col-6 col-sm-6 col-md-6 col-lg-3 text-left">
							<div class="counter">
								<span class="number d-block seconds" id="seconds">51</span>
								<span class="caption">Seconds</span>
							</div>
						</div>
					</div>	

					<div class="row mt-5">
						<div class="col-12">
							<a href="#" class="btn btn-secondary">Join This Sermon</a>
						</div>
					</div>

				</div>
				

			</div>

		</div>
	</div>

	



	<div class="section">
		<div class="container">
			<div class="row mb-4 text-center">
				<div class="col-lg-12" data-aos="fade-up">
					<span class="subheading d-block mb-4">Sermons</span>
					<h2 class="mb-4 heading">Recent Sermons</h2>
				</div>
			</div>
			<div class="row g-5">
				<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
					<div class="sermon-entry">
						<a href="sermon-single.html"><img src="images/rect-img-1.jpg" alt="Image" class="img-fluid mb-3 rounded" /></a>
						<div class="sermon-body">
							<span class="date">15 Jan 2020 <span class="mx-2">&bullet;</span> By Pastor Campbell </span>
							<h3 class="mb-2"><a href="#">Live The Message</a></h3>
							<p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
							<p><a href="#" class="btn btn-primary btn-sm">Read more</a></p>
						</div>
					</div>
				</div>
				<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
					<div class="sermon-entry">
						<a href="sermon-single.html"><img src="images/rect-img-2.jpg" alt="Image" class="img-fluid mb-3 rounded" /></a>
						<div class="sermon-body">
							<span class="date">15 Jan 2020 <span class="mx-2">&bullet;</span> By Pastor Campbell </span>
							<h3 class="mb-2"><a href="#">Doers not hearers</a></h3>
							<p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
							<p><a href="#" class="btn btn-primary btn-sm">Read more</a></p>
						</div>
					</div>
				</div>
				<div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
					<div class="sermon-entry">
						<a href="sermon-single.html"><img src="images/rect-img-3.jpg" alt="Image" class="img-fluid mb-3 rounded"/></a>
						<div class="sermon-body">
							<span class="date">15 Jan 2020 <span class="mx-2">&bullet;</span> By Pastor Campbell </span>
							<h3 class="mb-2"><a href="#">By faith not by sight</a></h3>
							<p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
							<p><a href="#" class="btn btn-primary btn-sm">Read more</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div class="section bg-white">
		<div class="container">
			<div class="row">
				<div class="col-lg-7">
					<span class="subheading mb-4 d-block">Podcasts</span>
					<h2 class="mb-4 heading">Latest Podcasts</h2>
				</div>
			</div>
			<div class="row justify-content-center mb-4">
				<div class="col-lg-6">
					<script>
					
					</script>
					<script class="podigee-podcast-player" src="https://cdn.podigee.com/podcast-player/javascripts/podigee-podcast-player.js" data-configuration="playerConfiguration"></script>
				</div>

				<div class="col-lg-6">
					<script>
						
					</script>
					<script class="podigee-podcast-player" src="https://cdn.podigee.com/podcast-player/javascripts/podigee-podcast-player.js" data-configuration="playerConfiguration"></script>
				</div>
			</div>
		</div>
	</div>


	


	<div class="section">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-lg-4" data-aos="fade-up">
					<span class="subheading mb-4 d-block">About us</span>
					<h2 class="mb-4 heading">Welcome to TheChurch</h2>
					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
					<p class="mt-5"><a href="#" class="btn btn-primary">Know more about us</a></p>
				</div>
				<div class="col-lg-7" data-aos="fade-up" data-aos-delay="100">
					 <img src="images/landscape-1.jpg" alt="Image" class="img-fluid rounded" /> 
					<div class="row">
						<div class="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
							<img src="images/sq-1.jpg" alt="Image" class="img-fluid rounded" />
						</div>
						<div class="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
							<img src="images/sq-2.jpg" alt="Image" class="img-fluid rounded" /> 
						</div>
						<div class="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
							<img src="images/sq-3.jpg" alt="Image" class="img-fluid rounded" />
						</div>
						<div class="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
							<img src="images/sq-4.jpg" alt="Image" class="img-fluid rounded" />
						</div>
						<div class="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
							<img src="images/sq-5.jpg" alt="Image" class="img-fluid rounded" />
						</div>
						<div class="col-6 col-sm-6 col-md-4 col-lg-4 mb-4">
							<img src="images/sq-6.jpg" alt="Image" class="img-fluid rounded" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>



	<div class="section bg-secondary">
		<div class="container">
			<div class="row ustify-content-between align-items-center">
				<div class="col-lg-5" data-aos="fade-up">
					<span class="subheading d-block mb-4 text-white">Why Us</span>
					<h2 class="heading text-white">Keep Your Faith</h2>
				</div>
				
			</div>
			<div class="row align-items-center g-5">
				<div class="col-lg-6" data-aos="fade-up">
					<a href="https://www.youtube.com/watch?v=mwtbEGNABWU" class="video-bg glightbox">
						<span class="icon"><span class="icon-play"></span></span>
						<img src="images/landscape-1.jpg" alt="Image" class="img-fluid rounded" />
					</a>
				</div>
				<div class="col-lg-5 ms-auto" data-aos="fade-up" data-aos-delay="100">
					<div class="row g-4">
						<div class="col-lg-6 feature-1">
							<h3 class="text-white">Live by Faith</h3>
							<p class="opac-white-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
						</div>
						<div class="col-lg-6 feature-1">
							<h3 class="text-white">Love one another</h3>
							<p class="opac-white-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
						</div>

						<div class="col-lg-6 feature-1">
							<h3 class="text-white">Be courageous</h3>
							<p class="opac-white-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
						</div>
						<div class="col-lg-6 feature-1">
							<h3 class="text-white">Seal of God</h3>
							<p class="opac-white-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
						</div>

					</div>
					<div class="row mt-5">
						<div class="col-lg-12">
							<a href="#" class="btn btn-primary">Send us your prayer request</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div class="section">
		<div class="container">
			<div class="row mb-5">
				<div class="col-lg-7 mx-auto text-center mb-5" data-aos="fade-up">
					<span class="subheading mb-4 d-block">Testimonials</span>
					<h2 class="mb-4 heading">Living Testimonies</h2>
				</div>

				<div id="testimonial-nav" class="controls testimonial-nav">
					<span class="prev" data-controls="prev" tabindex="-1">Prev</span>
					<span class="next" data-controls="next" tabindex="-1">Next</span>
				</div>
			</div>

		</div>

		<div class="testimonial-slide-center-wrap" data-aos="fade-up" data-aos-delay="100">
			<div class="testimonial-slide-center testimonial-center" id="testimonial-center">

				<div class="item">
					<div class="testimonial-item">
						<div  class="testimonial-item-inner">
							<h3 class="testimonial-heading">Far far away, behind the word mountains</h3>
							<blockquote>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</blockquote>
							<div class="testimonial-author">
								<img src="images/person_1.jpg" alt="Image" class="img-fluid" />
								<strong class="d-block">James Smith</strong>
								<span>Church Visitor</span>
							</div>
						</div>
					</div>
				</div>

				<div class="item">
					<div class="testimonial-item">
						<div  class="testimonial-item-inner">
							<h3 class="testimonial-heading">Far far away, behind the word mountains</h3>
							<blockquote>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</blockquote>
							<div class="testimonial-author">
								<img src="images/person_1.jpg" alt="Image" class="img-fluid" />
								<strong class="d-block">James Smith</strong>
								<span>Church Visitor</span>
							</div>
						</div>
					</div>
				</div>

				<div class="item">
					<div class="testimonial-item">
						<div  class="testimonial-item-inner">
							<h3 class="testimonial-heading">Far far away, behind the word mountains</h3>
							<blockquote>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</blockquote>
							<div class="testimonial-author">
								<img src="images/person_1.jpg" alt="Image" class="img-fluid" />
								<strong class="d-block">James Smith</strong>
								<span>Church Visitor</span>
							</div>
						</div>
					</div>
				</div>

				<div class="item">
					<div class="testimonial-item">
						<div  class="testimonial-item-inner">
							<h3 class="testimonial-heading">Far far away, behind the word mountains</h3>
							<blockquote>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</blockquote>
							<div class="testimonial-author">
								<img src="images/person_1.jpg" alt="Image" class="img-fluid" />
								<strong class="d-block">James Smith</strong>
								<span>Church Visitor</span>
							</div>
						</div>
					</div>
				</div>


				<div class="item">
					<div class="testimonial-item">
						<div  class="testimonial-item-inner">
							<h3 class="testimonial-heading">Far far away, behind the word mountains</h3>
							<blockquote>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</blockquote>
							<div class="testimonial-author">
								<img src="images/person_1.jpg" alt="Image" class="img-fluid"/> 
								<strong class="d-block">James Smith</strong>
								<span>Church Visitor</span>
							</div>
						</div>
					</div>
				</div>

				<div class="item">
					<div class="testimonial-item">
						<div  class="testimonial-item-inner">
							<h3 class="testimonial-heading">Far far away, behind the word mountains</h3>
							<blockquote>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</blockquote>
							<div class="testimonial-author">
								<img src="images/person_1.jpg" alt="Image" class="img-fluid" />
								<strong class="d-block">James Smith</strong>
								<span>Church Visitor</span>
							</div>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="testimonial-item">
						<div  class="testimonial-item-inner">
							<h3 class="testimonial-heading">Far far away, behind the word mountains</h3>
							<blockquote>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</blockquote>
							<div class="testimonial-author">
								<img src="images/person_1.jpg" alt="Image" class="img-fluid" />
								<strong class="d-block">James Smith</strong>
								<span>Church Visitor</span>
							</div>
						</div>
					</div>
				</div>

				<div class="item">
					<div class="testimonial-item">
						<div  class="testimonial-item-inner">
							<h3 class="testimonial-heading">Far far away, behind the word mountains</h3>
							<blockquote>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</blockquote>
							<div class="testimonial-author">
								<img src="images/person_1.jpg" alt="Image" class="img-fluid" />
								<strong class="d-block">James Smith</strong>
								<span>Church Visitor</span>
							</div>
						</div>
					</div>
				</div>

				<div class="item">
					<div class="testimonial-item">
						<div  class="testimonial-item-inner">
							<h3 class="testimonial-heading">Far far away, behind the word mountains</h3>
							<blockquote>
								Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
							</blockquote>
							<div class="testimonial-author">
								<img src="images/person_1.jpg" alt="Image" class="img-fluid" />
								<strong class="d-block">James Smith</strong>
								<span>Church Visitor</span>
							</div>
						</div>
					</div>
				</div>




			</div>

			
		</div>

	</div>


	<div class="section bg-white mx-2 mx-md-5 sec-services-wrap">
		<div class="container">
			<div class="row mb-5">
				<div class="col-lg-7 mx-auto text-center" data-aos="fade-up">
					<span class="subheading mb-4 d-block">Our Services</span>
					<h2 class="mb-4 heading">Church Services</h2>

				</div>
			</div>

			<div class="row g-5">
				<div class="col-lg-4" data-aos="fade-up" data-aos-delay="0">
					<div class="service text-center">
						<span class="icon-home mb-4 d-block"></span>
						<h3 class="heading">Worship</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						
					</div>
				</div>
				<div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
					<div class="service text-center">
						<span class="icon-leaf mb-4 d-block"></span>
						<h3 class="heading">Baptism</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						
					</div>
				</div>
				<div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
					<div class="service text-center">
						<span class="icon-book mb-4 d-block"></span>
						<h3 class="heading">Exhortation</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
						
					</div>
				</div>
			</div>
		</div>
	</div>



	<div class="section sec-cta bg-secondary">
		<div class="container">
			<div class="row align-items-center" data-aos="fade-up">
				<div class="col-lg-9 text-center text-md-start mb-4 mb-md-0">
					<h2 class="heading text-white">Get better by hearing our sermons</h2>
				</div>		
				<div class="col-lg-3 text-center text-md-end" data-aos="fade-up" data-aos-delay="100">
					<a href="#" class="btn btn-primary py-3 px-5">Join Us</a>
				</div>

			</div>		
		</div>		
	</div>



	<div class="site-footer bg-white">
		<div class="container">
			<div class="row">
				<div class="col-lg-4">
					<div class="widget">
						<h3>Contact</h3>
						<address>43 Raymouth Rd. Baltemoer, London 3910</address>
						<ul class="list-unstyled links">
							<li><a href="tel://11234567890">+1(123)-456-7890</a></li>
							<li><a href="tel://11234567890">+1(123)-456-7890</a></li>
							<li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
						</ul>
					</div> 
				</div> 
				<div class="col-lg-4">
					<div class="widget">
						<h3>Sources</h3>
						<ul class="list-unstyled float-start links">
							<li><a href="#">About us</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Vision</a></li>
							<li><a href="#">Mission</a></li>
							<li><a href="#">Terms</a></li>
							<li><a href="#">Privacy</a></li>
						</ul>
						<ul class="list-unstyled float-start links">
							<li><a href="#">Partners</a></li>
							<li><a href="#">Business</a></li>
							<li><a href="#">Careers</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#">FAQ</a></li>
							<li><a href="#">Creative</a></li>
						</ul>
					</div> 
				</div> 
				<div class="col-lg-4">
					<div class="widget">
						<h3>Links</h3>
						<ul class="list-unstyled links">
							<li><a href="#">Our Vision</a></li>
							<li><a href="#">About us</a></li>
							<li><a href="#">Contact us</a></li>
						</ul>

						<ul class="list-unstyled social">
							<li><a href="#"><span class="icon-instagram"></span></a></li>
							<li><a href="#"><span class="icon-twitter"></span></a></li>
							<li><a href="#"><span class="icon-facebook"></span></a></li>
							<li><a href="#"><span class="icon-linkedin"></span></a></li>
							<li><a href="#"><span class="icon-pinterest"></span></a></li>
							<li><a href="#"><span class="icon-dribbble"></span></a></li>
						</ul>
					</div> 
				</div> 
			</div> 

			<div class="row mt-5">
				<div class="col-12 text-center">
					<p class="mb-0">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> 
					</p>
				</div>
			</div>
		</div>
	</div> 


	
	<div id="overlayer"></div>
	<div class="loader">
		<div class="spinner-border text-primary" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>

        </div>
    );
}export default Home;