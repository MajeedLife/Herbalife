const IMG_FOLDER = "images";
const IMG_EXT    = "jpeg";
 
const STORE_NAME = {
  ar: "للتواصل معي",
  en: "For Contact Me",
  tr: "benimle iletişim için"
};
 
const RATES = {
  TRY: 1,
  USD: 0.020,
  IQD: 33
};
 
/* تعريف الأقسام مع ترجماتها وأرقام المنتجات التابعة لكل قسم */
const CATEGORIES = [
  { id: "all", name: { ar: "الكل", en: "All", tr: "Tümü" } },
  { id: "base", name: { ar: "التغذية الأساسية", en: "Base Nutrition", tr: "Temel Beslenme" }, start: 1, end: 8 },
  { id: "drinks", name: { ar: "المشروبات", en: "Drinks", tr: "İçecekler" }, start: 9, end: 21 },
  { id: "snacks", name: { ar: "وجبات خفيفة", en: "Snacks", tr: "Atıştırmalıklar" }, start: 22, end: 25 },
  { id: "supplements", name: { ar: "المكملات الغذائية", en: "Supplements", tr: "Takviyeler" }, start: 26, end: 35 },
  { id: "activity", name: { ar: "النشاط", en: "Activity", tr: "Aktivite" }, start: 36, end: 37 },
  { id: "skin", name: { ar: "عناية البشرة", en: "Skin Care", tr: "Cilt Bakımı" }, start: 38, end: 44 },
  { id: "hair", name: { ar: "عناية الشعر", en: "Hair Care", tr: "Saç Bakımı" }, start: 45, end: 48 },
  { id: "promo", name: { ar: "المنتجات الترويجية", en: "Promotional", tr: "Promosyon" }, start: 49, end: 63 }
];

let currentCat = "all";

// مصفوفة المنتجات (يمكنك إضافة أو تغيير الوصف المخصص داخل كائن info الخاص بكل منتج)
const PRODUCTS = [
  // ---- التغذية الأساسية (1 - 8) ----
  [1899.99,"فورمولا 1 - كراميل مملح","Formula 1 - Salted Caramel","Formül 1 - Tuzlu Karamel Aromalı", { ar: "وجبة متكاملة ومغذية تحتوي على نسبة عالية من البروتين والألياف والفيتامينات الأساسية.", en: "Nutritious meal replacement high in protein, fiber, and essential vitamins.", tr: "Proteyin, lif ve temel vitaminler bakımından zengin besleyici öğün." }],
  [1899.99,"فورمولا 1 - فانيلا","Formula 1 - Vanilla","Formül 1 - Vanilya Aromalı", { ar: "بديل وجبة صحي ولذيذ بنكهة الفانيلا الغنية لمساعدتك على إدار الوزن بشكل متوازن.", en: "Delicious vanilla meal replacement to help control weight in a balanced way.", tr: "Kilo kontrolüne yardımcı lezzetli vanilya aromalı öğün yerine geçen içecek." }],
  [1899.99,"فورمولا 1 - شوكولاتة","Formula 1 - Chocolate","Formül 1 - Çikolata Aromalı", { ar: "مشروب مغذي بنكهة الشوكولاتة الغنية بالبروتينات والفيتامينات متعددة الاستخدامات.", en: "Nutritious chocolate shake packed with essential proteins and nutrients.", tr: "Çikolata aromalı, zengin protein ve vitamin içeren besleyici öğün." }],
  [1899.99,"فورمولا 1 - موز","Formula 1 - Banana","Formül 1 Muz Aromalı"],
  [1899.99,"فورمولا 1 - توت أحمر وشوكولاتة بيضاء","Formula 1 - Raspberry & White Chocolate","Formül 1 - Ahududu ve Beyaz Çikolata Aromalı"],
  [2065.00,"فورمولا 1 - شوربة الفطر (بديل وجبة)","Formula 1 Savoury Mushroom","Formül 1 Öğün Yerine Geçen Mantar Aromalı Çorba"],
  [2249.99,"برو درنك","Pro-Drink","Pro-Drink"],
  [2399.99,"بروتين بيك مكس","Protein Bake Mix","Protein Bake Mix"],
 
  // ---- مشروبات (9 - 21) ----
  [1499.99,"مشروب الأعشاب الفوري - كلاسيك 51 غم","Instant Herbal Beverage Original - 51 g","Çay ve Bitki Ekstreli Aromalı İçecek Tozu Klasik - 51 g"],
  [2699.99,"مشروب الأعشاب الفوري - كلاسيك 102 غم","Instant Herbal Beverage Original - 102 g","Çay ve Bitki Ekstreli Aromalı İçecek Tozu Klasik - 102 g"],
  [1499.99,"مشروب الأعشاب الفوري - ليمون 51 غم","Instant Herbal Beverage Lemon - 51 g","Çay و Bitki Ekstreli Aromalı İçecek Tozu - Limon 51 g"],
  [1499.99,"مشروب الأعشاب الفوري - توت أحمر 51 غم","Instant Herbal Beverage Raspberry - 51 g","Çay ve Bitki Ekstreli Aromalı İçecek Tozu Ahududu - 51 g"],
  [1499.99,"مشروب الأعشاب الفوري - خوخ 51 غم","Instant Herbal Beverage Peach - 51 g","Çay ve Bitki Ekstreli Aromalı İçecek Tozu Şeftali - 51 g"],
  [1799.99,"الالوفيرا ماء الصبار 473 مل","Herbal Aloe Concentrate Drink 473ml","Herbal Aloe Konsantre İçecek 473 ml"],
  [1799.99," الالوفيرا ماء صبار مانجو 473 مل","Herbal Aloe Concentrate Mango 473ml","Herbal Aloe Konsantre İçecek Mango 473 ml"],
  [6399.99,"الالوفيرا ماء صبار مانجو 1.892 لتر","Herbal Aloe Concentrate Mango 1.892 L","Herbal Aloe Konsantre İçecek Mango 1,892 l"],
  [1450.00,"ملتي فايبر (ألياف)","Multi-Fiber","Multi-Fiber"],
  [3499.99,"قهوة مثلجة عالية البروتين - لاتيه ماكياتو 308 غم","High Protein Iced Coffee Latte Macchiato 308g","Yüksek Proteinli Soğuk Kahve Karışımı Latte Macchiato 308 g"],
  [2299.99,"هارت ويل","Heartwell","Heartwell"],
  [3499.99,"تراي بلند","Tri Blend","Tri Blend"],
  [1499.99,"فورمولا 3 برو بوست","Formula 3 Pro-Boost","Formül 3 Pro-Boost"],
 
  // ---- سناكات (22 - 25) ----
  [1299.99,"بروتين بار - فانيلا ولوز (14 قطعة)","Protein Bar - Vanilla Almond (14 pcs)","Protein Bar - Vanilya Aromalı Bademli (14'lü)"],
  [1299.99,"بروتين بار - ليمون (14 قطعة)","Protein Bar - Citrus Lemon (14 pcs)","Protein Bar - Limon Aromalı (14'lü)"],
  [1799.99,"بروتين تشيبس - باربكيو (10 أكياس)","Protein Chips - Barbecue (10 bags)","Protein Cips - Barbekü Aromalı (10'lu)"],
  [1799.99,"بروتين تشيبس - كريمة وبصل (10 أكياس)","Protein Chips - Sour Cream & Onion (10 bags)","Protein Cips - Ekşi Krema ve Soğan Aromalı (10'lu)"],
 
  // ---- مكملات غذائية (26 - 35) ----
  [3499.99,"مسحوق الكولاجين","Collagen Drink Powder","Collagen Drink Powder"],
  [1199.99,"فورمولا 2 فيتامينات ومعادن - رجال","Formula 2 Vitamin & Mineral Complex - Men","Formül 2 Vitamin ve Mineral Kompleks Erkekler İçin"],
  [1199.99,"فورمولا 2 فيتامينات ومعادن - نساء","Formula 2 Vitamin & Mineral Complex - Women","Formül 2 Vitamin ve Mineral Kompleks Kadınlar İçin"],
  [1199.99,"ليفت أوف - ليمون (10 أقراص)","Liftoff - Lemon (10 tablets)","Liftoff® Limon (10 tablet)"],
  [2299.99,"ثيرمو كومبليت","Thermo Complete","Thermo Complete®"],
  [1599.99,"هيربالايف لاين ماكس اوميغا 3","Herbalifeline Max","Herbalifeline® Max"],
  [3499.99,"نايت ووركس","Niteworks","Niteworks®"],
  [799.99,"إكسترا كاليسيوم","Xtra-Cal","Xtra-Cal®"],
  [2099.99,"برو كور (21 كيس)","Pro-core (21 sachets)","Pro-core (21 Adet)"],
  [3499.99,"نايت مود","Night Mode","Night Mode"],
 
  // ---- رياضة ونشاط (36 - 37) ----
  [4099.99,"H24 RB بروماكس","H24 RB Promax","H24 RB Promax"],
  [1099.99,"CR7 درايف - مشروب رياضي أساي","CR7 Drive - Acai Sports Drink","CR7 Drive Spor İçeceği Tozu"],
 
  // ---- العناية بالبشرة (38 - 46) ----
  [2999.99,"كريم ليلي منعش","Revitalising Night Cream","Canlandırıcı Gece Kremi"],
  [2699.99,"سيروم نياسيناميد 10%","10% Niacinamide Serum","%10 Niacinamide Serum"],
  [1799.99,"جل منظف مجدد","Resurfacing Gel Cleanser","Yenileyici Jel Temizleyici"],
  [2999.99,"كريم شد مكثف","Ultimate Tension Cream","Yoğun Sıkılaştırıcı Krem"],
  [1399.99,"لوشن مغذي لليدين والجسم","Nourishing Hand and Body Lotion","Besleyici El ve Vücut Losyonu"],
  [2299.99,"كريم مغذي للعيون","Nourishing Eye Cream","Besleyici Göz Kremi"],
  [1399.99,"ماسك الطين المنقي بالنعناع 120 مل","Skin Purifying Mint Clay Mask 120ml","Nane özlü arındırıcı Kil Maskesi 120 ml"],
  [799.99,"جل الالوفيرا 200 مل","Herbal Aloe Soothing Gel 200ml","Herbal Aloe Rahatlatıcı Jel 200 ml"],
  [799.99,"شامبو مقوي 250 مل","Herbal Aloe Strengthening Shampoo 250ml","Herbal Aloe Güçlendirici Şampuan 250 ml"],
 
  // ---- هيربال ألو للعناية (47 - 50) ----
  [799.99,"غسول اليدين والجسم 250 مل","Herbal Aloe Hand & Body Wash 250ml","Herbal Aloe El ve Vücut Şampuanı 250 ml"],
  [799.99,"بلسم مقوي 250 مل","Herbal Aloe Strengthening Conditioner 250ml","Herbal Aloe Güçlendirici Saç Kremi 250 ml"],
  [69.99,"ملعقة قياس متعددة","Multi-Scoop","Çoklu Ölçü Kaşığı"],
  [99.99,"زجاجة خلط فردية 650 مل","shaker 650 ml","shaker 650 ml"],
 
  // ---- مطبوعات (51 - 53) ----
  [215.00,"زجاجة مياه سي ار سفن 500 مل","CR7 water bottle 500 ml","CR7 Su matarası 500 ml"],
  [249.99,"زجاجة مياه سوداء 750 مل","H24 water bottle 750 ml","H24 siyah su matarası 750 ml"],
  [375.00,"زجاجة خلط سوبر 400 مل","H24 Super shaker 400 ml","H24 Super shaker 400 ml"],
 
  // ---- أدوات وإكسسوارات (54 - 84) ----
  [559.99,"خلاط نيو برتقالي 500 مل","Neon shaker orange 500 ml","Neon shaker turuncu 500 ml"],
  [349.99,"زجاجة مياه 2 لتر","Jet water 2 LT","Cet suluk 2 lT"],
  [359.99,"خلاط سوبر 400 مل","Super shaker 400 ml","super shaker 400 ml"],
  [69.99,"ملعقة قياس وضع الليل / مشروب كولاجين","Night mod collagin drink scoop","night mod collagin drink kaşığı"],
  [559.99,"خلاط نينو أسود 500 مل","Neon shaker 500 ml black","neon shaker 500 ml siyah"],
  [556.99,"خلاط نيون بنفسجي 500 مل","Neon shaker 500 ml mor"],
  [999.99,"حقيبة ظهر هيربالايف","Herbalife Bagpack","Herbalife çantası"],
  [559.99,"خلاط نيون ازرق 500 مل","Neon shaker 500 ml blue","Noen shaker 500 ml mavi"],
  [359.99,"زجاجة مياه 650 مل","Tritan water bottle 650 ml","tritan suluk 650 ml"],
  [119.99,"مبرد 450 مل","chiller 450 ml","chiller 450 ml"],
];
 
const T = {
  ar:{ dir:"rtl", name:"العربية",  search:"ابحث عن منتج...", settings:"الإعدادات",
       theme:"السمة", lang:"اللغة", cur:"العملة", none:"ما لقينا منتج بهذا الاسم",
       infoBtn:"معلومات", defaultInfo: "منتج عالي الجودة مصمم لتلبية احتياجاتك اليومية بدقة وكفاءة عالية.",
       themes:{default:"افتراضي", gold:"ذهبي", dark:"داكن"} },
  en:{ dir:"ltr", name:"English",  search:"Search for a product...", settings:"Settings",
       theme:"Theme", lang:"Language", cur:"Currency", none:"No products found",
       infoBtn:"Details", defaultInfo: "A high-quality product designed to meet your daily needs efficiently.",
       themes:{default:"Default", gold:"Gold", dark:"Dark"} },
  tr:{ dir:"ltr", name:"Türkçe",   search:"Ürün ara...", settings:"Ayarlar",
       theme:"Tema", lang:"Dil", cur:"Para birimi", none:"Ürün bulunamadı",
       infoBtn:"Bilgi", defaultInfo: "Günlük ihtiyaçlarınızı en iyi şekilde karşılamak için tasarlanmış yüksek kaliteli ürün.",
       themes:{default:"Varsayılan", gold:"Altın", dark:"Koyu"} }
};
const LANG_ORDER  = ["ar","en","tr"];
const THEME_ORDER = ["default","gold","dark"];
const CURRENCIES = {
  IQD:{ names:{ar:"دينار عراقي", en:"Iraqi Dinar",   tr:"Irak Dinarı"},  sym:{ar:"د.ع", en:"IQD", tr:"IQD"}, dec:0, after:true },
  TRY:{ names:{ar:"ليرة تركية",  en:"Turkish Lira",  tr:"Türk Lirası"},  sym:{ar:"₺",   en:"₺",   tr:"₺"},   dec:2, after:false },
  USD:{ names:{ar:"دولار أمريكي",en:"US Dollar",     tr:"ABD Doları"},   sym:{ar:"$",   en:"$",   tr:"$"},   dec:2, after:false }
};
const CUR_ORDER = ["IQD","TRY","USD"];
 
const DEFAULTS = { theme:"default", lang:"ar", cur:"IQD" };
let state = { ...DEFAULTS };
try{
  const saved = JSON.parse(localStorage.getItem("store_prefs") || "{}");
  if(THEME_ORDER.includes(saved.theme)) state.theme = saved.theme;
  if(LANG_ORDER.includes(saved.lang))   state.lang  = saved.lang;
  if(CUR_ORDER.includes(saved.cur))     state.cur   = saved.cur;
}catch(e){}
function savePrefs(){ try{ localStorage.setItem("store_prefs", JSON.stringify(state)); }catch(e){} }
 
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 
function formatPrice(tryPrice){
  const c = CURRENCIES[state.cur];
  const v = tryPrice * RATES[state.cur];
  const num = v.toLocaleString("en-US", { minimumFractionDigits:c.dec, maximumFractionDigits:c.dec });
  const sym = c.sym[state.lang];
  return c.after ? `${num} ${sym}` : `${sym} ${num}`;
}
 
function renderCategories(){
  $("catBar").innerHTML = CATEGORIES.map(cat => `
    <button class="cat-btn ${currentCat === cat.id ? 'active' : ''}" data-cat="${cat.id}">
      ${esc(cat.name[state.lang])}
    </button>
  `).join("");
}

function renderProducts(){
  const q = $("search").value.trim().toLowerCase();
  const html = [];
  const langIdx = LANG_ORDER.indexOf(state.lang);
  
  PRODUCTS.forEach((p, i) => {
    const id = i + 1; // رقم المنتج والصورة
    const name = p[1 + langIdx] || p[1];
    
    // تصفية حسب القسم المحدد
    if(currentCat !== "all") {
      const catObj = CATEGORIES.find(c => c.id === currentCat);
      if(catObj && (id < catObj.start || id > catObj.end)) return;
    }
    
    // تصفية حسب البحث
    if(q && ![p[1],p[2],p[3]].some(n => n && n.toLowerCase().includes(q))) return;
    
    html.push(`
      <article class="card">
        <div class="card-img">
          <img src="${IMG_FOLDER}/${id}.${IMG_EXT}" alt="${esc(name)}" loading="lazy" data-id="${id}">
        </div>
        <div class="card-body">
          <h3 class="card-name" dir="auto">${esc(name)}</h3>
          <div class="card-footer">
            <div class="card-price">${esc(formatPrice(p[0]))}</div>
            <button class="info-btn" data-info-idx="${i}" title="${esc(T[state.lang].infoBtn)}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>${esc(T[state.lang].infoBtn)}</span>
            </button>
          </div>
        </div>
      </article>`);
  });
  
  $("grid").innerHTML = html.length ? html.join("") : `<div class="empty">${esc(T[state.lang].none)}</div>`;
}

// عرض نافذة تفاصيل المنتج المخصصة
function showProductInfo(index) {
  const p = PRODUCTS[index];
  if(!p) return;
  
  const id = index + 1;
  const langIdx = LANG_ORDER.indexOf(state.lang);
  const name = p[1 + langIdx] || p[1];
  
  // استخراج تفاصيل أو وصف المنتج
  let infoText = T[state.lang].defaultInfo;
  if (p[4] && typeof p[4] === 'object') {
    infoText = p[4][state.lang] || p[4]['ar'] || infoText;
  }
  
  $("infoModalImg").src = `${IMG_FOLDER}/${id}.${IMG_EXT}`;
  $("infoModalTitle").textContent = name;
  $("infoModalPrice").textContent = formatPrice(p[0]);
  $("infoModalDesc").textContent = infoText;
  
  $("infoOverlay").classList.add("on");
  document.body.classList.add("lock");
}

const closeInfoModal = () => {
  $("infoOverlay").classList.remove("on");
  document.body.classList.remove("lock");
};

document.addEventListener("error", e => {
  const img = e.target;
  if(img.tagName !== "IMG" || !img.dataset.id) return;
  const box = img.parentElement;
  box.innerHTML = `<div class="noimg"><b>${img.dataset.id}.${IMG_EXT}</b><span>${IMG_FOLDER}/</span></div>`;
}, true);
 
function renderOptions(){
  const L = T[state.lang];
  $("themeOpts").innerHTML = THEME_ORDER.map(k => {
    const sw = {
      default:["#0B5F3A","#F7F8F4","#C8A24A"],
      gold:["#E6CE8E","#FBF6EA","#8A6A1F"],
      dark:["#080B09","#1A201D","#8FD14F"]
    }[k];
    return `<button class="opt ${state.theme===k?"on":""}" data-theme-opt="${k}">
      <div class="swatch">${sw.map(c=>`<i style="background:${c}"></i>`).join("")}</div>${esc(L.themes[k])}</button>`;
  }).join("");
  $("langOpts").innerHTML = LANG_ORDER.map(k =>
    `<button class="opt ${state.lang===k?"on":""}" data-lang-opt="${k}">${esc(T[k].name)}</button>`).join("");
  $("curOpts").innerHTML = CUR_ORDER.map(k =>
    `<button class="opt ${state.cur===k?"on":""}" data-cur-opt="${k}">${esc(CURRENCIES[k].names[state.lang])}</button>`).join("");
}
 
function applyAll(){
  const L = T[state.lang];
  document.documentElement.setAttribute("data-theme", state.theme);
  document.documentElement.lang = state.lang;
  document.documentElement.dir  = L.dir;
  const name = STORE_NAME[state.lang];
  $("brand").textContent = name;
  document.title = name;
  $("search").placeholder = L.search;
  $("sTitle").textContent = L.settings;
  $("hTheme").textContent = L.theme;
  $("hLang").textContent  = L.lang;
  $("hCur").textContent   = L.cur;
  renderCategories();
  renderOptions();
  renderProducts();
}
 
// تفاعل أزرار الأقسام
$("catBar").addEventListener("click", e => {
  const btn = e.target.closest("[data-cat]");
  if(!btn) return;
  currentCat = btn.dataset.cat;
  renderCategories();
  renderProducts();
});

// فتح نافذة المعلومات عند الضغط على زر المعلومات
$("grid").addEventListener("click", e => {
  const btn = e.target.closest("[data-info-idx]");
  if(!btn) return;
  showProductInfo(parseInt(btn.dataset.infoIdx, 10));
});

$("search").addEventListener("input", renderProducts);
const openSheet  = () => { $("overlay").classList.add("on");    document.body.classList.add("lock"); };
const closeSheet = () => { $("overlay").classList.remove("on"); document.body.classList.remove("lock"); };
$("openSettings").addEventListener("click", openSheet);
$("closeSettings").addEventListener("click", closeSheet);
$("closeInfoModal").addEventListener("click", closeInfoModal);

$("overlay").addEventListener("click", e => { if(e.target === $("overlay")) closeSheet(); });
$("infoOverlay").addEventListener("click", e => { if(e.target === $("infoOverlay")) closeInfoModal(); });

document.addEventListener("keydown", e => { 
  if(e.key === "Escape") {
    closeSheet();
    closeInfoModal();
  }
});

$("overlay").addEventListener("click", e => {
  const b = e.target.closest("[data-theme-opt],[data-lang-opt],[data-cur-opt]");
  if(!b) return;
  if(b.dataset.themeOpt) state.theme = b.dataset.themeOpt;
  if(b.dataset.langOpt)  state.lang  = b.dataset.langOpt;
  if(b.dataset.curOpt)   state.cur   = b.dataset.curOpt;
  savePrefs(); applyAll();
});
 
applyAll();