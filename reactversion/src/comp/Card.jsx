import './Card.css'
export function Card({img,name,description, tecnologies}){
	return (
		<div className="card">
			<img src={img} alt={name}/>
			<div className="infoCard">
				<h2>{name}</h2>
				<p>{description}</p>
				{tecnologies.map((i) => {
					return <span>{i}</span>
				})}
			</div>
		</div>

	)
}
export function Profile() {
	return(
		<>
			<div class="pic">
				<img src="./mpsweb.png" alt="Mi Foto" class="profile-img"/>
				<div class="social-links">
					<a href="https://github.com/TuUsuario" target="_blank" title="GitHub">
						<img src="github-icon.svg" alt="GitHub" width="24" height="24"/>
					</a>
					<a href="https://www.linkedin.com/in/TuPerfil" target="_blank" title="LinkedIn">
						<img src="linkedin-icon.svg" alt="LinkedIn" width="24" height="24"/>
					</a>
					<a href="mailto:ppozosoliz@gmail.com" title="Correo">
						<img src="email-icon.svg" alt="Email" width="24" height="24"/>
					</a>
				</div>
			</div>
			<div class="info">
				<p class="name">Marthel Pedro Pozo Soliz</p>
				<p class="description">Estudiante de Ingeniería Informática y desarrollador backend. Me enfoco en crear soluciones eficientes y escalables, especialmente en proyectos de software libre.</p>
			</div>
		</>

	)
}
