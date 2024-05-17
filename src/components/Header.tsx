import { Component } from "solid-js";

const Header: Component<{ title?: string }> = () => {
  return (
    <>
      <header class="fixed top-0 left-0 right-0 z-40">
        <div class="container mx-auto py-6">
          <nav class="mx-4 flex flex-row justify-between font-futura">
            <h1 class="text-2xl font-semibold">
              <a href="/">wm.sci</a>
            </h1>
            <ul class="text-xl gap-4 flex flex-row list-none font-medium">
              <li>
                <a href="/works" class="hover:text-blue-500 duration-200">
                  works
                </a>
              </li>
              <li class="hidden md:block">
                <a href="/services" class="hover:text-blue-500 duration-200">
                  services
                </a>
              </li>
              <li>
                <a href="/about" class="hover:text-blue-500 duration-200">
                  about
                </a>
              </li>
              <li>
                <a href="/contact" class="hover:text-blue-500 duration-200">
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
