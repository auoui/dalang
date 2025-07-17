import Link from 'next/link';

export default function Home() {
  return (
    <div className="startseite">
      <header className="menu">
        <nav>
          <Link href="/">Start</Link>
          <Link href="/heldenreise">Held*innenreise</Link>
          <Link href="/angebote">Angebote</Link>
          <Link href="/komplimente">Komplimente</Link>
          <Link href="/mehr-ueber-mich">Fine</Link>
        </nav>
      </header>

      <div className="ueber-mich">
        <p className="zitat">„Selbsterfahrungsprozesse zu unterstützen bedeutet für mich, deutlich werden zu lassen, wie du dir selbst die Erlaubnis geben kannst, dein Leben so zu führen, wie du es möchtest."</p>
      </div>

      <div className="angebote">
        <Link href="/aktuelles"><div className="aktuelles">Aktuelles</div></Link>
        <Link href="/heldenreise"><div className="heldenreise">Held*innenreise</div></Link>
        <Link href="/einzel-sessions"><div className="einzel">Einzel-Sessions Gestalttherapie i.A.</div></Link>
        <Link href="/komplimente"><div className="komplimente">Tagesseminare: Komplimente machen</div></Link>
        <Link href="/was-will-ich"><div className="waswillich">Was will ich wirklich?</div></Link>
      </div>

      <img src="/portrait-placeholder.jpg" alt="Fine" className="portrait" />

      <footer>
        <p>Kontakt & Anmeldung (<Link href="/kontakt">zur Seite</Link>)</p>
        <p>Fine Belger Platzhalter</p>
        <p>Bald auch mit Anmeldeformular – oder schreibe an <a href="mailto:fine.belger@posteo.de">fine.belger@posteo.de</a></p>
      </footer>
    </div>
  );
}