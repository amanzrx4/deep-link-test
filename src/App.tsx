import './App.css'

import customProtocolCheck from 'custom-protocol-check'

const APP_URI = 'reclaim://template'

function App() {
	const handleOpenDeepLink = () => {
		// window.location.href = 'reclaim://template'
		customProtocolCheck(
			APP_URI,
			() => {
				alert('Custom protocol not found.')
			},
			() => {
				alert('Custom protocol found and opened the file successfully.')
			},
			200
		)
	}

	return (
		<>
			<button onClick={handleOpenDeepLink}>open deep link</button>
		</>
	)
}

export default App
