import { findAllByAltText } from "@testing-library/react"
import React, { useState, useEffect } from "react"

function Formulario({setBusquedaLetra}) {
	const [busqueda, setBusqueda] = useState({
		artista: "",
		cancion: "",
	})
	const [error, setError] = useState(false)
	const { artista, cancion } = busqueda
	const actualizarState = (e) => {
		setBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		})
	}
	const buscarInformacion = (e) => {
		e.preventDefault()

		if (artista.trim() === "" || cancion.trim() === "") {
			setError(true)
			return
    }
    setError(false)
		//Todo bien pasar a APP
		setBusquedaLetra(busqueda)
	}
	return (
		<h1 className="Topheader">
			<div className='bg-info'>
      {error && <p className="alert alert-danger text-center p-2">Todos los campos son Obliatorios</p>}

				<div className='container'>
					<div className='row'>
						<form className='col card text-white bg-transparent mb-5 pt-5 pb-2' onSubmit={buscarInformacion} >
							<fieldset>
								<legend className='text-center'>
									Buscador Letras de Canciones
								</legend>
								<div className='row'>
									<div className='col-md-6'>
										<div className='form-group'>
											<label>Artista</label>
											<input
												onChange={actualizarState}
												type='text'
												className='form-control'
												name='artista'
												placeholder='Nombre Artista'
												value={artista}
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<label>Cancion</label>
											<input
												onChange={actualizarState}
												type='text'
												className='form-control'
												name='cancion'
												placeholder='Nombre Cancion'
												value={cancion}
											/>
										</div>
									</div>
								</div>
								<button
									type='submit'
									className='btn btn-primary float-right'>
									Buscar
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</h1>
	)
}

export default Formulario
