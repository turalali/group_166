import NewsItem from "../../Template/NewsItem"

const NewsPage = () => {
	const newsList = [
		{ id: 1, title: 'Xeber 1', desc: 'Desc 1' },
		{ id: 2, title: 'Xeber 2', desc: 'Desc 2' },
		{ id: 3, title: 'Xeber 3', desc: 'Desc 3' },
		{ id: 4, title: 'Xeber 4', desc: 'Desc 4' },
	]

	return (
		<>
			<h2>Xeberler sehifesi</h2>
			
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

export default NewsPage