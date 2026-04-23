const i18n = {
  en: {
    nav_about:"About", nav_skills:"Skills", nav_projects:"Projects", nav_contact:"Contact",
    hero_eyebrow:"Portfolio",
    hero_tagline:"Builds the Web.",
    hero_title:"Freelance Web Developer",
    hero_desc:"I build websites that don't just look good — they work. From landing pages to fullstack apps, I handle it all.",
    hero_cta1:"See My Work", hero_cta2:"Get in Touch",
    about_label:"About Me", about_title:"Who's behind the screen?",
    about_p1:"Hey! I'm <strong>Aditiya</strong> — a freelance web developer who loves turning ideas into real, working websites. Not just visuals, but experiences that feel right.",
    about_p2:"During my internship at <strong>Arsy Fotocopy</strong>, I built a full inventory management app from scratch — UI, database, server. All solo. That was fun.",
    about_p3:"Now I'm open for new projects. Landing pages, web apps, dashboards, systems — anything that needs to be built seriously.",
    card2_title:"Experience", card2_desc:"Fullstack Developer Intern — Arsy Fotocopy (Inventory Management App)",
    card3_title:"Location", card3_desc:"Jakarta, Indonesia — Open to remote collaboration worldwide",
    card4_title:"Focus", card4_desc:"Clean, fast websites with purpose. Not just aesthetic — functional.",
    skills_label:"Tech Stack", skills_title:"Skills & Tools",
    projects_label:"Portfolio", projects_title:"Projects I've Built",
    proj1_name:"DRIVEMAX — Car Rental", proj1_desc:"Premium car rental website with elegant dark mode, interactive fleet filter, and direct WhatsApp booking. Smooth, premium, ready to go.",
    proj2_name:"Bu Mulyawati Properti", proj2_desc:"Landing page for a room rental business — modern layout, clear room info, direct contact. Visitors know exactly what to do.",
    proj3_name:"CallPay Agency", proj3_desc:"Agency platform with real-time system, talent management, and multi-admin routing. Built from scratch with Firebase + Cloudinary.",
    demo_btn:"View Demo →",
    contact_label:"Let's Connect", contact_title:"Got a project? Let's talk.",
    contact_desc:"Want to build something new, redesign what you have, or just ask around first? Reach out — I usually reply within a day.",
    ccard_title:"Open for Projects",
    ccard_desc:"Currently available for freelance work. I build websites, landing pages, and fullstack web apps. Got an idea? I'll bring it to life.",
    ccard_status:"Available now",
    stat1:"Projects Built", stat2:"Year of Experience", stat3:"Lines of Code",
    footer_text:"Freelance Web Developer — Jakarta, Indonesia",
  },
  id: {
    nav_about:"Tentang", nav_skills:"Keahlian", nav_projects:"Proyek", nav_contact:"Kontak",
    hero_eyebrow:"Portofolio",
    hero_tagline:"Membangun Web.",
    hero_title:"Freelance Web Developer",
    hero_desc:"Saya bikin website yang bukan cuma cantik — tapi juga bekerja. Dari landing page sampai aplikasi fullstack, semuanya saya tangani sendiri.",
    hero_cta1:"Lihat Karya Saya", hero_cta2:"Hubungi Saya",
    about_label:"Tentang Saya", about_title:"Siapa di balik layar?",
    about_p1:"Hai! Saya <strong>Aditiya</strong> — freelance web developer yang suka mengubah ide menjadi website nyata. Bukan cuma tampilan, tapi pengalaman yang terasa.",
    about_p2:"Saat magang di <strong>Arsy Fotocopy</strong>, saya membangun aplikasi manajemen inventori dari nol — mulai dari desain UI, database, sampai server. Full sendiri. That was fun.",
    about_p3:"Sekarang saya terbuka untuk proyek-proyek baru. Landing page, web app, dashboard, sistem — apapun yang butuh dibangun dengan serius.",
    card2_title:"Pengalaman", card2_desc:"Magang Fullstack Developer — Arsy Fotocopy (Aplikasi Manajemen Inventori)",
    card3_title:"Lokasi", card3_desc:"Jakarta, Indonesia — Terbuka untuk proyek remote di mana saja",
    card4_title:"Fokus", card4_desc:"Website yang clean, cepat, dan punya tujuan. Bukan cuma estetik — tapi fungsional.",
    skills_label:"Tech Stack", skills_title:"Keahlian & Tools",
    projects_label:"Portofolio", projects_title:"Proyek yang Pernah Saya Bangun",
    proj1_name:"DRIVEMAX — Rental Mobil", proj1_desc:"Website rental mobil premium dengan dark mode elegan, filter armada interaktif, dan pemesanan langsung via WhatsApp. Praktis, premium, langsung gas.",
    proj2_name:"Bu Mulyawati Properti", proj2_desc:"Landing page bisnis sewa kontrakan — tampilan modern, info kamar jelas, kontak langsung. Calon penghuni langsung paham tanpa bingung.",
    proj3_name:"CallPay Agency", proj3_desc:"Platform agency dengan sistem real-time, manajemen talent, dan routing multi-admin. Dibangun dari nol dengan Firebase + Cloudinary.",
    demo_btn:"Lihat Demo →",
    contact_label:"Mari Terhubung", contact_title:"Ada proyek? Yuk ngobrol.",
    contact_desc:"Mau bikin website baru, redesign yang ada, atau cuma nanya-nanya dulu? Reach out aja — saya biasanya balas dalam sehari.",
    ccard_title:"Siap Terima Proyek",
    ccard_desc:"Saat ini tersedia untuk proyek freelance. Saya membangun website, landing page, dan aplikasi web fullstack. Punya ide? Saya siap wujudkan.",
    ccard_status:"Tersedia sekarang",
    stat1:"Proyek Selesai", stat2:"Tahun Pengalaman", stat3:"Baris Kode",
    footer_text:"Freelance Web Developer — Jakarta, Indonesia",
  }
};

function setLang(lang) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
  const saved = localStorage.getItem('lang') || 'id';
  setLang(saved);

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
