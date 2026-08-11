"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  Users,
  Tractor,
  MapPinned,
  FileBarChart,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Map,
  X,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);

  /* =====================================================
     LISTEN FOR MOBILE MENU EVENT FROM NAVBAR
  ====================================================== */
  useEffect(() => {
    const openSidebar = () => {
      setMobileOpen(true);
    };

    window.addEventListener("open-mobile-sidebar", openSidebar);

    return () => {
      window.removeEventListener(
        "open-mobile-sidebar",
        openSidebar
      );
    };
  }, []);

  /* =====================================================
     CLOSE SIDEBAR WHEN NAVIGATING
  ====================================================== */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  const closeMobileSidebar = () => {
    setMobileOpen(false);
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      title: "Digital Address",
      icon: Map,
      href: "/digitaladdress",
    },
    {
      title: "Farmers",
      icon: Users,
      href: "/farmers",
    },
    {
      title: "Farms",
      icon: Tractor,
      href: "/farms",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    router.push("/login");
  };

  return (
    <>
      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}
      {mobileOpen && (
        <div
          onClick={closeMobileSidebar}
          className="
            fixed
            inset-0
            bg-black/50
            z-[90]
            md:hidden
          "
        />
      )}

      {/* =====================================================
          SIDEBAR
      ====================================================== */}
      <aside
        className={`
          fixed
          top-0
          left-0
          bottom-0

          z-[100]

          flex
          flex-col

          text-white

          bg-gradient-to-b
          from-[#0033cc]
          via-[#3333cc]
          to-[#4444dd]

          border-r
          border-white/10

          shadow-2xl

          transition-transform
          duration-300
          ease-in-out

          w-[280px]

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          md:translate-x-0

          ${
            collapsed
              ? "md:w-24"
              : "md:w-72"
          }
        `}
      >

        {/* =====================================================
            MOBILE CLOSE BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={closeMobileSidebar}
          aria-label="Close sidebar"
          className="
            absolute
            right-4
            top-4

            w-10
            h-10

            rounded-xl

            bg-white/10
            hover:bg-white/20

            flex
            items-center
            justify-center

            transition

            md:hidden
          "
        >
          <X size={22} />
        </button>

        {/* =====================================================
            DESKTOP COLLAPSE BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={
            collapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
          className="
            hidden
            md:flex

            absolute

            -right-4
            top-8

            w-8
            h-8

            rounded-full

            bg-white

            text-blue-700

            items-center
            justify-center

            shadow-lg

            hover:scale-110

            transition

            z-[110]
          "
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div
          className={`
            h-20
            shrink-0

            border-b
            border-white/10

            flex
            items-center

            px-5

            ${
              collapsed
                ? "md:justify-center"
                : ""
            }
          `}
        >

          {/* LOGO */}
          <div
            className="
              w-11
              h-11

              rounded-xl

              bg-white

              overflow-hidden

              flex
              items-center
              justify-center

              shadow-md

              shrink-0
            "
          >
            <img
              src="/logo2.png"
              alt="eKilimo logo"
              className="
                w-full
                h-full
                object-contain
              "
            />
          </div>

          {/* BRAND */}
          <div
            className={`
              ml-3
              min-w-0

              ${
                collapsed
                  ? "md:hidden"
                  : ""
              }
            `}
          >
            <h1 className="font-bold text-base">
              Agriculture MIS
            </h1>

            <p className="text-sm text-white/70">
              National Farm System
            </p>
          </div>
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div
          className="
            flex-1
            overflow-y-auto

            p-4
          "
        >

          {/* TITLE */}
          <p
            className={`
              uppercase
              text-xs
              tracking-[3px]

              text-white/50

              mb-4
              px-3

              ${
                collapsed
                  ? "md:hidden"
                  : ""
              }
            `}
          >
            Main Navigation
          </p>

          <nav className="space-y-2">

            {/* =================================================
                MAIN MENU
            ================================================= */}
            {menuItems.map((item) => {
              const Icon = item.icon;

              const active =
                pathname === item.href ||
                pathname.startsWith(
                  `${item.href}/`
                );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative

                    flex
                    items-center

                    px-4
                    py-3

                    rounded-2xl

                    transition

                    ${
                      collapsed
                        ? "md:justify-center"
                        : "gap-4"
                    }

                    ${
                      active
                        ? "bg-white/20 shadow-lg"
                        : "hover:bg-white/10"
                    }
                  `}
                >

                  {active && (
                    <div
                      className="
                        absolute
                        left-0
                        top-2
                        bottom-2

                        w-1

                        bg-white

                        rounded-r-full
                      "
                    />
                  )}

                  <Icon
                    size={22}
                    className="shrink-0"
                  />

                  <span
                    className={`
                      text-base
                      font-medium

                      ${
                        collapsed
                          ? "md:hidden"
                          : ""
                      }
                    `}
                  >
                    {item.title}
                  </span>

                </Link>
              );
            })}

            {/* =================================================
                REGIONS
            ================================================= */}
            <div>

              <button
                type="button"
                onClick={() =>
                  setRegionsOpen(!regionsOpen)
                }
                className={`
                  w-full

                  flex
                  items-center

                  px-4
                  py-3

                  rounded-2xl

                  hover:bg-white/10

                  transition

                  ${
                    collapsed
                      ? "md:justify-center"
                      : "justify-between"
                  }
                `}
              >

                <div className="flex items-center gap-4">

                  <MapPinned
                    size={22}
                    className="shrink-0"
                  />

                  <span
                    className={`
                      text-base
                      font-medium

                      ${
                        collapsed
                          ? "md:hidden"
                          : ""
                      }
                    `}
                  >
                    Regions
                  </span>

                </div>

                <ChevronDown
                  size={18}
                  className={`
                    transition

                    ${
                      regionsOpen
                        ? "rotate-180"
                        : ""
                    }

                    ${
                      collapsed
                        ? "md:hidden"
                        : ""
                    }
                  `}
                />

              </button>

              {regionsOpen && (
                <div
                  className={`
                    ml-10
                    mt-2
                    space-y-2

                    ${
                      collapsed
                        ? "md:hidden"
                        : ""
                    }
                  `}
                >

                  <Link
                    href="/regions/counties"
                    className="
                      block
                      text-sm
                      px-3
                      py-2
                      rounded-lg
                      hover:bg-white/10
                    "
                  >
                    Counties
                  </Link>

                  <Link
                    href="/regions/wards"
                    className="
                      block
                      text-sm
                      px-3
                      py-2
                      rounded-lg
                      hover:bg-white/10
                    "
                  >
                    Wards
                  </Link>

                </div>
              )}

            </div>

            {/* =================================================
                REPORTS
            ================================================= */}
            <div>

              <button
                type="button"
                onClick={() =>
                  setReportsOpen(!reportsOpen)
                }
                className={`
                  w-full

                  flex
                  items-center

                  px-4
                  py-3

                  rounded-2xl

                  hover:bg-white/10

                  transition

                  ${
                    collapsed
                      ? "md:justify-center"
                      : "justify-between"
                  }
                `}
              >

                <div className="flex items-center gap-4">

                  <FileBarChart
                    size={22}
                    className="shrink-0"
                  />

                  <span
                    className={`
                      text-base
                      font-medium

                      ${
                        collapsed
                          ? "md:hidden"
                          : ""
                      }
                    `}
                  >
                    Reports & Analytics
                  </span>

                </div>

                <ChevronDown
                  size={18}
                  className={`
                    transition

                    ${
                      reportsOpen
                        ? "rotate-180"
                        : ""
                    }

                    ${
                      collapsed
                        ? "md:hidden"
                        : ""
                    }
                  `}
                />

              </button>

              {reportsOpen && (
                <div
                  className={`
                    ml-10
                    mt-2
                    space-y-2

                    ${
                      collapsed
                        ? "md:hidden"
                        : ""
                    }
                  `}
                >

                  <Link
                    href="/reports/farmers"
                    className="
                      block
                      text-sm
                      px-3
                      py-2
                      rounded-lg
                      hover:bg-white/10
                    "
                  >
                    Farmers Reports
                  </Link>

                  <Link
                    href="/reports/farms"
                    className="
                      block
                      text-sm
                      px-3
                      py-2
                      rounded-lg
                      hover:bg-white/10
                    "
                  >
                    Farms Reports
                  </Link>

                </div>
              )}

            </div>

          </nav>

          {/* =================================================
              LIVE ANALYTICS
          ================================================= */}
          <div
            className={`
              mt-8

              ${
                collapsed
                  ? "md:hidden"
                  : ""
              }
            `}
          >

            <p
              className="
                uppercase
                text-xs
                tracking-[3px]

                text-white/50

                mb-4
                px-3
              "
            >
              Live Analytics
            </p>

            <div
              className="
                rounded-3xl
                p-5

                bg-white/10

                border
                border-white/10
              "
            >

              <p className="text-base text-white/70">
                Total Farmers
              </p>

              <h2 className="text-4xl font-bold mt-2">
                2,458
              </h2>

              <p className="text-sm text-green-300">
                ↑ +120 this month
              </p>

            </div>

          </div>

        </div>

        {/* =====================================================
            USER / LOGOUT
        ====================================================== */}
        <div
          className="
            p-4
            border-t
            border-white/10
            shrink-0
          "
        >

          <div
            className={`
              flex
              items-center
              gap-3
              mb-4

              ${
                collapsed
                  ? "md:hidden"
                  : ""
              }
            `}
          >

            <div
              className="
                w-11
                h-11

                rounded-full

                bg-white
                text-blue-700

                flex
                items-center
                justify-center

                font-bold
                shrink-0
              "
            >
              A
            </div>

            <div className="min-w-0">

              <h4 className="text-base font-medium truncate">
                System Admin
              </h4>

              <p className="text-sm text-white/60 truncate">
                Dashboard Access
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={handleLogout}
            className={`
              group

              w-full

              py-3

              rounded-2xl

              flex
              items-center

              bg-red-700

              text-white

              transition

              hover:bg-red-900

              active:scale-95

              ${
                collapsed
                  ? "md:justify-center"
                  : "gap-3 px-4"
              }
            `}
          >

            <LogOut
              size={20}
              className="
                transition

                group-hover:-rotate-12
                group-hover:scale-110
              "
            />

            <span
              className={`
                font-semibold

                ${
                  collapsed
                    ? "md:hidden"
                    : ""
                }
              `}
            >
              Logout
            </span>

          </button>

        </div>

      </aside>
    </>
  );
}