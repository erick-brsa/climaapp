import { useContext } from "react"
import { ClimaContext } from "../context"

export const useClima = () => {
	return useContext(ClimaContext)
}
