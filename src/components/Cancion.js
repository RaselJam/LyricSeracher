import React from "react"

export default function Cancion({ letra }) {
	if (!letra) return null

	return (
		<>
			<h2>Letra de cancion</h2>
			<p className='letra'>{letra}</p>
		</>
	)
}
