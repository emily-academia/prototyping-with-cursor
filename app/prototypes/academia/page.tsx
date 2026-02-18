"use client";

/**
 * Academia Design System — Documentation & Component Showcase
 *
 * A scholarly design language for academic and educational products.
 * This page documents all components, tokens, and usage guidelines.
 */

import styles from "./styles.module.css";
import ac from "./academia.module.css";
import {
  cormorantGaramond,
  playfairDisplay,
  lora,
  instrumentSans,
} from "../../fonts";

/* ─────────────────────────────────────
   Color palette data
───────────────────────────────────── */
const brandColors = [
  { name: "Navy", hex: "#1e2d5a", cssVar: "--ac-navy", light: false },
  { name: "Navy Light", hex: "#2d4080", cssVar: "--ac-navy-light", light: false },
  { name: "Navy Pale", hex: "#e8ecf5", cssVar: "--ac-navy-pale", light: true },
  { name: "Crimson", hex: "#8b1a1a", cssVar: "--ac-crimson", light: false },
  { name: "Crimson Pale", hex: "#fceaea", cssVar: "--ac-crimson-pale", light: true },
  { name: "Forest", hex: "#2d5a3d", cssVar: "--ac-forest", light: false },
  { name: "Forest Pale", hex: "#e8f4ed", cssVar: "--ac-forest-pale", light: true },
  { name: "Gold", hex: "#c4962b", cssVar: "--ac-gold", light: false },
  { name: "Gold Pale", hex: "#fdf5e0", cssVar: "--ac-gold-pale", light: true },
];

const neutralColors = [
  { name: "Cream", hex: "#f9f5ec", cssVar: "--ac-cream", light: true },
  { name: "Parchment", hex: "#ede7d7", cssVar: "--ac-parchment", light: true },
  { name: "Ink", hex: "#1a1a2e", cssVar: "--ac-ink", light: false },
  { name: "Slate", hex: "#4a5568", cssVar: "--ac-slate", light: false },
  { name: "Muted", hex: "#8896a8", cssVar: "--ac-muted", light: false },
  { name: "Border", hex: "#ddd5bf", cssVar: "--ac-border", light: true },
];

/* ─────────────────────────────────────
   Table sample data
───────────────────────────────────── */
const tableData = [
  { course: "PHIL 101", title: "Introduction to Logic", credits: 3, status: "Open", term: "Spring 2026" },
  { course: "HIST 240", title: "Early Modern Europe", credits: 3, status: "Open", term: "Spring 2026" },
  { course: "CHEM 310", title: "Organic Chemistry I", credits: 4, status: "Waitlist", term: "Spring 2026" },
  { course: "ENGL 485", title: "Victorian Literature", credits: 3, status: "Closed", term: "Spring 2026" },
];

const statusBadge = (status: string) => {
  if (status === "Open") return `${ac.badge} ${ac.badgeForest} ${ac.badgeDot}`;
  if (status === "Waitlist") return `${ac.badge} ${ac.badgeGold} ${ac.badgeDot}`;
  return `${ac.badge} ${ac.badgeCrimson} ${ac.badgeDot}`;
};

/* ─────────────────────────────────────
   Component
───────────────────────────────────── */
export default function AcademiaDesignSystem() {
  return (
    <div className={`${styles.page} ${instrumentSans.className}`}>

      {/* ── Sidebar ── */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <span className={`${styles.logoMark} ${cormorantGaramond.className}`}>
            A
          </span>
          <span className={styles.logoName}>Academia</span>
          <span className={styles.logoTagline}>Design System</span>
        </div>

        <nav className={styles.sidebarNav}>
          <div className={styles.navGroup}>
            <span className={styles.navGroupLabel}>Foundation</span>
            <a href="#colors" className={styles.navLink}>
              <span className={styles.navIcon}>◈</span> Colors
            </a>
            <a href="#typography" className={styles.navLink}>
              <span className={styles.navIcon}>T</span> Typography
            </a>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navGroupLabel}>Components</span>
            <a href="#buttons" className={styles.navLink}>
              <span className={styles.navIcon}>◻</span> Buttons
            </a>
            <a href="#cards" className={styles.navLink}>
              <span className={styles.navIcon}>▭</span> Cards
            </a>
            <a href="#badges" className={styles.navLink}>
              <span className={styles.navIcon}>◇</span> Badges
            </a>
            <a href="#forms" className={styles.navLink}>
              <span className={styles.navIcon}>≡</span> Form Elements
            </a>
            <a href="#alerts" className={styles.navLink}>
              <span className={styles.navIcon}>!</span> Alerts
            </a>
            <a href="#tables" className={styles.navLink}>
              <span className={styles.navIcon}>⊞</span> Tables
            </a>
          </div>
        </nav>

        <div className={styles.sidebarFooter}>
          <span className={styles.versionBadge}>v 1.0.0</span>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <p className={styles.heroEyebrow}>Design System Documentation</p>
          <h1 className={`${styles.heroTitle} ${cormorantGaramond.className}`}>
            Academia Design System
          </h1>
          <p className={`${styles.heroSubtitle} ${lora.className}`}>
            A scholarly design language built for academic and educational
            products. Rooted in tradition, crafted for clarity.
          </p>
          <div className={styles.heroMeta}>
            <span className={styles.heroPill}>Scientia est Lux</span>
            <span className={styles.heroStat}>
              <span className={styles.heroStatNum}>8</span> component types
            </span>
            <span className={styles.heroStat}>
              <span className={styles.heroStatNum}>15</span> color tokens
            </span>
            <span className={styles.heroStat}>
              <span className={styles.heroStatNum}>4</span> typefaces
            </span>
          </div>
        </section>

        {/* ─── Colors ─────────────────────── */}
        <section id="colors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${playfairDisplay.className}`}>
              Colors
            </h2>
          </div>
          <p className={`${styles.sectionDescription} ${lora.className}`}>
            The Academia palette draws from the traditions of great scholarly
            institutions — deep navy for authority, crimson for excellence,
            forest green for wisdom, and old gold for achievement.
          </p>

          <p className={styles.subsectionTitle}>Brand Palette</p>
          <div className={styles.colorGrid}>
            {brandColors.map((color) => (
              <div key={color.hex} className={styles.colorSwatch}>
                <div
                  className={styles.swatchColor}
                  style={{ background: color.hex }}
                />
                <div className={styles.swatchInfo}>
                  <span className={styles.swatchName}>{color.name}</span>
                  <span className={styles.swatchHex}>{color.hex}</span>
                  <span className={styles.swatchVar}>{color.cssVar}</span>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.subsectionTitle}>Neutral Palette</p>
          <div className={styles.colorGrid}>
            {neutralColors.map((color) => (
              <div key={color.hex} className={styles.colorSwatch}>
                <div
                  className={styles.swatchColor}
                  style={{ background: color.hex }}
                />
                <div className={styles.swatchInfo}>
                  <span className={styles.swatchName}>{color.name}</span>
                  <span className={styles.swatchHex}>{color.hex}</span>
                  <span className={styles.swatchVar}>{color.cssVar}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Typography ──────────────────── */}
        <section id="typography" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${playfairDisplay.className}`}>
              Typography
            </h2>
          </div>
          <p className={`${styles.sectionDescription} ${lora.className}`}>
            Four typefaces form a complete and harmonious system — from grand
            display headings to precise UI labels. Each serves a distinct
            purpose in the scholarly hierarchy.
          </p>

          <div className={styles.typeScale}>
            {/* Display */}
            <div className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <span className={styles.typeMetaName}>Display</span>
                <span className={styles.typeMetaDetails}>
                  Cormorant Garamond{"\n"}72px / 400
                </span>
              </div>
              <div
                className={`${styles.typeSample} ${cormorantGaramond.className}`}
                style={{ fontSize: "3.5rem", lineHeight: 1.1 }}
              >
                Advancing Knowledge
              </div>
            </div>

            {/* H1 */}
            <div className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <span className={styles.typeMetaName}>Heading 1</span>
                <span className={styles.typeMetaDetails}>
                  Playfair Display{"\n"}48px / 500
                </span>
              </div>
              <div
                className={`${styles.typeSample} ${playfairDisplay.className}`}
                style={{ fontSize: "2.5rem", fontWeight: 500, lineHeight: 1.2 }}
              >
                Department of Sciences
              </div>
            </div>

            {/* H2 */}
            <div className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <span className={styles.typeMetaName}>Heading 2</span>
                <span className={styles.typeMetaDetails}>
                  Playfair Display{"\n"}36px / 500
                </span>
              </div>
              <div
                className={`${styles.typeSample} ${playfairDisplay.className}`}
                style={{ fontSize: "1.875rem", fontWeight: 500 }}
              >
                Research Publications
              </div>
            </div>

            {/* H3 */}
            <div className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <span className={styles.typeMetaName}>Heading 3</span>
                <span className={styles.typeMetaDetails}>
                  Playfair Display{"\n"}24px / 500
                </span>
              </div>
              <div
                className={`${styles.typeSample} ${playfairDisplay.className}`}
                style={{ fontSize: "1.5rem", fontWeight: 500 }}
              >
                Course Catalog — Spring Term
              </div>
            </div>

            {/* Body Large */}
            <div className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <span className={styles.typeMetaName}>Body Large</span>
                <span className={styles.typeMetaDetails}>
                  Lora{"\n"}18px / 400
                </span>
              </div>
              <div
                className={`${styles.typeSample} ${lora.className}`}
                style={{ fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "480px" }}
              >
                The pursuit of knowledge requires both rigor and imagination.
                Our curriculum is designed to challenge and inspire.
              </div>
            </div>

            {/* Body */}
            <div className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <span className={styles.typeMetaName}>Body</span>
                <span className={styles.typeMetaDetails}>
                  Lora{"\n"}16px / 400
                </span>
              </div>
              <div
                className={`${styles.typeSample} ${lora.className}`}
                style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: "480px" }}
              >
                Students are encouraged to engage critically with primary sources,
                participate in seminars, and contribute original research.
              </div>
            </div>

            {/* UI / Label */}
            <div className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <span className={styles.typeMetaName}>UI / Label</span>
                <span className={styles.typeMetaDetails}>
                  Instrument Sans{"\n"}13px / 600
                </span>
              </div>
              <div
                className={`${styles.typeSample} ${instrumentSans.className}`}
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#4a5568",
                }}
              >
                Course Number · Credits · Term · Section
              </div>
            </div>
          </div>
        </section>

        {/* ─── Buttons ──────────────────────── */}
        <section id="buttons" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${playfairDisplay.className}`}>
              Buttons
            </h2>
          </div>
          <p className={`${styles.sectionDescription} ${lora.className}`}>
            Five button variants cover every action in the system. Use Primary
            for the main call-to-action, Secondary for supporting actions, and
            Ghost for low-emphasis interactions.
          </p>

          <p className={styles.subsectionTitle}>Variants</p>
          <div className={styles.preview}>
            <div className={styles.previewRow}>
              <button className={`${ac.btn} ${ac.btnPrimary}`}>Enroll Now</button>
              <button className={`${ac.btn} ${ac.btnSecondary}`}>Save Draft</button>
              <button className={`${ac.btn} ${ac.btnOutline}`}>View Syllabus</button>
              <button className={`${ac.btn} ${ac.btnGhost}`}>Dismiss</button>
              <button className={`${ac.btn} ${ac.btnDanger}`}>Withdraw</button>
            </div>
          </div>

          <p className={styles.subsectionTitle}>Sizes</p>
          <div className={styles.preview}>
            <div className={styles.previewRow}>
              <button className={`${ac.btn} ${ac.btnPrimary} ${ac.btnSm}`}>Small</button>
              <button className={`${ac.btn} ${ac.btnPrimary}`}>Default</button>
              <button className={`${ac.btn} ${ac.btnPrimary} ${ac.btnLg}`}>Large</button>
            </div>
          </div>

          <p className={styles.subsectionTitle}>Token Reference</p>
          <ul className={styles.specList}>
            <li className={styles.specItem}>
              <span className={styles.specKey}>Border radius</span>
              <span className={styles.specValue}>3px</span>
            </li>
            <li className={styles.specItem}>
              <span className={styles.specKey}>Default padding</span>
              <span className={styles.specValue}>0.6rem 1.375rem</span>
            </li>
            <li className={styles.specItem}>
              <span className={styles.specKey}>Font size</span>
              <span className={styles.specValue}>0.875rem</span>
            </li>
            <li className={styles.specItem}>
              <span className={styles.specKey}>Font weight</span>
              <span className={styles.specValue}>500</span>
            </li>
            <li className={styles.specItem}>
              <span className={styles.specKey}>Transition</span>
              <span className={styles.specValue}>0.18s ease</span>
            </li>
          </ul>
        </section>

        {/* ─── Cards ───────────────────────── */}
        <section id="cards" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${playfairDisplay.className}`}>
              Cards
            </h2>
          </div>
          <p className={`${styles.sectionDescription} ${lora.className}`}>
            Cards group related content and actions. The base card is clean and
            restrained; the accent variant draws attention to priority content;
            the quote card gives voice to testimonials and citations.
          </p>

          <p className={styles.subsectionTitle}>Base Card</p>
          <div className={styles.preview}>
            <div className={styles.previewGrid2}>
              {/* Standard */}
              <div className={ac.card}>
                <span className={`${ac.cardSubtitle} ${instrumentSans.className}`}>
                  Philosophy
                </span>
                <h3 className={`${ac.cardTitle} ${playfairDisplay.className}`}>
                  Ethics in the Modern World
                </h3>
                <p className={`${ac.cardBody} ${lora.className}`}>
                  An exploration of contemporary ethical dilemmas through the
                  lens of classical and modern moral philosophy.
                </p>
                <div className={ac.cardFooter}>
                  <span className={`${ac.badge} ${ac.badgeNavy}`}>3 Credits</span>
                  <button className={`${ac.btn} ${ac.btnOutline} ${ac.btnSm}`}>
                    View Course
                  </button>
                </div>
              </div>

              {/* Elevated */}
              <div className={`${ac.card} ${ac.cardElevated}`}>
                <span className={`${ac.cardSubtitle} ${instrumentSans.className}`}>
                  Featured Research
                </span>
                <h3 className={`${ac.cardTitle} ${playfairDisplay.className}`}>
                  The Archaeology of Memory
                </h3>
                <p className={`${ac.cardBody} ${lora.className}`}>
                  How material culture shapes collective memory and identity
                  across generations in post-colonial societies.
                </p>
                <div className={ac.cardFooter}>
                  <span className={`${ac.badge} ${ac.badgeGold}`}>New Publication</span>
                  <button className={`${ac.btn} ${ac.btnPrimary} ${ac.btnSm}`}>
                    Read Paper
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.subsectionTitle}>Accent Cards</p>
          <div className={styles.preview}>
            <div className={styles.previewGrid2}>
              <div className={`${ac.card} ${ac.cardAccent}`}>
                <span className={`${ac.cardSubtitle} ${instrumentSans.className}`}>
                  Announcement
                </span>
                <h3 className={`${ac.cardTitle} ${playfairDisplay.className}`}>
                  Application Deadline Extended
                </h3>
                <p className={`${ac.cardBody} ${lora.className}`}>
                  The graduate admissions deadline has been extended to
                  March 31st for all doctoral programs.
                </p>
              </div>
              <div className={`${ac.card} ${ac.cardAccentGold}`}>
                <span className={`${ac.cardSubtitle} ${instrumentSans.className}`}>
                  Opportunity
                </span>
                <h3 className={`${ac.cardTitle} ${playfairDisplay.className}`}>
                  Harrison Fellowship 2026
                </h3>
                <p className={`${ac.cardBody} ${lora.className}`}>
                  A prestigious fellowship supporting independent research in
                  the humanities. Award value: $24,000.
                </p>
              </div>
            </div>
          </div>

          <p className={styles.subsectionTitle}>Quote Card</p>
          <div className={styles.preview}>
            <div style={{ maxWidth: "520px" }}>
              <div className={ac.cardQuote}>
                <span className={`${ac.cardQuoteMark} ${cormorantGaramond.className}`}>
                  &ldquo;
                </span>
                <p className={`${ac.cardQuoteText} ${lora.className}`}>
                  The function of education is to teach one to think intensively
                  and to think critically. Intelligence plus character — that is
                  the goal of true education.
                </p>
                <p className={`${ac.cardQuoteAttribution} ${instrumentSans.className}`}>
                  — Martin Luther King Jr.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Badges ──────────────────────── */}
        <section id="badges" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${playfairDisplay.className}`}>
              Badges
            </h2>
          </div>
          <p className={`${styles.sectionDescription} ${lora.className}`}>
            Badges communicate status, category, or metadata at a glance. Use
            color intentionally — navy for classification, green for active,
            crimson for alerts, gold for highlights.
          </p>

          <p className={styles.subsectionTitle}>Color Variants</p>
          <div className={styles.preview}>
            <div className={styles.previewRow}>
              <span className={`${ac.badge} ${ac.badgeNavy}`}>Philosophy</span>
              <span className={`${ac.badge} ${ac.badgeCrimson}`}>Closed</span>
              <span className={`${ac.badge} ${ac.badgeForest}`}>Open</span>
              <span className={`${ac.badge} ${ac.badgeGold}`}>Waitlist</span>
              <span className={`${ac.badge} ${ac.badgeSlate}`}>Elective</span>
              <span className={`${ac.badge} ${ac.badgeOutline}`}>3 Credits</span>
            </div>
          </div>

          <p className={styles.subsectionTitle}>With Status Dot</p>
          <div className={styles.preview}>
            <div className={styles.previewRow}>
              <span className={`${ac.badge} ${ac.badgeForest} ${ac.badgeDot}`}>
                Enrollment Open
              </span>
              <span className={`${ac.badge} ${ac.badgeGold} ${ac.badgeDot}`}>
                Under Review
              </span>
              <span className={`${ac.badge} ${ac.badgeCrimson} ${ac.badgeDot}`}>
                Registration Closed
              </span>
              <span className={`${ac.badge} ${ac.badgeNavy} ${ac.badgeDot}`}>
                In Progress
              </span>
            </div>
          </div>

          <p className={styles.subsectionTitle}>Discipline Tags</p>
          <div className={styles.preview}>
            <div className={styles.previewRow}>
              {[
                "Humanities", "Sciences", "Social Sciences", "Arts",
                "Engineering", "Law", "Medicine", "Economics",
              ].map((d) => (
                <span key={d} className={`${ac.badge} ${ac.badgeOutline}`}>
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Forms ───────────────────────── */}
        <section id="forms" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${playfairDisplay.className}`}>
              Form Elements
            </h2>
          </div>
          <p className={`${styles.sectionDescription} ${lora.className}`}>
            Clean, legible form controls with consistent focus states. Labels
            use strong weight for clarity; hints guide the user; error states
            use crimson to draw attention without alarm.
          </p>

          <p className={styles.subsectionTitle}>Inputs</p>
          <div className={styles.preview}>
            <div className={styles.previewGrid2}>
              {/* Default */}
              <div className={ac.formGroup}>
                <label className={`${ac.label} ${ac.labelRequired}`}>
                  Student ID
                </label>
                <input
                  className={ac.input}
                  type="text"
                  placeholder="e.g. S2026-0184"
                />
                <span className={ac.hint}>Enter your 10-digit student number.</span>
              </div>

              {/* Error state */}
              <div className={ac.formGroup}>
                <label className={`${ac.label} ${ac.labelRequired}`}>
                  Email Address
                </label>
                <input
                  className={`${ac.input} ${ac.inputError}`}
                  type="email"
                  defaultValue="not-valid"
                />
                <span className={`${ac.hint} ${ac.hintError}`}>
                  Please enter a valid university email address.
                </span>
              </div>

              {/* Select */}
              <div className={ac.formGroup}>
                <label className={ac.label}>Department</label>
                <select className={ac.select}>
                  <option>Select a department…</option>
                  <option>Philosophy</option>
                  <option>History</option>
                  <option>Chemistry</option>
                  <option>English Literature</option>
                </select>
              </div>

              {/* Textarea */}
              <div className={ac.formGroup}>
                <label className={ac.label}>Statement of Purpose</label>
                <textarea
                  className={ac.textarea}
                  placeholder="Briefly describe your research interests…"
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <label className={ac.checkboxWrapper}>
                <input type="checkbox" className={ac.checkbox} defaultChecked />
                <span className={`${ac.checkboxLabel} ${lora.className}`}>
                  I agree to the Academic Integrity Policy
                </span>
              </label>
              <label className={ac.checkboxWrapper}>
                <input type="checkbox" className={ac.checkbox} />
                <span className={`${ac.checkboxLabel} ${lora.className}`}>
                  Subscribe to departmental announcements
                </span>
              </label>
              <label className={ac.checkboxWrapper}>
                <input type="checkbox" className={ac.checkbox} />
                <span className={`${ac.checkboxLabel} ${lora.className}`}>
                  Opt in to research study participation
                </span>
              </label>
            </div>
          </div>
        </section>

        {/* ─── Alerts ──────────────────────── */}
        <section id="alerts" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${playfairDisplay.className}`}>
              Alerts
            </h2>
          </div>
          <p className={`${styles.sectionDescription} ${lora.className}`}>
            Alerts communicate system messages with appropriate urgency. Use
            Info for guidance, Success for confirmations, Warning for caution,
            and Danger for critical errors or time-sensitive notices.
          </p>

          <div className={styles.preview}>
            <div className={styles.previewStack}>
              <div className={`${ac.alert} ${ac.alertInfo}`}>
                <span className={ac.alertIcon}>ℹ</span>
                <div className={ac.alertContent}>
                  <p className={`${ac.alertTitle} ${instrumentSans.className}`}>
                    Registration Opens February 24
                  </p>
                  <p className={`${ac.alertBody} ${lora.className}`}>
                    Course enrollment for the Spring 2026 term begins at 8:00 AM.
                    Priority registration applies to students with 90+ credits.
                  </p>
                </div>
              </div>

              <div className={`${ac.alert} ${ac.alertSuccess}`}>
                <span className={ac.alertIcon}>✓</span>
                <div className={ac.alertContent}>
                  <p className={`${ac.alertTitle} ${instrumentSans.className}`}>
                    Application Submitted Successfully
                  </p>
                  <p className={`${ac.alertBody} ${lora.className}`}>
                    Your application has been received. You will be notified by
                    email within 6–8 weeks.
                  </p>
                </div>
              </div>

              <div className={`${ac.alert} ${ac.alertWarning}`}>
                <span className={ac.alertIcon}>⚠</span>
                <div className={ac.alertContent}>
                  <p className={`${ac.alertTitle} ${instrumentSans.className}`}>
                    Prerequisite Not Satisfied
                  </p>
                  <p className={`${ac.alertBody} ${lora.className}`}>
                    CHEM 310 requires completion of CHEM 201. Please contact your
                    advisor before proceeding with enrollment.
                  </p>
                </div>
              </div>

              <div className={`${ac.alert} ${ac.alertDanger}`}>
                <span className={ac.alertIcon}>✕</span>
                <div className={ac.alertContent}>
                  <p className={`${ac.alertTitle} ${instrumentSans.className}`}>
                    Academic Hold — Action Required
                  </p>
                  <p className={`${ac.alertBody} ${lora.className}`}>
                    An outstanding balance of $840 is preventing registration.
                    Please visit the Bursar&apos;s Office or settle online before the
                    deadline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Tables ──────────────────────── */}
        <section id="tables" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${playfairDisplay.className}`}>
              Tables
            </h2>
          </div>
          <p className={`${styles.sectionDescription} ${lora.className}`}>
            Tables display structured data with a strong navy header for
            hierarchy and alternating hover states for readability. Pair with
            badges to communicate status inline.
          </p>

          <div className={styles.preview} style={{ padding: 0, overflow: "hidden" }}>
            <div className={ac.tableWrapper}>
              <table className={ac.table}>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Title</th>
                    <th>Credits</th>
                    <th>Status</th>
                    <th>Term</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.course}>
                      <td>
                        <span className={styles.code}>{row.course}</span>
                      </td>
                      <td className={lora.className}>{row.title}</td>
                      <td>{row.credits}</td>
                      <td>
                        <span className={statusBadge(row.status)}>
                          {row.status}
                        </span>
                      </td>
                      <td style={{ color: "#8896a8" }}>{row.term}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
