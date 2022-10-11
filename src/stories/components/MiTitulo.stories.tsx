import { MiTitulo } from "../../components/MiTitulo";
import { ComponentStory,ComponentMeta } from "@storybook/react";

export default {
    title: 'UI/titulo',
    component: MiTitulo
} as ComponentMeta<typeof MiTitulo>

const Template : ComponentStory<typeof MiTitulo> = (args) => <MiTitulo {...args} />

export const Basic = Template.bind({})