import { test, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import Banner from "../components/Banner.vue";
import { createPinia, setActivePinia } from "pinia";
import useMovieStore from "../store/movieStore";

beforeEach(() => {
  setActivePinia(createPinia());
});

test("mount component", async () => {
  expect(Banner).toBeTruthy();
  const wrapper = mount(Banner);
  expect(wrapper.text()).toContain("netflixroulette");
});

test('store should be created', async () => {
    const store = useMovieStore();
    expect(!!store.$state).toBeTruthy();
});

test('sort by should be clicked', async () => {
    const wrapper = mount(Banner);
    await wrapper.find('.genres').trigger('click');
    expect (wrapper.get('.searchby--selected').text()).toContain('GENRE');
    await wrapper.find('.title').trigger('click');
    expect (wrapper.get('.searchby--selected').text()).toContain('TITLE');
});

test('type and search', async () => {
    const wrapper = mount(Banner);
    await wrapper.find('input[type="text"]').setValue('modern')
    await wrapper.get('button[type="submit"]').trigger('submit');
    //expect(wrapper.vm.query).toBe('modern');
    await wrapper.find('input[type="text"]').setValue('zzzzzz')
    await wrapper.get('button[type="submit"]').trigger('submit');
    //expect(wrapper.vm.query).toBe('zzzzzz');
})
