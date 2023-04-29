import './../../editor.css'

export const Editor = ({ placeHolder , onChange , onKeyDown}) =>{
	return (
		<textarea className='editor'
		placeholder={placeHolder}
		onChange={onChange}
		> </textarea>
	)


}
