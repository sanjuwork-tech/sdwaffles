"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Instagram, Navigation, MessageCircle, Building2 } from "lucide-react";
import { BRAND } from "@/lib/menu-data";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const MAP_QUERY = encodeURIComponent(
  "SD Waffles and Shakes, Sagar Road, Miryalaguda, Telangana 508207"
);

export function VisitUs() {
  return (
    <section
      id="visit"
      className="relative py-20 sm:py-28 bg-[#2A1609] overflow-hidden"
    >
      <div className="absolute inset-0 bg-waffle-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#FF6B8B]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#F2C14E]/15 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-[#F2C14E] text-[#2A1609] text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            Visit Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl sm:text-6xl text-[#FAFAFA] leading-[0.95]"
          >
            Come get your
            <br />
            <span className="text-gradient-gold">sugar rush</span>
          </motion.h2>
          <p className="mt-4 text-[#FAFAFA]/60 text-base sm:text-lg">
            Two sweet spots in Miryalaguda. Dine-in, takeaway, or just say hi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-[#F2C14E]/20 min-h-[360px] sm:min-h-[440px] group"
          >
            <iframe
              title="SD Waffles & Shakes location"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="absolute inset-0 h-full w-full grayscale-[0.2] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#F2C14E]/20 rounded-3xl" />
            {/* Floating directions button */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#F2C14E] to-[#C8792B] text-[#2A1609] font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-transform"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {/* Addresses */}
            <div className="rounded-3xl bg-[#3D2314]/80 backdrop-blur border border-[#F2C14E]/15 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-[#F2C14E] mb-3">
                <Building2 className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Find Us
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[#FF6B8B] text-xs font-bold uppercase tracking-wider mb-1.5">
                    <MapPin className="h-3 w-3" /> Sagar Road
                  </div>
                  <p className="text-[#FAFAFA]/80 text-sm leading-relaxed">
                    {BRAND.primaryAddress}
                  </p>
                </div>
                <div className="sm:border-l sm:border-[#F2C14E]/15 sm:pl-4">
                  <div className="inline-flex items-center gap-1.5 text-[#FF6B8B] text-xs font-bold uppercase tracking-wider mb-1.5">
                    <MapPin className="h-3 w-3" /> Doctors Colony
                  </div>
                  <p className="text-[#FAFAFA]/80 text-sm leading-relaxed">
                    {BRAND.secondaryAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Phones */}
            <div className="rounded-3xl bg-[#3D2314]/80 backdrop-blur border border-[#F2C14E]/15 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-[#F2C14E] mb-3">
                <Phone className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Call to Order
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {BRAND.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-3 p-3 rounded-2xl bg-[#2A1609] border border-[#F2C14E]/10 hover:border-[#F2C14E]/40 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#F2C14E] to-[#C8792B] flex items-center justify-center text-[#2A1609] group-hover:scale-110 transition-transform">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#FAFAFA]/40">
                        Tap to call
                      </div>
                      <div className="font-display text-base text-[#FAFAFA]">
                        {phone}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours + Social */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-3xl bg-[#3D2314]/80 backdrop-blur border border-[#F2C14E]/15 p-5">
                <div className="flex items-center gap-2 text-[#F2C14E] mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    Open Hours
                  </span>
                </div>
                <div className="font-display text-xl text-[#FAFAFA]">
                  {BRAND.hours.open} – {BRAND.hours.close}
                </div>
                <div className="text-xs text-[#FAFAFA]/50 mt-1">
                  {BRAND.hours.days}
                </div>
                <div className="flex gap-1.5 mt-3">
                  {BRAND.services.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full bg-[#F2C14E]/10 text-[#F2C14E] text-[10px] font-bold uppercase tracking-wider"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-gradient-to-br from-[#FF6B8B]/20 to-[#3D2314] border border-[#FF6B8B]/30 p-5 hover:border-[#FF6B8B] transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 text-[#FF6B8B] mb-2">
                  <Instagram className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    Slide into DMs
                  </span>
                </div>
                <div>
                  <div className="font-display text-lg text-[#FAFAFA]">
                    {BRAND.instagramHandle}
                  </div>
                  <div className="text-xs text-[#FAFAFA]/50 mt-0.5">
                    Tag us in your dessert pics 📸
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[#F2C14E] text-xs font-bold group-hover:gap-2.5 transition-all">
                    Open Instagram →
                  </div>
                </div>
              </a>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${BRAND.phones[0].replace(/[^0-9]/g, "")}?text=Hi%20SD%20Waffles%20%26%20Shakes!%20I'd%20like%20to%20place%20an%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 p-5 rounded-3xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:scale-[1.01] transition-transform shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center group-hover:rotate-[-8deg] transition-transform">
                  <WhatsAppIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-lg leading-tight">
                    Chat on WhatsApp
                  </div>
                  <div className="text-xs text-white/80">
                    Quick orders & updates
                  </div>
                </div>
              </div>
              <MessageCircle className="h-5 w-5 opacity-80 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating phone icons */}
      <div className="pointer-events-none absolute top-1/4 left-4 sm:left-8 opacity-20 hidden md:block">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Phone className="h-12 w-12 text-[#F2C14E]" />
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-1/4 right-4 sm:right-8 opacity-20 hidden md:block">
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [10, -10, 10] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Phone className="h-10 w-10 text-[#FF6B8B]" />
        </motion.div>
      </div>
    </section>
  );
}
