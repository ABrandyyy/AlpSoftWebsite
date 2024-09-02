class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div>
        <nav id="header" class="fixed w-full top-0 text-black-500 z-50" style="background-color: rgb(250, 250, 250);">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div class="pl-4 flex items-center">
                    <a href="/index.html">
                        <img src="https://www.alpsoft-tech.com/images/logo.png" alt="AlpSoft Logo" width="300px"
                            height="300px" class="navLogo">
                    </a>
                </div>
                <div class="block lg:hidden pr-4">
                    <button id="nav-toggle"
                        class="flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="fill: #354183;">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div class="responsiveDropdown w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent p-4 lg:p-0"
                    id="nav-content">
                    <ul class="list-reset lg:flex justify-end flex-1 items-center responsiveDropdown">
                        <li class="relative mr-3 group">
                            <a class="inline-block py-2 px-4 text-black no-underline cursor-pointer font-bold responsiveDropdown"
                                id="ourCompanyLink" role="button" data-toggle="dropdown" aria-haspopup="true">
                                Our Company
                            </a>
                            <ul class="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block"
                                id="dropdownMenu">
                                <li>
                                    <a class="block px-4 py-2 text-black hover:bg-gray-200" href="/ourValues.html">
                                        Our Values
                                    </a>
                                </li>
                                <li>
                                    <a class="block px-4 py-2 text-black hover:bg-gray-200" href="/ourHistory.html">
                                        Our History
                                    </a>
                                </li>
                                <li>
                                    <a class="block px-4 py-2 text-black hover:bg-gray-200" href="/ourClients.html">
                                        Our Clients
                                    </a>
                                </li>
                                <li>
                                    <a class="block px-4 py-2 text-black hover:bg-gray-200" href="/aboutUs.html">
                                        About Us
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="mr-3">
                            <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 font-bold nav-link responsiveDropdown"
                                href="/awards.html">
                                Awards
                            </a>
                        </li>
                        <li class="mr-3">
                            <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 font-bold nav-link responsiveDropdown"
                                href="/projects.html">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    </div> `;
  }
}
customElements.define("app-navbar", Navbar);

class Navbar2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div>
        <nav id="header" class="fixed w-full top-0 text-white z-50" style="background-color: rgb(250, 250, 250);">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div class="pl-4 flex items-center">
                <a href="/index.html">
                        <img src="https://www.alpsoft-tech.com/images/logo.png" alt="AlpSoft Logo" width="300px"
                            height="300px" class="navLogo">
                    </a>
                </div>
                <div class="block lg:hidden pr-4 text-blue-500">
                    <button id="nav-toggle"
                        class="flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="fill: #354183;">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div class="responsiveDropdown w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white text-black p-4 lg:p-0"
                    id="nav-content" style="background-color: rgb(252, 252, 252);">
                    <ul class="list-reset lg:flex justify-end flex-1 items-center responsiveDropdown">
                        <li class="relative mr-3 group">
                            <a class="inline-block py-2 px-4 no-underline cursor-pointer font-bold nav-linkOurValues responsiveDropdown"
                                id="ourCompanyLink" role="button" data-toggle="dropdown" aria-haspopup="true">Our
                                Company</a>
                            <ul class="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden"
                                id="dropdownMenu">
                                <li><a class="block px-4 py-2 text-black hover:bg-gray-200" href="/ourValues.html">Our Values</a></li>
                                <li><a class="block px-4 py-2 text-black hover:bg-gray-200" href="/ourHistory.html">Our History</a>
                                </li>
                                <li><a class="block px-4 py-2 text-black hover:bg-gray-200" href="/ourClients.html">Our Clients</a>
                                </li>
                                <li>
                                    <a class="block px-4 py-2 text-black hover:bg-gray-200" href="/aboutUs.html">
                                        About Us
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="mr-3">
                            <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 font-bold nav-linkOurValues responsiveDropdown"
                                href="/awards.html">Awards</a>
                        </li>
                        <li class="mr-3">
                            <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 font-bold nav-linkOurValues responsiveDropdown"
                                href="/projects.html">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    </div>
    `;
  }
}
customElements.define("app-navbar2", Navbar2);
