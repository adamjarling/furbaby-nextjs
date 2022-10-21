/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { footerSocials } from "./footer";
import Link from "next/link";

const navigation = [
  { label: "Music", href: "/music" },
  { label: "Photos", href: "/photos" },
  { label: "Press", href: "/press" },
  { label: "Spain", href: "/spain2022" },
  { label: "Tour", href: "/shows" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderUpdated() {
  return (
    <Popover className="z-10 w-full bg-gradient-to-b from-black to-transparent fixed">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a className="border-0">
              <span className="sr-only">Furbaby and the Tight Spaces</span>
              <img
                className="h-16 md:h-20 w-auto"
                src="/images/furbaby-and-ts-logo_white.png"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-transparent hover:bg-transparent border-0 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fur-blue">
            <span className="sr-only">Open menu</span>
            <Bars2Icon className="h-10 w-10" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10 uppercase">
          {navigation.map(({ label, href }) => (
            <a
              key={label}
              href={`${href}`}
              className="text-base font-medium border-0"
            >
              {label}
            </a>
          ))}
        </Popover.Group>
        {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 uppercase">
          <a
            href="#"
            className="whitespace-nowrap text-base font-medium border-0"
          >
            Sign in
          </a>
        </div> */}
      </div>

      {/* Mobile */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="bg-black text-white absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-transparent divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-16 md:h-16 w-auto"
                    src="/images/furbaby-and-ts-logo_white.png"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-transparent hover:bg-transparent rounded-md border-0 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fur-blue">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {navigation.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="-m-3 p-3 flex items-center hover:bg-gray-900 border-gray-900 uppercase"
                    >
                      <div className="ml-4 text-base font-medium text-white">
                        {label}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                {footerSocials.map(({ label, url }) => (
                  <a
                    target="_blank"
                    key={label}
                    href={`${url}`}
                    className="text-base font-medium border-gray-900"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
