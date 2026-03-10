import "./location.css";

const VENUE = {
  name:     "Orange Hill",
  address:  "6410 E Chapman Ave, Orange, CA 92869, United States",
  lat:      33.7892513,
  lng:      -117.7866226,
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.893383201425!2d-117.78662260000002!3d33.7892513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcda5fc60b3941%3A0x88ce84b61e5b777a!2sOrange%20Hill!5e0!3m2!1sen!2sus!4v1773138700894!5m2!1sen!2sus",
};
const TIMELINE = [
  { time: "6:00 PM – 7:00 PM",  label: "Cocktail Hour",             icon: "🥂" },
  { time: "7:00 PM – 10:00 PM", label: "Let's Celebrate & Have Fun!!", icon: "🎉" },
];
export default function Location() {
  return (
    <section className="loc-section">

      <p className="loc-label">Find Us</p>
      <h2 className="loc-heading">The Venue</h2>
      <div className="loc-divider"></div>

      <div className="loc-map-wrapper">
        <iframe
          title={VENUE.name}
          src={VENUE.embedUrl}
          className="loc-map"
          width={800}
          height={400}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="loc-timeline">
            {TIMELINE.map(function(item, i) {
            return (
                <div key={i} className="loc-timeline-item">
                <span className="loc-timeline-icon">{item.icon}</span>
                <div className="loc-timeline-content">
                    <p className="loc-timeline-time">{item.time}</p>
                    <p className="loc-timeline-label">{item.label}</p>
                </div>
                </div>
            );
            })}
        </div>
      </div>
        
      <a
        href={"https://www.google.com/maps/dir/?api=1&destination=" + VENUE.lat + "," + VENUE.lng}
        target="_blank"
        rel="noreferrer"
        className="loc-gmaps-link"
      >
        <span className="loc-gmaps-link-text">Get Directions</span>
        <span className="loc-gmaps-link-arrow">↗</span>
      </a>

    </section>
  );
}