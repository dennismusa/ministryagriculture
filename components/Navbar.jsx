"use client";

import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const hideNavbar =
    pathname === "/" ||
    pathname === "/login";

  if (hideNavbar) {
    return null;
  }

  const openSidebar = () => {
    window.dispatchEvent(
      new Event("open-mobile-sidebar")
    );
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0

        md:left-72

        h-16

        bg-[#EAF3FF]

        shadow-md

        z-[80]

        flex
        items-center
        justify-between

        px-3
        sm:px-4
        md:px-6
      "
    >

      {/* =====================================================
          LEFT
      ====================================================== */}
      <div className="flex items-center gap-3">

        {/* MOBILE MENU */}
        <button
          type="button"
          onClick={openSidebar}
          aria-label="Open sidebar"
          className="
            md:hidden

            w-10
            h-10

            rounded-lg

            bg-white

            text-[#0033cc]

            flex
            items-center
            justify-center

            shadow-sm

            hover:bg-blue-50

            active:scale-95

            transition
          "
        >
          <Menu size={22} />
        </button>

        {/* BRAND */}
        <div className="flex items-center gap-2">

          <div
            className="
              w-9
              h-9

              rounded-xl

              bg-[#0033cc]

              text-white

              flex
              items-center
              justify-center

              font-bold

              shadow
            "
          >
            e
          </div>

          <h1
            className="
              text-xl
              sm:text-2xl

              font-extrabold

              text-[#0033cc]
            "
          >
            eKilimo
          </h1>

        </div>

      </div>

      {/* =====================================================
          RIGHT
      ====================================================== */}
      <div className="flex items-center gap-3">

        <span
          className="
            hidden
            lg:block

            text-sm
            font-semibold

            text-gray-600
          "
        >
          Agriculture MIS
        </span>

        <div
          className="
            w-9
            h-9

            sm:w-10
            sm:h-10

            rounded-full

            bg-[#0033cc]

            text-white

            flex
            items-center
            justify-center

            font-bold

            shadow
          "
        >
          A
        </div>

      </div>

    </header>
  );
}