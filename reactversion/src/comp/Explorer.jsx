import './Explorer.css'
import { useState } from 'react';
export default function Explorer(){
	const [open, setOpen]=useState(false)
	const classExplorer=open ? "explorer open": "explorer"
	const classMenuBtn=open ? "menu-btn open": "menu-btn"
	return(
		<>
			<div className={classExplorer}>
				Contenido
				<a href="#">Proyectos</a>
				<a href="#">Investigación</a>
				<a href="#">Contacto</a>
				<a href="#">Mas Sobre Mi</a>
			</div>	
			<button className={classMenuBtn} onClick={()=>setOpen(!open)}>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</button>
		</>
	)
}
