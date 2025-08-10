function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('id-ID', options);
    document.getElementById('time').textContent = now.toLocaleTimeString('id-ID');
}

setInterval(updateClock, 1000);
updateClock();

// Ambil data cuti dari Google Spreadsheet (contoh API publik)
fetch('https://opensheet.elk.sh/SPREADSHEET_ID/SHEET_NAME')
    .then(res => res.json())
    .then(data => {
        const tbody = document.getElementById('cuti-list');
        tbody.innerHTML = '';
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${row.Nama}</td><td>${row.Mulai}</td><td>${row.Selesai}</td><td>${row.Keterangan}</td>`;
            tbody.appendChild(tr);
        });
    })
    .catch(err => {
        document.getElementById('cuti-list').innerHTML = '<tr><td colspan="4">Gagal memuat data</td></tr>';
    });
