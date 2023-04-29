import './../../highlighter.css'
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

export const Highlighter = ({ language, theme , children }) => {

	return (
		<SyntaxHighlighter language={language} style={theme} className='highlighter'>{children}</SyntaxHighlighter>
	)
}
