import styled from "@emotion/styled"


const Result = styled.div`
    color: #FFF;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`

const Imagen = styled.img`
    display: block;
    width: 150px;
`

const Texto = styled.p`
    font-family: "Lato", sans-serif;
    font-size: 18px;
    span {
        font-family: "Lato", sans-serif;
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-family: "Lato", sans-serif;
    font-size: 24px;
    span {
        font-family: "Lato", sans-serif;
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <Result>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Result>
    )
}

export default Resultado