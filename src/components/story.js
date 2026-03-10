import React, { useEffect, useRef } from 'react'
import './story.css'
import pic1 from '../assets/duyphuong2.jpg'
import pic2 from '../assets/duyphuong3.jpg'
import pic3 from '../assets/duyphuong4.jpg'
import pic4 from '../assets/duyphuong5.jpg'
import fin1 from '../assets/fin.jpg'
import fin2 from '../assets/fin2.jpg'

function Story() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    sectionRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  return (
    <div className="story-root" id="Story">

      {/* ── HERO ── */}
      <div className="story-hero">
        <h1 className="story-main-title">Our Love Story</h1>
        <p className="story-subtitle">The One That Wasn't Supposed to Happen (But Did Anyway)</p>
      </div>

      <div className="story-divider">
        <div className="story-divider-line" />
        <span className="story-divider-ornament">I.</span>
        <div className="story-divider-line" />
      </div>

      {/* ── BLOCK A: Intro ── */}
      <div className="block-intro fade-up" ref={addRef}>
        <p className="chapter-label">How It All Began</p>
        <div className="story-text">
          <p>
            Long before Duy and Phuong ever locked eyes, fate was already pulling some serious strings—through our parents, of course! Their friend group was so tight that both sets of parents loved joking about being "in-laws" someday, mostly because Phuong has an older sister. They'd tease endlessly, but let's be honest: no one actually thought it'd involve the baby of the family and the guy eight years older!
          </p>
          <p>
            When people ask how we met, especially eyeing that not-so-common age gap among our friends, we usually grin and say, "Oh, we weren't supposed to end up together—it all started with a dramatic love triangle!" (Spoiler: The "triangle" was just parental matchmaking dreams gone wild.)
          </p>
        </div>
      </div>

      <div className="story-divider">
        <div className="story-divider-line" />
        <span className="story-divider-ornament">✦</span>
        <div className="story-divider-line" />
      </div>

      {/* ── BLOCK B: Text left, image right ── */}
      <div className="block-text-img">
        <div className="text-panel fade-left" ref={addRef}>
          <p className="chapter-label">First Meeting</p>
          <div className="story-text">
            <p>Our official first meeting? Classic family trip vibes. Duy came to Vietnam with his parents, and there was middle-school-aged Phuong, hanging out with the other kids in the group. Back then, it was pure big-brother-little-sister energy—think tag games and zero romance.</p>
          </div>
          <div className="pull-quote">"The 'triangle' was just parental matchmaking dreams gone wild."</div>
          <div className="story-text">
            <p>Fast-forward years later: Phuong heads to the US for studies, and suddenly we're hanging out more. Texts turn into late-night chats, hangouts become can't-wait-to-see-you-again plans.</p>
          </div>
        </div>
        <div className="img-panel fade-right" ref={addRef}>
          <img src={pic3} loading="eager" fetchPriority="high" alt="Duy and Phuong" />
        </div>
      </div>

      {/* ── BLOCK C: Image left, text right ── */}
      <div className="block-img-text">
        <div className="img-panel fade-left" ref={addRef}>
          <img src={pic2} loading="eager" fetchPriority="high" alt="Duy and Phuong portrait" />
        </div>
        <div className="text-panel fade-right" ref={addRef}>
          <p className="chapter-label">The Beginning</p>
          <div className="story-text">
            <p>By the end of 2019, what had to happen… well, happened. We started dating! (Cue the parental "I told you so" celebrations.)</p>
            <p>That eight-year gap? No joke. Our mindsets crashed like bumper cars—countless debates, eye-rolls, and "you're so immature" moments, per Duy of course. We clashed, rejoined, and repeated more times than we can count.</p>
            <p>But somehow, through all the hilarious chaos, we kept finding our way back to the same path.</p>
          </div>
        </div>
      </div>

      {/* ── BLOCK D: 3-photo strip ── */}
      <div className="block-photo-strip fade-up" ref={addRef}>
        <div className="strip-item">
          <img src={pic1} loading="eager" fetchPriority="high" alt="Duy and Phuong smiling" />
          <div className="strip-label">Us, being us</div>
        </div>
        <div className="strip-item">
          <img src={pic4} loading="eager" fetchPriority="high" alt="Duy and Phuong wedding" />
          <div className="strip-label">Our happily ever after</div>
        </div>
        <div className="strip-item strip-item-text">
          <div className="strip-item-text-inner">
            <div className="strip-item-text-title">Road<br />Trips &<br />More</div>
            <div className="strip-item-text-sub">our absolute favourite thing</div>
          </div>
        </div>
      </div>

      {/* ── Adventures text ── */}
      <div className="block-intro adventures-block fade-up" ref={addRef}>
        <p className="chapter-label">Adventures Together</p>
        <div className="story-text">
          <p>Since becoming a couple, we've discovered our absolute favorite thing: traveling! We loooove hitting the open road for epic road trips, blasting playlists, and turning every drive into an adventure filled with snacks, silly sing-alongs, and those deep conversations that make the miles fly by.</p>
        </div>
      </div>

      <div className="story-divider">
        <div className="story-divider-line" />
        <span className="story-divider-ornament">II.</span>
        <div className="story-divider-line" />
      </div>

      {/* ── BLOCK E: Cat section (dark) ── */}
      <div className="block-cat">
        <div className="cat-img-wrap fade-left" ref={addRef}>
          <img src={fin2} loading="eager" fetchPriority="high" alt="Fin the cat" />
          <img src={fin1} loading="eager" fetchPriority="high" alt="Fin the cat close-up" />
        </div>
        <div className="cat-text fade-right" ref={addRef}>
          <p className="chapter-label">The Third Member</p>
          <h2 className="cat-title">Meet Fin,<br />Our Furry Overlord</h2>
          <div className="story-text">
            <p>
              No story of ours would be complete without mentioning our cute little boy named Fin! He's the third wheel who steals the show—demanding cuddles, judging our packing skills before trips, and making our home feel even cozier.
            </p>
          </div>
        </div>
      </div>

      {/* ── BLOCK F: Closing ── */}
      <div className="block-closing fade-up" ref={addRef}>
        <p className="chapter-label">The Happily Ever After</p>
        <p className="closing-headline">
          "Our story turned into a real-life fairytale—one with plot twists, laughter, and a whole lot of stubborn love."
        </p>
        <div className="story-text closing-text">
          <p>
            We got engaged in August 2025, and now, after six and a half years of adventures, we're thrilled to announce: we're finally getting married! Thank you for being part of our happily ever after.
          </p>
        </div>
        <p className="closing-date">Duy &amp; Phuong — August 2025 💍</p>
        <div className="closing-hearts">♡ ♡ ♡</div>
      </div>

    </div>
  )
}

export default Story