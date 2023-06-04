import React from 'react'
import companyAge from '../../../assets/images/about/company-age-bg.jpg';
import bnar from '../../../assets/images/about/company-banner.png';



const AwardSection = () => {
  return (
      <>
        {/* <!-- award-section - start */}
		{/* ================================================== --> */}
		<section id="award-section" class="award-section sec-ptb-100 clearfix">
			<div class="container">
				<div class="row">

					{/* <!-- company-age - start --> */}
					<div class="col-lg-6 col-md-12 col-sm-12">
						<div class="company-age sr-fade1" style={{backgroundImage: 'url('+ companyAge +')'}}>
							<div class="banner-img">
								<img src={bnar} alt="Image_not_found"/>
							</div>
						</div>
					</div>
					{/* <!-- company-age - end --> */}

					<div class="col-lg-6 col-md-12 col-sm-12">
						{/* <!-- section-title - start --> */}
						<div class="section-title text-left mb-80 sr-fade1">
							<small class="sub-title">harmoni awaed</small>
							<h2 class="big-title">Our Winning <strong>Awards</strong></h2>
						</div>
						{/* <!-- section-title - end --> */}

						{/* <!-- awaed-item-area - start --> */}
						<div class="awaed-item-area sr-fade2">
							<span class="arrow-up">
								<i class="fas fa-chevron-circle-up"></i>
							</span>

							

							<span class="arrow-down">
								<i class="fas fa-chevron-circle-down"></i>
							</span>
							<div class="awaed-wrapper">

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">aug 2015</span>
											1st Place for Unique Events 2018
										</h3>
										<p class="m-0">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">may 2014</span>
											1st Winner Best New Years Events
										</h3>
										<p class="m-0">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">dec 2013</span>
											1st Place International Events Awards 
										</h3>
										<p class="m-0">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">aug 2015</span>
											1st Place for Unique Events 2018
										</h3>
										<p class="m-0">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">may 2014</span>
											1st Winner Best New Years Events
										</h3>
										<p class="m-0">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

								{/* <!-- awaed-item - start --> */}
								<div class="awaed-item">
									<div class="awaed-content">
										<h3 class="awaed-title">
											<span class="awaed-date">dec 2013</span>
											1st Place International Events Awards 
										</h3>
										<p class="m-0">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.
										</p>
									</div>
								</div>
								{/* <!-- awaed-item - end --> */}

							</div>
						</div>
						{/* <!-- awaed-item-area - end --> */}
					</div>
					
				</div>
			</div>
		</section>
		{/* <!-- award-section - end */}
		{/* ================================================== --> */}
      </>
  )
}

export default AwardSection
