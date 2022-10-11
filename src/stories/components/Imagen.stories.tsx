import Imagen from "../../components/Imagen";
import { ComponentMeta,ComponentStory } from "@storybook/react"

export default {
    title:"UI/Imagen",
    component:Imagen
}  as ComponentMeta<typeof Imagen>

const Template: ComponentStory<typeof Imagen> = (args) => <Imagen {...args}/>

export const Basic = Template.bind({})