import { test, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import ActionBar from "../components/ActionBar.vue";
import { createPinia, setActivePinia } from "pinia";
import useMovieStore from "../store/movieStore";

beforeEach(() => {
  setActivePinia(createPinia());
});

test("mount component", async () => {
  expect(ActionBar).toBeTruthy();

  const wrapper = mount(ActionBar);
  expect(wrapper.text()).toContain("movies found");
});

test('store should be created', async () => {
    const store = useMovieStore();
    expect(!!store.$state).toBeTruthy();
});

test('sort by should be clicked', async () => {
    const wrapper = mount(ActionBar);
    await wrapper.find('.rating').trigger('click');
    expect (wrapper.get('.panel__sort--selected').text()).toContain('RATING');
    await wrapper.find('.release-date').trigger('click');
    expect (wrapper.get('.panel__sort--selected').text()).toContain('RELEASE DATE');
});
