import { Component } from "solid-js";
import { A } from "@solidjs/router";

const Header: Component<{ title?: string }> = () => {
  return (
    <>
      <header class="fixed top-0 left-0 right-0 z-40">
        <div class="container mx-auto py-6">
          <nav class="mx-4 flex flex-row justify-between font-futura">
            <h1 class="text-2xl font-semibold">
              <A href="/">wm.sci</A>
            </h1>
            <ul class="text-xl gap-4 flex flex-row list-none font-medium">
              <li>
                <A href="/works" class="hover:text-blue-500 duration-200">
                  works
                </A>
              </li>
              <li class="hidden md:block">
                <A href="/services" class="hover:text-blue-500 duration-200">
                  services
                </A>
              </li>
              <li>
                <A href="/about" class="hover:text-blue-500 duration-200">
                  about
                </A>
              </li>
              <li>
                <A href="/contact" class="hover:text-blue-500 duration-200">
                  contact
                </A>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
