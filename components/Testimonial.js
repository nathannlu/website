import React from 'react';

const Testimonial = props => {
	return (
		<div className="md:w-1/2 px-16">
			<div className="mb-6" style={{
				borderRadius: '50%',
				width: '64px',
				height: '64px',
				backgroundColor: '#d6d6d6'
			}}>
				<img src={props.avatar} />
			</div>
			<p className="mb-6 text-2xl" style={{fontFamily: 'serif'}}>
				{props.content}
			</p>
			<div style={{fontSize: '1.4rem'}}>
				<p style={{fontWeight: 'bold'}}>
					{props.author}	
				</p>
				<p>
					{props.authorDescription}
				</p>
			</div>
		</div>
 )
}

export default Testimonial;
