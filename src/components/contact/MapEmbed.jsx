function MapEmbed() {
  return (
    <div className="rounded-lg overflow-hidden border border-black/5 h-72 md:h-full min-h-[280px]">
      <iframe
        title="INAInfratech office location"
        src="https://www.google.com/maps?q=Baner+Road+Pune+Maharashtra&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default MapEmbed;
