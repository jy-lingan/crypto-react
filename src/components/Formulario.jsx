import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'

const InputSubmint = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7a7;
        cursor: pointer;
    }
`

const Formulario = ({ setMonedas }) => {

    const [crytos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', crytos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCryptos = resultado.Data.map(cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return objeto
            })
            setCryptos(arrayCryptos)
        }
        consultarAPI()
    }, [])

    const handleSubmint = e => {
        e.preventDefault()

        if ([moneda, criptomoneda].includes('')) {
            setError(true)
            return
        }

        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmint}
            >

                <SelectMonedas />
                <SelectCriptomoneda />

                <InputSubmint type="submit" value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario