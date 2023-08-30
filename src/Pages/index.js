import React from 'react';
import '../Styles/index.css';
import hotelimg from '../Assets/Hotel.png';
import departimg from '../Assets/department.png';
import recepimg from '../Assets/reception.png';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<div className='container homewelcome'>
				<div className='row'>
					<div>
						<h1>Welcome</h1>
					</div>
				</div>
			</div>
			<div className='homecontainer'>

				{/* <div className='row'>
			<div className='col-lg-4'>
				<div className='card hotelcard'>
					<div className='card-header hotelcardheader'>HOTEL</div>
					<div className='card-body hotelcardbody'>
						<img src={recepimg} style={{width:'100%'}}/>
					</div>
				</div>
			</div>
			<div className='col-lg-8'></div>
		</div> */}
				{/* <div className='row'>
			<div className='col-lg-4'></div>
			<div className='col-lg-8'></div>
		</div> */}

				<div className="homecolumn">
					<div className="homerow">
						<div className='card hotelcard'>
							<div className='card-header hotelcardheader'>HOTEL</div>
							<div className='card-body hotelcardbody' style={{ textAlign: 'center' }}>
								<Link to="/hotelLogin">	<img src={recepimg} alt="Hotel" style={{ width: '75%' }} /></Link>
							</div>
						</div>
					</div>
					<div className="homerow">
						<div className='card departcard'>
							{/* <div className='card-header departcardheader'>DEPARTMENT</div> */}
							<div className='card-body departcardbody' style={{ textAlign: 'right' }}>
								<span style={{ position: 'absolute', left: '10px' }}>DEPARTMENT</span>
								<img src={departimg} alt="Department" style={{ width: '55%' }} />
							</div>
						</div>
					</div>
					<p>Click on the one above option for login or registration</p>
				</div>
				<div className="homecolumn" style={{ paddingTop: '6%' }}>
					<div className='card hotelcardright'>
						<div className='card-body hotelcardbodyright' >
							<img src={hotelimg} alt="Hotel" style={{ width: '75%' }} />
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Home;
