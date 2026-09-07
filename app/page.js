"use client";

import { useState } from "react";
import {
  info,
  hero,
  featured,
  specials,
  story,
  testimonials,
  hours,
  social,
  asset,
} from "./data";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [zoom, setZoom] = useState(null);
  const openZoom = (src, alt) => setZoom({ src, alt });
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            <img
              src={asset("/img/logo.png")}
              alt="Mi Rey"
              className="brand-logo zoomable"
              onClick={() => openZoom(asset("/img/logo.png"), "Mi Rey")}
            />
            <span className="brand-name">
              MI REY <em>Taquería &amp; Grill</em>
            </span>
          </div>
          <button
            className="hamburger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={"nav-links" + (menuOpen ? " open" : "")}>
            <a href="#menu" onClick={closeMenu}>Menu</a>
            <a href="#specials" onClick={closeMenu}>Specials</a>
            <a href="#story" onClick={closeMenu}>Story</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-order" href={`tel:${info.phoneHref}`} onClick={closeMenu}>
              Order 🌮
            </a>
          </nav>
          <a className="btn" href={`tel:${info.phoneHref}`}>
            Order 🌮
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="eyebrow">🌶️ Authentic Mexican cuisine · Wilmington, NC</p>
          <h1>
            Ready to <span className="hl">indulge</span> your taste buds?
          </h1>
          <p className="hero-text">{hero.text}</p>
          <div className="hero-cta">
            <a className="btn big" href={`tel:${info.phoneHref}`}>
              {hero.cta} NOW
            </a>
            <a className="btn ghost" href="#menu">
              View menu
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>100%</strong>
              <span>Homemade recipes</span>
            </div>
            <div>
              <strong>Jalisco</strong>
              <span>Authentic flavor</span>
            </div>
            <div>
              <strong>Catering</strong>
              <span>For your events</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img
            src={asset("/img/chimichanga.png")}
            alt="Chimichanga with rice"
            className="zoomable"
            onClick={() => openZoom(asset("/img/chimichanga.png"), "Chimichanga with rice")}
          />
          <div className="badge">Made with love! ❤️</div>
        </div>
      </section>

      {/* STRIPE */}
      <div className="stripe">
        <span>TACOS</span>•<span>BIRRIA</span>•<span>FAJITAS</span>•
        <span>MARGARITAS</span>•<span>CATERING</span>•<span>WINGS</span>•
        <span>TACOS</span>•<span>BIRRIA</span>•<span>FAJITAS</span>•
        <span>MARGARITAS</span>•<span>CATERING</span>•<span>WINGS</span>
      </div>

      {/* FEATURED */}
      <section className="featured" id="menu">
        <div className="head">
          <h2>Featured Dishes</h2>
          <p>From our grill to your table — Jalisco recipes full of flavor.</p>
        </div>
        <div className="gallery">
          {featured.map((img, i) => (
            <figure key={i} className={`card c-${i}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="zoomable"
                onClick={() => openZoom(img.src, img.alt)}
              />
              <figcaption>{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SPECIALS */}
      <section className="specials" id="specials">
        <div className="head light">
          <h2>Daily Specials</h2>
          <p>A reason to come back every day of the week.</p>
        </div>
        <div className="specials-grid">
          {specials.map((s, i) => (
            <div key={s.day} className="special-card">
              <span className="chile">🌶️</span>
              <h3>{s.day}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="story" id="story">
        <div className="story-body">
          <span className="tag">Our Story</span>
          <h2>{story.title}</h2>
          <p>{story.text}</p>
          <a className="btn" href="#menu">
            {story.cta}
          </a>
        </div>
        <div className="story-imgs">
          <img
            src={asset("/img/tostada2.png")}
            alt="Birria tostada"
            className="i1 zoomable"
            onClick={() => openZoom(asset("/img/tostada2.png"), "Birria tostada")}
          />
          <img
            src={asset("/img/spread.png")}
            alt="Table of dishes"
            className="i2 zoomable"
            onClick={() => openZoom(asset("/img/spread.png"), "Table of dishes")}
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi">
        <div className="head">
          <h2>Customer Reviews</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name}>
              <div className="stars">★★★★★</div>
              <p>{t.quote}</p>
              <footer>
                <span className="avatar">{t.name.charAt(0)}</span>
                <span>
                  <strong>{t.name}</strong>
                  <em>{t.place}</em>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <h2>Visit us today</h2>
            <ul>
              <li>
                <span>📍</span>
                <div>
                  <strong>Address</strong>
                  {info.address}
                </div>
              </li>
              <li>
                <span>📞</span>
                <div>
                  <strong>Phone</strong>
                  <a href={`tel:${info.phoneHref}`}>{info.phone}</a>
                </div>
              </li>
              <li>
                <span>✉️</span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${info.email}`}>{info.email}</a>
                </div>
              </li>
            </ul>
            <div className="socials">
              {social.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="contact-hours">
            <h3>🕒 Hours</h3>
            <ul>
              {hours.map((h) => (
                <li key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <img
          src={asset("/img/logo.png")}
          alt="Mi Rey"
          className="zoomable"
          onClick={() => openZoom(asset("/img/logo.png"), "Mi Rey")}
        />
        <p>© 2025 by Mi Rey Taquería and Grill · Wilmington, NC</p>
        <a href={`tel:${info.phoneHref}`} className="back">
          Order → {info.phone}
        </a>
      </footer>

      {/* LIGHTBOX */}
      {zoom && (
        <div
          className="lightbox"
          onClick={() => setZoom(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox-close"
            onClick={() => setZoom(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img src={zoom.src} alt={zoom.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style jsx>{`
        .site {
          --red: #c0261f;
          --red-deep: #8f1a15;
          --orange: #e8791b;
          --yellow: #f6b93b;
          --green: #3a7d34;
          --green-deep: #285a24;
          --cream: #fff6ea;
          --charcoal: #241610;
          background: var(--cream);
          color: var(--charcoal);
          font-family: "Poppins", sans-serif;
          overflow-x: hidden;
        }
        h1,
        h2,
        h3,
        .brand-name {
          font-family: "Bebas Neue", sans-serif;
          letter-spacing: 1px;
        }

        /* NAV */
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--red);
          box-shadow: 0 4px 20px rgba(143, 26, 21, 0.35);
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.6rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          position: relative;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .brand-logo {
          width: 46px;
          border-radius: 8px;
          border: 2px solid var(--yellow);
        }
        .brand-name {
          color: #fff;
          font-size: 1.5rem;
          line-height: 1;
        }
        .brand-name em {
          display: block;
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-size: 0.65rem;
          letter-spacing: 3px;
          color: var(--yellow);
          font-weight: 600;
        }
        .nav-links {
          margin-left: auto;
          display: flex;
          gap: 1.8rem;
        }
        .nav-links a {
          color: #fff;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
        }
        .nav-links a:hover {
          color: var(--yellow);
        }
        .btn {
          background: var(--yellow);
          color: var(--red-deep);
          padding: 0.6rem 1.4rem;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 4px 0 #cf8f1d;
          transition: transform 0.1s, box-shadow 0.1s;
        }
        .btn:hover {
          transform: translateY(2px);
          box-shadow: 0 2px 0 #cf8f1d;
        }
        .btn.big {
          padding: 1rem 2rem;
          font-size: 1.05rem;
        }
        .btn.ghost {
          background: transparent;
          color: var(--red);
          border: 2px solid var(--red);
          box-shadow: none;
        }
        .btn.ghost:hover {
          background: var(--red);
          color: #fff;
          transform: none;
        }
        .nav-order {
          display: none;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 44px;
          height: 42px;
          background: transparent;
          border: 2px solid var(--yellow);
          border-radius: 10px;
          cursor: pointer;
          padding: 0 9px;
        }
        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: #fff;
          border-radius: 2px;
        }

        /* HERO */
        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(2.5rem, 6vw, 5rem) 1.5rem;
        }
        .eyebrow {
          display: inline-block;
          background: var(--green);
          color: #fff;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          margin-bottom: 1.4rem;
        }
        .hero h1 {
          font-size: clamp(3rem, 8vw, 5.5rem);
          line-height: 0.95;
          color: var(--charcoal);
          margin-bottom: 1.2rem;
        }
        .hl {
          color: var(--red);
        }
        .hero-text {
          max-width: 480px;
          line-height: 1.7;
          opacity: 0.8;
          margin-bottom: 2rem;
        }
        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .hero-stats {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .hero-stats strong {
          font-family: "Bebas Neue", sans-serif;
          font-size: 1.8rem;
          color: var(--red);
          display: block;
          line-height: 1;
        }
        .hero-stats span {
          font-size: 0.82rem;
          opacity: 0.7;
        }
        .hero-right {
          position: relative;
        }
        .hero-right img {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 24px 60px rgba(143, 26, 21, 0.3);
          border: 6px solid #fff;
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }
        .badge {
          position: absolute;
          bottom: -18px;
          left: -18px;
          background: var(--green);
          color: #fff;
          padding: 0.7rem 1.2rem;
          border-radius: 14px;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 10px 24px rgba(40, 90, 36, 0.4);
          transform: rotate(-5deg);
        }

        /* STRIPE */
        .stripe {
          background: var(--green);
          color: var(--yellow);
          font-family: "Bebas Neue", sans-serif;
          font-size: 1.3rem;
          letter-spacing: 3px;
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          padding: 0.7rem;
          overflow: hidden;
          white-space: nowrap;
        }
        .stripe span {
          color: #fff;
        }

        /* HEAD */
        .head {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 3rem;
        }
        .head h2 {
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          color: var(--red);
        }
        .head p {
          opacity: 0.75;
          margin-top: 0.4rem;
        }
        .head.light h2 {
          color: var(--yellow);
        }
        .head.light p {
          color: #fff;
          opacity: 0.9;
        }

        /* FEATURED */
        .featured {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 1.5rem;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 220px;
          gap: 16px;
        }
        .card {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          box-shadow: 0 14px 30px rgba(36, 22, 16, 0.15);
        }
        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .card:hover img {
          transform: scale(1.08);
        }
        .card figcaption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1.2rem 1rem 0.9rem;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 500;
          background: linear-gradient(transparent, rgba(36, 22, 16, 0.85));
        }
        .c-0 {
          grid-column: span 3;
          grid-row: span 2;
        }
        .c-1 {
          grid-column: span 3;
        }
        .c-2 {
          grid-column: span 3;
        }
        .c-3 {
          grid-column: span 4;
        }
        .c-4 {
          grid-column: span 2;
        }

        /* SPECIALS */
        .specials {
          background: linear-gradient(160deg, var(--red), var(--red-deep));
          padding: 5rem 1.5rem;
        }
        .specials-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.4rem;
        }
        .special-card {
          background: var(--cream);
          border-radius: 18px;
          padding: 2rem 1.5rem;
          text-align: center;
          border-bottom: 5px solid var(--yellow);
          transition: transform 0.2s;
        }
        .special-card:hover {
          transform: translateY(-6px);
        }
        .chile {
          font-size: 1.8rem;
          display: block;
          margin-bottom: 0.6rem;
        }
        .special-card h3 {
          color: var(--red);
          font-size: 1.6rem;
          margin-bottom: 0.6rem;
        }
        .special-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          opacity: 0.85;
        }

        /* STORY */
        .story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 1.5rem;
        }
        .tag {
          display: inline-block;
          background: var(--yellow);
          color: var(--red-deep);
          padding: 0.35rem 1rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .story-body h2 {
          font-size: clamp(2.6rem, 5vw, 4rem);
          color: var(--charcoal);
          margin-bottom: 1.2rem;
        }
        .story-body p {
          line-height: 1.9;
          opacity: 0.82;
          margin-bottom: 2rem;
        }
        .story-imgs {
          position: relative;
          height: 460px;
        }
        .story-imgs img {
          position: absolute;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 20px 50px rgba(36, 22, 16, 0.25);
          border: 5px solid #fff;
        }
        .i1 {
          width: 70%;
          height: 70%;
          top: 0;
          left: 0;
          z-index: 2;
        }
        .i2 {
          width: 62%;
          height: 62%;
          bottom: 0;
          right: 0;
        }

        /* TESTIMONIALS */
        .testi {
          background: var(--green-deep);
          padding: 5rem 1.5rem;
        }
        .testi .head h2 {
          color: var(--yellow);
        }
        .testi-grid {
          max-width: 1150px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6rem;
        }
        blockquote {
          background: var(--cream);
          border-radius: 18px;
          padding: 2rem 1.8rem;
        }
        .stars {
          color: var(--orange);
          letter-spacing: 2px;
          margin-bottom: 1rem;
        }
        blockquote p {
          line-height: 1.7;
          font-size: 0.93rem;
          opacity: 0.85;
          margin-bottom: 1.6rem;
        }
        blockquote footer {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--red);
          color: #fff;
          display: grid;
          place-items: center;
          font-family: "Bebas Neue", sans-serif;
          font-size: 1.4rem;
        }
        blockquote footer strong {
          display: block;
        }
        blockquote footer em {
          font-size: 0.8rem;
          color: var(--red);
          font-style: normal;
        }

        /* CONTACT */
        .contact {
          padding: 5rem 1.5rem;
        }
        .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 2rem;
          background: var(--cream);
        }
        .contact-info h2 {
          font-size: clamp(2.2rem, 4vw, 3rem);
          color: var(--red);
          margin-bottom: 1.6rem;
        }
        .contact-info ul {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .contact-info li {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .contact-info li span {
          font-size: 1.5rem;
        }
        .contact-info li div {
          display: flex;
          flex-direction: column;
          line-height: 1.5;
        }
        .contact-info li strong {
          color: var(--red);
        }
        .socials {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-top: 1.8rem;
        }
        .socials span {
          background: var(--green);
          color: #fff;
          padding: 0.4rem 1rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .contact-hours {
          background: var(--charcoal);
          color: var(--cream);
          border-radius: 18px;
          padding: 2rem;
        }
        .contact-hours h3 {
          color: var(--yellow);
          font-size: 1.6rem;
          margin-bottom: 1.2rem;
        }
        .contact-hours ul {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .contact-hours li {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 246, 234, 0.12);
          font-size: 0.88rem;
        }

        /* FOOTER */
        .footer {
          background: var(--red-deep);
          color: #fff;
          text-align: center;
          padding: 3rem 1.5rem;
        }
        .footer img {
          width: 90px;
          margin: 0 auto 1.2rem;
          border-radius: 10px;
          border: 2px solid var(--yellow);
        }
        .footer p {
          font-size: 0.82rem;
          opacity: 0.8;
          margin-bottom: 1rem;
        }
        .back {
          color: var(--yellow);
          font-size: 0.85rem;
          font-weight: 600;
          border-bottom: 1px solid var(--yellow);
          padding-bottom: 2px;
        }

        /* ZOOMABLE IMAGES */
        .zoomable {
          cursor: zoom-in;
        }

        /* LIGHTBOX */
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(20, 8, 6, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4vw;
          animation: fade 0.2s ease;
          cursor: zoom-out;
        }
        .lightbox img {
          max-width: 96vw;
          max-height: 90vh;
          width: auto;
          height: auto;
          border-radius: 14px;
          border: 4px solid var(--yellow);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);
          cursor: default;
          animation: pop 0.22s ease;
        }
        .lightbox-close {
          position: fixed;
          top: 18px;
          right: 22px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: var(--yellow);
          color: var(--red-deep);
          font-size: 1.9rem;
          line-height: 1;
          font-weight: 700;
          cursor: pointer;
        }
        @keyframes fade {
          from {
            opacity: 0;
          }
        }
        @keyframes pop {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
        }

        @media (max-width: 860px) {
          .hamburger {
            display: flex;
          }
          .btn {
            display: none;
          }
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            margin-left: 0;
            flex-direction: column;
            gap: 0;
            background: var(--red-deep);
            box-shadow: 0 12px 24px rgba(143, 26, 21, 0.4);
            padding: 0.5rem 1.5rem 1rem;
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
            transition: opacity 0.2s ease, transform 0.2s ease;
          }
          .nav-links.open {
            opacity: 1;
            transform: none;
            pointer-events: auto;
          }
          .nav-links a {
            padding: 0.9rem 0;
            font-size: 1.05rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }
          .nav-order {
            display: block;
            color: var(--yellow) !important;
            font-weight: 700;
            border-bottom: none !important;
          }
          .hero {
            grid-template-columns: 1fr;
          }
          .hero-right {
            order: -1;
          }
          .gallery {
            grid-template-columns: repeat(2, 1fr);
          }
          .c-0,
          .c-1,
          .c-2,
          .c-3,
          .c-4 {
            grid-column: span 2;
            grid-row: span 1;
          }
          .story {
            grid-template-columns: 1fr;
          }
          .story-imgs {
            height: 360px;
          }
          .testi-grid {
            grid-template-columns: 1fr;
          }
          .contact-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
