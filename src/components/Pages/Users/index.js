import { useState } from "react";


const Users = () => {
	const [inputValue, setInputValue] = useState('')
	const [users, setUser] = useState([])

	const updateInputValue = (e) => {
		setInputValue(e.target.value);
	}

	const addUser = () => {
		//console.log('ok', inputValue);

		setUser(oldUsers => ([
			...oldUsers,
			inputValue
		]));

		setInputValue('');
	}

	return (
		<>
			<h2>Istifadeciler</h2>
			<form>
				<input type={'text'} value={inputValue} onChange={updateInputValue} />
				<button type={"button"} onClick={addUser} >Add</button>
			</form>
			<hr/>

			{
				users.length > 0 && <>
					<h3>Telebe sayi: {users.length}</h3>
					<ul>
						{
							users.map(user => {
								return (
									<li key={user} >
										{user}
									</li>
								)
							})
						}
					</ul>
				</>
			}

		</>
	)
}

export default Users