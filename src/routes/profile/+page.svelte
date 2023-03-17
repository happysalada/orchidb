<script lang="ts">
  let menuOpen = false;
</script>

<div class="min-h-full">
  <header class="bg-gradient-to-r from-sky-800 to-cyan-600 pb-24">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div
        class="relative flex flex-wrap items-center justify-center lg:justify-between"
      >
        <!-- Logo -->
        <div class="absolute left-0 flex-shrink-0 py-5 lg:static">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=200"
              alt=""
            />
          </a>
        </div>

        <!-- Right section on desktop -->
        <div class="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
          <button
            type="button"
            class="flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="relative ml-4 flex-shrink-0">
            <div>
              <button
                type="button"
                class="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                on:click={() => (menuOpen = !menuOpen)}
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="/desjardins.png"
                  alt=""
                />
              </button>
            </div>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: ""
                From: ""
                To: ""
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div
              class="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              class:hidden={!menuOpen}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0">Your Profile</a
              >

              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1">Settings</a
              >

              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1">Blog</a
              >

              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1">Support</a
              >

              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2">Sign out</a
              >
            </div>
          </div>
        </div>

        <div
          class="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20"
        >
          <div class="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
            <!-- Left nav -->
            <div class="hidden lg:col-span-2 lg:block">
              <nav class="flex space-x-4">
                <a
                  href="#"
                  class="text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                  aria-current="page">Home</a
                >

                <a
                  href="#"
                  class="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                  >Talent</a
                >

                <a
                  href="#"
                  class="text-cyan-100 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                  >Messages</a
                >
              </nav>
            </div>
            <div class="px-12 lg:px-0">
              <!-- Search -->
              <div class="mx-auto w-full max-w-xs lg:max-w-md">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-white focus-within:text-gray-600">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                  >
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    class="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-white placeholder-white focus:border-transparent focus:bg-opacity-100 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Menu button -->
        <div class="absolute right-0 flex-shrink-0 lg:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on mobile menu state. -->
    <div class="lg:hidden">
      <!--
        Mobile menu overlay, show/hide based on mobile menu state.

        Entering: "duration-150 ease-out"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "duration-150 ease-in"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div
        class="fixed inset-0 z-20 bg-black bg-opacity-25"
        aria-hidden="true"
      />

      <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-150 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <div
        class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
      >
        <div
          class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="pt-3 pb-2">
            <div class="flex items-center justify-between px-4">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
                  alt="Your Company"
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                >Home</a
              >

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                >Profile</a
              >

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                >Resources</a
              >

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                >Company Directory</a
              >

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                >Openings</a
              >
            </div>
          </div>
          <div class="pt-4 pb-2">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3 min-w-0 flex-1">
                <div class="truncate text-base font-medium text-gray-800">
                  Alexandre Vallée
                </div>
                <div class="truncate text-sm font-medium text-gray-500">
                  Montreal, Canada
                </div>
              </div>
              <button
                type="button"
                class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                >Your Profile</a
              >

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                >Settings</a
              >

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                >Blog</a
              >

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                >Support</a
              >

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="-mt-24 pb-8">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="sr-only">Profile</h1>
      <!-- Main 3 column grid -->
      <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        <!-- Left column -->
        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
          <!-- Welcome panel -->
          <section aria-labelledby="profile-overview-title">
            <div class="overflow-hidden rounded-lg bg-white shadow">
              <h2 class="sr-only" id="profile-overview-title">
                Profile Overview
              </h2>
              <div class="bg-white p-6">
                <div class="sm:flex sm:items-center sm:justify-between">
                  <div class="sm:flex sm:space-x-5">
                    <div class="flex-shrink-0">
                      <img
                        class="mx-auto h-20 w-20 rounded-full"
                        src="/alex_profile.jpeg"
                        alt=""
                      />
                    </div>
                    <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p class="text-xl font-bold text-gray-900 sm:text-2xl">
                        Alexandre Vallée
                      </p>
                      <p class="text-sm font-medium text-gray-600">
                        Human Resources Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 flex justify-around py-4">
                <span
                  class="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800"
                  >CPA</span
                >
                <span
                  class="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800"
                  >MBA</span
                >
                <span
                  class="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800"
                  >Accounting economics</span
                >
                <span
                  class="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800"
                  >Fluent French</span
                >
                <span
                  class="inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800"
                  >Fluent English</span
                >
              </div>
            </div>
          </section>

          <!-- Actions panel -->
          <section aria-labelledby="quick-links-title">
            <div>
              <div
                class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500"
              >
                <div class="mt-8">
                  <div class="flex items-center mb-5">
                    <p
                      class="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Functions
                    </p>
                  </div>
                  <div>
                    <div>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Project management
                        </dt>
                        <dd class="flex items-center mb-3">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 50%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >5 yr</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Business Dev. and Strategy
                        </dt>
                        <dd class="flex items-center mb-3">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 15%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >1.5 yr</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Information Technology
                        </dt>
                        <dd class="flex items-center mb-3">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 35%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >3.5 yr</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Finance and accounting
                        </dt>
                        <dd class="flex items-center">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 80%"
                            />
                          </div>

                          <span
                            class="min-w-max text-sm font-medium text-white dark:text-white rounded-full bg-blue-500 px-2.5 py-1"
                            >13 yr</span
                          >
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <span
                  class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                    />
                  </svg>
                </span>
              </div>

              <div
                class="sm:rounded-tr-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500"
              >
                <div class="mt-8">
                  <div class="flex items-center mb-5">
                    <p
                      class="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Sectors
                    </p>
                  </div>
                  <div>
                    <div>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Consumer goods
                        </dt>
                        <dd class="flex items-center mb-3">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 5%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >6 mo</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Utilities and Energy
                        </dt>
                        <dd class="flex items-center mb-3">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 5%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >6 mo</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Media and Entertainment
                        </dt>
                        <dd class="flex items-center mb-3">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 10%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >1 yr</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Insurance
                        </dt>
                        <dd class="flex items-center">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 10%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >1 yr</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Finance and Banking
                        </dt>
                        <dd class="flex items-center">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 45%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-white dark:text-white rounded-full bg-blue-500 px-2.5 py-1"
                            >4.5 yr</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Retail and wholesale
                        </dt>
                        <dd class="flex items-center">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 5%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >6 mo</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Manufacturing
                        </dt>
                        <dd class="flex items-center">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 10%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >1 yr</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Mining and Extraction
                        </dt>
                        <dd class="flex items-center">
                          <div
                            class="w-full bg-gray-200 rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                              style="width: 20%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >2 yr</span
                          >
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <span
                  class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                    />
                  </svg>
                </span>
              </div>

              <div
                class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500"
              >
                <div class="mt-8">
                  <div class="flex items-center mb-5">
                    <p
                      class="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      Technology
                    </p>
                  </div>
                  <div>
                    <div>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Data Migration - AWS
                        </dt>
                        <dd class="flex items-center mb-3">
                          <div
                            class="w-full rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-200 h-2.5 rounded dark:bg-blue-200"
                              style="width: 5%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >0.5</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          ERP - Oracle
                        </dt>
                        <dd class="flex items-center mb-3">
                          <div
                            class="w-full rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-200 h-2.5 rounded dark:bg-blue-200"
                              style="width: 10%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >1</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          ERP - SAP
                        </dt>
                        <dd class="flex items-center mb-3">
                          <div
                            class="w-full rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-400 h-2.5 rounded dark:bg-blue-400"
                              style="width: 45%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >4.5</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          ERP - People Soft
                        </dt>
                        <dd class="flex items-center">
                          <div
                            class="w-full rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-200 h-2.5 rounded dark:bg-blue-200"
                              style="width: 20%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-gray-500 dark:text-gray-400"
                            >2</span
                          >
                        </dd>
                      </dl>
                      <dl>
                        <dt
                          class="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          ERP
                        </dt>
                        <dd class="flex items-center mb-3">
                          <div
                            class="w-full rounded h-2.5 dark:white mr-2"
                          >
                            <div
                              class="bg-blue-600 h-2.5 rounded dark:bg-blue-600"
                              style="width: 75%"
                            />
                          </div>
                          <span
                            class="min-w-max text-sm font-medium text-white dark:text-white rounded-full bg-blue-600 px-2.5 py-1"
                            >7.5</span
                          >
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <span
                  class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </section>
        </div>

        <!-- Right column -->
        <div class="grid grid-cols-1 gap-4">
          <!-- Announcements -->
          <section aria-labelledby="announcements-title">
            <div class="overflow-hidden rounded-lg bg-white shadow">
              <div class="p-6">
                <h2
                  class="text-base font-medium text-gray-900"
                  id="announcements-title"
                >
                  Announcements
                </h2>
                <div class="mt-6 flow-root">
                  <ul role="list" class="-my-5 divide-y divide-gray-200">
                    <li class="py-5">
                      <div
                        class="relative focus-within:ring-2 focus-within:ring-cyan-500"
                      >
                        <h3 class="text-sm font-semibold text-gray-800">
                          <a
                            href="#"
                            class="hover:underline focus:outline-none"
                          >
                            <!-- Extend touch target to entire panel -->
                            <span class="absolute inset-0" aria-hidden="true" />
                            Office closed on July 2nd
                          </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                          Cum qui rem deleniti. Suscipit in dolor veritatis
                          sequi aut. Vero ut earum quis deleniti. Ut a sunt eum
                          cum ut repudiandae possimus. Nihil ex tempora neque
                          cum consectetur dolores.
                        </p>
                      </div>
                    </li>

                    <li class="py-5">
                      <div
                        class="relative focus-within:ring-2 focus-within:ring-cyan-500"
                      >
                        <h3 class="text-sm font-semibold text-gray-800">
                          <a
                            href="#"
                            class="hover:underline focus:outline-none"
                          >
                            <!-- Extend touch target to entire panel -->
                            <span class="absolute inset-0" aria-hidden="true" />
                            New password policy
                          </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                          Alias inventore ut autem optio voluptas et
                          repellendus. Facere totam quaerat quam quo laudantium
                          cumque eaque excepturi vel. Accusamus maxime ipsam
                          reprehenderit rerum id repellendus rerum. Culpa cum
                          vel natus. Est sit autem mollitia.
                        </p>
                      </div>
                    </li>

                    <li class="py-5">
                      <div
                        class="relative focus-within:ring-2 focus-within:ring-cyan-500"
                      >
                        <h3 class="text-sm font-semibold text-gray-800">
                          <a
                            href="#"
                            class="hover:underline focus:outline-none"
                          >
                            <!-- Extend touch target to entire panel -->
                            <span class="absolute inset-0" aria-hidden="true" />
                            Office closed on July 2nd
                          </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                          Tenetur libero voluptatem rerum occaecati qui est
                          molestiae exercitationem. Voluptate quisquam iure
                          assumenda consequatur ex et recusandae. Alias
                          consectetur voluptatibus. Accusamus a ab dicta et.
                          Consequatur quis dignissimos voluptatem nisi.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-6">
                  <a
                    href="#"
                    class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                    >View all</a
                  >
                </div>
              </div>
            </div>
          </section>

          <!-- Recent Hires -->
          <section aria-labelledby="recent-hires-title">
            <div class="overflow-hidden rounded-lg bg-white shadow">
              <div class="p-6">
                <h2
                  class="text-base font-medium text-gray-900"
                  id="recent-hires-title"
                >
                  Recent Hires
                </h2>
                <div class="mt-6 flow-root">
                  <ul role="list" class="-my-5 divide-y divide-gray-200">
                    <li class="py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0">
                          <img
                            class="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="truncate text-sm font-medium text-gray-900">
                            Leonard Krasner
                          </p>
                          <p class="truncate text-sm text-gray-500">
                            @leonardkrasner
                          </p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                            >View</a
                          >
                        </div>
                      </div>
                    </li>

                    <li class="py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0">
                          <img
                            class="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="truncate text-sm font-medium text-gray-900">
                            Floyd Miles
                          </p>
                          <p class="truncate text-sm text-gray-500">
                            @floydmiles
                          </p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                            >View</a
                          >
                        </div>
                      </div>
                    </li>

                    <li class="py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0">
                          <img
                            class="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="truncate text-sm font-medium text-gray-900">
                            Emily Selman
                          </p>
                          <p class="truncate text-sm text-gray-500">
                            @emilyselman
                          </p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                            >View</a
                          >
                        </div>
                      </div>
                    </li>

                    <li class="py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0">
                          <img
                            class="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="truncate text-sm font-medium text-gray-900">
                            Kristin Watson
                          </p>
                          <p class="truncate text-sm text-gray-500">
                            @kristinwatson
                          </p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                            >View</a
                          >
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-6">
                  <a
                    href="#"
                    class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                    >View all</a
                  >
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div
        class="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left"
      >
        <span class="block sm:inline">&copy; 2021 Your Company, Inc.</span>
        <span class="block sm:inline">All rights reserved.</span>
      </div>
    </div>
  </footer>
</div>
