export interface ArgsImagen {
    src: any;
    alt?: string;
    estilo?: string;
    altura?: number;
    ancho?: number;
}

export const Imagen = ({src,alt,estilo,ancho,altura}:ArgsImagen) => 
    <img style={{width:ancho,height:altura}} src={src} alt={alt} className={estilo}   />

export default Imagen
