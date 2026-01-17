---
title: "Aviation"
collection: hobbies
permalink: /hobbies/civil-aviation
date: 2026-01-17
prev_page:
  url: /hobbies/cities
  title: "Cities"
next_page:
  url: /hobbies/urban-rail-transit
  title: "Urban Rail Transit Systems"
---

<a href="/hobbies/" style="display: inline-block; margin-bottom: 1em; color: #8B0000;"><i class="fas fa-arrow-left"></i> Back to Hobbies</a>

I am passionate about aviation and enjoy tracking flights, studying airline operations, and visiting airports around the world.

## Airports I Have Visited

I have visited **29 airports** across 5 countries/regions, with **64 flights** totaling **86,923 km** (54,011 miles). Click the markers on the map below to see airport details.

<iframe src="/assets/maps/airports.html" width="100%" height="620" frameborder="0" style="border:0;"></iframe>

---

## Aircraft Types I Have Flown

I have flown on **11 different aircraft types** from 4 manufacturers. Click on each aircraft type to see the flights I've taken.

<style>
.aircraft-section {
  margin-bottom: 30px;
}
.aircraft-section h3 {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}
.aircraft-section h3 img {
  height: 30px;
  width: auto;
}
.aircraft-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
}
.aircraft-card {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 12px 15px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.aircraft-card:hover {
  background: #e8e8e8;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
/* Modal styles */
.modal-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
}
.modal-overlay.active {
  display: flex;
}
.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 500px;
  max-height: 80vh;
  width: 90%;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  animation: modalSlide 0.2s ease;
}
@keyframes modalSlide {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.modal-header {
  background: #8B0000;
  color: white;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-close {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
}
.modal-close:hover {
  opacity: 0.8;
}
.modal-body {
  padding: 15px 20px;
  max-height: 60vh;
  overflow-y: auto;
}
.modal-body ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.modal-body li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}
.modal-body li:last-child {
  border-bottom: none;
}
.flight-date {
  color: #888;
  margin-right: 8px;
}
.flight-code {
  font-weight: 600;
  color: #8B0000;
}
.flight-route {
  color: #333;
}
</style>

<!-- Modal -->
<div class="modal-overlay" id="flightModal">
  <div class="modal-content">
    <div class="modal-header">
      <span id="modalTitle">Aircraft Type</span>
      <button class="modal-close" onclick="closeModal()">&times;</button>
    </div>
    <div class="modal-body" id="modalBody">
    </div>
  </div>
</div>

<div class="aircraft-section">
  <h3><img src="/images/logos/Boeing.png" alt="Boeing"> Boeing</h3>
  <div class="aircraft-grid">
    <div class="aircraft-card" onclick="showFlights('B737-800', 'b737800')">B737-800 (31)</div>
    <div class="aircraft-card" onclick="showFlights('B737 MAX 8', 'b737max8')">B737 MAX 8 (2)</div>
    <div class="aircraft-card" onclick="showFlights('B757-200', 'b757200')">B757-200 (1)</div>
    <div class="aircraft-card" onclick="showFlights('B777-300ER', 'b777300er')">B777-300ER (1)</div>
  </div>
</div>

<div class="aircraft-section">
  <h3><img src="/images/logos/airbus.png" alt="Airbus"> Airbus</h3>
  <div class="aircraft-grid">
    <div class="aircraft-card" onclick="showFlights('A320', 'a320')">A320 (19)</div>
    <div class="aircraft-card" onclick="showFlights('A321', 'a321')">A321 (3)</div>
    <div class="aircraft-card" onclick="showFlights('A330-200', 'a330200')">A330-200 (1)</div>
    <div class="aircraft-card" onclick="showFlights('A330-300', 'a330300')">A330-300 (1)</div>
    <div class="aircraft-card" onclick="showFlights('A350-900', 'a350900')">A350-900 (2)</div>
    <div class="aircraft-card" onclick="showFlights('A380-800', 'a380800')">A380-800 (1)</div>
  </div>
</div>

<div class="aircraft-section">
  <h3><img src="/images/logos/comac.png" alt="COMAC"> COMAC</h3>
  <div class="aircraft-grid">
    <div class="aircraft-card" onclick="showFlights('ARJ21', 'arj21')">ARJ21 (1)</div>
  </div>
</div>

<div class="aircraft-section">
  <h3><img src="/images/logos/embraer.png" alt="Embraer"> Embraer</h3>
  <div class="aircraft-grid">
    <div class="aircraft-card" onclick="showFlights('ERJ-175', 'erj175')">ERJ-175 (1)</div>
  </div>
</div>

<script>
const flightData = {
  b737800: [
    {date: '2022-09-22', code: 'HU7259', route: 'DOY→DLC'},
    {date: '2022-12-15', code: 'HU7260', route: 'DLC→DOY'},
    {date: '2023-02-15', code: 'HU7259', route: 'DOY→DLC'},
    {date: '2023-04-30', code: 'HU7260', route: 'DLC→DOY'},
    {date: '2023-05-04', code: 'HU7259', route: 'DOY→DLC'},
    {date: '2023-08-20', code: 'HU7259', route: 'DOY→DLC'},
    {date: '2024-01-13', code: 'HU6372', route: 'DLC→DOY'},
    {date: '2024-01-30', code: 'DZ6251', route: 'HAK→SZX'},
    {date: '2024-02-04', code: 'SC8894', route: 'CSX→TNA'},
    {date: '2024-02-25', code: 'MU2517', route: 'TAO→DLC'},
    {date: '2024-03-15', code: 'HU7064', route: 'DLC→WUH'},
    {date: '2024-06-07', code: 'HU7260', route: 'DLC→DOY'},
    {date: '2024-06-10', code: 'HU7259', route: 'DOY→DLC'},
    {date: '2024-07-15', code: 'CA8961', route: 'DLC→TNA'},
    {date: '2024-07-20', code: 'MU2622', route: 'DOY→WUH'},
    {date: '2024-07-21', code: 'MU2542', route: 'WUH→CAN'},
    {date: '2024-09-01', code: 'HU7259', route: 'DOY→DLC'},
    {date: '2024-09-30', code: 'HU7106', route: 'DLC→PEK'},
    {date: '2024-10-07', code: 'CA8902', route: 'PEK→DLC'},
    {date: '2024-11-01', code: 'MF8786', route: 'DLC→YCU'},
    {date: '2024-11-04', code: 'MF8785', route: 'YCU→DLC'},
    {date: '2024-12-26', code: 'HU7260', route: 'DLC→DOY'},
    {date: '2025-01-02', code: 'MU5572', route: 'TNA→SHA'},
    {date: '2025-01-07', code: 'DZ6215', route: 'SQD→TNA'},
    {date: '2025-02-17', code: 'CA8962', route: 'TNA→DLC'},
    {date: '2025-06-06', code: 'MU9916', route: 'DLC→TYN'},
    {date: '2025-06-09', code: 'MU9929', route: 'TYN→DLC'},
    {date: '2025-09-06', code: 'SC8808', route: 'TNA→DLC'},
    {date: '2025-09-10', code: 'SC1195', route: 'DLC→TNA'},
    {date: '2025-11-28', code: 'HU7259', route: 'CAN→DOY→DLC'},
    {date: '2026-01-08', code: 'CA8901', route: 'DLC→PEK'}
  ],
  b737max8: [
    {date: '2024-01-20', code: 'CZ3664', route: 'TNA→CAN'},
    {date: '2024-07-27', code: 'ZH9907', route: 'SZX→TNA'}
  ],
  b757200: [
    {date: '2025-03-01', code: 'DL392', route: 'DCA→LAX'}
  ],
  b777300er: [
    {date: '2026-01-07', code: 'MU5414', route: 'CTU→PVG'}
  ],
  a320: [
    {date: '2019-01-28', code: 'HO1174', route: 'DOY→PVG'},
    {date: '2019-01-31', code: 'HO1175', route: 'PVG→DOY'},
    {date: '2024-03-17', code: 'CZ6426', route: 'WUH→DLC'},
    {date: '2024-05-10', code: 'MU5674', route: 'DLC→PVG'},
    {date: '2024-05-16', code: 'MU5673', route: 'PVG→DLC'},
    {date: '2024-06-19', code: '9C6987', route: 'DLC→KIX'},
    {date: '2024-06-23', code: '9C6988', route: 'KIX→DLC'},
    {date: '2025-01-02', code: 'MU6149', route: 'SHA→XMN'},
    {date: '2025-02-20', code: 'OZ302', route: 'DLC→ICN'},
    {date: '2025-02-23', code: 'F94593', route: 'LAX→SFO'},
    {date: '2025-02-24', code: 'B62416', route: 'SFO→JFK'},
    {date: '2025-03-04', code: 'OZ301', route: 'ICN→DLC'},
    {date: '2025-06-30', code: 'MU6476', route: 'DLC→TNA'},
    {date: '2025-10-10', code: 'MU6475', route: 'TNA→DLC'},
    {date: '2025-11-25', code: 'CZ6299', route: 'DLC→SZX'},
    {date: '2025-12-20', code: '9C6781', route: 'SHE→HET'},
    {date: '2025-12-22', code: '9C6732', route: 'HET→DLC'},
    {date: '2026-01-04', code: 'MU6622', route: 'DLC→TYN→LHW'},
    {date: '2026-01-04', code: 'MU2472', route: 'LHW→TFU'}
  ],
  a321: [
    {date: '2017-02-05', code: 'HO1174', route: 'DOY→PVG'},
    {date: '2017-02-09', code: 'HO1175', route: 'PVG→DOY'},
    {date: '2026-01-07', code: 'MU5673', route: 'PVG→DLC'}
  ],
  a330200: [
    {date: '2024-05-10', code: 'MU545', route: 'PVG→SIN'}
  ],
  a330300: [
    {date: '2019-06-13', code: '8L9616', route: 'TNA→CTU'}
  ],
  a350900: [
    {date: '2024-05-16', code: 'MU546', route: 'SIN→PVG'},
    {date: '2025-03-02', code: 'OZ203', route: 'LAX→ICN'}
  ],
  a380800: [
    {date: '2025-02-20', code: 'OZ202', route: 'ICN→LAX'}
  ],
  arj21: [
    {date: '2025-01-16', code: 'G54009', route: 'DOY→TSN'}
  ],
  erj175: [
    {date: '2025-02-27', code: 'AA4671', route: 'JFK→DCA'}
  ]
};

function showFlights(title, dataKey) {
  const modal = document.getElementById('flightModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  modalTitle.textContent = title;
  
  const flights = flightData[dataKey];
  let html = '<ul>';
  flights.forEach(f => {
    html += `<li><span class="flight-date">${f.date}</span><span class="flight-code">${f.code}</span> <span class="flight-route">${f.route}</span></li>`;
  });
  html += '</ul>';
  
  modalBody.innerHTML = html;
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('flightModal').classList.remove('active');
}

// Close on overlay click
document.getElementById('flightModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});
</script>
