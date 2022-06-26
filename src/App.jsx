import { AppClima } from "./components/AppClima"
import { ClimaProvider } from "./context"

const App = () => {
	return (
		<ClimaProvider>
			<header>
				<h1>Buscador de clima</h1>
			</header>
			<AppClima />
		</ClimaProvider>
	)
}

export default App
