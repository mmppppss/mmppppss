import './Command.css'
import { useState } from 'react';
export default function Command() {
	const [hide, setHide] = useState(true)
	const [cmd, setCmd] = useState(":")
	const classState = hide ? "state": "state hide"
	const classCommand = hide ? "command hide": "command"

	return(
		<div className="navbar" onDoubleClick={()=>setHide(!hide)}>
			<div className={classState}>normal</div>
			<div className={classCommand}>
				<input autoFocus="true" type="text" id="cmd" className="cmd" autofocus contenteditable="true" value={cmd} onChange={(e)=>{setCmd(e.target.value)}}/>
			</div>
		</div>
	)
}
