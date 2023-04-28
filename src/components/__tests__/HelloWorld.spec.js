import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WelcomeLogin from '../WelcomeLogin.vue'

describe('WelcomeLogin', () => {
  it('renders properly', () => {
    const wrapper = mount(WelcomeLogin, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
