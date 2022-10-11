import { MiParrafo } from "../../components/MiParrafo";
import { ComponentMeta,ComponentStory } from "@storybook/react";

export default {
    title:"UI/parrafo",
    component:MiParrafo

} as ComponentMeta<typeof MiParrafo>

const Template: ComponentStory<typeof MiParrafo> = (args) => <MiParrafo {...args}/>

export const Basic = Template.bind({})