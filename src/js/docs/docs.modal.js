// export function initPhotoModal() {
//   const container = document.getElementById('photo-container');
//   const modal = document.getElementById('photo-modal');
//   const modalImg = document.getElementById('modal-img');
//   const modalLoader = document.getElementById('modal-loader');
//   const downloadBtn = document.getElementById('download-link');
//   const closeBtn = document.getElementById('close-modal');

//   // 1. Logika Membuka & Memuat Gambar 🖼️
//   container.addEventListener('click', (e) => {
//     const card = e.target.closest('.photo-card');
//     if (!card) return;

//     const fileId = card.getAttribute('data-file-id');
//     const downloadUrl = card.getAttribute('data-download-url');

//     // RESET STATE: Sembunyikan gambar lama & munculkan loader
//     modalImg.classList.add('opacity-0');
//     modalLoader.classList.remove('hidden');

//     // Set URL (Gunakan w1600 agar lebih stabil dibanding w3000)
//     modalImg.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
//     downloadBtn.href = downloadUrl;

//     // Tampilkan Modal
//     modal.classList.remove('hidden');
//     setTimeout(() => modal.classList.add('opacity-100'), 10);
//   });

//   // 2. Lifecycle Gambar (Sukses & Gagal) ✅
//   modalImg.onload = () => {
//     modalLoader.classList.add('hidden');
//     modalImg.classList.remove('opacity-0');
//     modalImg.classList.add('opacity-100');
//   };

//   modalImg.onerror = () => {
//     modalLoader.classList.add('hidden');
//     alert('Gagal memuat gambar resolusi tinggi. Silakan coba lagi.');
//   };

//   // 3. Logika Menutup Modal ❌
//   const closeModal = () => {
//     modal.classList.remove('opacity-100');
//     setTimeout(() => {
//       modal.classList.add('hidden');
//       modalImg.src = ''; // Reset src agar tidak membebani memori
//     }, 300);
//   };

//   closeBtn.addEventListener('click', closeModal);

//   // Tutup jika klik di luar gambar (overlay)
//   modal.addEventListener('click', (e) => {
//     if (e.target === modal) closeModal();
//   });

//   // Tutup dengan tombol Escape
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
//   });
// }
