# Coffee Shop Color System - shadcn/ui Theme

## 📋 Overview
Projectmu sekarang menggunakan sistem warna **shadcn/ui** dengan inspirasi coffee shop! Semua warna di-manage melalui CSS variables yang dapat dengan mudah di-customize.

## 🎨 Color Palette

### Light Mode (Default)
- **Background**: Pure White (`#ffffff`)
- **Foreground**: Near Black (`#0a0f1c` / 0° 0% 3.6%)
- **Primary**: Warm Coffee Brown (`#7d5444` / 25° 50% 45%)
- **Primary Foreground**: White (`#ffffff`)
- **Secondary**: Soft Brown (`#c4a47a` / 25° 35% 65%)
- **Muted**: Light Gray (`#f5f5f5` / 0° 0% 96.1%)
- **Muted Foreground**: Medium Gray (`#737373` / 0° 0% 45.1%)
- **Accent**: Dark Brown (`#161616` / 0° 0% 9%)
- **Border**: Light Border (`#e5e5e5` / 0° 0% 89.8%)

### Dark Mode
- **Background**: Near Black (`#0a0f1c` / 0° 0% 3.6%)
- **Foreground**: Almost White (`#fafbfc` / 0° 0% 98%)
- **Primary**: Warm Gold-Brown (`#9d7566` / 25° 60% 55%)
- **Primary Foreground**: Dark (`#0a0f1c` / 0° 0% 3.6%)
- **Secondary**: Light Tan (`#d4b896` / 25° 40% 75%)
- **Muted**: Dark Gray (`#262626` / 0° 0% 14.9%)
- **Muted Foreground**: Light Gray (`#a3a3a3` / 0° 0% 63.9%)

## 📝 Usage

### Menggunakan Color Classes di JSX

```jsx
// Primary button
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Click Me
</button>

// Text colors
<p className="text-foreground">Main text</p>
<p className="text-muted-foreground">Secondary text</p>

// Backgrounds
<div className="bg-background">Page background</div>
<div className="bg-card">Card background</div>
<div className="bg-muted">Muted background</div>

// Borders
<div className="border border-border">With border</div>
```

### Mengubah Warna Global

Edit file `/src/index.css` dan ubah nilai CSS variables di dalam `:root` atau `.dark`:

```css
:root {
  --primary: 25 50% 45%; /* Ganti HSL value */
  --primary-foreground: 0 0% 100%;
  /* ... */
}
```

## 🎯 Color Strategy

Sistem ini menggunakan **3 warna utama**:
1. **Primary (Coffee Brown)** - Tombol, links, aksen utama
2. **Secondary/Accent** - Variasi, hover states
3. **Neutrals** - Background, borders, text

Ini mengikuti **shadcn/ui philosophy** untuk konsistensi dan maintainability.

## 🌓 Dark Mode

Dark mode otomatis aktif ketika user device-nya set ke dark mode. Untuk testing:
- Tambahkan class `dark` ke `<html>`
- CSS variables otomatis beradaptasi

## 📦 File-file Penting

- `/src/index.css` - CSS variables dan global styles
- `/tailwind.config.ts` - Tailwind color configuration
- Semua components menggunakan semantic color classes (bukan hardcoded colors)

## ✨ Keuntungan Sistem Ini

✅ **Konsisten** - Satu source of truth untuk semua warna  
✅ **Fleksibel** - Ganti semua warna dengan edit 1 file  
✅ **Dark Mode Ready** - Otomatis beradaptasi  
✅ **Professional** - Mengikuti shadcn/ui best practices  
✅ **Accessible** - Contrast ratios memenuhi WCAG standards  

## 🚀 Tips Customization

Jika ingin ganti warna:
1. Edit CSS variables di `/src/index.css`
2. Gunakan color picker online untuk mendapatkan HSL value
3. Ganti nilai di `:root` (light mode) atau `.dark` (dark mode)

Contoh: Untuk primary warna merah
```css
:root {
  --primary: 0 84% 60%; /* Red in HSL */
  --primary-foreground: 0 0% 100%;
}
```

---

**Happy coding! ☕**
