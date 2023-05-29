import './App.css'

const APP_URI = 'https://www.google.com'

function openReclaimApp() {
	const uri = 'reclaim://template'
	const packageName = 'com.credentialswallet'

	const fallbackMarketUri = `market://details?id=${packageName}`
	const fallbackWebUri = `https://play.google.com/store/apps/details?id=${packageName}`

	if (navigator.userAgent.match(/Chrome/i)) {
		window.location.href = uri
	} else if (navigator.userAgent.match(/Android/i)) {
		window.location.href = fallbackMarketUri
	} else {
		window.location.href = fallbackWebUri
	}
}

function App() {
	const handleOpenDeepLink = () => {
		openReclaimApp()

		// const handleAppAvailabilityCheck = (isAvailable: boolean) => {
		// 	if (isAvailable) {
		// 		alert('App exists')
		// 		// Perform actions when the app exists
		// 	} else {
		// 		alert('App does not exists')
		// 		// Perform actions when the app does not exist
		// 	}
		// }

		// function checkCustomAppAvailability(protocol: string): void {
		// 	const iframe = document.createElement('iframe')
		// 	iframe.style.display = 'none'

		// 	const handleAppAvailability = (isAvailable: boolean) => {
		// 		document.body.removeChild(iframe)
		// 		handleAppAvailabilityCheck(isAvailable)
		// 	}

		// 	iframe.onload = () => {
		// 		console.log('loading')
		// 		handleAppAvailability(true) // Protocol was successfully opened (app exists)
		// 	}

		// 	iframe.onerror = () => {
		// 		handleAppAvailability(false) // Error occurred (app does not exist)
		// 	}

		// 	document.body.appendChild(iframe)
		// 	iframe.src = protocol
		// }

		// // Usage example
		// checkCustomAppAvailability(APP_URI)

		// // Callback function to handle the result

		// // window.location.href = 'reclaim://template'
		// // customProtocolCheck(
		// // 	APP_URI,
		// // 	() => {
		// // 		alert('Custom protocol not found.')
		// // 	},
		// // 	() => {
		// // 		alert('Custom protocol found and opened the file successfully.')
		// // 	},
		// // 	200
		// // )
	}

	return (
		<>
			<button onClick={handleOpenDeepLink}>open deep link</button>
		</>
	)
}

export default App
