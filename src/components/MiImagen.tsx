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
    url?:string
}

export const MiImagen = ({url="https://imagenes.t13.cl/images/original/2022/09/1663618419-13662000.jpg",alt="mi-imagen",altura,ancho,estilo}: ArgsMyImage) => 
<img src={url} alt={alt} className={`${estilo}`} style={{height:altura,width:ancho}}/>

export default MiImagen