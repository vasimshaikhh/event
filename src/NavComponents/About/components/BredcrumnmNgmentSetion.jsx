import React from 'react'
import { Link } from 'react-router-dom';
// import breadcrumb from '../../../assets/images/breadcrumb/0.breadcrumb-bg.jpg';
import breadcrumb from '../../../../src/assets/images/breadcrumb/0.breadcrumb-bg.jpg';

const BredcrumnmNgmentSetion = () => {
  return (
      <>
        		  <section id="breadcrumb-section" className="breadcrumb-section clearfix">
			  <div className="jarallax" style={{ backgroundImage: 'url('+breadcrumb+')' }}>
				<div className="overlay-black">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-12 col-sm-12">

								<div className="breadcrumb-title text-center mb-50">
									<span className="sub-title">all you need to know</span>
									<h2 className="big-title"><strong>about</strong> harmoni</h2>
								</div>

								<div className="breadcrumb-list">
									<ul>
										<li className="breadcrumb-item"><Link to="/" className="breadcrumb-link">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">about us</li>
									</ul>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>


      <section id="our-management-section" className="our-management-section bg-gray-light sec-ptb-100 clearfix">
			<div className="container">
				<div className="row">

					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="section-title text-left mb-50 sr-fade1">
							<small className="sub-title">we are harmoni</small>
							<h2 className="big-title"><strong>No.1</strong> Events Management</h2>
							<Link to="#!" className="custom-btn">
								get started!
							</Link>
						</div>
					</div>

					<div className="col-lg-8 col-md-12 col-sm-12">
						<div className="row">

							<div className="col-lg-6 col-md-6 col-sm-12">
								<div className="management-item sr-fade2">
									<div className="item-title">
										<h3 className="title-text">
											our mission
										</h3>
									</div>
									<p className="black-color mb-30">
										Lorem ipsum dollor site amet the best  consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
									</p>
									<p className="black-color m-0">
										<strong>
											<i>
												Lorem ipsum dollor site amet the best  consectuer adipiscing elites sed diam nonummy nibh euismod.
											</i>	
										</strong>
									</p>
								</div>
							</div>

							<div className="col-lg-6 col-md-6 col-sm-12">
								<div className="management-item sr-fade3">
									<div className="item-title">
										<h3 className="title-text">
											our vission
										</h3>
									</div>
									<p className="black-color mb-30">
										Lorem ipsum dollor site amet the best  consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
									</p>
									<p className="black-color m-0">
										<strong>
											<i>
												Lorem ipsum dollor site amet the best  consectuer adipiscing elites sed diam nonummy nibh euismod.
											</i>	
										</strong>
									</p>
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

export default BredcrumnmNgmentSetion
