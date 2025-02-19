import axios from 'axios'

export const login = async data => {
	try {
		const res = await axios.post(import.meta.env.REACT_APP_API_URL, {
			identifier: data.username,
			password: data.password,
		})
		localStorage.setItem('token', res.data.jwt)
		localStorage.setItem(
			'user',
			JSON.stringify({ username: res.data.user.username, id: res.data.user.id })
		)
		// localStorage.setItem('token', res.data)
		// localStorage.setItem('user', JSON.stringify(res.data))

		return res.data
	} catch (err) {
		console.log(err)
		throw err
	}
}
