import { Component } from 'solid-js';
import { NavLink } from '@solidjs/router';

const Header: Component<{ title?: string }> = () => {
  return (
    <>
      <header class="fixed top-0 left-0 right-0 z-40">
        <div class="container mx-auto py-6">
          <nav class="mx-4 flex flex-row justify-between font-futura">
            <h1 class="text-2xl font-semibold">
              <NavLink href="/">wamo</NavLink>
            </h1>
            <ul class="text-xl gap-4 flex flex-row list-none font-medium">
              <li>
                <NavLink href="/works" class="hover:text-blue-500 duration-200">
                  works
                </NavLink>
              </li>
              <li class="hidden md:block">
                <NavLink href="/services" class="hover:text-blue-500 duration-200">
                  services
                </NavLink>
              </li>
              <li>
                <NavLink href="/about" class="hover:text-blue-500 duration-200">
                  about
                </NavLink>
              </li>
              <li>
                <NavLink href="/contact" class="hover:text-blue-500 duration-200">
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
