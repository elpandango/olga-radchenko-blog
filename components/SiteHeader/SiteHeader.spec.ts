import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import SiteHeader from './SiteHeader.vue';

describe('SiteHeader', () => {
  it('renders correctly', () => {
    const wrapper = mount(SiteHeader);

    expect(wrapper.text()).toContain('Olga Radchenko');
    expect(wrapper.text()).toContain('Главная');
    expect(wrapper.text()).toContain('Все статьи');
    expect(wrapper.text()).toContain('Контакты');
  });

  it('toggles menu visibility when burger is clicked', async () => {
    const wrapper = mount(SiteHeader);

    const burger = wrapper.find('.burger');
    const nav = wrapper.find('.nav-links');

    expect(nav.classes()).not.toContain('active');

    await burger.trigger('click');
    expect(nav.classes()).toContain('active');

    await burger.trigger('click');
    expect(nav.classes()).not.toContain('active');
  });

});
