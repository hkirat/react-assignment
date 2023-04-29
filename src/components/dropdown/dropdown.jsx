import './../../dropdown.css'


export const Dropdown = ({defaultTheme , onChange , data}) =>{
return(
	<select className='select' defaultValue={defaultTheme} onChange={onChange}>
	{Object.keys(data)
   .sort()
		.map((theme , index) =>{
			return(
				<option key={index} value={theme}>
				{theme}
				</option>
			)
		})
	}

	</select>
)
}
