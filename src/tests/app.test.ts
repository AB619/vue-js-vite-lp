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
