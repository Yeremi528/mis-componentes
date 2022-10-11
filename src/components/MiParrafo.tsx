
export interface ArgsMiParrafo {
    texto?: string;
    estilo?: string;
}

export const MiParrafo = ({texto,estilo}: ArgsMiParrafo) => 
    <p className={`${estilo}`}>{texto}</p>

export default MiParrafo