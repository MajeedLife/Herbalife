const IMG_FOLDER = "images";
const IMG_EXT    = "jpeg";
 
const STORE_NAME = {
  ar: "متجر المكملات",
  en: "Supplements Store",
  tr: "Takviye Mağazası"
};
 
const RATES = {
  TRY: 1,
  USD: 0.021,
  IQD: 28
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

const PRODUCTS = [
  // ---- التغذية الأساسية (1 - 8) ----
  [3000.07,"فورمولا 1 - كراميل مملح","Formula 1 - Salted Caramel","Formül 1 - Tuzlu Karamel Aromalı"],
  [1761.07,"فورمولا 1 - فانيلا","Formula 1 - Vanilla","Formül 1 - Vanilya Aromalı"],
  [1761.07,"فورمولا 1 - شوكولاتة","Formula 1 - Chocolate","Formül 1 - Çikolata Aromalı"],
  [1761.07,"فورمولا 1 - موز","Formula 1 - Banana","Formül 1 Muz Aromalı"],
  [1761.07,"فورمولا 1 - توت أحمر وشوكولاتة بيضاء","Formula 1 - Raspberry & White Chocolate","Formül 1 - Ahududu ve Beyaz Çikolata Aromalı"],
  [1946.52,"فورمولا 1 - شوربة الفطر (بديل وجبة)","Formula 1 Savoury Mushroom","Formül 1 Öğün Yerine Geçen Mantar Aromalı Çorba"],
  [2113.26,"برو درنك","Pro-Drink","Pro-Drink"],
  [2224.49,"بروتين بيك مكس","Protein Bake Mix","Protein Bake Mix"],
 
  // ---- مشروبات (9 - 21) ----
  [1412.97,"مشروب الأعشاب الفوري - كلاسيك 51 غم","Instant Herbal Beverage Original - 51 g","Çay ve Bitki Ekstreli Aromalı İçecek Tozu Klasik - 51 g"],
  [2526.21,"مشروب الأعشاب الفوري - كلاسيك 102 غم","Instant Herbal Beverage Original - 102 g","Çay ve Bitki Ekstreli Aromalı İçecek Tozu Klasik - 102 g"],
  [1412.97,"مشروب الأعشاب الفوري - ليمون 51 غم","Instant Herbal Beverage Lemon - 51 g","Çay ve Bitki Ekstreli Aromalı İçecek Tozu - Limon 51 g"],
  [1412.97,"مشروب الأعشاب الفوري - توت أحمر 51 غم","Instant Herbal Beverage Raspberry - 51 g","Çay ve Bitki Ekstreli Aromalı İçecek Tozu Ahududu - 51 g"],
  [1412.97,"مشروب الأعشاب الفوري - خوخ 51 غم","Instant Herbal Beverage Peach - 51 g","Çay ve Bitki Ekstreli Aromalı İçecek Tozu Şeftali - 51 g"],
  [1666.54,"هيربال ألو مركّز 473 مل","Herbal Aloe Concentrate Drink 473ml","Herbal Aloe Konsantre İçecek 473 ml"],
  [1666.54,"هيربال ألو مركّز مانجو 473 مل","Herbal Aloe Concentrate Mango 473ml","Herbal Aloe Konsantre İçecek Mango 473 ml"],
  [6028.58,"هيربال ألو مركّز مانجو 1.892 لتر","Herbal Aloe Concentrate Mango 1.892 L","Herbal Aloe Konsantre İçecek Mango 1,892 l"],
  [1333.74,"ملتي فايبر (ألياف)","Multi-Fiber","Multi-Fiber"],
  [3256.95,"قهوة مثلجة عالية البروتين - لاتيه ماكياتو 308 غم","High Protein Iced Coffee Latte Macchiato 308g","Yüksek Proteinli Soğuk Kahve Karışımı Latte Macchiato 308 g"],
  [2147.39,"هارت ويل","Heartwell","Heartwell"],
  [3224.99,"تراي بلند","Tri Blend","Tri Blend"],
  [1359.77,"فورمولا 3 برو بوست","Formula 3 Pro-Boost","Formül 3 Pro-Boost"],
 
  // ---- سناكات (22 - 25) ----
  [1182.89,"بروتين بار - فانيلا ولوز (14 قطعة)","Protein Bar - Vanilla Almond (14 pcs)","Protein Bar - Vanilya Aromalı Bademli (14'lü)"],
  [1182.89,"بروتين بار - ليمون (14 قطعة)","Protein Bar - Citrus Lemon (14 pcs)","Protein Bar - Limon Aromalı (14'lü)"],
  [1627.32,"بروتين تشيبس - باربكيو (10 أكياس)","Protein Chips - Barbecue (10 bags)","Protein Cips - Barbekü Aromalı (10'lu)"],
  [1627.32,"بروتين تشيبس - كريمة وبصل (10 أكياس)","Protein Chips - Sour Cream & Onion (10 bags)","Protein Cips - Ekşi Krema ve Soğan Aromalı (10'lu)"],
 
  // ---- مكملات غذائية (26 - 35) ----
  [3224.78,"مسحوق الكولاجين","Collagen Drink Powder","Collagen Drink Powder"],
  [1091.06,"فورمولا 2 فيتامينات ومعادن - رجال","Formula 2 Vitamin & Mineral Complex - Men","Formül 2 Vitamin ve Mineral Kompleks Erkekler İçin"],
  [1091.06,"فورمولا 2 فيتامينات ومعادن - نساء","Formula 2 Vitamin & Mineral Complex - Women","Formül 2 Vitamin ve Mineral Kompleks Kadınlar İçin"],
  [1111.61,"ليفت أوف - ليمون (10 أقراص)","Liftoff - Lemon (10 tablets)","Liftoff® Limon (10 tablet)"],
  [2116.42,"ثيرمو كومبليت","Thermo Complete","Thermo Complete®"],
  [1454.20,"هيربالايفلاين ماكس","Herbalifeline Max","Herbalifeline® Max"],
  [3227.73,"نايت ووركس","Niteworks","Niteworks®"],
  [754.21,"إكسترا كال","Xtra-Cal","Xtra-Cal®"],
  [1914.52,"برو كور (21 كيس)","Pro-core (21 sachets)","Pro-core (21 saşe)"],
  [3273.45,"نايت مود","Night Mode","Night Mode"],
 
  // ---- رياضة ونشاط (36 - 37) ----
  [3717.98,"H24 RB بروماكس","H24 RB Promax","H24 RB Promax"],
  [1000.64,"CR7 درايف - مشروب رياضي أساي","CR7 Drive - Acai Sports Drink","CR7 Drive Spor İçeceği Tozu"],
 
  // ---- العناية بالبشرة (38 - 46) ----
  [2772.26,"كريم ليلي منعش","Revitalising Night Cream","Canlandırıcı Gece Kremi"],
  [2495.35,"سيروم نياسيناميد 10%","10% Niacinamide Serum","%10 Niacinamide Serum"],
  [1677.56,"جل منظف مجدد","Resurfacing Gel Cleanser","Yenileyici Jel Temizleyici"],
  [2772.26,"كريم شد مكثف","Ultimate Tension Cream","Yoğun Sıkılaştırıcı Krem"],
  [1251.05,"لوشن مغذي لليدين والجسم","Nourishing Hand and Body Lotion","Besleyici El ve Vücut Losyonu"],
  [2107.08,"كريم مغذي للعيون","Nourishing Eye Cream","Besleyici Göz Kremi"],
  [1405.42,"منظف الوجه بخلاصة الحمضيات 150 مل","Skin Polishing Citrus Cleanser 150ml","Narenciye Özlü Parlatıcı Yüz Temizleme Jeli 150 ml"],
  [1257.18,"ماسك الطين المنقي بالنعناع 120 مل","Skin Purifying Mint Clay Mask 120ml","Nane Özlü Arındırıcı Kil Maskesi 120 ml"],
  [2739.85,"كريم ليلي مغذي 50 مل","Skin Replenishing Night Cream 50ml","Besleyici Gece Kremi 50 ml"],
 
  // ---- هيربال ألو للعناية (47 - 50) ----
  [716.62,"غسول اليدين والجسم 250 مل","Herbal Aloe Hand & Body Wash 250ml","Herbal Aloe El ve Vücut Şampuanı 250 ml"],
  [702.20,"جل مهدّئ 200 مل","Herbal Aloe Soothing Gel 200ml","Herbal Aloe Rahatlatıcı Jel 200 ml"],
  [709.49,"شامبو مقوّي 250 مل","Herbal Aloe Strengthening Shampoo 250ml","Herbal Aloe Güçlendirici Şampuan 250 ml"],
  [709.49,"بلسم مقوّي 250 مل","Herbal Aloe Strengthening Conditioner 250ml","Herbal Aloe Güçlendirici Saç Kremi 250 ml"],
 
  // ---- مطبوعات (51 - 53) ----
  [1412.95,"حقيبة الموزع HMP","Distributor Pack (HMP)","Distribütör Paketi"],
  [1412.95,"حقيبة الموزع المصغّرة - أونلاين","Online Mini Distributor Pack","Online Distribütör Paketi"],
  [696.04,"كتاب الطبخ","Cook Book","Yemek Kitabı"],
 
  // ---- أدوات وإكسسوارات (54 - 84) ----
  [66.18,"ملعقة قياس - هارت ويل / RB بروماكس","Sustainable Scoop - Heartwell / RB Promax","Heartwell / RB Promax için Sürdürülebilir Ölçü Kaşığı"],
  [66.18,"ملعقة قياس - نايت مود","Sustainable Scoop - Night Mode","Night Mode için Sürdürülebilir Ölçü Kaşığı"],
  [64.25,"ملعقة قياس - فورمولا 1","Sustainable Scoop - Formula 1","F1 için Sürdürülebilir Ölçü Kaşığı"],
  [66.18,"ملعقة قياس - ملتي فايبر / فورمولا 3 / H24 CR7","Sustainable Scoop - Multi-Fiber / Formula 3 / H24 CR7","Multi-fiber / Formül 3 / H24 CR7 için Sürdürülebilir Ölçü Kaşığı"],
  [66.18,"ملعقة قياس - القهوة المثلجة","Sustainable Scoop - Iced Coffee","Soğuk Kahve için Sürdürülebilir Ölçü Kaşığı"],
  [66.18,"ملعقة قياس - نايت ووركس","Sustainable Scoop - Niteworks","Niteworks için Sürdürülebilir Ölçü Kaşığı"],
  [66.05,"ملعقة قياس متعددة","Multi-Scoop","Çoklu Ölçü Kaşığı"],
  [200.21,"شارة ويلنس (10 قطع)","Wellness Button (Set of 10)","Wellness Rozeti (10'lu Set)"],
  [269.22,"شارة مغناطيسية I love Herbalife (5 قطع)","Green Magnetic Pin (Set of 5)","Yeşil Mıknatıslı Rozet (5'li Set)"],
  [100.97,"شارة سيطر على وزنك (10 قطع)","Control Your Weight Button (Set of 10)","Kilonu Kontrol Et Rozeti (10'lu Set)"],
];
 
const T = {
  ar:{ dir:"rtl", name:"العربية",  search:"ابحث عن منتج...", settings:"الإعدادات",
       theme:"السمة", lang:"اللغة", cur:"العملة", none:"ما لقينا منتج بهذا الاسم",
       themes:{default:"افتراضي", gold:"ذهبي", dark:"داكن"} },
  en:{ dir:"ltr", name:"English",  search:"Search for a product...", settings:"Settings",
       theme:"Theme", lang:"Language", cur:"Currency", none:"No products found",
       themes:{default:"Default", gold:"Gold", dark:"Dark"} },
  tr:{ dir:"ltr", name:"Türkçe",   search:"Ürün ara...", settings:"Ayarlar",
       theme:"Tema", lang:"Dil", cur:"Para birimi", none:"Ürün bulunamadı",
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
  
  PRODUCTS.forEach((p, i) => {
    const id = i + 1; // رقم المنتج والصورة
    const name = p[1 + LANG_ORDER.indexOf(state.lang)];
    
    // تصفية حسب القسم المحدد
    if(currentCat !== "all") {
      const catObj = CATEGORIES.find(c => c.id === currentCat);
      if(catObj && (id < catObj.start || id > catObj.end)) return;
    }
    
    // تصفية حسب البحث
    if(q && ![p[1],p[2],p[3]].some(n => n.toLowerCase().includes(q))) return;
    
    html.push(`
      <article class="card">
        <div class="card-img">
          <img src="${IMG_FOLDER}/${id}.${IMG_EXT}" alt="${esc(name)}" loading="lazy" data-id="${id}">
        </div>
        <div class="card-body">
          <h3 class="card-name" dir="auto">${esc(name)}</h3>
          <div class="card-price">${esc(formatPrice(p[0]))}</div>
        </div>
      </article>`);
  });
  
  $("grid").innerHTML = html.length ? html.join("") : `<div class="empty">${esc(T[state.lang].none)}</div>`;
}
 
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

$("search").addEventListener("input", renderProducts);
const openSheet  = () => { $("overlay").classList.add("on");    document.body.classList.add("lock"); };
const closeSheet = () => { $("overlay").classList.remove("on"); document.body.classList.remove("lock"); };
$("openSettings").addEventListener("click", openSheet);
$("closeSettings").addEventListener("click", closeSheet);
$("overlay").addEventListener("click", e => { if(e.target === $("overlay")) closeSheet(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeSheet(); });
$("overlay").addEventListener("click", e => {
  const b = e.target.closest("[data-theme-opt],[data-lang-opt],[data-cur-opt]");
  if(!b) return;
  if(b.dataset.themeOpt) state.theme = b.dataset.themeOpt;
  if(b.dataset.langOpt)  state.lang  = b.dataset.langOpt;
  if(b.dataset.curOpt)   state.cur   = b.dataset.curOpt;
  savePrefs(); applyAll();
});
 
applyAll();