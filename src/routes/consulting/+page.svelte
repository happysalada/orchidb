<script lang="ts">
  import Testimonial from "$lib/Testimonial.svelte";
  import Faq from "$lib/Faq.svelte";
  import Footer from "$lib/Footer.svelte";
  import About from "$lib/About.svelte";

  let menuOpen = false;
  let firstName: string,
    lastName: string,
    location: string,
    company: string,
    email: string,
    phone: string,
    message: string;

  let submitted = false;
  async function contact() {
    submitted = true;
    const url = "https://formsubmit.co/ajax/cromano@orchidb.com";
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json", // *For JSON data, use 'application/json'. For form data, use 'application/x-www-form-urlencoded'.
        // Add any additional headers if needed
      },
      body: JSON.stringify({
        firstName,
        lastName,
        location,
        company,
        email,
        phone,
        message,
      }), // Convert the JavaScript object to a JSON string
    });
    firstName = "";
    lastName = "";
    location = "";
    company = "";
    email = "";
    phone = "";
    message = "";
  }
</script>

<div class="bg-white">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="/orchid_b_black.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          on:click={() => (menuOpen = true)}
        >
          <span class="sr-only">Open main menu</span>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          href="#features"
          class="text-sm font-semibold leading-6 text-gray-900">Features</a
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#contact" class="text-sm font-semibold leading-6 text-gray-900"
          >Contact us <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div
      class="lg:hidden"
      role="dialog"
      aria-modal="true"
      class:hidden={!menuOpen}
    >
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50" />
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            on:click={() => (menuOpen = false)}
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
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                href="#features"
                class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                on:click={() => (menuOpen = false)}>Features</a
              >
            </div>
            <div class="py-6">
              <a
                href="#contact"
                class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                on:click={() => (menuOpen = false)}>Contact us</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <svg
        class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
        viewBox="0 0 1155 678"
      >
        <path
          fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
          fill-opacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          ALL your business relationships in one place
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We help agencies, consultancies and professional service firms
          streamline talent, booking, simplify quoting, automate invoicing, and
          optimize utilization.
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          For small businesses of the future.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://pwck4nty8me.typeform.com/to/JsJvVWgb#hubspot_utk=xxxxx&hubspot_page_name=xxxxx&hubspot_page_url=xxxxx"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Get started</a
          >
          <a
            href="#contact"
            class="text-sm font-semibold leading-6 text-gray-900"
            >Learn more <span aria-hidden="true">→</span></a
          >
        </div>
      </div>
    </div>
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    >
      <svg
        class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
        viewBox="0 0 1155 678"
      >
        <path
          fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
          fill-opacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>

<div class="bg-white py-24 sm:py-32" id="features">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Accelerate your bookings
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        For small businesses of the future, stop wasting time shuffling tools.
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl
        class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
      >
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                class="w-6 h-6"
              >
                <path d="M19.5 6h-15v9h15V6z" />
                <path
                  fill-rule="evenodd"
                  d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            One dashboard for your core business
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            Track everything from books, sales, taxes, and cash
          </dd>
        </div>

        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                class="w-6 h-6"
              >
                <path
                  d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"
                />
                <path
                  d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"
                />
              </svg>
            </div>
            An easy to use collaborative platform
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            Accelerate decision making with your business partners, clients and
            consultants. Seamless flow of information, messaging and alerts from
            contract to signature.
          </dd>
        </div>

        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                class="w-6 h-6"
              >
                <path
                  d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            Simple access to consultant availability and work scheduling
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            By offering a centralised real time view of consultants schedules,
            consultancies can optimise bookings ensuring their consultants are
            always on the best project for the right client
          </dd>
        </div>

        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            Seamless billing and payments
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            As consultants complete their work schedule, clients can immediately
            sign off the work and expenses generating instant invoices and
            faster payments.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>

<Faq />

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-xl text-center">
      <h2
        class="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
      >
        Testimonials
      </h2>
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Our customers love ORCHID B
      </p>
    </div>
    <div
      class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
    >
      <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
        <Testimonial
          main="“It’s simple, highly professional and saves me so much time”​"
          secondary="I handle everything in one place and no longer need to use multiple tools just to issue invoices and track payments​"
          imageSource="/cedric_guarnotta.jpg"
          name="Cedric Guarnotta, Founder & CEO, Tulipay, Management Consulting"
        />

        <Testimonial
          main="“Finally, an application that works for our clients and subcontractors”​"
          secondary="As a leader of a rapidly scaling small business, admin is always a pain. ORCHID B takes the headache out of contractor and client invoicing.​"
          imageSource="/bertrand_milot.jpg"
          name="Bertrand Milot, Founder & CEO, Bradley & Rollins, Cybersecurity Consulting"
        />
      </div>
    </div>
  </div>
</div>

<div class="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
  <div
    class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
  >
    <svg
      class="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
      viewBox="0 0 1155 678"
    >
      <path
        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
        fill-opacity=".3"
        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
      />
      <defs>
        <linearGradient
          id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
          x1="1155.49"
          x2="-78.208"
          y1=".177"
          y2="474.645"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9089FC" />
          <stop offset="1" stop-color="#FF80B5" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div id="contact" class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Contact us
    </h2>
    <p class="mt-2 text-lg leading-8 text-gray-600">
      IF you would like to talk to us regarding our products and partnerships,
      investment, or media related topics, please fill the contact form below.
    </p>
  </div>
  <form
    action="https://formsubmit.co/"
    method="POST"
    class="mx-auto mt-16 max-w-xl sm:mt-20"
  >
    <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
      <div>
        <label
          for="first-name"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >First name</label
        >
        <div class="mt-2.5">
          <input
            type="text"
            name="first-name"
            id="first-name"
            bind:value={firstName}
            autocomplete="given-name"
            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          for="last-name"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Last name</label
        >
        <div class="mt-2.5">
          <input
            type="text"
            name="last-name"
            id="last-name"
            bind:value={lastName}
            autocomplete="family-name"
            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label
          for="company"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Company</label
        >
        <div class="mt-2.5">
          <input
            type="text"
            name="company"
            id="company"
            bind:value={company}
            autocomplete="organization"
            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label
          for="email"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Email</label
        >
        <div class="mt-2.5">
          <input
            type="email"
            name="email"
            id="email"
            bind:value={email}
            autocomplete="email"
            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label
          for="location"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Location</label
        >
        <div class="mt-2.5">
          <input
            type="text"
            name="location"
            id="location"
            bind:value={location}
            autocomplete="organization"
            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label
          for="phone-number"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Phone number</label
        >
        <div class="relative mt-2.5">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <label for="country" class="sr-only">Country</label>
            <select
              id="country"
              name="country"
              class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
            <svg
              class="pointer-events-none absolute top-0 right-3 h-full w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="tel"
            name="phone-number"
            id="phone-number"
            bind:value={phone}
            autocomplete="tel"
            class="block w-full rounded-md border-0 py-2 px-3.5 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label
          for="message"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Message</label
        >
        <div class="mt-2.5">
          <textarea
            name="message"
            id="message"
            rows="4"
            bind:value={message}
            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
    <div class="mt-10">
      {#if !submitted}
        <button
          type="button"
          on:click={contact}
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Let's talk</button
        >
      {:else}
        <button
          type="button"
          disabled
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Thank you! We will get back to you shortly.</button
        >
      {/if}
    </div>
  </form>
</div>

<Footer />

<About />
