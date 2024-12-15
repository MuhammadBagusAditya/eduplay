# Overview

Eduplay adalah sebuah platform belajar digital yang dikembangkan untuk memberikan jembatan antara murid dan guru agar dapat melakukan kegiatan belajar-mengajar secara online.

## Installation

### Manual

1. git clone repositori ini
2. jalankan "npm install" di folder frontend, kemudian jalankan "npm run dev" atau "yarn dev"
3. jalankan ".\pocketbase serve" di folder backend atau command sejenisnya untuk memanggil file exe dan mengirim argument serve
4. secara default, aplikasi frontend akan dijalankan di http://localhost:5173 (dev), http://localhost:4173 (start) dan aplikasi backend akan dijalankan di http://localhost:8090/

### Auto

1. double click atau jalankan npm-install.cmd dan frontend-dev.cmd (jika ingin dev mode)
2. double click atau jalankan frontend-start.cmd (untuk production mode)
3. double click atau jalankan backend-start.cmd (untuk menjalankan backend)

Note: Mungkin di production mode terdapat error yang belum diketahui, jadi kami lebih menyarankan untuk menggunakan dev mode

## Scripts

Di folder root, terdapat beberapa scripts yang berisikan perintah untuk menjalankan aplikasi secara otomatis. Apabila tidak bisa digunakan, silahkan menginstall dan menjalankan secara manual

1. npm-install: menginstall semua dependensi front-end
2. frontend-start: menjalankan web front-end (tidak perlu npm install)
3. frontend-dev: menjalankan web front-end secara dev mode (perlu npm install)
4. backend-start: menjalankan web back-end

## Routes

### Front end

| nama                | path                                     | keterangan                                                         |
| ------------------- | ---------------------------------------- | ------------------------------------------------------------------ |
| homepage            | /                                        | landing page beranda                                               |
| sign in             | /auth/sign-in                            | halaman login                                                      |
| sign up             | /auth/sign-up                            | halaman register                                                   |
| dashboard           | /dashboard                               | halaman home dashboard (guru dan murid sama)                       |
| edit profil         | /dashboard/profile/edit                  | halaman untuk mengubah data profil pengguna (guru dan murid sama)  |
| semua kelas         | /dashboard/classes                       | menampilkan semua kelas yang diikuti untuk murid                   |
| detail kelas        | /dashboard/classes/:id                   | menampilkan semua data dalam kelas yang diikuti untuk murid        |
| semua materi        | /dashboard/materials                     | menampilkan semua materi dari kelas yang diikuti untuk murid       |
| detail materi       | /dashboard/materials/:id                 | menampilkan semua data dalam materi yang diikuti untuk murid       |
| semua tugas         | /dashboard/assignments                   | menampilkan semua tugas dari kelas yang diikuti untuk murid        |
| detail tugas        | /dashboard/assignments/:id               | menampilkan semua data dalam tugas yang diikuti untuk murid        |
| semua kuis          | /dashboard/quizzes                       | menampilkan semua kuis dari kelas yang diikuti untuk murid         |
| detail kuis         | /dashboard/quizzes/:id                   | menampilkan semua data dalam kuis yang diikuti untuk murid         |
| mulai kuis          | /dashboard/quizzes/:id/start             | halaman untuk mengerjakan kuis untuk murid                         |
| semua kelas guru    | /dashboard/teachers/classes              | menampilkan semua kelas yang dibuat oleh pengguna (guru)           |
| membuat kelas baru  | /dashboard/teachers/classes/create       | halaman untuk membuat kelas baru                                   |
| lihat kelas         | /dashboard/teachers/classes/:id          | menampilkan semua data yang berhubungan dengan kelas yang dilihat  |
| edit kelas          | /dashboard/teachers/classes/:id/edit     | halaman untuk mengubah kelas                                       |
| semua materi guru   | /dashboard/teachers/materials            | menampilkan semua materi yang dibuat oleh pengguna (guru)          |
| membuat materi baru | /dashboard/teachers/materials/create     | halaman untuk membuat materi baru                                  |
| lihat materi        | /dashboard/teachers/materials/:id        | menampilkan semua data yang berhubungan dengan materi yang dilihat |
| edit materi         | /dashboard/teachers/materials/:id/edit   | halaman untuk mengubah materi                                      |
| semua tugas guru    | /dashboard/teachers/assignments          | menampilkan semua tugas yang dibuat oleh pengguna (guru)           |
| membuat tugas baru  | /dashboard/teachers/assignments/create   | halaman untuk membuat tugas baru                                   |
| lihat tugas         | /dashboard/teachers/assignments/:id      | menampilkan semua data yang berhubungan dengan tugas yang dilihat  |
| edit tugas          | /dashboard/teachers/assignments/:id/edit | halaman untuk mengubah tugas                                       |
| semua kuis guru     | /dashboard/teachers/quizzes              | menampilkan semua kuis yang dibuat oleh pengguna (guru)            |
| membuat kuis baru   | /dashboard/teachers/quizzes/create       | halaman untuk membuat kuis baru                                    |
| lihat kuis          | /dashboard/teachers/quizzes/:id          | menampilkan semua data yang berhubungan dengan kuis yang dilihat   |
| edit kuis           | /dashboard/teachers/quizzes/:id/edit     | halaman untuk mengubah kuis                                        |

### Back end

| nama      | path | keterangan        |
| --------- | ---- | ----------------- |
| dashboard | /\_  | halaman dashboard |
