import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import SitePreloader from './SitePreloader.vue';

describe('SitePreloader', () => {
  it('renders properly and mocks getComputedTextLength', () => {
    SVGElement.prototype.getComputedTextLength = vi.fn(() => 100);

    const wrapper = mount(SitePreloader, {
      global: {
        stubs: {
          teleport: true,
        },
      },
    });
    expect(wrapper.html()).toContain('Olga');
    expect(wrapper.html()).toContain('Radchenko');

  });
});