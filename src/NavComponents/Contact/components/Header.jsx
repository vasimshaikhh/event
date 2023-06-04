import React from 'react'
import { Link } from 'react-router-dom';
import breadcrumb from '../../../../src/assets/images/breadcrumb/0.breadcrumb-bg.jpg';
const Header = () => {
  return (
      <>
         <section id="breadcrumb-section" className="breadcrumb-section clearfix">
			  <div className="jarallax" style={{ backgroundImage: 'url('+breadcrumb+')' }}>
				<div className="overlay-black">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-12 col-sm-12">

								<div className="breadcrumb-title text-center mb-50">
									<span className="sub-title">CONTACT US NOW</span>
									<h2 className="big-title"><strong>KEEP</strong> IN TOUCH</h2>
								</div>

								<div className="breadcrumb-list">
									<ul>
										<li className="breadcrumb-item"><Link to="/" className="breadcrumb-link">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
									</ul>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
  )
}

export default Header
