import { Formulario } from "./Formulario"
import { useClima } from "../hooks"
import { Resultado } from "./Resultado"
import { Loading } from "./Loading"

export const AppClima = () => {
	const { resultado, cargando, noResultado } = useClima()
	return (
		<main className="dos-columnas">
			<Formulario />
			{
			cargando ? <Loading /> 
			: noResultado ? <p>{noResultado}</p>
				: resultado?.name && <Resultado /> 
			}
		</main>
	)
}
