# PromptLab Studios

Situs profil untuk **PromptLab Studios** — wadah yang membangun dan merawat produk digital sendiri. Dua produk sudah berjalan: **SwiftLink** (satu API key untuk 13 model AI) dan **Muse Topup** (layanan isi token Muse).

Situs ini mendukung dua bahasa (Indonesia/Inggris), mode terang/gelap, animasi hero cair berbasis canvas, dan tata letak responsif.

## Tumpukan teknologi

- **React 19** + **TypeScript**
- **Vite 8** — dev server dan build
- **Tailwind CSS 4** (lewat `@tailwindcss/vite`)
- **GSAP** — animasi dan transisi
- Font **Geist** dan **Geist Mono** (self-hosted di `public/fonts`)

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite (biasanya `http://localhost:5173`).

## Skrip

| Perintah | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan dev server |
| `npm run build` | Pemeriksaan tipe (`tsc --noEmit`) lalu build produksi ke `dist/` |
| `npm run preview` | Menyajikan hasil build secara lokal |

## Struktur proyek

```
├─ index.html              # Kerangka HTML, skrip tema/bahasa sebelum paint
├─ public/
│  ├─ favicon.svg
│  └─ fonts/               # Geist Variable + Geist Mono Variable
├─ src/
│  ├─ App.tsx              # Susunan halaman
│  ├─ main.tsx             # Titik masuk React
│  ├─ index.css            # Tailwind + token desain
│  ├─ content.ts           # Seluruh teks ID/EN
│  ├─ lib/site.tsx         # Provider tema + bahasa
│  └─ components/          # Nav, LiquidHero, Ticker, About, Products,
│                          # Process, Stats, Manifesto, CTA, Footer, dll.
├─ tsconfig.json
└─ vite.config.ts
```

## Catatan

- Preferensi tema dan bahasa disimpan di `localStorage` (`promptlab-theme`, `promptlab-lang`) dan diterapkan sebelum render pertama agar tidak ada kilatan warna yang salah.
- `Muse/TEMP/` hanya berisi artefak sementara (tangkapan layar, bundel uji) dan tidak ikut ke repositori.
