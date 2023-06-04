import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import breadcrumb from '../../../../src/assets/images/breadcrumb/0.breadcrumb-bg.jpg';
import { Button, Stack } from '@mui/material';
import { useGetCategoriesQuery } from '../../../services/api';

const EventHeader = () => {

	const { data, isSuccess } = useGetCategoriesQuery()
	console.log(data)
	const navigate = useNavigate()
  return (
      <>
         <section id="breadcrumb-section" className="breadcrumb-section clearfix">
			  <div className="jarallax" style={{ backgroundImage: 'url('+breadcrumb+')' }}>
				<div className="overlay-black">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-12 col-sm-12">

								<div className="breadcrumb-title text-center mb-50">
									<span className="sub-title">HARMONI EVENTS</span>
									<h2 className="big-title"><strong>harmoni</strong> EVENT</h2>
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
		  <Stack spacing={4} direction='row' justifyContent={'center'} alignItems='center' sx={{ width: '100%', height: '3rem', backgroundColor: 'black', color: 'black' }}>
		  <Button sx={{color:'#fff'}} onClick={()=>{navigate(`/events/catergory`)}} variant='outlined'>Category</Button>

			  {isSuccess === true || undefined ? data.data.map((el, i) => {
				  return (
					  <>
					<Button sx={{color:'#fff'}} onClick={()=>{navigate(`/events/${el.url}`,{state:{name:el.category_name}})}} variant='outlined'>{el.category_name}</Button>
					</>
			)}):null}
			  
		</Stack>
      </>
  )
}

export default EventHeader
