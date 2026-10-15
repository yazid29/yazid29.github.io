# Panduan Edit & Kustomisasi Web Portofolio Ahmad Yazid Munif

Portofolio ini telah diatur dengan arsitektur **Data-Driven (Terpusat)** agar Anda dapat menambah, mengedit, atau menghapus konten (Project, Tech Stack, Work Experience, Sertifikasi, dll.) dengan sangat mudah hanya dari **satu file**.

---

## 📁 File Utama Konfigurasi Konten
Semua data teks, proyek, skill, dan pengalaman kerja tersimpan di:
👉 **`src/data/portfolioData.js`**

Anda **tidak perlu** mengutak-atik kode CSS atau JSX rumit untuk mengubah konten. Cukup buka file tersebut dan edit objek yang diinginkan.

---

## 1. Menambah Proyek Baru (Projects)
Buka `src/data/portfolioData.js` dan cari array `projects`. Tambahkan objek baru ke dalam array:

```javascript
{
  id: "nama-project-unik",
  title: "Judul Proyek Anda",
  subtitle: "Penjelasan Singkat / Klien",
  category: "enterprise-backend", // Opsi: "enterprise-backend", "ai-data", "fullstack", "devops"
  featured: true, // true jika ingin ditampilkan paling atas
  badge: "Microservice / Web / AI",
  description: "Deskripsi mendalam tentang problem yang diselesaikan dan solusi teknisnya.",
  keyFeatures: [
    "Fitur atau arsitektur utama 1",
    "Fitur atau arsitektur utama 2",
    "Fitur atau arsitektur utama 3"
  ],
  techStack: [".NET Core", "PostgreSQL", "Docker"],
  links: {
    github: "https://github.com/yazid29/nama-repo",
    demo: "https://link-demo-anda.com" // Opsional
  }
},
```

---

## 2. Menambah Tech Stack / Skill Baru
Cari array `techStack` di `src/data/portfolioData.js`. Tambahkan objek baru:

```javascript
{ 
  name: "Nama Teknologi (misal: Kubernetes)", 
  category: "devops", // Opsi: "backend", "frontend-crm", "database", "devops", "ai"
  tag: "Orchestration / Cloud", 
  icon: "SiKubernetes", 
  level: "Proficient" 
},
```

---

## 3. Menambah Pengalaman Kerja (Work Experience)
Cari array `experiences` di `src/data/portfolioData.js`. Tambahkan objek baru:

```javascript
{
  company: "Nama Perusahaan / Klien",
  location: "Kota, Negara (Remote / Onsite)",
  role: "Posisi / Jabatan Anda",
  period: "Bulan Tahun – Selesai",
  badge: "Full-time / Contract",
  type: "Enterprise / Fintech / Consulting",
  description: "Ringkasan tanggung jawab Anda.",
  achievements: [
    "Pencapaian atau hasil kerja 1",
    "Pencapaian atau hasil kerja 2",
    "Pencapaian atau hasil kerja 3"
  ],
  technologies: [".NET Core", "Docker", "PostgreSQL"]
},
```

---

## 4. Mengubah Snippet Kode Terminal di Hero Section
Cari array `heroTerminalSnippets` di `src/data/portfolioData.js`. Anda dapat mengubah kode C#, Python, Docker, atau CI/CD yang ditampilkan pada jendela terminal interaktif di bagian Hero.

---

## 5. Mengubah Profil & Kontak (Bio, Email, Sosmed, Foto)
Cari objek `personalInfo` di `src/data/portfolioData.js`:
- `email`: Alamat email Anda
- `phone`: Nomor kontak WhatsApp / telepon
- `socials`: Tautan ke GitHub & LinkedIn
- `resumeUrl`: Tautan ke PDF resume/CV ATS Anda

---

## 🚀 Perintah Menjalankan & Membangun Proyek
- **Menjalankan di Local (Development):**
  ```bash
  npm run dev
  ```
- **Membangun Bundle Production:**
  ```bash
  npm run build
  ```
- **Deploy ke GitHub Pages:**
  ```bash
  npm run deploy
  ```
