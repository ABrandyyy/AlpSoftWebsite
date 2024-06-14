class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
        <nav id="header" class="fixed w-full top-0 text-white z-50">
          <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div class="pl-4 flex items-center">
              <a
                class="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                style="color: #4358b0;"
                href="/index.html"
              >
                AlpSoft Technologies
              </a>
            </div>
            <div class="block lg:hidden pr-4">
              <button
                id="nav-toggle"
                class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                <svg
                  class="fill-current h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0"
              id="nav-content"
            >
              <ul class="list-reset lg:flex justify-end flex-1 items-center">
                <li class="relative mr-3 group">
                  <a
                    class="inline-block py-2 px-4 text-white no-underline cursor-pointer font-bold nav-link"
                    id="ourCompanyLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    Our Company
                  </a>
                  <ul
                    class="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block"
                    id="dropdownMenu"
                  >
                    <li>
                      <a
                        class="block px-4 py-2 text-black hover:bg-gray-200"
                        href="/ourValues.html"
                      >
                        Our Values
                      </a>
                    </li>
                    <li>
                      <a
                        class="block px-4 py-2 text-black hover:bg-gray-200"
                        href="/ourHistory.html"
                      >
                        Our History
                      </a>
                    </li>
                    <li>
                      <a
                        class="block px-4 py-2 text-black hover:bg-gray-200"
                        href="#"
                      >
                        Our Clients
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="mr-3">
                  <a
                    class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4 font-bold nav-link"
                    href="#"
                  >
                    Awards
                  </a>
                </li>
                <li class="mr-3">
                  <a
                    class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4 font-bold nav-link"
                    href="#"
                  >
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

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="container mx-auto text-center py-6 mb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
            Contact Us
        </h2>
        <div class="w-full mb-4">
            <div class="h-1 mx-auto bg-white w-6/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="py-7 container">
            <div style="display: flex; align-items: center; justify-content: center;">
                <div style="display: inline-block; text-align: center; margin-right: 120px;">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTA
                    AALEwEAmpwYAAAEFUlEQVR4nO2aXYhVVRTHj6KiNupojjTUQ+DHKJhUJL4EMxnSB4UopaJPvgpKL6Jlwaj1YEhvFaVBPU
                    ihZJIEoT5IGA7jJ5mICqKI4BeOMzU6Wc4v1tz/wc293rPPnbN33Yn+cGC457//a62z915rf0yS/I9KAOOB5cA2oBO4Dtz
                    Tc12/fQ4sA8Yl9QagBfgCuEN+9ALbgen1EMBYYCvwp5zr11ffALQqwEf0tOi3d4Ej4qLe+hAY/W8FMR04JWfuAzuAqTW0
                    nwZ87QR0GGiO63WlE89ozBvOAs8W0HoOOCety8CcsN5m90QaxD5gYgDNScB+J5jmf2JOnHKCGBFQeyRwwBlm8eaMJnY6n
                    CZG0J8EnJeNjaH1UyMtyk73i8yJHHbmKgH8DjwWw4DVCcOO4OKVtr6RrU9iVOxefSlvigWmAJuBE/qy9hwHNgFNORNKv9
                    o1hAzElh2GzhzcN4CejIreDSzOoXNU/KUhA7G1k2FDjiDSAvedKnla2duAPU4BXeTRek/cz0IGYssOQ6tnOKU9sTaDt06
                    c28DkDN4L4nWEiCEVvSHRGRmczWlP5ND73pdigRniXCvie7noHxKtuvQGTvp67SFf+3gGZ5w4fUV8Lxe9K9Gq1Rb4TRxvl
                    nGc7PGsIgx3ivheLnp1QDKjQDnzoyFnOjd0Z3AeF+dKEd/LRc9IdHYGx2qGoS2H3nxxj2Vwnhbn1yK+l4vuleiSDI4VO8
                    OeGvTaMzgrxNldxPdy0Q8k+n4Gp0nFzrAug/e2OF3Aoxm8Lb5ga4b1hEQPeHiLVexQirXs1KBnvtMTxlno0Tok7sKQgUy
                    R8T7LJh7uIhW7aujKEUSjVtr2TAgWiMRt0Wd4NQd3shU7m8xKyz1aO7VnDacUwJuydSgJDadyfxlcvNLWt765VkR8Zpr7
                    fcOroJ0JKsC2+HwylhEbKoYVUQwkAzZWy8bBJKKRVTJyOJL+COCCbCyPYSM11OBkpLkR9JdJ+4qdqoTWLzf2kYztijh03
                    wmt/TBjzc5kfCqg7gIFYT3eGErXZ/Tj0L1ik5uY51lVjD7hnKo8H0DPVgOGmzEO/nzGrUqjij+8gM4o5xB7VVgv8zkwBr
                    goB1YW0FkrjdMhz5IHe95lO8jxg2jf5KTzl+J4mc+RYcDPcmTrINp/pbZ743hY+6WPXZ/9Bcyrod3LCqK3lpuuqHC2uWfy
                    3GvoFOWS2qxJ6gWUMs8vvu2ww/803W8UyXhRoFOPe9pJtnmGVL92m7OSegSlXSFKy41VtszXxHkrqVdQWob/JEd3W1Zz3
                    g0HftS7H9x3dQlKy5cb5dcQzlb5apQrtRgAXtc8sPnyCvCa/rYU/WIylMCDtdgtHQEZ1idDDZSq/k4FUDFnhhQoFb4O/QNAuEvN5D+MvwHicecgMX2K0wAAAABJRU5ErkJggg=="
                        style="display: inline-block; vertical-align: middle;">
                    <p style="display: inline-block; font-weight: bold; font-size:larger;">Address</p>
                    <div class="py-4">
                        <a href="https://www.google.com/maps/dir//alpsoft+technologies+pte+ltd/@1.3575578,103.74247
                            53,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31da1bb89f6faa9b:0xfdab0347eb69440c!2m2!1d103.795927!2d1.2762809"
                            target="_blank" style="text-decoration:none" onmouseover="style='text-decoration:underline'"
                            onmouseout="style='text-decoration:none'">
                            <p>100D Pasir Panjang Road,</p>
                            <p>#03-01, Meissa</p>
                            <p>Singapore 118520</p>
                        </a>
                    </div>
                </div>
                <div style="display: inline-block; text-align: center; margin-right: 120px;">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAAL
                    EwEAmpwYAAAA0klEQVR4nO3asQ3CMBhE4VRsALsQlqOBwHawQ2CNh4xASoHQHTgWEvfVlv84fqW77l8BC+AIXKnvAgxlRou
                    DHJjfvsVByl8r1sLa7eTjtsL6/nkz1T74zbA7ce0KOAMnYFl7/6/MPYgcxJQbEZG0TElLRNIyJS0RScuUtEQkLVPSEpG0TE
                    lLRNIyJS0RScuUtEQkLVPSEpG0TElLRNIyJS0RScuUtEQkLVPSEpG0Pn/C0c+w9+ax91h771fDyuudue1aPXMaJjdT01gO0
                    eSZ06+6AaSZfPTEQjDVAAAAAElFTkSuQmCC" style="display: inline-block; vertical-align: middle;">
                    <p style="display: inline-block; font-weight: bold; font-size:larger;">Phone</p>
                    <div class="py-4">
                        <a class="links" href="tel:+65-69087618" style="text-decoration:none"
                            onmouseover="style='text-decoration:underline'"
                            onmouseout="style='text-decoration:none'">+65 6908 7618</a>
                        <p>Monday - Friday</p>
                        <p>9:00 AM - 6:00 PM</p>
                    </div>
                </div>
                <div style="display: inline-block; text-align: center; margin-right: 120px; margin-bottom: 50px;">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEw
                    EAmpwYAAACJklEQVR4nO3YS6hNcRTH8b/3q9xEiJBuXQYMGEhJkVJSklJKMVB3amh0S3dkamggJWWiZGLAgJQUSSYMiAGRR97v
                    10f7Wrd2p3PuOffcfZxH+1t7ss9vrfX/9T/rv/faKZWUlJSUtAM9QtJrRlKXomeNoD91GeivZuQ9dqcuATvwppqRjD84hsmpQ8
                    EkHMHvqs2OodyPF9CXOgz0xdrEWoeqNnvFdj3AmtQhYBXuVbZBzVMLy3Erbn/E3rY6SCNr2oV3saa7+YNpzOMXM3Eq97c7gWlt
                    MDAlejbr3YyzmFOhqW0kJxrEj5BcxaL/aGI+LkXtn1mD19DVNxLCzXgesifY0FIHaaTmOjyKmq+wbQxtY0ZCvBQ3QvoNh1riII
                    3U2o/PUes2VtTRN24kAmbgeEXfTC/QwNToh1FOY1YDceMzkgs8gC8Rdh1LCjCxEFdyOz44jtjmjETwejyO0JfY2pSDf7k24Vnk
                    eoqN44xv3kgkWIDL9U6VOjmyU/F75LiGxU3kmJiRGuf8GcxuIC57Tp0s4jmlCCO5ZPvwKVLdwcoxtMtwM7RfcXCCtYsdrLAa9
                    yPda2yvotmCF6F5iLUF1C1+QsRcnI+Uv3A0Gwni1ftw9FLGRcwrqGZrRt1Y+HCub87FJe4NFznvaJWRXIGdeDuaHx+wpwV1Wv/
                    xAQMxEmTXQItq9OhXlNSlKI10GMod6TCUO9Jh6Nkd6XaSHiGVlJSUlKQ28BeJl84fDKCHpgAAAABJRU5ErkJggg=="
                        style="display: inline-block; vertical-align: middle;">
                    <p style="display: inline-block; font-weight: bold; font-size:larger;" class="pl-3">Email</p>
                    <div class="py-4">
                        <a class="links" href="mailto:info@alpsoft-tech.com" style="text-decoration:none"
                            onmouseover="style='text-decoration:underline'"
                            onmouseout="style='text-decoration:none'">info@alpsoft-tech.com</a>
                    </div>
                </div>
                <div style="display: inline-block; text-align: center; margin-right: 120px; margin-bottom: 50px;">
                    <p style="display: inline-block; font-weight: bold; font-size:larger;">Social Media</p>
                    <br>
                    <div style="margin-top: 10px;">
                        <a href="https://www.facebook.com/AlpSoftTechnologies/" target="_blank">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAAL
                        EwEAmpwYAAADK0lEQVR4nO2Zz08TQRTHNzM0MQHixaMnI2jE4Mmr/4A/okej3r0oAn+AiYke9IYkpDNFDAkRqokHL4bEEzFe
                        lIqAJP5IDPvetrXQAhXSsrRjplYMboGdnd0th/0m79TN7Pcz8+bN7KthRIoUKZJUbNg8Qxj0UYZJwnCGcsxTjpv1yBOGH2u/
                        cbNXPmscCCVy7YRDP2XwmXIUSsFgXgIbg9m28I3fFS1yJinDZWXjDhBcIgzvyDHDMR/Hk4RjStv4f0EYThsJOBGodxqHS5R
                        D0W/z9F9arVEOFwMxTxLWDcrBDsw8/xtgE25dD2LmQzCP2xCUwQV/3A+ZHX+WVs9U24glOiey4uzLn6LreVZ0jGfE4afWXhB
                        Fud98qDbeN2wLR3H1TV5Mpctis1IVjXR5cnn3jc3hg1Z1qpVKj+YPDVti4vuG2E9X9gCoQcSxx5v70XQr5ZDzCvBwpriveTc
                        A8pyQB6aH2Yd+r+aPjmVEeZeUUQbg8oyAPmUAT9eDevS+W2lotlCuiPupNXFzqrAdx55l9h+TwbySeXnZ0qk4498a5/65Vzn
                        PY8YS6dOhpI+Mt5myw/zs8qbn8ajqZpbXXp2XzeVtB8DY1w0tAMpwXGEF8JPOyxYKToDHc7/0VoBjSmUFlvwGGNAEoBxyKgD
                        lgweApUAA7k2viXypsiO2GhwBpa2q47l8qSK6X2QDAXCdQo9cnriNVBVCtI9Y/qeQyibWAfhR3ApsEyfDAJiEUkBlVLZHQgA
                        YUNjYhONt1wAxbnarfKgcGU3viC8rzirEFtYdz7U+cZv/KGIs3eUaoL4KswolLtgyyhQvc6ppFDQA4WZvqB80vgIwXPLcvZM
                        ds2YDEIa3DK2PeobTzQIgHN4bSUENLfHF45TBavgA4ENbpS7Z7lNpbOkDgE0T5nnDT8l2n1sIPQCwCcNrRhCS7T43XTrPAAxW
                        fZ95hxh0yo6Z3wBEbtghs8MIRbI6xbFnt2u3GgDkaqVSu9p40WC2TZ7YhMOcKoC8qhB5wjblL6YGkpet2qpwnHhtlgqLRbuyb
                        leFDLNoVx6kVi15Ja61R4atU832GylSJONg6DekIcfGE7hs2QAAAABJRU5ErkJggg=="
                                style="display: inline-block; vertical-align: middle;"></a>
                        <a href="https://www.linkedin.com/company/alpsoft-enterprises/?originalSubdomain=sg"
                            target="_blank">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEw
                        EAmpwYAAAByElEQVR4nO2ZP0/CQBjG22scXI2Tiauy+glc3MC4+iX8DA6G9IiDJsYBBhdNHJwcNRGIHY3xjoBCgkTEAUP8A63y
                        t7ymBVQEIq2mvSb3JM/UN5fnd+97N1wFgYuLi4tpSTJdQTKJI5lqCFNwxDLVRExjkkyW/xRexAQ7FhoPt4hJ0P7OuxwedS2FSM
                        AygDk2DIRHRhdkGrUOgInqdnDUs0wqNgAYCI6//G8AvkgazgsaaA0dlIIG8+G0twCUggbfFb/XvAWgNfQ+ALWuewtA8XoHfJG0C
                        WF0IpZXYS584y0A5JIFDoA7OzFM43yf3b2G7YsSpEpVqDbb8FprmaO4dvoAk5sJtgEW9jLw+NaEUbosvsPMTopdgOxLHX5TLK+
                        CxCrAuPIf5dgE0Ntgzv/S4S2sHucheqcOrdtPPrMJsK4U+2omQgk4yVUG6jJPNTYBpreTA+ssHmQH6sq1FnsA7R/fe57aSo5d63
                        oH7K6FOADmHTDFRwjzQ0z5LYT4NWpRo24Otyx4+mkR07JlAON9noHgYFjE9MwygPFzwe3gqGsJX/ktA3S6QIJuhxcx2bAV/rMTI
                        RIw3uedPRNENcbG9s5zcXFxCU7pA5Jwntel+S2tAAAAAElFTkSuQmCC"
                                style="display: inline-block; vertical-align: middle;"></a>
                    </div>

                </div>
            </div>
    </section>
        `;
  }
}
customElements.define("app-footer", Footer);

class Navbar2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div>
        <nav id="header" class="fixed w-full top-0 text-white z-50">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div class="pl-4 flex items-center">
                    <a class="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        style="color: #4358b0;" href="/index.html">
                        AlpSoft Technologies
                    </a>
                </div>
                <div class="block lg:hidden pr-4">
                    <button id="nav-toggle"
                        class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-black lg:bg-transparent text-black p-4 lg:p-0"
                    id="nav-content">
                    <ul class="list-reset lg:flex justify-end flex-1 items-center">
                        <li class="relative mr-3 group">
                            <a class="inline-block py-2 px-4 no-underline cursor-pointer font-bold nav-linkOurValues"
                                id="ourCompanyLink" role="button" data-toggle="dropdown" aria-haspopup="true">Our
                                Company</a>
                            <ul class="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block"
                                id="dropdownMenu">
                                <li><a class="block px-4 py-2 text-black hover:bg-gray-200" href="/ourValues.html">Our Values</a></li>
                                <li><a class="block px-4 py-2 text-black hover:bg-gray-200" href="/ourHistory.html">Our History</a>
                                </li>
                                <li><a class="block px-4 py-2 text-black hover:bg-gray-200" href="#">Our Clients</a>
                                </li>
                            </ul>
                        </li>
                        <li class="mr-3">
                            <a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4 font-bold nav-linkOurValues"
                                href="#">Awards</a>
                        </li>
                        <li class="mr-3">
                            <a class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4 font-bold nav-linkOurValues"
                                href="#">Projects</a>
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