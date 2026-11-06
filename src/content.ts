export type Lang = "id" | "en";

const id = {
  meta: {
    title: "PromptLab Studios — Wadah Produk Digital",
    description:
      "PromptLab Studios membangun dan merawat produk digital sendiri. Dua produk sudah hidup: SwiftLink — satu API key untuk 13 model AI — dan Muse Topup, layanan isi token Muse.",
  },
  nav: {
    about: "Tentang",
    products: "Produk",
    process: "Cara kerja",
    contact: "Kontak",
    cta: "Coba SwiftLink",
    menu: "Menu",
    close: "Tutup",
    langLabel: "Pilih bahasa",
    themeLabel: "Ganti tema",
  },
  hero: {
    words: ["Satu", "wadah", "banyak", "produk"],
    subtitle:
      "Kami membangun produk digital sendiri, lalu tinggal cukup lama untuk merawatnya sampai benar-benar berguna. Dua sudah hidup: SwiftLink, satu API key untuk 13 model AI, dan Muse Topup, layanan isi token Muse.",
    primary: "Coba SwiftLink",
    secondary: "Lihat produk",
    proof: "SwiftLink live",
    proofLabel: "13 model · 8 provider · mulai Rp 20.000",
  },
  ticker: {
    label: "Yang kami bangun",
    items: [
      "AI Gateway",
      "API",
      "Developer Tools",
      "Interface",
      "Automation",
      "Agent",
      "Web App",
      "Infrastruktur",
    ],
  },
  about: {
    label: "01 — Tentang",
    heading: "Satu wadah untuk produk yang kami bangun sendiri.",
    body: [
      "PromptLab Studios bukan agensi. Kami tidak menunggu brief: kami mencari masalah yang kami alami sendiri, memastikan orang lain merasakannya, lalu membangun produknya. Setelah rilis, kami tetap tinggal untuk merawat.",
      "Wadah ini sengaja kecil. Setiap produk harus bisa dijelaskan dalam satu kalimat, dipakai tanpa manual panjang, dan dijual dengan harga yang masuk akal. Kalau tidak lolos tiga syarat itu, kami tidak meluncurkannya.",
    ],
    values: [
      {
        title: "Produk, bukan portofolio",
        desc: "Kami diukur dari produk yang dipakai orang, bukan dari tebalnya studi kasus.",
      },
      {
        title: "Kecil dan selesai",
        desc: "Ruang lingkup dipotong sampai habis, lalu dikirim. Tidak ada peluncuran yang menggantung.",
      },
      {
        title: "Terbuka soal angka",
        desc: "Harga, batas pemakaian, dan status layanan ditulis di depan. Tanpa biaya kejutan.",
      },
    ],
    note: "Berbasis di Indonesia, bekerja untuk siapa saja yang butuh.",
  },
  products: {
    label: "02 — Produk",
    heading: "Dua sudah hidup. Berikutnya masih di meja kerja.",
    items: [
      {
        name: "SwiftLink",
        status: "Live",
        tagline: "Satu API key untuk 13 model AI.",
        desc: "Gateway AI untuk developer dan tim: 13 model dari 8 provider lewat satu endpoint yang kompatibel dengan OpenAI. Dibayar dalam rupiah lewat QRIS, sekali beli, tanpa langganan otomatis.",
        facts: [
          { value: "13", label: "model dari 8 provider" },
          { value: "Rp 20.000", label: "paket kredit mulai" },
          { value: "1M", label: "token gratis untuk mencoba" },
        ],
        tags: ["AI Gateway", "OpenAI-compatible", "Telegram bot", "QRIS"],
        linkLabel: "Buka swiftlink.web.id",
        href: "https://swiftlink.web.id",
      },
      {
        name: "Muse Topup",
        status: "Live",
        tagline: "Isi token Muse, 1B sampai 30B.",
        desc: "Layanan isi token Muse: tambah 1B sampai 30B token ke akun Muse-mu atau beli akun siap pakai, bayar dengan USDT di BNB Smart Chain, lalu pantau setiap pesanan dari dasbor.",
        facts: [
          { value: "$0.98", label: "mulai per 1B token" },
          { value: "1B–30B", label: "rentang sekali top up" },
          { value: "±2 jam", label: "rata-rata waktu kirim" },
        ],
        tags: ["Token Muse", "USDT BEP-20", "Pelacakan pesanan", "Akun siap pakai"],
        linkLabel: "Buka musetopup.online",
        href: "https://musetopup.online",
      },
    ],
    next: {
      title: "Produk ketiga sedang diuji",
      body: "Kami menulis, membuang, dan menguji beberapa ide sebelum ada satu yang layak dirilis. Kalau kamu punya masalah yang pantas jadi produk, kami mau dengar.",
      linkLabel: "Tulis ke kami",
    },
  },
  process: {
    label: "03 — Cara kerja",
    heading: "Dari kecurigaan sampai rilis, lalu dirawat.",
    items: [
      {
        no: "01",
        title: "Cari yang layak",
        desc: "Kami mulai dari masalah yang kami alami sendiri, lalu memastikan orang lain juga merasakannya sebelum menulis satu baris kode.",
        tags: ["Riset", "Wawancara", "Validasi"],
      },
      {
        no: "02",
        title: "Bangun versi terkecil",
        desc: "Fitur dipotong sampai hanya menyisakan yang membuat produk berguna. Rilis cepat, dengar pemakainya, perbaiki yang paling mengganggu.",
        tags: ["Prototipe", "Rilis awal", "Iterasi"],
      },
      {
        no: "03",
        title: "Rawat setelah rilis",
        desc: "Produk yang hidup punya ongkos. Kami menjaga uptime, harga, dan dukungan selama produk itu masih dipakai orang.",
        tags: ["Uptime", "Dukungan", "Harga"],
      },
    ],
  },
  stats: {
    label: "Angka yang bisa dicek",
    items: [
      { value: "02", label: "produk sudah live" },
      { value: "13", label: "model di dalamnya" },
      { value: "8", label: "provider" },
      { value: "1M", label: "token gratis untuk mulai" },
    ],
  },
  manifesto: {
    quote:
      "Kami tidak mengejar portofolio. Kami mengejar produk yang masih dipakai orang setahun kemudian.",
    author: "PromptLab Studios",
    role: "Catatan lab, 2026",
  },
  cta: {
    label: "Punya masalah?",
    words: ["Ceritakan", "masalahnya"],
    body: "Kalau kamu punya masalah yang pantas jadi produk, atau mau memakai SwiftLink di proyekmu, tulis saja. Kami membalas dalam dua hari kerja.",
    button: "hello@promptlabstudios.com",
    note: "Untuk SwiftLink, ada bot Telegram dan dokumentasi API.",
  },
  footer: {
    tagline:
      "Wadah produk digital. Dibangun dan dirawat dari Indonesia.",
    columns: {
      nav: "Navigasi",
      contact: "Kontak",
      links: "Tautan",
    },
    address: ["Indonesia", "WIB · GMT+7"],
    legal: "© 2026 PromptLab Studios. Semua hak dilindungi.",
    backToTop: "Kembali ke atas",
    big: "PROMPTLAB",
  },
};

const en: typeof id = {
  meta: {
    title: "PromptLab Studios — A Home for Digital Products",
    description:
      "PromptLab Studios builds and maintains its own digital products. Two are live: SwiftLink — a single API key for 13 AI models — and Muse Topup, a Muse token top-up service.",
  },
  nav: {
    about: "About",
    products: "Products",
    process: "Process",
    contact: "Contact",
    cta: "Try SwiftLink",
    menu: "Menu",
    close: "Close",
    langLabel: "Choose language",
    themeLabel: "Toggle theme",
  },
  hero: {
    words: ["A", "home", "for", "products"],
    subtitle:
      "We build our own digital products, then stay long enough to make them genuinely useful. Two are live: SwiftLink, a single API key for 13 AI models, and Muse Topup, a Muse token top-up service.",
    primary: "Try SwiftLink",
    secondary: "See the product",
    proof: "SwiftLink is live",
    proofLabel: "13 models · 8 providers · from Rp 20,000",
  },
  ticker: {
    label: "What we build",
    items: [
      "AI Gateway",
      "APIs",
      "Developer Tools",
      "Interfaces",
      "Automation",
      "Agents",
      "Web Apps",
      "Infrastructure",
    ],
  },
  about: {
    label: "01 — About",
    heading: "One home for the products we build ourselves.",
    body: [
      "PromptLab Studios is not an agency. We do not wait for a brief: we look for problems we run into ourselves, check that other people hit them too, then build the product. After launch we stay to maintain it.",
      "The container is deliberately small. Every product has to be explainable in one sentence, usable without a long manual, and priced honestly. If it fails those three tests, we do not ship it.",
    ],
    values: [
      {
        title: "Products, not portfolios",
        desc: "We are measured by products people use, not by the thickness of a case-study deck.",
      },
      {
        title: "Small and finished",
        desc: "Scope is cut until it is done, then shipped. Nothing stays half-launched.",
      },
      {
        title: "Open about numbers",
        desc: "Pricing, usage limits, and service status are written up front. No surprise fees.",
      },
    ],
    note: "Based in Indonesia, working for anyone who needs it.",
  },
  products: {
    label: "02 — Products",
    heading: "Two are live. The next is still on the workbench.",
    items: [
      {
        name: "SwiftLink",
        status: "Live",
        tagline: "One API key for 13 AI models.",
        desc: "An AI gateway for developers and teams: 13 models from 8 providers behind a single OpenAI-compatible endpoint. Paid in rupiah via QRIS, one-time purchase, no automatic subscription.",
        facts: [
          { value: "13", label: "models from 8 providers" },
          { value: "Rp 20,000", label: "credit packs from" },
          { value: "1M", label: "free tokens to try it" },
        ],
        tags: ["AI Gateway", "OpenAI-compatible", "Telegram bot", "QRIS"],
        linkLabel: "Open swiftlink.web.id",
        href: "https://swiftlink.web.id",
      },
      {
        name: "Muse Topup",
        status: "Live",
        tagline: "Muse tokens, 1B to 30B.",
        desc: "A Muse token top-up service: add 1B to 30B tokens to your Muse account or buy a ready-made account, pay with USDT on BNB Smart Chain, and follow every order from a dashboard.",
        facts: [
          { value: "$0.98", label: "starting per 1B tokens" },
          { value: "1B–30B", label: "per top-up" },
          { value: "~2 hrs", label: "typical delivery" },
        ],
        tags: ["Muse tokens", "USDT BEP-20", "Order tracking", "Ready-made accounts"],
        linkLabel: "Open musetopup.online",
        href: "https://musetopup.online",
      },
    ],
    next: {
      title: "The third product is in testing",
      body: "We write, throw away, and test a few ideas before one is worth shipping. If you have a problem that deserves to become a product, we want to hear it.",
      linkLabel: "Tell us about it",
    },
  },
  process: {
    label: "03 — Process",
    heading: "From hunch to launch, then looked after.",
    items: [
      {
        no: "01",
        title: "Find what is worth it",
        desc: "We start from a problem we have ourselves, then check that other people feel it before writing a line of code.",
        tags: ["Research", "Interviews", "Validation"],
      },
      {
        no: "02",
        title: "Build the smallest version",
        desc: "Features are cut down to what makes the product useful. Ship fast, listen to the people using it, fix what annoys them most.",
        tags: ["Prototype", "First release", "Iteration"],
      },
      {
        no: "03",
        title: "Look after it after launch",
        desc: "A living product costs money. We keep uptime, pricing, and support in order for as long as people use it.",
        tags: ["Uptime", "Support", "Pricing"],
      },
    ],
  },
  stats: {
    label: "Numbers you can check",
    items: [
      { value: "02", label: "products live" },
      { value: "13", label: "models inside it" },
      { value: "8", label: "providers" },
      { value: "1M", label: "free tokens to start" },
    ],
  },
  manifesto: {
    quote:
      "We are not collecting a portfolio. We are collecting products people still use a year later.",
    author: "PromptLab Studios",
    role: "Lab notes, 2026",
  },
  cta: {
    label: "Got a problem?",
    words: ["Tell", "us", "the", "problem"],
    body: "If you have a problem that deserves to become a product, or you want to use SwiftLink in your project, just write. We reply within two working days.",
    button: "hello@promptlabstudios.com",
    note: "For SwiftLink there is also a Telegram bot and the API docs.",
  },
  footer: {
    tagline: "A home for digital products. Built and maintained from Indonesia.",
    columns: {
      nav: "Navigation",
      contact: "Contact",
      links: "Links",
    },
    address: ["Indonesia", "WIB · GMT+7"],
    legal: "© 2026 PromptLab Studios. All rights reserved.",
    backToTop: "Back to top",
    big: "PROMPTLAB",
  },
};

export const content = { id, en } as const;

export type Content = typeof id;
