import { Meta, StoryObj } from "@storybook/react";
import { MyLabel , type Props} from "../components/my-label";

const meta: Meta<Props> ={ // meta es la info e la pgina que va a regir al edior visual
    title :'Example/My label', // aca indico sonde quiero que se muestre
    component: MyLabel,
    tags:['autodocs'], // esto es para que se muestre en la pagina de autodocs
    parameters:{
        layout: 'centered'// dice que el componente se muestre centrado
    },
    argTypes:{
        label:{
            description: 'Texto del label',
            defaultValue: 'Hello World',
            control: 'text' // esto es para que se muestre en el editor visual
        },
        size:{
            description: 'Tamaño del label',
            defaultValue: 'medium',
            control: {
                type: 'inline-radio',
                options: ['normal', 'h1', 'h2','h3']
            }
        },
        }
} satisfies Meta<typeof MyLabel> // esto es para que el editor visual sepa que es un componente de react y reconozca sus props

export default meta;

type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        label: 'Hello World'
    }
}

export const AllCaps: Story = {
    args: {
        label: 'Hello World',
        allCaps: true
    }
}

export const Secondary: Story = {
    args: {
        label: 'Hello World',
        color: 'text-secondary'
    }
}

export const CustomColor: Story = {
    args: {
        label: 'Hello World'
    }
}

export const CustomBackgroundColor: Story = {
    args: {
        label: 'Hello World',
        fontColor:'white',
        backgroundColor:'blue'
    }
}