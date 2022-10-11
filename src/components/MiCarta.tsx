import "../estilos/carta.css"

export interface ArgsMyCarta {
    /**
     * Lo que estara dentro de nuestra Carta
     */
    children?: JSX.Element | JSX.Element[] | React.ReactElement | ''
    /**
     * 
     */
    estilo?: string;
}

export const MiCarta = ({children,estilo}:ArgsMyCarta) => {
  return (
    <div className={`mi-carta ${estilo}`}>
        {children}
    </div>
  )
}

export default MiCarta