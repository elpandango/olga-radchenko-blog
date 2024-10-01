import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import SmallBlogPost from "./SmallBlogPost.vue";

vi.mock('~/use/useFormatDate', () => {
  return {
    useFormatDate: () => '1 May 2024 at 20:57:20',
  };
});

describe('SmallBlogPost', () => {
  it('component renders properly', () => {
    const post = {
      title: 'Test Title',
      createdAt: '2024-09-29T00:00:00Z',
      _id: '1',
      imageUrl: 'test-image.jpg',
    };

    const wrapper = mount(SmallBlogPost, {
      props: {
        post,
      },
    });

    expect(wrapper.text()).toContain('Test Title');
    expect(wrapper.text()).toContain('1 May 2024 at 20:57:20');
  });
});