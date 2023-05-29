import './App.css'

const APP_URI = 'reclaim://template'

function App() {
	const handleOpenDeepLink = () => {
		function checkCustomAppAvailability(protocol: string): void {
			const iframe = document.createElement('iframe')
			iframe.style.display = 'none'

			const handleAppAvailability = (isAvailable: boolean) => {
				document.body.removeChild(iframe)
				handleAppAvailabilityCheck(isAvailable)
			}

			iframe.onload = () => {
				handleAppAvailability(true) // Protocol was successfully opened (app exists)
			}

			iframe.onerror = () => {
				handleAppAvailability(false) // Error occurred (app does not exist)
			}

			document.body.appendChild(iframe)
			iframe.src = protocol
		}

		// Usage example
		checkCustomAppAvailability(APP_URI)

		// Callback function to handle the result
		const handleAppAvailabilityCheck = (isAvailable: boolean) => {
			if (isAvailable) {
				alert('App exists')
				// Perform actions when the app exists
			} else {
				alert('App does not exists')
				// Perform actions when the app does not exist
			}
		}

		// window.location.href = 'reclaim://template'
		// customProtocolCheck(
		// 	APP_URI,
		// 	() => {
		// 		alert('Custom protocol not found.')
		// 	},
		// 	() => {
		// 		alert('Custom protocol found and opened the file successfully.')
		// 	},
		// 	200
		// )
	}

	return (
		<>
			<button onClick={handleOpenDeepLink}>open deep link</button>
		</>
	)
}

export default App
