import { MiCarta,MiImagen,MiTitulo } from "../../components";
import { ComponentMeta,ComponentStory } from "@storybook/react";

export default {
    title:'HOC/MiCarta',
    component:MiCarta,
    subcomponents: {MiImagen,MiTitulo}

} as ComponentMeta<typeof MiCarta>

const Empty : ComponentStory<typeof MiCarta> = (args) => <MiCarta {...args}/>

export const conItems : ComponentStory <typeof MiCarta> = (args) => (
    <MiCarta>
        <MiTitulo/>
        <MiImagen/>
        
    </MiCarta>
)