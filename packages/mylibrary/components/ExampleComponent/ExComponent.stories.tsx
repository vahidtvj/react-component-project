import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'

import { ExampleComponent } from './ExComponent'

export default {
  title: 'ExampleComponent',
  component: ExampleComponent
}

const Template: Story<ComponentProps<typeof ExampleComponent>> = (args) => (
  <ExampleComponent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  text: 'React Library Template 😄'
}
