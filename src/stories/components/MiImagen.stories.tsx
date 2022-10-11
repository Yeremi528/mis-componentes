import { MiImagen } from "../../components/MiImagen";
import { ComponentMeta,ComponentStory } from "@storybook/react";

export default {
    title:'UI/MiImagen',
    component: MiImagen

} as ComponentMeta<typeof MiImagen>

const Template : ComponentStory<typeof MiImagen> = (args) => <MiImagen {...args}/>

export const Basic = Template.bind({})