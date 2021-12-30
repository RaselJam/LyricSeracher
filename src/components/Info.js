import React from 'react'

function Info({ info }) {
	if (!info) return null
	return (
		<>
			<div className='card border-light'>
				<div className='card-header bg-primary text-light font-weight-bold'>Informacion Artista</div>
				<div className='card-body'>
					<img src={info.strArtistThumb} alt='Logo Artista' />
				</div>
			</div>
		</>
	)
}

export default Info
