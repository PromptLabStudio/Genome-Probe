<div align="center">

# PromptLab Studios

**Website resmi PromptLab Studios, wadah produk digital yang dibangun dan dirawat dari Indonesia.**

[![CI](https://github.com/PromptLabStudio/Genome-Probe/actions/workflows/ci.yml/badge.svg)](https://github.com/PromptLabStudio/Genome-Probe/actions/workflows/ci.yml)
![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-7-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88ce02?logo=greensock&logoColor=white)

[SwiftLink](https://swiftlink.web.id) · [Muse Topup](https://musetopup.online)

![Hero PromptLab Studios](docs/screenshots/hero-light.png)

</div>

## Tentang

Landing page satu halaman untuk memperkenalkan studio dan produknya. Semua teks ada di satu file, jadi konten bisa diganti tanpa menyentuh komponen.

## Fitur

- **Hero interaktif:** animasi canvas 2D yang bereaksi terhadap kursor, dipadukan dengan animasi masuk dari GSAP.
- **Dua bahasa:** Indonesia dan Inggris, pilihannya tersimpan di browser.
- **Tema terang dan gelap:** mengikuti setelan sistem dan tidak berkedip saat halaman dimuat.
- **Responsif:** tampilan disesuaikan untuk desktop, tablet, dan ponsel.
- **Ramah aksesibilitas:** menghormati setelan `prefers-reduced-motion`.
- **Ringan:** font Geist di-host sendiri, tanpa backend dan tanpa library UI tambahan.

## Tampilan

| Tema gelap | Ponsel |
| --- | --- |
| ![Bagian produk dengan tema gelap](docs/screenshots/products-dark.png) | <img src="docs/screenshots/hero-mobile.png" alt="Hero di ponsel" width="260"> |

## Mulai

Butuh Node.js 20.19+ atau 22.12+.

```bash
git clone https://github.com/PromptLabStudio/Genome-Probe.git
cd Genome-Probe
npm install
npm run dev
```

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan server development |
| `npm run build` | Cek tipe dengan TypeScript, lalu build ke `dist/` |
| `npm run preview` | Melihat hasil build secara lokal |

## Struktur

```text
├── public/              # Favicon dan font Geist
├── src/
│   ├── components/      # Bagian-bagian halaman (Hero, Produk, Footer, dll.)
│   ├── lib/site.tsx     # State bahasa dan tema
│   ├── content.ts       # Semua teks, versi ID dan EN
│   ├── index.css        # Design token dan style global
│   ├── App.tsx          # Susunan halaman
│   └── main.tsx         # Entry point
├── index.html
└── vite.config.ts
```

## Mengubah konten

- **Teks dan produk:** edit `src/content.ts`. Isi versi `id` dan `en` supaya kedua bahasa tetap sama.
- **Warna dan token desain:** edit `src/index.css`.
- **Tautan kontak di footer:** edit `src/components/Footer.tsx`.
- **Judul dan deskripsi SEO:** edit `index.html`.

## Deploy

Hasil build berupa file statis di `dist/`, jadi bisa dipasang di Vercel, Netlify, Cloudflare Pages, atau hosting statis lain.

| Setelan | Nilai |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |

---

<div align="center">

© 2026 PromptLab Studios

</div>
