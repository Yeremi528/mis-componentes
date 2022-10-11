export interface ArgsMiTitulo {
    titulo?: string;
}

export const MiTitulo = ({titulo="Bienvenidos a revisar mis componentes"}: ArgsMiTitulo) => <h1>{titulo}</h1>

export default MiTitulo