export function initTime() {
  const labelDokumentasi = document.getElementById("label-dokumentasi");
  const labelAgenda = document.getElementById("label-agenda");

  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Minggu

  // Mundur ke Minggu terakhir buat Galeri
  const lastSunday = new Date(today);
  lastSunday.setDate(today.getDate() - dayOfWeek);

  // Maju 7 hari dari Minggu terakhir buat Agenda
  const nextSunday = new Date(lastSunday);
  nextSunday.setDate(lastSunday.getDate() + 7);

  const formatter = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (labelDokumentasi) {
    labelDokumentasi.textContent = `Dokumentasi: Minggu, ${formatter.format(lastSunday)}`;
  }

  if (labelAgenda) {
    labelAgenda.textContent = `Agenda: Minggu, ${formatter.format(nextSunday)}`;
  }
}
