import './App.css'

// const APP_URI = 'https://www.google.com'

// ‘intent://path#Intent;scheme=URI Scheme;package=package name;S.browser_fallback_url=fallback url‘

// function openReclaimApp() {
// 	const uri = 'reclaim://'
// 	const packageName = 'com.credentialswallet'

// 	const intent = `intent://${uri}@Intent;scheme=${uri};package=${packageName};S.browser_fallback_url=${uri};end`

// 	window.location =
// 		'intent://@Intent;scheme=reclaim://;package=com.credentialswallet;S.browser_fallback_url=http://google.com'

// 	return

// 	const fallbackMarketUri = `market://details?id=${packageName}`
// 	const fallbackWebUri = `https://play.google.com/store/apps/details?id=${packageName}`

// 	if (navigator.userAgent.match(/Chrome/i)) {
// 		window.location = intent
// 	} else if (navigator.userAgent.match(/Android/i)) {
// 		window.location.href = fallbackMarketUri
// 	} else {
// 		window.location.href = fallbackWebUri
// 	}
// }

function App() {
	const handleOpenDeepLink = () => {
		window.open(intent, '_self', 'noopener,noreferrer')

		// openReclaimApp()
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

	const testUri =
		'template/%7B%22id%22%3A%22acb0a585-016b-4726-8dc9-f04d127d4785%22%2C%22name%22%3A%22Github%22%2C%22callbackUrl%22%3A%22https%3A%2F%2Fswags-for-devs-tdan.onrender.com%2Fcallback%2Frepo-1cf734e4-a147-4217-a9f8-557ab4b8961a%22%2C%22claims%22%3A%5B%7B%22provider%22%3A%22github-commits%22%2C%22payload%22%3A%7B%22repository%22%3A%22questbook%2Fswag-for-devs%22%2C%22type%22%3A%22github-commits%22%2C%22searchQuery%22%3A%7B%22keywords%22%3A%5B%5D%2C%22qualifiers%22%3A%7B%7D%7D%7D%2C%22templateClaimId%22%3A%227e31c2b2-4da8-4e53-b828-830c3240f54a%22%7D%5D%7D'

	//  const appStoreUrl =

	const intent = `intent://${testUri}#Intent;scheme=reclaim;package=com.credentialswallet&referrer=${testUri};end`

	return (
		<>
			<a href={intent}>intent</a>

			<button onClick={handleOpenDeepLink}>open deep link</button>
		</>
	)
}

export default App
