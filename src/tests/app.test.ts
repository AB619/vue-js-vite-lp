import { test, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";

import App from "../App.vue";
import { createPinia, setActivePinia } from "pinia";

beforeEach(() => {
    setActivePinia(createPinia());
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

test("mount component", async () => {
  expect(App).toBeTruthy();

  const wrapper = mount(App);
  expect(wrapper.text()).toContain("netflixroulette");
});

test("search movies", async () => {
  const wrapper = mount(App);

  await wrapper.find('input[type="text"]').setValue('The Shawshank Redemption')
  await wrapper.get('button[type="submit"]').trigger('submit');
  expect(wrapper.find('.card .card__info__name').text()).toContain('The Shawshank Redemption');

  await wrapper.find('input[type="text"]').setValue('zzzzzzzz')
  await wrapper.get('button[type="submit"]').trigger('submit');
  expect(wrapper.find('.movies__empty').text()).toContain('No films found');
});

test("sort movies", async () => {
  const wrapper = mount(App);

  await wrapper.find('.rating').trigger('click');
  expect( wrapper.find('.card .card__info__name').text() ).toContain('The Shawshank Redemption');
});

test("sort movies", async () => {
  const wrapper = mount(App);

  await wrapper.find('.card .card__info__name').trigger('click');
  expect(wrapper.find('.banner-info').text()).toContain('The Kid');

  await wrapper.find('.header__right').trigger('click');
  expect(wrapper.find('.searchlabel'))
});
