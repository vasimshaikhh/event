import React from 'react'
import special from '../../../assets/images/special-offer-bg.png';

const SpecialOffer = () => {
  return (
      <>
        	{/* <!-- special-offer-section - start */}
		{/* ================================================== --> */}
		<section id="special-offer-section" class="special-offer-section clearfix" style={{backgroundImage: 'url(' + special + ')'}}>
			<div class="container">
				<div class="row">

					{/* <!-- special-offer-content - start --> */}
					<div class="col-lg-9">
						<div class="special-offer-content">
							<h2>Looking for something <span>special for your moment?</span></h2>
							<p class="m-0">
								Contact us now and we will make your event unique & unforgettable
							</p>
						</div>
					</div>
					{/* <!-- special-offer-content - end --> */}

					{/* <!-- event-makeing-btn - start --> */}
					<div class="col-lg-3">
						<div class="event-makeing-btn">
							<a href="#!">join with us now</a>
						</div>
					</div>
					{/* <!-- event-makeing-btn - end --> */}

				</div>
			</div>
		</section>
		{/* <!-- special-offer-section - end */}
		{/* ================================================== --> */}
      </>
  )
}

export default SpecialOffer
