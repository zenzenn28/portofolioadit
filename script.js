const i18n = {
  en: {
    nav_about:"About", nav_skills:"Skills", nav_projects:"Projects", nav_contact:"Contact",
    hero_eyebrow:"Portfolio",
    hero_title:"Freelance Web Developer",
    hero_desc:"Building clean, functional websites for real-world needs — from restaurants to e-commerce. Based in Jakarta, open to remote projects.",
    hero_cta1:"See My Work", hero_cta2:"Get in Touch",
    about_label:"About Me", about_title:"Who's behind the screen?",
    about_p1:"Hey! I'm <strong>Ananda Aditiya</strong>, a freelance web developer from Jakarta. I graduated from <strong>Informatics Engineering at Universitas Indraprasta PGRI</strong> — and I've been building things for the web ever since.",
    about_p2:"During my internship at <strong>Arsy Fotocopy</strong>, I developed a full inventory management application from scratch — handling both front-end and back-end as a <strong>fullstack developer</strong>.",
    about_p3:"I enjoy turning ideas into working products. Whether it's a landing page, a web app with a database, or anything in between — I'm here to build it.",
    card1_title:"Education", card1_desc:"Informatics Engineering — Universitas Indraprasta PGRI, Jakarta",
    card2_title:"Experience", card2_desc:"Fullstack Developer Intern — Arsy Fotocopy (Inventory Management App)",
    card3_title:"Location", card3_desc:"Jakarta, Indonesia — Open to remote collaboration worldwide",
    skills_label:"Tech Stack", skills_title:"Skills & Tools",
    projects_label:"Portfolio", projects_title:"Projects I've Built",
    proj1_name:"DRIVEMAX — Car Rental", proj1_desc:"Premium car rental website with elegant dark mode, interactive fleet filter, and direct WhatsApp integration.",
    proj2_name:"Bu Mulyawati Properti", proj2_desc:"Landing page for a room rental business, showcasing available room types with a modern layout.",
    proj3_name:"CallPay Agency", proj3_desc:"Digital agency website with strong branding — your trusted partner for digital needs.",
    demo_btn:"Lihat Web →",
    contact_label:"Let's Connect", contact_title:"Get in Touch",
    contact_desc:"Got a project in mind or just want to say hi? Feel free to reach out — I usually reply within a day.",
    ccard_title:"Open for Projects",
    ccard_desc:"Currently available for freelance work. I build websites, landing pages, and fullstack web apps.",
    ccard_status:"Available now",
    stat1:"Projects Built", stat2:"Year Experience", stat3:"Lines of Code",
    footer_text:"Freelance Web Developer — Jakarta, Indonesia",
  },
  id: {
    nav_about:"Tentang", nav_skills:"Keahlian", nav_projects:"Proyek", nav_contact:"Kontak",
    hero_eyebrow:"Portofolio",
    hero_title:"Freelance Web Developer",
    hero_desc:"Membangun website yang bersih dan fungsional untuk kebutuhan nyata — dari restoran hingga e-commerce. Berbasis di Jakarta, terbuka untuk proyek remote.",
    hero_cta1:"Lihat Karya Saya", hero_cta2:"Hubungi Saya",
    about_label:"Tentang Saya", about_title:"Siapa di balik layar?",
    about_p1:"Hei! Saya <strong>Ananda Aditiya</strong>, seorang freelance web developer dari Jakarta. Saya lulusan <strong>Teknik Informatika Universitas Indraprasta PGRI</strong> — dan sejak saat itu saya terus membangun hal-hal untuk web.",
    about_p2:"Saat magang di <strong>Arsy Fotocopy</strong>, saya mengembangkan aplikasi manajemen inventori secara penuh dari nol — menangani front-end dan back-end sebagai <strong>fullstack developer</strong>.",
    about_p3:"Saya senang mengubah ide menjadi produk yang benar-benar berfungsi. Baik itu landing page, web app dengan database, atau apa pun — saya siap membangunnya.",
    card1_title:"Pendidikan", card1_desc:"Teknik Informatika — Universitas Indraprasta PGRI, Jakarta",
    card2_title:"Pengalaman", card2_desc:"Magang Fullstack Developer — Arsy Fotocopy (Aplikasi Manajemen Inventori)",
    card3_title:"Lokasi", card3_desc:"Jakarta, Indonesia — Terbuka untuk kolaborasi remote",
    skills_label:"Tech Stack", skills_title:"Keahlian & Tools",
    projects_label:"Portofolio", projects_title:"Proyek yang Pernah Saya Buat",
    proj1_name:"DRIVEMAX — Rental Mobil", proj1_desc:"Website rental mobil premium dengan tampilan dark mode elegan, filter armada interaktif, dan integrasi WhatsApp langsung.",
    proj2_name:"Bu Mulyawati Properti", proj2_desc:"Landing page bisnis sewa kamar kontrakan dengan tampilan modern, menampilkan tipe kamar yang tersedia dan info kontak langsung.",
    proj3_name:"CallPay Agency", proj3_desc:"Website agency digital dengan branding yang kuat dan antarmuka ramah pengguna — teman setia untuk kebutuhan digitalmu.",
    demo_btn:"Lihat Web →",
    contact_label:"Mari Terhubung", contact_title:"Hubungi Saya",
    contact_desc:"Punya ide proyek atau hanya ingin menyapa? Silakan hubungi melalui kanal berikut — saya biasanya membalas dalam sehari.",
    ccard_title:"Terbuka untuk Proyek",
    ccard_desc:"Saat ini tersedia untuk proyek freelance. Saya membangun website, landing page, dan aplikasi web fullstack.",
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
  const saved = localStorage.getItem('lang') || 'en';
  setLang(saved);

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
