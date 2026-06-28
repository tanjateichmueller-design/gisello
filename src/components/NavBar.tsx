import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MarkLockup } from "./CompanionMark";

import ivfOwnImg from "@/assets/fertility-ivf-own.jpg";
import ivfDonorImg from "@/assets/fertility-ivf-donor.jpg";
import embryoImg from "@/assets/fertility-embryo-freezing.jpg";
import eggImg from "@/assets/fertility-egg-freezing.jpg";
import geneticImg from "@/assets/fertility-genetic-testing.jpg";
import surrogacyImg from "@/assets/fertility-surrogacy.jpg";

type SimpleNav = { type: "simple"; label: string; to: string };
type DropdownNav = { type: "dropdown"; label: string; children: { label: string; to: string }[] };
type MegaNav = {
  type: "mega";
  label: string;
  categories: { title: string; items: { label: string; to: string; img: string; desc: string }[] }[];
};

type NavItem = SimpleNav | DropdownNav | MegaNav;

const NAV: NavItem[] = [
  { type: "simple", label: "What we do", to: "/" },
  {
    type: "mega",
    label: "Treatments",
    categories: [
      {
        title: "Fertility Care",
        items: [
          { label: "IVF with Own Eggs", to: "/treatments/fertility-care", img: ivfOwnImg, desc: "Using your own eggs at AI-matched clinics." },
          { label: "IVF with Donor Eggs", to: "/treatments/fertility-care", img: ivfDonorImg, desc: "Screened donor-egg cycles with full coordination." },
          { label: "Embryo Freezing", to: "/treatments/fertility-care", img: embryoImg, desc: "Cryopreserve embryos for future family planning." },
          { label: "Egg Freezing", to: "/treatments/fertility-care", img: eggImg, desc: "Preserve fertility on your timeline." },
          { label: "Genetic Testing", to: "/treatments/fertility-care", img: geneticImg, desc: "PGT-A / PGT-M screening before transfer." },
          { label: "Surrogacy", to: "/treatments/fertility-care", img: surrogacyImg, desc: "Coordinated gestational surrogacy abroad." },
        ],
      },
    ],
  },
  { type: "simple", label: "Compliance", to: "/compliance" },
  { type: "simple", label: "Pricing", to: "/pricing" },
  { type: "simple", label: "Writing", to: "/writing" },
  {
    type: "dropdown",
    label: "Company",
    children: [
      { label: "Founder", to: "/founder" },
      { label: "About Gisello", to: "/about" },
      { label: "What's next", to: "/whats-next" },
      { label: "Press & PR", to: "/press" },
      { label: "Terms", to: "/terms" },
    ],
  },
];

export function NavBar({ transparent = false }: { transparent?: boolean } = {}) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navBg = transparent ? "nav-transparent" : "bg-paper border-b sticky";

  return (
    <header
      className={`w-full top-0 z-40 ${navBg}`}
      style={transparent ? undefined : { borderColor: "var(--color-rule)" }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1280, padding: "24px 48px" }}
      >
        <Link to="/" aria-label="GISELLO home">
          <MarkLockup size={32} wordSize={16} inverse={transparent} />
        </Link>

        <nav className="hidden md:flex items-center" style={{ gap: 32 }}>
          {NAV.map((n) => {
            if (n.type === "mega") {
              return (
                <div
                  key={n.label}
                  className="relative"
                  style={{ position: "static" }}
                  onMouseEnter={() => setOpenMenu(n.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === n.label}
                    onClick={() =>
                      setOpenMenu((o) => (o === n.label ? null : n.label))
                    }
                    className="text-ink hover:text-ochre transition-colors inline-flex items-center"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: 14,
                      gap: 4,
                      background: "transparent",
                    }}
                  >
                    {n.label}
                    <span aria-hidden style={{ fontSize: 10, marginTop: 2 }}>
                      ▾
                    </span>
                  </button>

                  {openMenu === n.label && (
                    <div
                      className="absolute left-0 right-0"
                      style={{
                        top: "calc(100% + 24px)",
                        zIndex: 50,
                        padding: "0 48px",
                      }}
                    >
                      <div
                        className="mx-auto"
                        style={{
                          maxWidth: 1280,
                          background: "var(--color-paper-pure)",
                          border: "1px solid var(--color-rule)",
                          padding: "40px 48px",
                        }}
                      >
                        {n.categories.map((cat) => (
                          <div key={cat.title}>
                            <h4
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: 11,
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                color: "var(--color-ochre)",
                                marginBottom: 20,
                              }}
                            >
                              {cat.title}
                            </h4>
                            <div
                              className="grid grid-cols-2 md:grid-cols-3"
                              style={{ gap: 20 }}
                            >
                              {cat.items.map((item) => (
                                <Link
                                  key={item.label}
                                  to={item.to}
                                  onClick={() => setOpenMenu(null)}
                                  className="group flex items-start"
                                  style={{ gap: 14 }}
                                >
                                  <div
                                    className="shrink-0 overflow-hidden"
                                    style={{
                                      width: 64,
                                      height: 64,
                                      borderRadius: 2,
                                    }}
                                  >
                                    <img
                                      src={item.img}
                                      alt={item.label}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      loading="lazy"
                                      width={128}
                                      height={128}
                                    />
                                  </div>
                                  <div>
                                    <p
                                      className="group-hover:text-ochre transition-colors"
                                      style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: 16,
                                        lineHeight: 1.2,
                                        color: "var(--color-gisello-blue)",
                                        fontWeight: 500,
                                        marginBottom: 4,
                                      }}
                                    >
                                      {item.label}
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: 12,
                                        lineHeight: 1.45,
                                        color: "var(--color-gray-60)",
                                      }}
                                    >
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (n.type === "dropdown") {
              return (
                <div
                  key={n.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(n.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === n.label}
                    onClick={() =>
                      setOpenMenu((o) => (o === n.label ? null : n.label))
                    }
                    className="text-ink hover:text-ochre transition-colors inline-flex items-center"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: 14,
                      gap: 4,
                      background: "transparent",
                    }}
                  >
                    {n.label}
                    <span aria-hidden style={{ fontSize: 10, marginTop: 2 }}>
                      ▾
                    </span>
                  </button>
                  {openMenu === n.label && (
                    <div
                      className="nav-dropdown absolute left-0"
                      style={{
                        top: "100%",
                        paddingTop: 8,
                        minWidth: 200,
                        zIndex: 50,
                      }}
                    >
                      <div
                        className="bg-paper border"
                        style={{
                          borderColor: "var(--color-rule)",
                          padding: 8,
                        }}
                      >
                        {n.children.map((c) => (
                          <Link
                            key={c.label}
                            to={c.to}
                            onClick={() => setOpenMenu(null)}
                            className="block text-ink hover:text-ochre transition-colors"
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: 14,
                              padding: "8px 12px",
                            }}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={n.label}
                to={n.to}
                className="text-ink hover:text-ochre transition-colors"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center" style={{ gap: 18 }}>
          <a
            href="#login"
            className="text-ink hover:text-ochre transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            Login
          </a>
          <Link
            to="/book-call"
            className="inline-flex items-center justify-center bg-ink text-paper hover:bg-ochre hover:text-ink transition-colors rounded-full"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 13,
              padding: "8px 20px",
            }}
          >
            Apply
          </Link>
        </div>

        <button
          className="md:hidden text-ink"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="square" />
            ) : (
              <>
                <path d="M3 7h18" strokeLinecap="square" />
                <path d="M3 17h18" strokeLinecap="square" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "var(--color-rule)" }}
        >
          <div className="flex flex-col" style={{ padding: "16px 48px" }}>
            {NAV.flatMap((n) => {
              if (n.type === "mega") {
                return n.categories.flatMap((cat) =>
                  cat.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="py-2 text-ink"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 14,
                        paddingLeft: 16,
                      }}
                    >
                      {item.label}
                    </Link>
                  ))
                );
              }
              if (n.type === "dropdown") {
                return n.children.map((c) => (
                  <Link
                    key={c.label}
                    to={c.to}
                    onClick={() => setOpen(false)}
                    className="py-3 text-ink"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 16,
                    }}
                  >
                    {c.label}
                  </Link>
                ));
              }
              return [
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-ink"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                  }}
                >
                  {n.label}
                </Link>,
              ];
            })}
            <Link
              to="/book-call"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-ink text-paper rounded-full"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                padding: "12px 20px",
              }}
            >
              Apply
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
