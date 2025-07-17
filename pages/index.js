
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
          <Link href="/mehr-ueber-mich">Mehr über mich</Link>
        </nav>
      </header>

      <div className="ueber-mich">
        <h2>Über mich</h2>
        <p className="zitat">„Meine Heldenreise hat mir deutlich gemacht, weshalb ich in meinem Leben bisher so viele unterschiedliche Dinge lernen wollte. Ich habe während meiner Reise das letzte Puzzleteil gefunden, welches mir noch gefehlt hatte, um alles miteinander zu verbinden. Die Heldenreise ist für mich, mein inneres Strahlen in Verbindung mit anderen zu bringen und die Erfahrung, dass Verbindung auch Vertrauen bedeuten kann. Selbsterfahrungsprozesse zu unterstützen bedeutet für mich, deutlich w...
      </div>

      <img src="/portrait-placeholder.jpg" alt="Fine" className="portrait" />

      <div className="angebote">
        <Link href="/aktuelles"><div className="aktuelles">Aktuelles</div></Link>
        <Link href="/heldenreise"><div className="heldenreise">Held*innenreise</div></Link>
        <Link href="/einzel-sessions"><div className="einzel">Einzel-Sessions Gestalttherapie i.A.</div></Link>
        <Link href="/komplimente"><div className="komplimente">Tagesseminare: Komplimente machen</div></Link>
        <Link href="/was-will-ich"><div className="waswillich">Was will ich wirklich?</div></Link>
      </div>

      <footer>
        <p>Kontakt & Anmeldung (<Link href="/kontakt">zur Seite</Link>)</p>
        <p>Fine Belger Platzhalter</p>
        <p>Bald auch mit Anmeldeformular – oder schreibe an <a href="mailto:fine.belger@posteo.de">fine.belger@posteo.de</a></p>
      </footer>
    </div>
  );
}
