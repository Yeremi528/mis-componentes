/// <reference types="react" />
import "../estilos/carta.css";
export interface ArgsMyCarta {
    /**
     * Lo que estara dentro de nuestra Carta
     */
    children?: JSX.Element | JSX.Element[] | React.ReactElement | '';
    /**
     *
     */
    estilo?: string;
}
export declare const MiCarta: ({ children, estilo }: ArgsMyCarta) => JSX.Element;
export default MiCarta;
