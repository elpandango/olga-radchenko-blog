import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import SiteFooter from './SiteFooter.vue';

describe('SiteFooter', () => {
  it('renders footer correctly', () => {
    const wrapper = mount(SiteFooter);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct text in the footer', () => {
    const wrapper = mount(SiteFooter);
    expect(wrapper.text()).toContain('Остались вопросы?');
    expect(wrapper.text()).toContain('Свяжитесь со мной');
    expect(wrapper.text()).toContain('Записаться');
    expect(wrapper.text()).toContain('Психолог Ольга Радченко');
  });

  it('renders the contact link with correct href', () => {
    const wrapper = mount(SiteFooter);
    const link = wrapper.find('.make-appointment');
    expect(link.attributes('to')).toBe('/contact');
  });

  it('displays the correct copyright years', () => {
    const wrapper = mount(SiteFooter);
    expect(wrapper.text()).toContain('2021 - 2024');
  });

});
