import React from 'react'
import './PostItem.css'
function PostItem(props) {
	// props.data.map((el) => console.log(el))

	return (
		<div className='card'>
			<div className='first'>
				<div className='title'>{props.title}</div>
				<div className='id'>{props.id}</div>
			</div>
			<p>text</p>
			<div className='photos'>
				<img alt='text' src={props.url} />
			</div>
		</div>
	)
}

export default PostItem
