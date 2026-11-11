// «Shımbay Pintok» aptekası – F-Apteka, Sklad, Jaramlılıq múddeti, ABC satılıw hám Firmalar menen alıs-beris
const STORAGE_KEY = 'shimbay_pintok_apteka_v2';
function daysAgoISO(days, hours = 10, minutes = 30) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  d.setHours(hours, minutes, 0, 0);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function daysFromNowDate(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
const DEFAULT_DATA = {
  firms: [
    { id: 'f1', name: '«Nókis Farm Med» JShJ', city: 'Nókis qalası', phone: '+998 91 384-22-10 (Azamat)' },
    { id: 'f2', name: '«Qaraqalpaq Dári-Dármaq» AJ', city: 'Nókis qalası', phone: '+998 61 222-45-90 (Bazarbay)' },
    { id: 'f3', name: '«Tashkent Grand Pharm» JShJ', city: 'Tashkent qalası', phone: '+998 90 915-77-00 (Sardor)' },
    { id: 'f4', name: '«Ámiwdárya Medikal Treyd»', city: 'Nókis qalası', phone: '+998 93 488-12-34 (Dawran)' },
    { id: 'f5', name: '«Shımbay Med Servis» JShJ', city: 'Shımbay rayonı', phone: '+998 97 788-55-11 (Quwanısh)' }
  ],
  branches: [
    { id: 'b1', name: '1-filial: Oraylıq bazar', address: 'Shımbay q., Bazar kóshesi 12', manager: 'Seytnazarova Gúlziyra' },
    { id: 'b2', name: '2-filial: Poliklinika janı', address: 'Shımbay q., E. Alakóz kóshesi 45', manager: 'Tórebaev Áwezbay' },
    { id: 'b3', name: '3-filial: Gújimli shaqapshası', address: 'Shımbay q., Gújimli MPJ', manager: 'Mámbetova Dilfuza' },
    { id: 'b4', name: '4-filial: Berdaq kóshesi', address: 'Shımbay q., Berdaq kóshesi 18', manager: 'Qurbanbaev Íqlas' }
  ],
  batches: [
    {
      id: 'inc-101',
      invoice: 'FA-2026-801',
      source: 'F-Apteka',
      firmId: 'f1',
      drug: 'Amoksiklav 625 mg (14 tabletka)',
      unit: 'qutı',
      abc: 'A',
      date: daysAgoISO(0, 9, 15),
      expiryDate: daysFromNowDate(420),
      qty: 200,
      price: 48000,
      note: 'Seriya: AM-908 • Tez-tezden satılıp atırǵan dári'
    },
    {
      id: 'inc-102',
      invoice: 'FA-2026-802',
      source: 'F-Apteka',
      firmId: 'f2',
      drug: 'Seftriakson 1.0 g (injekciya flakon)',
      unit: 'flakon',
      abc: 'A',
      date: daysAgoISO(0, 11, 40),
      expiryDate: daysFromNowDate(310),
      qty: 500,
      price: 8500,
      note: 'Kúndelikli joqarı talaptaǵı antibiotik'
    },
    {
      id: 'inc-103',
      invoice: 'FA-2026-803',
      source: 'F-Apteka',
      firmId: 'f3',
      drug: 'Kreón 10000 ED (20 kapsula)',
      unit: 'qutı',
      abc: 'B',
      date: daysAgoISO(1, 14, 20),
      expiryDate: daysFromNowDate(24),
      qty: 120,
      price: 62000,
      note: 'DIQQAT: Jaramlılıq múddeti jaqın! Firma menen almastırıw shárti bar'
    },
    {
      id: 'inc-104',
      invoice: 'FA-2026-804',
      source: 'F-Apteka',
      firmId: 'f1',
      drug: 'Nimesil 100 mg (30 paketik)',
      unit: 'qutı',
      abc: 'A',
      date: daysAgoISO(2, 10, 0),
      expiryDate: daysFromNowDate(520),
      qty: 150,
      price: 54000,
      note: 'Tez ótip turǵan dári (Filiallarda azayıp atır)'
    },
    {
      id: 'inc-105',
      invoice: 'FA-2026-805',
      source: 'F-Apteka',
      firmId: 'f4',
      drug: 'Natriy xlorid 0.9% (200 ml sistema)',
      unit: 'flakon',
      abc: 'A',
      date: daysAgoISO(3, 15, 10),
      expiryDate: daysFromNowDate(380),
      qty: 400,
      price: 6500,
      note: 'Infuzion eritpe — tez satıladı'
    },
    {
      id: 'inc-106',
      invoice: 'FA-2026-806',
      source: 'F-Apteka',
      firmId: 'f3',
      drug: 'Kardiomagnil 75 mg (100 tabletka)',
      unit: 'qutı',
      abc: 'B',
      date: daysAgoISO(5, 12, 30),
      expiryDate: daysFromNowDate(48),
      qty: 180,
      price: 39000,
      note: 'Múddetine 1.5 ay qaldı — firmaǵa xabar beriw kerek'
    },
    {
      id: 'inc-107',
      invoice: 'FA-2026-807',
      source: 'F-Apteka',
      firmId: 'f5',
      drug: 'Paracetamol 500 mg (10 tabletka)',
      unit: 'qutı',
      abc: 'A',
      date: daysAgoISO(8, 9, 45),
      expiryDate: daysFromNowDate(600),
      qty: 600,
      price: 3500,
      note: 'Máwsimlik eń tez ótetuǵın dári'
    },
    {
      id: 'inc-108',
      invoice: 'NK-2026-108',
      source: 'Qolda',
      firmId: 'f2',
      drug: 'Aktovegin 200 mg / 5 ml (5 ampula)',
      unit: 'ampula qutı',
      abc: 'C',
      date: daysAgoISO(12, 16, 0),
      expiryDate: daysFromNowDate(16),
      qty: 90,
      price: 115000,
      note: 'Áste ótedi + Múddeti júdá jaqın (16 kún qaldı!)'
    },
    {
      id: 'inc-109',
      invoice: 'FA-2026-809',
      source: 'F-Apteka',
      firmId: 'f4',
      drug: 'Essenciale Forte N (30 kapsula)',
      unit: 'qutı',
      abc: 'C',
      date: daysAgoISO(14, 11, 20),
      expiryDate: daysFromNowDate(75),
      qty: 80,
      price: 88000,
      note: 'Áste ótip turǵan dári (C gruppa)'
    }
  ],
  distributions: [
    { id: 'dist-201', batchId: 'inc-101', branchId: 'b1', date: daysAgoISO(0, 12, 10), qty: 80, soldQty: 74, person: 'Seytnazarova Gúlziyra' },
    { id: 'dist-202', batchId: 'inc-101', branchId: 'b2', date: daysAgoISO(0, 13, 0), qty: 70, soldQty: 63, person: 'Tórebaev Áwezbay' },
    { id: 'dist-203', batchId: 'inc-102', branchId: 'b2', date: daysAgoISO(0, 14, 15), qty: 220, soldQty: 205, person: 'Tórebaev Áwezbay' },
    { id: 'dist-204', batchId: 'inc-102', branchId: 'b3', date: daysAgoISO(0, 15, 30), qty: 140, soldQty: 128, person: 'Mámbetova Dilfuza' },
    { id: 'dist-205', batchId: 'inc-103', branchId: 'b1', date: daysAgoISO(1, 16, 40), qty: 40, soldQty: 22, person: 'Seytnazarova Gúlziyra' },
    { id: 'dist-206', batchId: 'inc-103', branchId: 'b4', date: daysAgoISO(1, 17, 10), qty: 30, soldQty: 15, person: 'Qurbanbaev Íqlas' },
    { id: 'dist-207', batchId: 'inc-104', branchId: 'b1', date: daysAgoISO(2, 13, 20), qty: 65, soldQty: 60, person: 'Seytnazarova Gúlziyra' },
    { id: 'dist-208', batchId: 'inc-104', branchId: 'b3', date: daysAgoISO(2, 15, 0), qty: 55, soldQty: 50, person: 'Mámbetova Dilfuza' },
    { id: 'dist-209', batchId: 'inc-105', branchId: 'b2', date: daysAgoISO(3, 17, 0), qty: 200, soldQty: 185, person: 'Tórebaev Áwezbay' },
    { id: 'dist-210', batchId: 'inc-106', branchId: 'b4', date: daysAgoISO(4, 11, 20), qty: 70, soldQty: 38, person: 'Qurbanbaev Íqlas' },
    { id: 'dist-211', batchId: 'inc-107', branchId: 'b1', date: daysAgoISO(7, 10, 30), qty: 250, soldQty: 242, person: 'Seytnazarova Gúlziyra' },
    { id: 'dist-212', batchId: 'inc-107', branchId: 'b3', date: daysAgoISO(7, 11, 45), qty: 200, soldQty: 190, person: 'Mámbetova Dilfuza' },
    { id: 'dist-213', batchId: 'inc-108', branchId: 'b2', date: daysAgoISO(10, 14, 0), qty: 30, soldQty: 6, person: 'Tórebaev Áwezbay' },
    { id: 'dist-214', batchId: 'inc-109', branchId: 'b4', date: daysAgoISO(12, 10, 0), qty: 25, soldQty: 4, person: 'Qurbanbaev Íqlas' }
  ],
  payments: [
    {
      id: 'pay-301',
      firmId: 'f1',
      date: daysAgoISO(1, 11, 0),
      amount: 12000000,
      method: 'Bank esap-beti (Perechislenie)',
      doc: 'Tólem tapsırması №104'
    },
    {
      id: 'pay-302',
      firmId: 'f2',
      date: daysAgoISO(2, 15, 30),
      amount: 8500000,
      method: 'Perevod (Karta)',
      doc: 'Bazarbay agentke tólendi'
    },
    {
      id: 'pay-303',
      firmId: 'f3',
      date: daysAgoISO(4, 10, 20),
      amount: 9000000,
      method: 'Bank esap-beti (Perechislenie)',
      doc: 'Shártnama №22 boyınsha'
    },
    {
      id: 'pay-304',
      firmId: 'f4',
      date: daysAgoISO(5, 16, 10),
      amount: 5000000,
      method: 'Naq pul (Kassa)',
      doc: 'Kassa shıǵım orderi №19'
    },
    {
      id: 'pay-305',
      firmId: 'f5',
      date: daysAgoISO(6, 12, 0),
      amount: 1500000,
      method: 'Perevod (Karta)',
      doc: ' Paracetamol partiyası ushın'
    }
  ]
};
// State
let state = loadState();
let currentPeriod = 'month';
let currentLedgerType = 'all';
let currentAbcFilter = 'all';
let faptekaSyncCounter = 1;
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.batches) && Array.isArray(parsed.payments)) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('LocalStorage oqıwda qátelik:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('LocalStorage saqlawda qátelik:', e);
  }
}
// Formatting Helpers
function formatMoney(num) {
  const n = Math.round(Number(num) || 0);
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " so'm";
}
function formatNumber(num) {
  const n = Math.round(Number(num) || 0);
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
function formatDateTime(isoStr) {
  if (!isoStr) return '-';
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return isoStr;
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function formatDateOnly(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
}
function getDaysUntilExpiry(expiryDateStr) {
  if (!expiryDateStr) return 365;
  const exp = new Date(expiryDateStr);
  const now = new Date();
  const diffMs = exp.getTime() - now.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}
function renderAbcBadge(abc) {
  const g = (abc || 'B').toUpperCase();
  if (g === 'A') {
    return `<span class="abc-badge abc-a">🟢 A – Tez ótedi</span>`;
  }
  if (g === 'C') {
    return `<span class="abc-badge abc-c">🔴 C – Áste ótedi</span>`;
  }
  return `<span class="abc-badge abc-b">🟡 B – Ortasha</span>`;
}
function renderExpiryBadge(expiryDateStr) {
  const days = getDaysUntilExpiry(expiryDateStr);
  const formatted = formatDateOnly(expiryDateStr);
  if (days <= 0) {
    return `<span class="badge badge-red">⛔ Múddeti ótken (${formatted})</span>`;
  }
  if (days <= 30) {
    return `<span class="badge badge-red">⚠️ ${days} kún qaldı (${formatted})</span>`;
  }
  if (days <= 90) {
    return `<span class="badge badge-amber">⏳ ${days} kún qaldı (${formatted})</span>`;
  }
  return `<span class="badge badge-green">✓ ${formatted} (${days} kún)</span>`;
}
function getFirmById(firmId) {
  return state.firms.find((f) => f.id === firmId) || { id: firmId, name: 'Belgisiz firma', city: '-', phone: '-' };
}
function getBranchById(branchId) {
  return state.branches.find((b) => b.id === branchId) || { id: branchId, name: 'Belgisiz filial', address: '-' };
}
function getBatchById(batchId) {
  return state.batches.find((b) => b.id === batchId) || null;
}
// Period Filtering
function isWithinPeriod(isoDate, period) {
  if (period === 'all') return true;
  const d = new Date(isoDate);
  if (isNaN(d.getTime())) return true;
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (period === 'today') return d >= startOfToday;
  if (period === 'week') {
    const weekAgo = new Date(startOfToday);
    weekAgo.setDate(weekAgo.getDate() - 7);
    return d >= weekAgo;
  }
  if (period === 'month') {
    const monthAgo = new Date(startOfToday);
    monthAgo.setDate(monthAgo.getDate() - 30);
    return d >= monthAgo;
  }
  return true;
}
// Compute enriched batch metrics
function getEnrichedBatches(period = 'all') {
  return state.batches
    .filter((b) => isWithinPeriod(b.date, period))
    .map((batch) => {
      const firm = getFirmById(batch.firmId);
      const batchDists = state.distributions.filter((d) => d.batchId === batch.id);
      const distributedQty = batchDists.reduce((acc, d) => acc + Number(d.qty || 0), 0);
      const totalSoldInBranches = batchDists.reduce((acc, d) => acc + Number(d.soldQty || 0), 0);
      const remainingInBranches = Math.max(0, distributedQty - totalSoldInBranches);
      const remainingQty = Math.max(0, Number(batch.qty) - distributedQty);
      const totalKirimSum = Number(batch.qty) * Number(batch.price);
      const totalShigimSum = distributedQty * Number(batch.price);
      const skladSum = remainingQty * Number(batch.price);
      const daysLeft = getDaysUntilExpiry(batch.expiryDate);
      const branchBreakdown = {};
      batchDists.forEach((d) => {
        const br = getBranchById(d.branchId);
        const remBr = Math.max(0, Number(d.qty) - Number(d.soldQty || 0));
        if (!branchBreakdown[br.name]) branchBreakdown[br.name] = { sent: 0, rem: 0 };
        branchBreakdown[br.name].sent += Number(d.qty);
        branchBreakdown[br.name].rem += remBr;
      });
      return {
        ...batch,
        abc: batch.abc || 'B',
        source: batch.source || 'F-Apteka',
        firmName: firm.name,
        firmCity: firm.city,
        firmPhone: firm.phone || '-',
        distributedQty,
        totalSoldInBranches,
        remainingInBranches,
        remainingQty,
        totalKirimSum,
        totalShigimSum,
        skladSum,
        daysLeft,
        branchBreakdown,
        distributions: batchDists
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
// Firm settlement stats
function getFirmSettlementStats() {
  const allBatches = getEnrichedBatches('all');
  return state.firms.map((firm) => {
    const fBatches = allBatches.filter((b) => b.firmId === firm.id);
    const fPayments = state.payments.filter((p) => p.firmId === firm.id);
    const totalTaken = fBatches.reduce((acc, b) => acc + b.totalKirimSum, 0);
    const totalSklad = fBatches.reduce((acc, b) => acc + b.skladSum, 0);
    const totalPaid = fPayments.reduce((acc, p) => acc + Number(p.amount || 0), 0);
    const debt = Math.max(0, totalTaken - totalPaid);
    const paidPct = totalTaken > 0 ? Math.min(100, Math.round((totalPaid / totalTaken) * 100)) : 100;
    return {
      ...firm,
      batchCount: fBatches.length,
      totalTaken,
      totalSklad,
      totalPaid,
      debt,
      paidPct
    };
  });
}
// Populate Select Dropdowns
function populateSelects() {
  const incFirmSelect = document.getElementById('inc-firm');
  const payFirmSelect = document.getElementById('pay-firm');
  const incomingFirmFilter = document.getElementById('incoming-firm-filter');
  const paymentFirmFilter = document.getElementById('payment-firm-filter');
  const firmOptionsHtml = state.firms
    .map((f) => `<option value="${f.id}">${f.name} (${f.city})</option>`)
    .join('');
  if (incFirmSelect) incFirmSelect.innerHTML = firmOptionsHtml;
  if (payFirmSelect) payFirmSelect.innerHTML = firmOptionsHtml;
  const firmFilterOptions =
    `<option value="all">Barlıq firmalar</option>` +
    state.firms.map((f) => `<option value="${f.id}">${f.name}</option>`).join('');
  if (incomingFirmFilter) {
    const prev = incomingFirmFilter.value || 'all';
    incomingFirmFilter.innerHTML = firmFilterOptions;
    incomingFirmFilter.value = prev;
  }
  if (paymentFirmFilter) {
    const prev = paymentFirmFilter.value || 'all';
    paymentFirmFilter.innerHTML = firmFilterOptions;
    paymentFirmFilter.value = prev;
  }
  const distBranchSelect = document.getElementById('dist-branch');
  if (distBranchSelect) {
    distBranchSelect.innerHTML = state.branches
      .map((b) => `<option value="${b.id}">${b.name} — ${b.manager}</option>`)
      .join('');
  }
  populateAvailableBatchesSelect();
}
function populateAvailableBatchesSelect(selectedBatchId = null) {
  const distBatchSelect = document.getElementById('dist-batch');
  if (!distBatchSelect) return;
  const allEnriched = getEnrichedBatches('all');
  const available = allEnriched.filter((b) => b.remainingQty > 0);
  if (available.length === 0) {
    distBatchSelect.innerHTML = `<option value="">Skladta bóliw ushın dári qalmaǵan</option>`;
    return;
  }
  distBatchSelect.innerHTML = available
    .map(
      (b) =>
        `<option value="${b.id}">${b.drug} | ${b.firmName} | Skladta: ${b.remainingQty} ${b.unit} (${formatMoney(b.price)}/dana)</option>`
    )
    .join('');
  if (selectedBatchId && available.some((b) => b.id === selectedBatchId)) {
    distBatchSelect.value = selectedBatchId;
  }
  updateDistributePreview();
}
// ==================== RENDER ALL VIEWS ====================
function renderAll() {
  populateSelects();
  const batches = getEnrichedBatches(currentPeriod);
  const allBatches = getEnrichedBatches('all');
  // Update sidebar badges
  document.getElementById('nav-incoming-count').textContent = state.batches.length;
  document.getElementById('nav-dist-count').textContent = state.distributions.length;
  document.getElementById('nav-stock-count').textContent = allBatches.filter((b) => b.remainingQty > 0).length;
  const expiringSoonCount = allBatches.filter((b) => b.daysLeft <= 90 && (b.remainingQty + b.remainingInBranches) > 0).length;
  document.getElementById('nav-expiry-count').textContent = expiringSoonCount;
  renderDashboard(batches, allBatches);
  renderExpiryTab(allBatches);
  renderSettlementsTab();
  renderIncomingTab();
  renderBranchesTab();
  renderWarehouseTab();
  renderFinanceTab(batches);
}
// 1. RENDER DASHBOARD
function renderDashboard(batches, allBatches) {
  const totalKirimSum = batches.reduce((acc, b) => acc + b.totalKirimSum, 0);
  const totalShigimSum = batches.reduce((acc, b) => acc + b.totalShigimSum, 0);
  const totalSkladSum = batches.reduce((acc, b) => acc + b.skladSum, 0);
  const totalKirimQty = batches.reduce((acc, b) => acc + Number(b.qty), 0);
  const totalShigimQty = batches.reduce((acc, b) => acc + b.distributedQty, 0);
  const totalSkladQty = batches.reduce((acc, b) => acc + b.remainingQty, 0);
  const totalTransfers = batches.reduce((acc, b) => acc + b.distributions.length, 0);
  const skladPercent = totalKirimSum > 0 ? Math.round((totalSkladSum / totalKirimSum) * 100) : 0;
  const outPercent = totalKirimSum > 0 ? 100 - skladPercent : 0;
  // Firm debt stats
  const firmSettlements = getFirmSettlementStats();
  const totalPaidAll = firmSettlements.reduce((acc, f) => acc + f.totalPaid, 0);
  const totalDebtAll = firmSettlements.reduce((acc, f) => acc + f.debt, 0);
  // KPI Cards
  document.getElementById('kpi-total-kirim').textContent = formatMoney(totalKirimSum);
  document.getElementById('kpi-kirim-batches').textContent = `${batches.length} partiya`;
  document.getElementById('kpi-kirim-qty').textContent = `Jámi: ${formatNumber(totalKirimQty)} qutı dári keldi`;
  document.getElementById('kpi-total-shigim').textContent = formatMoney(totalShigimSum);
  document.getElementById('kpi-shigim-transfers').textContent = `${totalTransfers} bóliw`;
  document.getElementById('kpi-shigim-qty').textContent = `Filiallarǵa: ${formatNumber(totalShigimQty)} qutı ketti`;
  document.getElementById('kpi-sklad-sum').textContent = formatMoney(totalSkladSum);
  document.getElementById('kpi-sklad-percent').textContent = `${skladPercent}% skladta`;
  document.getElementById('kpi-sklad-qty').textContent = `Skladta qalǵanı: ${formatNumber(totalSkladQty)} qutı`;
  document.getElementById('kpi-firm-debt').textContent = `Qarız: ${formatMoney(totalDebtAll)}`;
  document.getElementById('kpi-firm-paid').textContent = `Tólendi: ${formatMoney(totalPaidAll)}`;
  // SMART ALERT 1: Jaramlılıq múddeti jaqın dáriler
  const expiryAlertsEl = document.getElementById('dashboard-expiry-alerts');
  const expiringBatches = allBatches
    .filter((b) => b.daysLeft <= 90 && (b.remainingQty + b.remainingInBranches) > 0)
    .sort((a, b) => a.daysLeft - b.daysLeft);
  if (expiringBatches.length === 0) {
    expiryAlertsEl.innerHTML = `<div class="empty-state">Jaramlılıq múddeti jaqınlasqan dáriler joq.</div>`;
  } else {
    expiryAlertsEl.innerHTML = expiringBatches
      .map((b) => {
        const totalLeft = b.remainingQty + b.remainingInBranches;
        const riskSum = totalLeft * Number(b.price);
        const isUrgent = b.daysLeft <= 30;
        return `
          <div class="alert-item ${isUrgent ? 'urgent' : 'warning'}">
            <div>
              <div class="alert-item-title">
                ${b.drug}
                <span class="badge ${isUrgent ? 'badge-red' : 'badge-amber'}">${b.daysLeft} kún qaldı (Múddeti: ${formatDateOnly(b.expiryDate)})</span>
              </div>
              <div class="alert-item-desc">
                <strong>Alınǵan firma:</strong> ${b.firmName} (${b.firmPhone})<br/>
                <strong>Qaldıq:</strong> Skladta ${b.remainingQty} ${b.unit}, filiallarda ${b.remainingInBranches} ${b.unit} (Jámi: ${formatMoney(riskSum)})<br/>
                <span style="color:#be123c;font-weight:700;">👉 Talap: ${formatDateOnly(b.expiryDate)} sánesine shekem ${b.firmName} menen qaytarıw yamasa almastırıw máselesin sheshiw kerek!</span>
              </div>
            </div>
            <div class="alert-action-box">
              <span class="badge badge-purple">${b.invoice}</span>
            </div>
          </div>
        `;
      })
      .join('');
  }
  // SMART ALERT 2: Filiallarda azayıp atırǵan hám tez-tezden satılıp turǵan dáriler (Qayta aldırıw kerek)
  const reorderAlertsEl = document.getElementById('dashboard-reorder-alerts');
  const reorderItems = [];
  allBatches.forEach((b) => {
    b.distributions.forEach((d) => {
      const br = getBranchById(d.branchId);
      const remInBranch = Math.max(0, Number(d.qty) - Number(d.soldQty || 0));
      const soldPct = d.qty > 0 ? Math.round((Number(d.soldQty || 0) / Number(d.qty)) * 100) : 0;
      if (remInBranch <= 15 || soldPct >= 80 || b.abc === 'A') {
        reorderItems.push({
          batch: b,
          branchName: br.name,
          sentQty: d.qty,
          soldQty: d.soldQty || 0,
          remInBranch,
          soldPct
        });
      }
    });
  });
  reorderItems.sort((a, b) => a.remInBranch - b.remInBranch);
  if (reorderItems.length === 0) {
    reorderAlertsEl.innerHTML = `<div class="empty-state">Házirshe filiallarda tawsılıp baratırǵan dári joq.</div>`;
  } else {
    reorderAlertsEl.innerHTML = reorderItems
      .slice(0, 6)
      .map((item) => {
        const b = item.batch;
        return `
          <div class="alert-item reorder">
            <div>
              <div class="alert-item-title">
                ${b.drug} ${renderAbcBadge(b.abc)}
              </div>
              <div class="alert-item-desc">
                <strong>Filial:</strong> ${item.branchName} — <strong>Tek ${item.remInBranch} ${b.unit} qaldı!</strong> (${item.sentQty} ${b.unit}-dan ${item.soldQty} ${b.unit} tez satıldı, ${item.soldPct}%)<br/>
                <strong>Skladta qaldıq:</strong> ${b.remainingQty} ${b.unit} | <strong>Firma:</strong> ${b.firmName}<br/>
                <span style="color:#047857;font-weight:700;">👉 Usınıs: Bul dári tez-tezden satılıp atır — ${b.firmName} firmasınan qaytadan aldırıw kerek!</span>
              </div>
            </div>
            <div class="alert-action-box">
              <button class="btn btn-primary btn-sm btn-reorder-drug" data-batch-id="${b.id}">+ Qayta aldırıw</button>
            </div>
          </div>
        `;
      })
      .join('');
  }
  // ABC Summary Cards
  const countA = allBatches.filter((b) => b.abc === 'A').length;
  const countB = allBatches.filter((b) => b.abc === 'B').length;
  const countC = allBatches.filter((b) => b.abc === 'C').length;
  document.getElementById('abc-a-summary').textContent = `${countA} partiya dári • Tez-tezden satılıp atır (Qayta aldırıw usınıs etiledi)`;
  document.getElementById('abc-b-summary').textContent = `${countB} partiya dári • Turaqlı ortasha satılıwda`;
  document.getElementById('abc-c-summary').textContent = `${countC} partiya dári • Áste satılıwda (Múddetin baqlań)`;
  // Balance Banner
  document.getElementById('banner-kirim-sum').textContent = formatMoney(totalKirimSum);
  document.getElementById('banner-kirim-sub').textContent = `${batches.length} partiya (${formatNumber(totalKirimQty)} qutı/flakon)`;
  document.getElementById('banner-shigim-sum').textContent = formatMoney(totalShigimSum);
  document.getElementById('banner-shigim-sub').textContent = `Filiallarǵa ketken (${formatNumber(totalShigimQty)} qutı/flakon)`;
  document.getElementById('banner-sklad-sum').textContent = formatMoney(totalSkladSum);
  document.getElementById('banner-sklad-sub').textContent = `Skladta qalǵan (${formatNumber(totalSkladQty)} qutı/flakon)`;
  // Warehouse Ratio Meter
  document.getElementById('wm-ratio-text').textContent = `${outPercent}% filiallarǵa ketti / ${skladPercent}% skladta qaldı`;
  document.getElementById('wm-bar-out').style.width = `${outPercent}%`;
  document.getElementById('wm-bar-stock').style.width = `${skladPercent}%`;
  document.getElementById('wm-legend-out').textContent = `Filiallarǵa Shıǵım: ${formatMoney(totalShigimSum)}`;
  document.getElementById('wm-legend-stock').textContent = `Sklad summası: ${formatMoney(totalSkladSum)}`;
  // Firm Bars (with Paid vs Debt info)
  const maxFirmSum = Math.max(...firmSettlements.map((f) => f.totalTaken), 1);
  document.getElementById('dashboard-firm-bars').innerHTML = firmSettlements
    .map((f) => {
      const pct = Math.round((f.totalTaken / maxFirmSum) * 100);
      return `
        <div class="bar-item">
          <div class="bar-item-header">
            <div class="bar-item-name">
              <span>${f.name}</span>
              <span class="badge badge-blue">${f.batchCount} partiya</span>
            </div>
            <div class="bar-item-stats">Kirim: ${formatMoney(f.totalTaken)}</div>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${pct}%; background: linear-gradient(90deg, #2563eb, #3b82f6);"></div>
          </div>
          <div style="font-size: 11.5px; color: #64748b; display: flex; justify-content: space-between; flex-wrap: wrap;">
            <span style="color:#059669;font-weight:600;">Tólendi: ${formatMoney(f.totalPaid)}</span>
            <span style="color:#e11d48;font-weight:600;">Qarız: ${formatMoney(f.debt)}</span>
            <span>Skladta: ${formatMoney(f.totalSklad)}</span>
          </div>
        </div>
      `;
    })
    .join('');
  // Branch Bars
  const branchStats = state.branches.map((br) => {
    let sum = 0;
    let qty = 0;
    batches.forEach((b) => {
      b.distributions
        .filter((d) => d.branchId === br.id)
        .forEach((d) => {
          qty += Number(d.qty);
          sum += Number(d.qty) * Number(b.price);
        });
    });
    return { ...br, sum, qty };
  }).sort((a, b) => b.sum - a.sum);
  const maxBranchSum = Math.max(...branchStats.map((b) => b.sum), 1);
  document.getElementById('dashboard-branch-bars').innerHTML = branchStats
    .map((br) => {
      const pct = Math.round((br.sum / maxBranchSum) * 100);
      return `
        <div class="bar-item">
          <div class="bar-item-header">
            <div class="bar-item-name">
              <span>${br.name}</span>
              <span class="badge badge-amber">${formatNumber(br.qty)} qutı ketti</span>
            </div>
            <div class="bar-item-stats">${formatMoney(br.sum)}</div>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${pct}%; background: linear-gradient(90deg, #f59e0b, #d97706);"></div>
          </div>
        </div>
      `;
    })
    .join('');
  // Master Table on Dashboard
  const masterTbody = document.getElementById('dashboard-master-tbody');
  const masterTfoot = document.getElementById('dashboard-master-tfoot');
  if (batches.length === 0) {
    masterTbody.innerHTML = `<tr><td colspan="11" class="empty-state">Tańlanǵan dáwirde kelgen dáriler joq.</td></tr>`;
    masterTfoot.innerHTML = '';
    return;
  }
  masterTbody.innerHTML = batches
    .map((b) => {
      const pills = Object.entries(b.branchBreakdown)
        .map(([brName, info]) => `<span class="dist-pill">${brName}: ${info.sent} (qaldı: ${info.rem})</span>`)
        .join('');
      return `
        <tr>
          <td>
            <div style="font-weight: 600;">${formatDateTime(b.date)}</div>
            <span class="badge badge-blue" style="font-size:10px;">${b.source}: ${b.invoice}</span>
          </td>
          <td>
            <div style="font-weight: 600;">${b.firmName}</div>
            <div style="font-size: 11px; color: #64748b;">${b.firmPhone}</div>
          </td>
          <td>
            <div style="font-weight: 700; color: #0f172a;">${b.drug}</div>
            <div style="font-size: 11px; color: #64748b;">Bahası: ${formatMoney(b.price)} / ${b.unit}</div>
          </td>
          <td>${renderAbcBadge(b.abc)}</td>
          <td>${renderExpiryBadge(b.expiryDate)}</td>
          <td><span class="badge badge-blue">${formatNumber(b.qty)} ${b.unit}</span></td>
          <td class="amount-kirim">${formatMoney(b.totalKirimSum)}</td>
          <td>
            <div class="amount-shigim">${formatMoney(b.totalShigimSum)} (${formatNumber(b.distributedQty)} ${b.unit})</div>
            <div class="dist-pills">${pills || '<span style="font-size:11px;color:#94a3b8;">Bólinbegen</span>'}</div>
          </td>
          <td>
            <span class="badge ${b.remainingQty > 0 ? 'badge-green' : 'badge-red'}">
              ${formatNumber(b.remainingQty)} ${b.unit}
            </span>
          </td>
          <td class="amount-positive">${formatMoney(b.skladSum)}</td>
          <td>
            ${
              b.remainingQty > 0
                ? `<button class="btn btn-blue btn-sm btn-distribute-row" data-batch-id="${b.id}">Filialǵa bóliw</button>`
                : `<button class="btn btn-primary btn-sm btn-reorder-drug" data-batch-id="${b.id}">Qayta aldırıw</button>`
            }
          </td>
        </tr>
      `;
    })
    .join('');
  masterTfoot.innerHTML = `
    <tr>
      <td colspan="5">JÁMI ESABAT (${batches.length} partiya):</td>
      <td>${formatNumber(totalKirimQty)} dana</td>
      <td class="amount-kirim">${formatMoney(totalKirimSum)}</td>
      <td class="amount-shigim">${formatMoney(totalShigimSum)}</td>
      <td>${formatNumber(totalSkladQty)} dana</td>
      <td class="amount-positive">${formatMoney(totalSkladSum)}</td>
      <td></td>
    </tr>
  `;
}
// 2. RENDER EXPIRY TAB (JARAMLÍLÍQ MÚDDETI ESKERTIWLERI)
function renderExpiryTab(allBatches) {
  const filterVal = document.getElementById('expiry-filter-days')?.value || '90';
  const sorted = [...allBatches].sort((a, b) => a.daysLeft - b.daysLeft);
  const filtered = sorted.filter((b) => {
    if (filterVal === 'all') return true;
    const limit = Number(filterVal);
    return b.daysLeft <= limit;
  });
  const tbody = document.getElementById('expiry-tbody');
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty-state">Tańlanǵan múddet boyınsha qáwipli dáriler joq.</td></tr>`;
    return;
  }
  tbody.innerHTML = filtered
    .map((b) => {
      const totalLeft = b.remainingQty + b.remainingInBranches;
      const riskSum = totalLeft * Number(b.price);
      let actionHtml = `<span style="color:#059669;font-weight:600;">Múddeti jetkilikli (${b.daysLeft} kún bar)</span>`;
      if (b.daysLeft <= 30) {
        actionHtml = `<div style="color:#be123c;font-weight:700;">🚨 QÍSTAWLÍ: ${b.firmName} firmasınan alınǵan bul dárini ${formatDateOnly(b.expiryDate)} sánesine shekem (${b.daysLeft} kún ishinde) firmaǵa qaytarıw yamasa almastırıw máselesin sheshiw kerek!</div>`;
      } else if (b.daysLeft <= 90) {
        actionHtml = `<div style="color:#b45309;font-weight:700;">⚠️ ESKERTIW: ${b.firmName} menen xabarlasıp, ${formatDateOnly(b.expiryDate)} múddetine shekem filiallarda tezlestiw yamasa firma menen almastırıwdı sheshiw kerek!</div>`;
      }
      return `
        <tr>
          <td>
            <div style="font-weight:700;">${b.drug}</div>
            <div style="font-size:11px;color:#64748b;">Nakladnoy: ${b.invoice} (${b.source})</div>
          </td>
          <td style="font-weight:700;color:#1e40af;">${b.firmName}</td>
          <td>${b.firmPhone}</td>
          <td style="font-weight:700;">${formatDateOnly(b.expiryDate)}</td>
          <td>${renderExpiryBadge(b.expiryDate)}</td>
          <td>
            <div>Skladta: <strong>${b.remainingQty} ${b.unit}</strong></div>
            <div style="font-size:11.5px;color:#64748b;">Filiallarda: ${b.remainingInBranches} ${b.unit}</div>
          </td>
          <td class="amount-negative">${formatMoney(riskSum)}</td>
          <td>${actionHtml}</td>
        </tr>
      `;
    })
    .join('');
}
// 3. RENDER SETTLEMENTS TAB (FIRMALAR MENEN ALÍS-BERIS)
function renderSettlementsTab() {
  const stats = getFirmSettlementStats();
  const totalTaken = stats.reduce((acc, s) => acc + s.totalTaken, 0);
  const totalPaid = stats.reduce((acc, s) => acc + s.totalPaid, 0);
  const totalDebt = stats.reduce((acc, s) => acc + s.debt, 0);
  document.getElementById('settle-total-taken').textContent = formatMoney(totalTaken);
  document.getElementById('settle-total-paid').textContent = formatMoney(totalPaid);
  document.getElementById('settle-paid-count').textContent = `${state.payments.length} tólem operaciyası`;
  document.getElementById('settle-total-debt').textContent = formatMoney(totalDebt);
  const firmsTbody = document.getElementById('settle-firms-tbody');
  const firmsTfoot = document.getElementById('settle-firms-tfoot');
  firmsTbody.innerHTML = stats
    .map((f) => {
      return `
        <tr>
          <td>
            <div style="font-weight:700;">${f.name}</div>
            <div style="font-size:11.5px;color:#64748b;">${f.city}</div>
          </td>
          <td>${f.phone || '-'}</td>
          <td><span class="badge badge-blue">${f.batchCount} partiya</span></td>
          <td class="amount-kirim">${formatMoney(f.totalTaken)}</td>
          <td class="amount-positive">${formatMoney(f.totalPaid)}</td>
          <td class="amount-negative">${formatMoney(f.debt)}</td>
          <td>
            <span class="badge ${f.debt === 0 ? 'badge-green' : 'badge-amber'}">${f.paidPct}% tólendi</span>
          </td>
          <td>
            <button class="btn btn-primary btn-sm btn-pay-firm-row" data-firm-id="${f.id}" style="background:#7c3aed;">+ Tólem kiritiw</button>
          </td>
        </tr>
      `;
    })
    .join('');
  firmsTfoot.innerHTML = `
    <tr>
      <td colspan="3">JÁMI ALÍS-BERIS BALANSÍ:</td>
      <td class="amount-kirim">${formatMoney(totalTaken)}</td>
      <td class="amount-positive">${formatMoney(totalPaid)}</td>
      <td class="amount-negative">${formatMoney(totalDebt)}</td>
      <td colspan="2"></td>
    </tr>
  `;
  // Payments History Table
  const firmFilter = document.getElementById('payment-firm-filter')?.value || 'all';
  const filteredPayments = state.payments
    .filter((p) => firmFilter === 'all' || p.firmId === firmFilter)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const payTbody = document.getElementById('payments-history-tbody');
  const payTfoot = document.getElementById('payments-history-tfoot');
  if (filteredPayments.length === 0) {
    payTbody.innerHTML = `<tr><td colspan="6" class="empty-state">Tólemler tabılmadı.</td></tr>`;
    payTfoot.innerHTML = '';
    return;
  }
  let sumPaid = 0;
  payTbody.innerHTML = filteredPayments
    .map((p) => {
      const firm = getFirmById(p.firmId);
      sumPaid += Number(p.amount || 0);
      return `
        <tr>
          <td>${formatDateTime(p.date)}</td>
          <td style="font-weight:700;">${firm.name}</td>
          <td><span class="badge badge-purple">${p.method}</span></td>
          <td class="amount-positive">${formatMoney(p.amount)}</td>
          <td>${p.doc || '—'}</td>
          <td>
            <button class="delete-btn" data-del-payment="${p.id}" title="Tólemdi óshiriw">&times;</button>
          </td>
        </tr>
      `;
    })
    .join('');
  payTfoot.innerHTML = `
    <tr>
      <td colspan="3">JÁMI TÓLENGEN SUMMA (${filteredPayments.length} tólem):</td>
      <td class="amount-positive">${formatMoney(sumPaid)}</td>
      <td colspan="2"></td>
    </tr>
  `;
}
// 4. RENDER INCOMING TAB (FIRMALARDAN KIRIM)
function renderIncomingTab() {
  const allBatches = getEnrichedBatches(currentPeriod);
  const firmSettlements = getFirmSettlementStats();
  const firmsGrid = document.getElementById('firms-cards-grid');
  firmsGrid.innerHTML = firmSettlements
    .map((firm) => {
      const initials = firm.name
        .replace(/[^A-Za-zÁáÓóÚúǴǵŃńÍı]/g, ' ')
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase();
      return `
        <div class="entity-card">
          <div class="entity-top">
            <div class="entity-avatar blue">${initials || 'FM'}</div>
            <div>
              <div class="entity-name">${firm.name}</div>
              <div class="entity-meta">${firm.city} • ${firm.phone || ''}</div>
            </div>
          </div>
          <div class="entity-metrics">
            <div class="metric-box">
              <span>Kelgen dári (Kirim)</span>
              <strong style="color: #2563eb;">${formatMoney(firm.totalTaken)}</strong>
            </div>
            <div class="metric-box">
              <span>Tólengen pul</span>
              <strong style="color: #059669;">${formatMoney(firm.totalPaid)}</strong>
            </div>
            <div class="metric-box">
              <span>Qalǵan qarızımız</span>
              <strong style="color: #e11d48;">${formatMoney(firm.debt)}</strong>
            </div>
            <div class="metric-box">
              <span>Skladta qalǵanı</span>
              <strong>${formatMoney(firm.totalSklad)}</strong>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
  const searchVal = (document.getElementById('incoming-search')?.value || '').toLowerCase().trim();
  const firmFilter = document.getElementById('incoming-firm-filter')?.value || 'all';
  const abcFilter = document.getElementById('incoming-abc-filter')?.value || 'all';
  const statusFilter = document.getElementById('incoming-status-filter')?.value || 'all';
  const filtered = allBatches.filter((b) => {
    if (firmFilter !== 'all' && b.firmId !== firmFilter) return false;
    if (abcFilter !== 'all' && b.abc !== abcFilter) return false;
    if (statusFilter === 'in_stock' && b.remainingQty <= 0) return false;
    if (statusFilter === 'full' && b.distributedQty > 0) return false;
    if (statusFilter === 'empty' && b.remainingQty > 0) return false;
    if (searchVal) {
      const hay = `${b.drug} ${b.firmName} ${b.invoice} ${b.note || ''}`.toLowerCase();
      if (!hay.includes(searchVal)) return false;
    }
    return true;
  });
  const tbody = document.getElementById('incoming-tbody');
  const tfoot = document.getElementById('incoming-tfoot');
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="12" class="empty-state">Filtr boyınsha dári partiyası tabılmadı.</td></tr>`;
    tfoot.innerHTML = '';
    return;
  }
  let sumKirim = 0;
  let sumSklad = 0;
  let sumQty = 0;
  let sumRem = 0;
  tbody.innerHTML = filtered
    .map((b) => {
      sumKirim += b.totalKirimSum;
      sumSklad += b.skladSum;
      sumQty += Number(b.qty);
      sumRem += b.remainingQty;
      return `
        <tr class="cursor-pointer" data-preview-batch="${b.id}">
          <td>
            <span class="badge badge-purple">${b.invoice}</span>
            <div style="font-size:10.5px;color:#0059a4;font-weight:700;margin-top:2px;">${b.source}</div>
          </td>
          <td>${formatDateTime(b.date)}</td>
          <td style="font-weight: 600;">${b.firmName}</td>
          <td>
            <div style="font-weight: 700;">${b.drug}</div>
            <div style="font-size: 11px; color: #64748b;">${b.note || ''}</div>
          </td>
          <td>${renderAbcBadge(b.abc)}</td>
          <td>${renderExpiryBadge(b.expiryDate)}</td>
          <td><strong>${formatNumber(b.qty)} ${b.unit}</strong></td>
          <td>${formatMoney(b.price)}</td>
          <td class="amount-kirim">${formatMoney(b.totalKirimSum)}</td>
          <td>
            <span class="badge ${b.remainingQty > 0 ? 'badge-green' : 'badge-red'}">${formatNumber(b.remainingQty)} ${b.unit}</span>
          </td>
          <td class="amount-positive">${formatMoney(b.skladSum)}</td>
          <td>
            <div style="display: flex; gap: 6px; align-items: center;">
              ${
                b.remainingQty > 0
                  ? `<button class="btn btn-blue btn-sm btn-distribute-row" data-batch-id="${b.id}">Bóliw</button>`
                  : ''
              }
              <button class="delete-btn" data-del-batch="${b.id}" title="Partiyanı óshiriw">&times;</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');
  tfoot.innerHTML = `
    <tr>
      <td colspan="6">JÁMI (${filtered.length} partiya):</td>
      <td>${formatNumber(sumQty)} dana</td>
      <td>—</td>
      <td class="amount-kirim">${formatMoney(sumKirim)}</td>
      <td>${formatNumber(sumRem)} dana</td>
      <td class="amount-positive">${formatMoney(sumSklad)}</td>
      <td></td>
    </tr>
  `;
  if (filtered.length > 0) {
    renderStitchPreviewPanel(filtered[0]);
  }
}
function renderStitchPreviewPanel(batch) {
  if (!batch) return;
  const docIdEl = document.getElementById('preview-doc-id');
  const sourceEl = document.getElementById('preview-source');
  const detailsEl = document.getElementById('preview-batch-details');
  if (docIdEl) docIdEl.textContent = batch.invoice;
  if (sourceEl) sourceEl.textContent = `${batch.firmName} (${batch.source} kirimi)`;
  if (detailsEl) {
    detailsEl.innerHTML = `
      <div class="p-3 bg-surface-container-low rounded-xl border border-surface-container-highest flex flex-col gap-2 text-xs">
        <div class="flex justify-between">
          <span class="text-on-surface-variant">Dári ataması:</span>
          <strong class="text-on-surface">${batch.drug}</strong>
        </div>
        <div class="flex justify-between">
          <span class="text-on-surface-variant">Jaramlılıq múddeti:</span>
          <strong>${formatDateOnly(batch.expiryDate)} (${batch.daysLeft} kún)</strong>
        </div>
        <div class="flex justify-between">
          <span class="text-on-surface-variant">Kelgen muǵdar × Baha:</span>
          <strong>${formatNumber(batch.qty)} ${batch.unit} × ${formatMoney(batch.price)}</strong>
        </div>
        <div class="flex justify-between border-t border-surface-container-highest pt-1.5">
          <span class="text-on-surface-variant font-semibold">Jámi Kirim Summası:</span>
          <strong class="text-primary text-sm">${formatMoney(batch.totalKirimSum)}</strong>
        </div>
        <div class="flex justify-between">
          <span class="text-on-surface-variant">Filiallarǵa ketkeni (Shıǵım):</span>
          <strong class="text-amber-700">${formatMoney(batch.totalShigimSum)} (${batch.distributedQty} ${batch.unit})</strong>
        </div>
        <div class="flex justify-between">
          <span class="text-on-surface-variant font-semibold">Skladta qalǵanı (Keliw bahada):</span>
          <strong class="text-secondary text-sm">${formatMoney(batch.skladSum)} (${batch.remainingQty} ${batch.unit})</strong>
        </div>
      </div>
    `;
  }
}
// 5. RENDER BRANCHES & ABC TAB (FILIALLAR HÁM ABC SATÍLÍW)
function renderBranchesTab() {
  const enrichedDists = state.distributions
    .filter((d) => isWithinPeriod(d.date, currentPeriod))
    .map((d) => {
      const batch = getBatchById(d.batchId) || {
        drug: 'Óshirilgen dári',
        unit: 'qutı',
        price: 0,
        firmId: '',
        abc: 'B'
      };
      const firm = getFirmById(batch.firmId);
      const branch = getBranchById(d.branchId);
      const soldQty = Number(d.soldQty || 0);
      const remInBranch = Math.max(0, Number(d.qty) - soldQty);
      const outSum = Number(d.qty) * Number(batch.price);
      return {
        ...d,
        batchId: batch.id,
        drug: batch.drug,
        unit: batch.unit || 'qutı',
        abc: batch.abc || 'B',
        price: Number(batch.price || 0),
        firmId: batch.firmId,
        firmName: firm.name,
        branchName: branch.name,
        soldQty,
        remInBranch,
        outSum
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const branchesGrid = document.getElementById('branches-cards-grid');
  branchesGrid.innerHTML = state.branches
    .map((br, idx) => {
      const brDists = enrichedDists.filter((d) => d.branchId === br.id);
      const totalSum = brDists.reduce((acc, d) => acc + d.outSum, 0);
      const totalQty = brDists.reduce((acc, d) => acc + Number(d.qty), 0);
      const lowItemsCount = brDists.filter((d) => d.remInBranch <= 12).length;
      return `
        <div class="entity-card">
          <div class="entity-top">
            <div class="entity-avatar amber">F${idx + 1}</div>
            <div>
              <div class="entity-name">${br.name}</div>
              <div class="entity-meta">${br.address} • Juwapker: ${br.manager}</div>
            </div>
          </div>
          <div class="entity-metrics">
            <div class="metric-box">
              <span>Ketken dári summası (Shıǵım)</span>
              <strong style="color: #d97706;">${formatMoney(totalSum)}</strong>
            </div>
            <div class="metric-box">
              <span>Ketken dári muǵdarı</span>
              <strong>${formatNumber(totalQty)} qutı/flakon</strong>
            </div>
            <div class="metric-box">
              <span>Azayıp atırǵan dáriler</span>
              <strong style="color: #e11d48;">${lowItemsCount} túr dári az qaldı</strong>
            </div>
            <div class="metric-box">
              <span>Bóliw operaciyaları</span>
              <strong>${brDists.length} márte</strong>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
  const filtered = enrichedDists.filter((d) => {
    if (currentAbcFilter === 'A') return d.abc === 'A';
    if (currentAbcFilter === 'B') return d.abc === 'B';
    if (currentAbcFilter === 'C') return d.abc === 'C';
    if (currentAbcFilter === 'low') return d.remInBranch <= 15;
    return true;
  });
  const tbody = document.getElementById('dist-tbody');
  const tfoot = document.getElementById('dist-tfoot');
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="11" class="empty-state">Bul filtr boyınsha filiallar jazıwı tabılmadı.</td></tr>`;
    tfoot.innerHTML = '';
    return;
  }
  let totalQty = 0;
  let totalSold = 0;
  let totalRem = 0;
  let totalSum = 0;
  tbody.innerHTML = filtered
    .map((d) => {
      totalQty += Number(d.qty);
      totalSold += d.soldQty;
      totalRem += d.remInBranch;
      totalSum += d.outSum;
      let reorderStatus = `<span class="badge badge-green">Jetkilikli</span>`;
      if (d.remInBranch <= 12 || d.abc === 'A') {
        reorderStatus = `<span style="color:#047857;font-weight:700;font-size:12px;">⚡ Tez satılıp atır (${d.remInBranch} ${d.unit} qaldı) — ${d.firmName} firmasınan qayta aldırıw kerek!</span>`;
      } else if (d.abc === 'C') {
        reorderStatus = `<span style="color:#b91c1c;font-size:12px;">Áste satılmaqta — qayta aldırıw shárt emes</span>`;
      }
      return `
        <tr>
          <td>${formatDateTime(d.date)}</td>
          <td><span class="badge badge-amber">${d.branchName}</span></td>
          <td style="font-weight: 700;">${d.drug}</td>
          <td>${d.firmName}</td>
          <td>${renderAbcBadge(d.abc)}</td>
          <td><strong>${formatNumber(d.qty)} ${d.unit}</strong></td>
          <td style="color:#059669;font-weight:700;">${formatNumber(d.soldQty)} ${d.unit}</td>
          <td>
            <span class="badge ${d.remInBranch <= 12 ? 'badge-red' : 'badge-green'}">
              ${formatNumber(d.remInBranch)} ${d.unit}
            </span>
          </td>
          <td class="amount-shigim">${formatMoney(d.outSum)}</td>
          <td>${reorderStatus}</td>
          <td>
            <div style="display:flex;gap:6px;">
              <button class="btn btn-primary btn-sm btn-reorder-drug" data-batch-id="${d.batchId}">Aldırıw</button>
              <button class="delete-btn" data-del-dist="${d.id}" title="Bóliwdi óshiriw">&times;</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');
  tfoot.innerHTML = `
    <tr>
      <td colspan="5">JÁMI FILIALLAR BOYÍNSHA (${filtered.length} jazıw):</td>
      <td>${formatNumber(totalQty)} dana</td>
      <td>${formatNumber(totalSold)} dana satıldı</td>
      <td>${formatNumber(totalRem)} dana qaldı</td>
      <td class="amount-shigim">${formatMoney(totalSum)}</td>
      <td colspan="2"></td>
    </tr>
  `;
}
// 6. RENDER WAREHOUSE TAB (SKLAD QALDÍǴÍ HÁM SKLAD SUMMASÍ)
function renderWarehouseTab() {
  const allBatches = getEnrichedBatches('all');
  const totalSkladSum = allBatches.reduce((acc, b) => acc + b.skladSum, 0);
  const totalSkladQty = allBatches.reduce((acc, b) => acc + b.remainingQty, 0);
  const activeBatches = allBatches.filter((b) => b.remainingQty > 0);
  const lowStockBatches = allBatches.filter((b) => b.remainingQty > 0 && b.remainingQty / b.qty <= 0.25);
  document.getElementById('wh-total-sum').textContent = formatMoney(totalSkladSum);
  document.getElementById('wh-total-qty').textContent = `${formatNumber(totalSkladQty)} qutı`;
  document.getElementById('wh-active-batches').textContent = `${activeBatches.length} partiya skladta`;
  document.getElementById('wh-low-stock').textContent = `${lowStockBatches.length} túr dári`;
  const searchVal = (document.getElementById('wh-search')?.value || '').toLowerCase().trim();
  const mode = document.getElementById('wh-filter-mode')?.value || 'available';
  const filtered = allBatches.filter((b) => {
    if (mode === 'available' && b.remainingQty <= 0) return false;
    if (mode === 'low' && (b.remainingQty <= 0 || b.remainingQty / b.qty > 0.25)) return false;
    if (searchVal) {
      const hay = `${b.drug} ${b.firmName} ${b.invoice}`.toLowerCase();
      if (!hay.includes(searchVal)) return false;
    }
    return true;
  });
  const tbody = document.getElementById('wh-tbody');
  const tfoot = document.getElementById('wh-tfoot');
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" class="empty-state">Skladta bul filtr boyınsha dári tabılmadı.</td></tr>`;
    tfoot.innerHTML = '';
    return;
  }
  let sumInitQty = 0;
  let sumOutQty = 0;
  let sumRemQty = 0;
  let sumSklad = 0;
  tbody.innerHTML = filtered
    .map((b) => {
      sumInitQty += Number(b.qty);
      sumOutQty += b.distributedQty;
      sumRemQty += b.remainingQty;
      sumSklad += b.skladSum;
      return `
        <tr>
          <td>
            <div style="font-weight: 700;">${b.drug}</div>
            <div style="font-size: 11px; color: #64748b;">Partiya: ${b.invoice} (${b.source})</div>
          </td>
          <td style="font-weight: 600;">${b.firmName}</td>
          <td>${renderAbcBadge(b.abc)}</td>
          <td>${renderExpiryBadge(b.expiryDate)}</td>
          <td style="font-weight: 600;">${formatMoney(b.price)}</td>
          <td>${formatNumber(b.qty)} ${b.unit}</td>
          <td>${formatNumber(b.distributedQty)} ${b.unit}</td>
          <td><strong style="color: #059669; font-size: 14px;">${formatNumber(b.remainingQty)} ${b.unit}</strong></td>
          <td class="amount-positive" style="font-size: 14px;">${formatMoney(b.skladSum)}</td>
          <td>
            ${
              b.remainingQty > 0
                ? `<button class="btn btn-blue btn-sm btn-distribute-row" data-batch-id="${b.id}">Filialǵa bóliw</button>`
                : `<button class="btn btn-primary btn-sm btn-reorder-drug" data-batch-id="${b.id}">Qayta aldırıw</button>`
            }
          </td>
        </tr>
      `;
    })
    .join('');
  tfoot.innerHTML = `
    <tr>
      <td colspan="5">SKLAD JÁMI (${filtered.length} partiya):</td>
      <td>${formatNumber(sumInitQty)} dana</td>
      <td>${formatNumber(sumOutQty)} dana</td>
      <td>${formatNumber(sumRemQty)} dana</td>
      <td class="amount-positive">${formatMoney(sumSklad)}</td>
      <td></td>
    </tr>
  `;
}
// 7. RENDER FINANCE TAB (KIRIM-SHÍǴÍM BALANSÍ)
function renderFinanceTab(batches) {
  const totalKirim = batches.reduce((acc, b) => acc + b.totalKirimSum, 0);
  const totalShigim = batches.reduce((acc, b) => acc + b.totalShigimSum, 0);
  const totalSklad = batches.reduce((acc, b) => acc + b.skladSum, 0);
  document.getElementById('fin-kirim-sum').textContent = formatMoney(totalKirim);
  document.getElementById('fin-shigim-sum').textContent = formatMoney(totalShigim);
  document.getElementById('fin-sklad-sum').textContent = formatMoney(totalSklad);
  const firmSettlements = getFirmSettlementStats();
  document.getElementById('fin-firms-tbody').innerHTML = firmSettlements
    .map((f) => {
      return `
        <tr>
          <td style="font-weight: 600;">${f.name}</td>
          <td class="amount-kirim">${formatMoney(f.totalTaken)}</td>
          <td class="amount-positive">${formatMoney(f.totalSklad)}</td>
          <td style="color:#059669;font-weight:700;">${formatMoney(f.totalPaid)}</td>
          <td class="amount-negative">${formatMoney(f.debt)}</td>
        </tr>
      `;
    })
    .join('');
  document.getElementById('fin-branches-tbody').innerHTML = state.branches
    .map((br) => {
      let count = 0;
      let qty = 0;
      let sum = 0;
      batches.forEach((b) => {
        b.distributions
          .filter((d) => d.branchId === br.id)
          .forEach((d) => {
            count += 1;
            qty += Number(d.qty);
            sum += Number(d.qty) * Number(b.price);
          });
      });
      return `
        <tr>
          <td style="font-weight: 600;">${br.name}</td>
          <td>${count} márte</td>
          <td>${formatNumber(qty)} qutı</td>
          <td class="amount-shigim">${formatMoney(sum)}</td>
        </tr>
      `;
    })
    .join('');
  const ledgerEvents = [];
  batches.forEach((b) => {
    ledgerEvents.push({
      date: b.date,
      type: 'kirim',
      partner: b.firmName,
      drug: b.drug,
      qty: `${formatNumber(b.qty)} ${b.unit}`,
      price: b.price,
      kirimSum: b.totalKirimSum,
      shigimSum: 0
    });
    b.distributions.forEach((d) => {
      const br = getBranchById(d.branchId);
      ledgerEvents.push({
        date: d.date,
        type: 'shigim',
        partner: br.name,
        drug: b.drug,
        qty: `${formatNumber(d.qty)} ${b.unit}`,
        price: b.price,
        kirimSum: 0,
        shigimSum: Number(d.qty) * Number(b.price)
      });
    });
  });
  const filteredLedger = ledgerEvents
    .filter((ev) => {
      if (currentLedgerType === 'kirim') return ev.type === 'kirim';
      if (currentLedgerType === 'shigim') return ev.type === 'shigim';
      return true;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const ledgerTbody = document.getElementById('ledger-tbody');
  const ledgerTfoot = document.getElementById('ledger-tfoot');
  let sumK = 0;
  let sumS = 0;
  ledgerTbody.innerHTML = filteredLedger
    .map((ev) => {
      sumK += ev.kirimSum;
      sumS += ev.shigimSum;
      return `
        <tr>
          <td>${formatDateTime(ev.date)}</td>
          <td>
            ${
              ev.type === 'kirim'
                ? `<span class="badge badge-blue">↓ KIRIM (Firmadan)</span>`
                : `<span class="badge badge-amber">↑ SHÍǴÍM (Filialǵa)</span>`
            }
          </td>
          <td style="font-weight: 600;">${ev.partner}</td>
          <td style="font-weight: 600;">${ev.drug}</td>
          <td>${ev.qty}</td>
          <td>${formatMoney(ev.price)}</td>
          <td class="amount-kirim">${ev.kirimSum > 0 ? '+' + formatMoney(ev.kirimSum) : '—'}</td>
          <td class="amount-shigim">${ev.shigimSum > 0 ? '-' + formatMoney(ev.shigimSum) : '—'}</td>
        </tr>
      `;
    })
    .join('');
  ledgerTfoot.innerHTML = `
    <tr>
      <td colspan="6">JÁMI KIRIM HÁM SHÍǴÍM AYLANÍSÍ:</td>
      <td class="amount-kirim">+${formatMoney(sumK)}</td>
      <td class="amount-shigim">-${formatMoney(sumS)}</td>
    </tr>
  `;
}
// ==================== MODAL & FORM HANDLERS ====================
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}
function setNowToInput(inputId) {
  const el = document.getElementById(inputId);
  if (!el) return;
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  el.value = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
}
function updateIncomingPreview() {
  const qty = Number(document.getElementById('inc-qty')?.value || 0);
  const price = Number(document.getElementById('inc-price')?.value || 0);
  const unit = document.getElementById('inc-unit')?.value || 'qutı';
  const total = qty * price;
  document.getElementById('inc-preview-qty').textContent = `${formatNumber(qty)} ${unit}`;
  document.getElementById('inc-preview-price').textContent = formatMoney(price);
  document.getElementById('inc-preview-total').textContent = formatMoney(total);
}
function updateDistributePreview() {
  const batchId = document.getElementById('dist-batch')?.value;
  const qtyInput = document.getElementById('dist-qty');
  const qty = Number(qtyInput?.value || 0);
  const allEnriched = getEnrichedBatches('all');
  const batch = allEnriched.find((b) => b.id === batchId);
  if (!batch) {
    document.getElementById('dist-preview-out-sum').textContent = "0 so'm";
    document.getElementById('dist-preview-rem-qty').textContent = '0 qutı';
    document.getElementById('dist-preview-rem-sum').textContent = "0 so'm";
    return;
  }
  if (qtyInput) qtyInput.max = batch.remainingQty;
  const validQty = Math.min(Math.max(0, qty), batch.remainingQty);
  const outSum = validQty * Number(batch.price);
  const remQty = batch.remainingQty - validQty;
  const remSum = remQty * Number(batch.price);
  document.getElementById('dist-preview-out-sum').textContent = formatMoney(outSum);
  document.getElementById('dist-preview-rem-qty').textContent = `${formatNumber(remQty)} ${batch.unit}`;
  document.getElementById('dist-preview-rem-sum').textContent = formatMoney(remSum);
}
function updatePaymentPreview() {
  const firmId = document.getElementById('pay-firm')?.value;
  const paying = Number(document.getElementById('pay-amount')?.value || 0);
  const stats = getFirmSettlementStats();
  const firmStat = stats.find((s) => s.id === firmId);
  const currentDebt = firmStat ? firmStat.debt : 0;
  const afterDebt = Math.max(0, currentDebt - paying);
  document.getElementById('pay-preview-current-debt').textContent = formatMoney(currentDebt);
  document.getElementById('pay-preview-paying').textContent = formatMoney(paying);
  document.getElementById('pay-preview-after-debt').textContent = formatMoney(afterDebt);
}
// F-Apteka Live Sync Handler
function syncFromFApteka() {
  const sampleImports = [
    {
      firmId: 'f1',
      drug: 'Azitromicin 500 mg (3 kapsula)',
      unit: 'qutı',
      abc: 'A',
      expiryDate: daysFromNowDate(480),
      qty: 250,
      price: 19500,
      note: 'F-Apteka bazasınan avtomatikalıq júklendi (Tez satılıwshı A gruppa)'
    },
    {
      firmId: 'f3',
      drug: 'Diklofenak 75 mg / 3 ml (5 ampula)',
      unit: 'ampula qutı',
      abc: 'B',
      expiryDate: daysFromNowDate(38),
      qty: 140,
      price: 16000,
      note: 'F-Apteka kirimi • Jaramlılıq múddetine dıqqat etiń!'
    }
  ];
  const pick = sampleImports[(faptekaSyncCounter - 1) % sampleImports.length];
  faptekaSyncCounter += 1;
  const invNo = `FA-2026-${810 + state.batches.length}`;
  state.batches.unshift({
    id: 'inc-' + Date.now(),
    invoice: invNo,
    source: 'F-Apteka',
    firmId: pick.firmId,
    drug: pick.drug,
    unit: pick.unit,
    abc: pick.abc,
    date: daysAgoISO(0, new Date().getHours(), new Date().getMinutes()),
    expiryDate: pick.expiryDate,
    qty: pick.qty,
    price: pick.price,
    note: pick.note
  });
  saveState();
  renderAll();
  const syncTextEl = document.getElementById('fapteka-last-sync');
  if (syncTextEl) {
    syncTextEl.textContent = `✅ F-Apteka menen sońǵı sinxronlaw: Házir ǵana (${invNo}: ${pick.drug} — ${formatMoney(pick.qty * pick.price)} kirim summası qabıllandı!)`;
  }
  closeModal('modal-fapteka');
}
// Export CSV
function exportCSV() {
  const batches = getEnrichedBatches(currentPeriod);
  const headers = [
    'Nakladnoy',
    'Derek',
    'Kelgen sanesi',
    'Firma',
    'Dari ati',
    'ABC gruppa',
    'Jaramliliq muddeti',
    'Kelgen mugdari',
    'Olshem',
    'Keliw bahasi (dana)',
    'Jami Kirim summasi',
    'Filiallarga ketken mugdar',
    'Jami Shigim summasi',
    'Skladta qalgan mugdar',
    'Sklad summasi (Keliw summada)'
  ];
  const rows = batches.map((b) => [
    b.invoice,
    b.source,
    formatDateTime(b.date),
    `"${b.firmName.replace(/"/g, '""')}"`,
    `"${b.drug.replace(/"/g, '""')}"`,
    b.abc,
    b.expiryDate,
    b.qty,
    b.unit,
    b.price,
    b.totalKirimSum,
    b.distributedQty,
    b.totalShigimSum,
    b.remainingQty,
    b.skladSum
  ]);
  const csvContent =
    '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `shimbay-pintok-fapteka-esabat-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
function updateClock() {
  const el = document.getElementById('live-clock');
  if (!el) return;
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  el.textContent = `Búgin: ${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()} • ${pad(now.getHours())}:${pad(now.getMinutes())}`;
}
// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 30000);
  // Navigation Tabs
  document.querySelectorAll('.nav-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      document.querySelectorAll('.nav-item').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-section').forEach((sec) => sec.classList.remove('active'));
      document.getElementById(`tab-${tab}`)?.classList.add('active');
    });
  });
  // Quick Jump Buttons on Dashboard
  document.getElementById('btn-go-expiry')?.addEventListener('click', () => {
    document.querySelector('.nav-item[data-tab="expiry"]')?.click();
  });
  document.getElementById('btn-go-abc')?.addEventListener('click', () => {
    document.querySelector('.nav-item[data-tab="branches"]')?.click();
  });
  // Period Filter
  document.querySelectorAll('#period-filter .period-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#period-filter .period-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentPeriod = btn.getAttribute('data-period') || 'all';
      renderAll();
    });
  });
  // ABC Filter in Branches tab
  document.querySelectorAll('#abc-table-filter .period-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#abc-table-filter .period-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentAbcFilter = btn.getAttribute('data-abc') || 'all';
      renderBranchesTab();
    });
  });
  // Ledger Type Filter
  document.querySelectorAll('#ledger-type-filter .period-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#ledger-type-filter .period-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentLedgerType = btn.getAttribute('data-ltype') || 'all';
      renderFinanceTab(getEnrichedBatches(currentPeriod));
    });
  });
  // Search & Filter Listeners
  ['incoming-search', 'incoming-firm-filter', 'incoming-abc-filter', 'incoming-status-filter'].forEach((id) => {
    document.getElementById(id)?.addEventListener('input', renderIncomingTab);
    document.getElementById(id)?.addEventListener('change', renderIncomingTab);
  });
  ['wh-search', 'wh-filter-mode'].forEach((id) => {
    document.getElementById(id)?.addEventListener('input', renderWarehouseTab);
    document.getElementById(id)?.addEventListener('change', renderWarehouseTab);
  });
  document.getElementById('expiry-filter-days')?.addEventListener('change', () => {
    renderExpiryTab(getEnrichedBatches('all'));
  });
  document.getElementById('payment-firm-filter')?.addEventListener('change', renderSettlementsTab);
  // Open Modals
  const openIncoming = (prefillBatch = null) => {
    populateSelects();
    setNowToInput('inc-date');
    document.getElementById('inc-expiry').value = daysFromNowDate(365);
    const nextNum = 800 + state.batches.length + 1;
    document.getElementById('inc-invoice').value = `FA-2026-${nextNum}`;
    if (prefillBatch) {
      document.getElementById('inc-firm').value = prefillBatch.firmId;
      document.getElementById('inc-drug').value = prefillBatch.drug;
      document.getElementById('inc-unit').value = prefillBatch.unit;
      document.getElementById('inc-abc').value = prefillBatch.abc || 'A';
      document.getElementById('inc-price').value = prefillBatch.price;
      document.getElementById('inc-qty').value = prefillBatch.qty;
      document.getElementById('inc-note').value = 'Filiallarda azayǵanı ushın qaytadan buyırtpa';
    }
    updateIncomingPreview();
    openModal('modal-incoming');
  };
  document.getElementById('btn-open-incoming-modal')?.addEventListener('click', () => openIncoming());
  document.getElementById('btn-open-incoming-modal-2')?.addEventListener('click', () => openIncoming());
  const openDistribute = (preselectBatchId = null) => {
    populateSelects();
    populateAvailableBatchesSelect(preselectBatchId);
    setNowToInput('dist-date');
    const brId = document.getElementById('dist-branch')?.value;
    const br = getBranchById(brId);
    if (br && br.manager) {
      document.getElementById('dist-person').value = br.manager;
    }
    updateDistributePreview();
    openModal('modal-distribute');
  };
  document.getElementById('btn-open-distribute-modal')?.addEventListener('click', () => openDistribute());
  document.getElementById('btn-open-distribute-modal-2')?.addEventListener('click', () => openDistribute());
  const openPaymentModal = (preselectFirmId = null) => {
    populateSelects();
    if (preselectFirmId) {
      document.getElementById('pay-firm').value = preselectFirmId;
    }
    setNowToInput('pay-date');
    updatePaymentPreview();
    openModal('modal-payment');
  };
  document.getElementById('btn-open-payment-modal')?.addEventListener('click', () => openPaymentModal());
  document.getElementById('btn-open-payment-modal-2')?.addEventListener('click', () => openPaymentModal());
  // F-Apteka buttons
  document.getElementById('btn-open-fapteka-modal')?.addEventListener('click', () => openModal('modal-fapteka'));
  document.getElementById('btn-config-fapteka')?.addEventListener('click', () => openModal('modal-fapteka'));
  document.getElementById('btn-sync-fapteka-now')?.addEventListener('click', syncFromFApteka);
  document.getElementById('btn-modal-sync-fapteka')?.addEventListener('click', syncFromFApteka);
  document.getElementById('fapteka-file-input')?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      syncFromFApteka();
      e.target.value = '';
    }
  });
  document.getElementById('btn-open-firm-modal')?.addEventListener('click', () => openModal('modal-firm'));
  document.getElementById('btn-open-branch-modal')?.addEventListener('click', () => openModal('modal-branch'));
  // Close Modals
  document.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close')));
  });
  // Live Previews inside Modals
  ['inc-qty', 'inc-price', 'inc-unit'].forEach((id) => {
    document.getElementById(id)?.addEventListener('input', updateIncomingPreview);
    document.getElementById(id)?.addEventListener('change', updateIncomingPreview);
  });
  ['dist-batch', 'dist-qty'].forEach((id) => {
    document.getElementById(id)?.addEventListener('input', updateDistributePreview);
    document.getElementById(id)?.addEventListener('change', updateDistributePreview);
  });
  ['pay-firm', 'pay-amount'].forEach((id) => {
    document.getElementById(id)?.addEventListener('input', updatePaymentPreview);
    document.getElementById(id)?.addEventListener('change', updatePaymentPreview);
  });
  document.getElementById('dist-branch')?.addEventListener('change', (e) => {
    const br = getBranchById(e.target.value);
    if (br && br.manager) {
      document.getElementById('dist-person').value = br.manager;
    }
  });
  // Form 1: Add Incoming Medicine Batch
  document.getElementById('form-incoming')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const firmId = document.getElementById('inc-firm').value;
    const invoice = document.getElementById('inc-invoice').value.trim();
    const drug = document.getElementById('inc-drug').value.trim();
    const unit = document.getElementById('inc-unit').value;
    const abc = document.getElementById('inc-abc').value || 'B';
    const date = document.getElementById('inc-date').value;
    const expiryDate = document.getElementById('inc-expiry').value;
    const qty = Number(document.getElementById('inc-qty').value);
    const price = Number(document.getElementById('inc-price').value);
    const note = document.getElementById('inc-note').value.trim();
    if (!drug || qty <= 0 || price <= 0) return;
    state.batches.unshift({
      id: 'inc-' + Date.now(),
      invoice,
      source: invoice.startsWith('FA-') ? 'F-Apteka' : 'Qolda',
      firmId,
      drug,
      unit,
      abc,
      date,
      expiryDate,
      qty,
      price,
      note
    });
    saveState();
    e.target.reset();
    closeModal('modal-incoming');
    renderAll();
  });
  // Form 2: Distribute Medicine to Branch
  document.getElementById('form-distribute')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const batchId = document.getElementById('dist-batch').value;
    const branchId = document.getElementById('dist-branch').value;
    const date = document.getElementById('dist-date').value;
    const qty = Number(document.getElementById('dist-qty').value);
    const person = document.getElementById('dist-person').value.trim();
    const batch = getEnrichedBatches('all').find((b) => b.id === batchId);
    if (!batch) {
      alert('Skladta dári partiyası tabılmadı!');
      return;
    }
    if (qty <= 0 || qty > batch.remainingQty) {
      alert(`Skladta bul partiyadan tek ${batch.remainingQty} ${batch.unit} qalǵan!`);
      return;
    }
    state.distributions.unshift({
      id: 'dist-' + Date.now(),
      batchId,
      branchId,
      date,
      qty,
      soldQty: 0,
      person
    });
    saveState();
    e.target.reset();
    closeModal('modal-distribute');
    renderAll();
  });
  // Form 3: Firm Payment
  document.getElementById('form-payment')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const firmId = document.getElementById('pay-firm').value;
    const amount = Number(document.getElementById('pay-amount').value);
    const method = document.getElementById('pay-method').value;
    const date = document.getElementById('pay-date').value;
    const doc = document.getElementById('pay-doc').value.trim();
    if (!firmId || amount <= 0) return;
    state.payments.unshift({
      id: 'pay-' + Date.now(),
      firmId,
      date,
      amount,
      method,
      doc
    });
    saveState();
    e.target.reset();
    closeModal('modal-payment');
    renderAll();
  });
  // Form 4: Add New Firm
  document.getElementById('form-firm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('firm-name').value.trim();
    const city = document.getElementById('firm-city').value.trim();
    const phone = document.getElementById('firm-phone').value.trim();
    if (!name) return;
    state.firms.push({
      id: 'f-' + Date.now(),
      name,
      city,
      phone
    });
    saveState();
    e.target.reset();
    closeModal('modal-firm');
    renderAll();
  });
  // Form 5: Add New Branch
  document.getElementById('form-branch')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('branch-name').value.trim();
    const address = document.getElementById('branch-address').value.trim();
    const manager = document.getElementById('branch-manager').value.trim();
    if (!name) return;
    state.branches.push({
      id: 'b-' + Date.now(),
      name,
      address,
      manager
    });
    saveState();
    e.target.reset();
    closeModal('modal-branch');
    renderAll();
  });
  // Delegated Clicks for Row Actions
  document.body.addEventListener('click', (e) => {
    const distBtn = e.target.closest('.btn-distribute-row');
    if (distBtn) {
      openDistribute(distBtn.getAttribute('data-batch-id'));
      return;
    }
    const reorderBtn = e.target.closest('.btn-reorder-drug');
    if (reorderBtn) {
      const batchId = reorderBtn.getAttribute('data-batch-id');
      const batch = getBatchById(batchId);
      openIncoming(batch);
      return;
    }
    const payFirmBtn = e.target.closest('.btn-pay-firm-row');
    if (payFirmBtn) {
      openPaymentModal(payFirmBtn.getAttribute('data-firm-id'));
      return;
    }
    const delBatchBtn = e.target.closest('[data-del-batch]');
    if (delBatchBtn) {
      const batchId = delBatchBtn.getAttribute('data-del-batch');
      if (confirm('Bul dári partiyasın óshiriwdi qáleysiz be?')) {
        state.batches = state.batches.filter((b) => b.id !== batchId);
        state.distributions = state.distributions.filter((d) => d.batchId !== batchId);
        saveState();
        renderAll();
      }
      return;
    }
    const delDistBtn = e.target.closest('[data-del-dist]');
    if (delDistBtn) {
      const distId = delDistBtn.getAttribute('data-del-dist');
      if (confirm('Bul filialǵa bóliw operaciyasın óshiremiz be? (Dári muǵdarı sklad qaldıǵına qaytarıladı)')) {
        state.distributions = state.distributions.filter((d) => d.id !== distId);
        saveState();
        renderAll();
      }
      return;
    }
    const delPayBtn = e.target.closest('[data-del-payment]');
    if (delPayBtn) {
      const payId = delPayBtn.getAttribute('data-del-payment');
      if (confirm('Bul tólem jazıwın óshiremiz be?')) {
        state.payments = state.payments.filter((p) => p.id !== payId);
        saveState();
        renderAll();
      }
      return;
    }
    const previewRow = e.target.closest('[data-preview-batch]');
    if (previewRow) {
      const batchId = previewRow.getAttribute('data-preview-batch');
      const b = getEnrichedBatches('all').find((item) => item.id === batchId);
      if (b) renderStitchPreviewPanel(b);
    }
  });
  // Global Header Search + F2 Shortcut
  const globalSearchEl = document.getElementById('global-header-search');
  if (globalSearchEl) {
    globalSearchEl.addEventListener('input', (e) => {
      const val = e.target.value;
      const whSearch = document.getElementById('wh-search');
      const incSearch = document.getElementById('incoming-search');
      if (whSearch) whSearch.value = val;
      if (incSearch) incSearch.value = val;
      renderWarehouseTab();
      renderIncomingTab();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'F2') {
      e.preventDefault();
      globalSearchEl?.focus();
    }
  });
  // CSV & Print
  document.getElementById('btn-export-csv')?.addEventListener('click', exportCSV);
  document.getElementById('btn-print')?.addEventListener('click', () => window.print());
  // Initial Render
  renderAll();
});
