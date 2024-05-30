import { test, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import MovieList from "../components/MovieList.vue";
import { createPinia, setActivePinia } from "pinia";
import useMovieStore from "../store/movieStore";

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
  expect(MovieList).toBeTruthy();

  const wrapper = mount(MovieList);
  expect(wrapper.text()).toContain("Comedy");
});

test('store should be created and click on movie to see details about it', async () => {
    const store = useMovieStore();
    const wrapper = mount(MovieList);
    await wrapper.find('.card').trigger('click');
    expect(!!store.$state).toBeTruthy();
});