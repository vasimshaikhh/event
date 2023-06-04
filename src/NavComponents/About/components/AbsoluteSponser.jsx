import React from 'react'
import image1  from '../../../assets/images/partners/image1.png';
import image2 from '../../../assets/images/partners/image2.png';
import image4  from '../../../assets/images/partners/image4.png';
import image6 from '../../../assets/images/partners/image6.png';

const AbsoluteSponser = () => {
  return (
      <>
        	{/* <!-- absolute-sponsor-section - start */}
		{/* ================================================== --> */}
		<div id="absolute-sponsor-section" class="absolute-sponsor-section sr-fade1 clearfix">
			<ul>

				<li>
					<a href="#!">
						<img src={image1} alt="Image_not_found"/>
					</a>
				</li>
				<li>
					<a href="#!">
						<img src={image2} alt="Image_not_found"/>
					</a>
				</li>
				<li>
					<a href="#!">
						<img src={image4} alt="Image_not_found"/>
					</a>
				</li>
				<li>
					<a href="#!">
						<img src={image6} alt="Image_not_found"/>
					</a>
				</li>
				
			</ul>
		</div>
		{/* <!-- absolute-sponsor-section - end */}
		{/* ================================================== --> */}
      </>
  )
}

export default AbsoluteSponser
