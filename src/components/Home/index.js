import NewsItem from "../Template/NewsItem"

const Home = () => {
	const newsList=[
		{id: 1, title: 'Xeber 1', desc: 'Desc 1'},
		{ id: 2, title: 'Xeber 2', desc: 'Desc 2' },
		{ id: 3, title: 'Xeber 3', desc: 'Desc 3' },
		{ id: 4, title: 'Xeber 4', desc: 'Desc 4' },
	]

	return (
		<>
			<h2>Xeberler ana sehife</h2>

			{/* <li>
				<h2>{row.title}</h2>
				<p>{row.desc}</p>
			</li> */}
			
			<ul>
				{
					newsList.map(row => {
						return (
							<NewsItem data={row} />
						)
					})
				}
			</ul>
		</>
	)
}

export default Home