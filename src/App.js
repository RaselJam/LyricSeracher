import Axios from 'axios'
import React, { Fragment, useState, useEffect } from 'react'
import Cancion from './components/Cancion'
import Formulario from './components/Formulario'
import Info from './components/Info'

function App() {
	const [busquedaLetra, setBusquedaLetra] = useState({})
	const [letra, setLetra] = useState('')
	const [artistIfo, setArtistIfo] = useState({})
	const [error, setError] = useState('')
	useEffect(() => {
		if (Object.keys(busquedaLetra).length === 0) return
		const consultarAPILetra = async () => {

			const url = `https://api.lyrics.ovh/v1/${busquedaLetra.artista}/${busquedaLetra.cancion}`
			const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${busquedaLetra.artista}`

			console.log(url)
			console.log(url2);
			try {
				const [letraRes, artistaInfoRes] = await Promise.all([Axios(url), Axios(url2)])
				setLetra(letraRes.data.lyrics)
				setArtistIfo(artistaInfoRes.data.artists[0])

			} catch (error) {
				setError("Error on Fetching Data. See the console for more Info. Possible API Key Expired")
			}
		}
		consultarAPILetra()
	}, [busquedaLetra])
	return (
		<Fragment>
			{error}
			<Formulario setBusquedaLetra={setBusquedaLetra} />
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<Info info={artistIfo} />
					</div>
					<div className='col-md-6'>
						<Cancion letra={letra} />
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default App
