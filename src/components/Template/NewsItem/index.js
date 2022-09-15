import { useState } from "react";

const NewsItem = (props) => {
	const {title, desc} = props.data;

	const[visible, setVisible] = useState(false);

	const showHideNewsDesc = () => {
		//console.log(title);

		setVisible(!visible);
	}

	return (
		<>
			<li>
				<h2>{title} <button type="button" onClick={showHideNewsDesc} >{visible ? '-' : '+'}</button> </h2>
				
				{visible && <p>{desc}</p>}
			</li>
		</>
	)
}

export default NewsItem