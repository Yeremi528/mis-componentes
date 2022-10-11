/// <reference types="react" />
export interface ArgsMyImage {
    /**
     * Estilo
     */
    estilo?: string;
    /**
     *  Width o ancho de la imagen
     */
    ancho?: number;
    /**
     * Altura o height
     */
    altura?: number;
    /**
     * Alt atributo dado para cuando no carga la imagen
     */
    alt?: string;
    /**
     * Url de donde se sacara la imagen
     */
    url?: string;
}
export declare const MiImagen: ({ url, alt, altura, ancho, estilo }: ArgsMyImage) => JSX.Element;
export default MiImagen;
