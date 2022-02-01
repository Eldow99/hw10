import React from 'react'
import PostItem from './PostItem'

function Post(props) {
	// props.data.map((el) => console.log(el))
	console.log(props.data)
	return (
		<div>
			{props.data.map((el) => (
				<PostItem
					title={el.title}
					url={el.thumbnailUrl}
					id={el.id}
					key={el.id}
				/>
			))}
		</div>
	)
}

export default Post
