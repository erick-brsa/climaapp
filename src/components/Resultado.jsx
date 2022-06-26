import { useClima } from "../hooks"

export const Resultado = () => {
	const { resultado } = useClima()
	const { name, main } = resultado

	// Grados Kelvin
	const kelvin = 273.15

	return (
		<div className="contenedor clima">
			<h2>El clima de {name} es: </h2>
			<p>
				{parseInt(main.temp - kelvin)} <span>°C</span>
			</p>

			<div className="temp_min_max">
				<p>
					Mín: {parseInt(main.temp_min - kelvin)}
					<span>°C</span>
				</p>
				<p>
					Máx: {parseInt(main.temp_max - kelvin)}
					<span>°C</span>
				</p>
			</div>
		</div>
	)
}
