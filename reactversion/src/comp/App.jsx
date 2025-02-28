import Explorer from './Explorer'
import Command from './Command.jsx'
import {Card, Profile} from './Card.jsx'
import './App.css'
function Container({children, index}) {
	return <div className={`container ${index}`}>
			{children}
		</div>
}
export default function App() {
	const proyectos = [
		{
			name:"MpsWEB",
			description: "Blog personal con CRUD completo",
			tecnologies: ["ReactJS", "MySQL", "PHP"],
			img:"./mpsweb.png"
		},
		{
			name:"Joven Esperanza",
			description: "Sistema de informacion web de gestion de estudiantes para la ONG Joven Esperanza",
			tecnologies: ["ReactJS", "MySQL", "PHP"],
			img:"./je.png"
		},
	]
	
	let index=1;
	function getI(){
		index = index%2 == 0 ? 1: 2;
		return index%2 == 0 ? "i1": "i2"
	}
	function gen(){
		let  child=[];
		proyectos.forEach(p =>{
			child.push(
				<Card {...p}></Card>
			)
		})
		return <Container index={getI()}>{child}</Container>
	}
	return(
		<>
			<Explorer />
			<div className="main">
				<Container index={getI()}>
					<Profile/>

				</Container>
				{gen()}
				<Container index={getI()}>Hola</Container>
				<Container index={getI()}>Hola</Container>
				<Container index={getI()}>Hola</Container>
				<Container index={getI()}>Hola</Container>
				<Container index={getI()}>Hola</Container>
				<Container index={getI()}>Hola</Container>
			</div>
			<Command />
		</>
	)
}
