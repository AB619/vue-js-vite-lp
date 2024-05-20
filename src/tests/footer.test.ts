import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Footer from "../components/Footer.vue";

test("mount component", async () => {
  expect(Footer).toBeTruthy();

  const wrapper = mount(Footer);
  expect(wrapper.text()).toContain("netflixroulette");
});
