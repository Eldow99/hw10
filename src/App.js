import { useEffect, useState } from 'react'
import './App.css'
import Post from './components/post/Post'
function App() {
	const [data, setData] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
			.then((response) => response.json())
			.then((json) => setData([...json]))
	}, [])

	// useEffect(() => {
	// 	async function f() {
	// 		let responce = await fetch(
	// 			`https://jsonplaceholder.typicode.com/photos?_limit=10`,
	// 		)
	// 		let result = await responce.json()
	// 		setData(result)
	// 	}
	// }, [])

	return (
		<div className='App'>
			<Post data={data} />
		</div>
	)
}

export default App
