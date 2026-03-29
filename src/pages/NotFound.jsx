import { NotFoundLogo } from '../components/NotFoundLogo.jsx'
import NotFoundGame from '../components/NotFoundGame.jsx'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__bg" aria-hidden="true" />
      <div className="not-found__glow not-found__glow--1" aria-hidden="true" />
      <div className="not-found__glow not-found__glow--2" aria-hidden="true" />

      <div className="not-found__frame">
        <div className="not-found__card">
          <div className="not-found__hero-row">
            <div className="not-found__logo-wrap">
              <NotFoundLogo className="not-found__logo" />
            </div>
            <p className="not-found__code" aria-hidden="true">
              404
            </p>
          </div>

          <div className="not-found__game-section">
            <p className="not-found-game__eyebrow">While you&apos;re here</p>
            <NotFoundGame />
          </div>

          <div className="not-found__copy-block">
            <h1 id="not-found-title" className="not-found__title">
              <span className="not-found__sr-only">404. </span>
              This page took a little detour
            </h1>
            <p className="not-found__lede">
              Nothing lives at this address right now. If you were looking for
              something specific, it may have moved—or this corner of the web is
              simply resting.
            </p>
          </div>

          <p className="not-found__hint">Thanks for stopping by</p>
        </div>
      </div>
    </main>
  )
}
