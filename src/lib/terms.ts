import { DEFAULT_LANG, type LangCode } from "@/lib/i18n";

// English is the source key; each entry maps to the other 5 languages.
type TermMap = Record<string, Partial<Record<LangCode, string>>>;

const bodyParts: TermMap = {
  back: { zh: "背部", es: "espalda", it: "schiena", tr: "sırt", ru: "спина", hi: "पीठ", pl: "plecy", ko: "등" },
  cardio: { zh: "有氧", es: "cardio", it: "cardio", tr: "kardiyo", ru: "кардио", hi: "कार्डियो", pl: "cardio", ko: "유산소" },
  chest: { zh: "胸部", es: "pecho", it: "petto", tr: "göğüs", ru: "грудь", hi: "छाती", pl: "klatka piersiowa", ko: "가슴" },
  "lower arms": { zh: "小臂", es: "antebrazos", it: "avambracci", tr: "ön kol", ru: "предплечья", hi: "निचली भुजाएँ", pl: "przedramiona", ko: "아래팔" },
  "lower legs": { zh: "小腿", es: "piernas inferiores", it: "gambe inferiori", tr: "alt bacak", ru: "голени", hi: "निचले पैर", pl: "podudzia", ko: "종아리" },
  neck: { zh: "颈部", es: "cuello", it: "collo", tr: "boyun", ru: "шея", hi: "गर्दन", pl: "szyja", ko: "목" },
  shoulders: { zh: "肩部", es: "hombros", it: "spalle", tr: "omuzlar", ru: "плечи", hi: "कंधे", pl: "barki", ko: "어깨" },
  "upper arms": { zh: "大臂", es: "brazos superiores", it: "braccia superiori", tr: "üst kol", ru: "плечо", hi: "ऊपरी भुजाएँ", pl: "ramiona", ko: "위팔" },
  "upper legs": { zh: "大腿", es: "piernas superiores", it: "gambe superiori", tr: "üst bacak", ru: "бёдра", hi: "ऊपरी पैर", pl: "uda", ko: "허벅지" },
  waist: { zh: "腰部", es: "cintura", it: "vita", tr: "bel", ru: "талия", hi: "कमर", pl: "talia", ko: "허리" },
};

const equipment: TermMap = {
  assisted: { zh: "辅助", es: "asistido", it: "assistito", tr: "destekli", ru: "с поддержкой", hi: "सहायता प्राप्त", pl: "wspomagany", ko: "보조" },
  band: { zh: "弹力带", es: "banda", it: "banda", tr: "bant", ru: "лента", hi: "बैंड", pl: "guma", ko: "밴드" },
  barbell: { zh: "杠铃", es: "barra", it: "bilanciere", tr: "halter", ru: "штанга", hi: "बारबेल", pl: "sztanga", ko: "바벨" },
  "body weight": { zh: "自重", es: "peso corporal", it: "corpo libero", tr: "vücut ağırlığı", ru: "вес тела", hi: "शारीरिक वजन", pl: "masa ciała", ko: "맨몸" },
  "bosu ball": { zh: "波速球", es: "bosu", it: "bosu ball", tr: "bosu topu", ru: "босу-мяч", hi: "बोसु बॉल", pl: "piłka bosu", ko: "보수 볼" },
  cable: { zh: "拉索", es: "polea", it: "cavo", tr: "kablo", ru: "трос", hi: "केबल", pl: "wyciąg", ko: "케이블" },
  dumbbell: { zh: "哑铃", es: "mancuerna", it: "manubrio", tr: "dambıl", ru: "гантель", hi: "डम्बल", pl: "hantel", ko: "덤벨" },
  "elliptical machine": { zh: "椭圆机", es: "elíptica", it: "ellittica", tr: "eliptik makine", ru: "эллиптический тренажёр", hi: "एलिप्टिकल मशीन", pl: "orbitrek", ko: "일립티컬 머신" },
  "ez barbell": { zh: "曲柄杠铃", es: "barra EZ", it: "bilanciere EZ", tr: "EZ halter", ru: "EZ-штанга", hi: "EZ बारबेल", pl: "sztanga łamana", ko: "EZ 바벨" },
  hammer: { zh: "锤式", es: "martillo", it: "martello", tr: "çekiç", ru: "молот", hi: "हैमर", pl: "młot", ko: "해머" },
  kettlebell: { zh: "壶铃", es: "pesa rusa", it: "kettlebell", tr: "kettlebell", ru: "гиря", hi: "केटलबेल", pl: "kettlebell", ko: "케틀벨" },
  "leverage machine": { zh: "杠杆机", es: "máquina de palanca", it: "macchina a leva", tr: "kaldıraç makinesi", ru: "рычажный тренажёр", hi: "लीवरेज मशीन", pl: "maszyna dźwigniowa", ko: "레버리지 머신" },
  "medicine ball": { zh: "药球", es: "balón medicinal", it: "palla medica", tr: "sağlık topu", ru: "медбол", hi: "मेडिसिन बॉल", pl: "piłka lekarska", ko: "메디신 볼" },
  "olympic barbell": { zh: "奥林匹克杠铃", es: "barra olímpica", it: "bilanciere olimpico", tr: "olimpik halter", ru: "олимпийская штанга", hi: "ओलंपिक बारबेल", pl: "sztanga olimpijska", ko: "올림픽 바벨" },
  "resistance band": { zh: "阻力带", es: "banda de resistencia", it: "fascia elastica", tr: "direnç bandı", ru: "эспандер", hi: "रेजिस्टेंस बैंड", pl: "guma oporowa", ko: "저항 밴드" },
  roller: { zh: "滚轮", es: "rodillo", it: "rullo", tr: "rulo", ru: "ролик", hi: "रोलर", pl: "wałek", ko: "롤러" },
  rope: { zh: "绳索", es: "cuerda", it: "corda", tr: "ip", ru: "канат", hi: "रस्सी", pl: "lina", ko: "로프" },
  "skierg machine": { zh: "滑雪机", es: "máquina skierg", it: "macchina skierg", tr: "skierg makinesi", ru: "лыжный тренажёр", hi: "स्कीअर्ग मशीन", pl: "maszyna skierg", ko: "스키어그 머신" },
  "sled machine": { zh: "雪橇机", es: "trineo", it: "slitta", tr: "kızak makinesi", ru: "сани-тренажёр", hi: "स्लेड मशीन", pl: "sanie", ko: "슬레드 머신" },
  "smith machine": { zh: "史密斯机", es: "máquina Smith", it: "macchina Smith", tr: "smith makinesi", ru: "машина Смита", hi: "स्मिथ मशीन", pl: "maszyna Smitha", ko: "스미스 머신" },
  "stability ball": { zh: "健身球", es: "pelota de estabilidad", it: "palla da stabilità", tr: "denge topu", ru: "фитбол", hi: "स्टेबिलिटी बॉल", pl: "piłka gimnastyczna", ko: "짐볼" },
  "stationary bike": { zh: "健身单车", es: "bicicleta estática", it: "cyclette", tr: "sabit bisiklet", ru: "велотренажёр", hi: "स्थिर साइकिल", pl: "rower stacjonarny", ko: "실내 자전거" },
  "stepmill machine": { zh: "登山机", es: "escaladora", it: "stepmill", tr: "basamak makinesi", ru: "степпер", hi: "स्टेपमिल मशीन", pl: "stepper schodowy", ko: "스텝밀 머신" },
  tire: { zh: "轮胎", es: "neumático", it: "pneumatico", tr: "lastik", ru: "покрышка", hi: "टायर", pl: "opona", ko: "타이어" },
  "trap bar": { zh: "六角杠铃", es: "barra trap", it: "trap bar", tr: "trap bar", ru: "трэп-гриф", hi: "ट्रैप बार", pl: "gryf trap", ko: "트랩 바" },
  "upper body ergometer": { zh: "上肢测力计", es: "ergómetro de brazos", it: "ergometro superiore", tr: "üst vücut ergometresi", ru: "ручной эргометр", hi: "अपर बॉडी एर्गोमीटर", pl: "ergometr ramion", ko: "상체 에르고미터" },
  weighted: { zh: "负重", es: "con peso", it: "con peso", tr: "ağırlıklı", ru: "с отягощением", hi: "भारित", pl: "obciążony", ko: "가중" },
  "wheel roller": { zh: "健腹轮", es: "rueda abdominal", it: "ruota addominali", tr: "tekerlekli silindir", ru: "ролик для пресса", hi: "व्हील रोलर", pl: "kółko treningowe", ko: "휠 롤러" },
};

const muscles: TermMap = {
  abdominals: { zh: "腹肌", es: "abdominales", it: "addominali", tr: "karın kasları", ru: "мышцы живота", hi: "पेट की मांसपेशियाँ", pl: "mięśnie brzucha", ko: "복근" },
  abductors: { zh: "外展肌", es: "abductores", it: "abduttori", tr: "abdüktörler", ru: "отводящие мышцы", hi: "अपह्रता मांसपेशियाँ", pl: "odwodziciele", ko: "외전근" },
  abs: { zh: "腹肌", es: "abdominales", it: "addominali", tr: "karın", ru: "пресс", hi: "एब्स", pl: "brzuch", ko: "복근" },
  adductors: { zh: "内收肌", es: "aductores", it: "adduttori", tr: "addüktörler", ru: "приводящие мышцы", hi: "अभिवर्तनी मांसपेशियाँ", pl: "przywodziciele", ko: "내전근" },
  "ankle stabilizers": { zh: "踝关节稳定肌", es: "estabilizadores del tobillo", it: "stabilizzatori caviglia", tr: "ayak bileği sabitleyicileri", ru: "стабилизаторы голеностопа", hi: "टखना स्थिरक", pl: "stabilizatory kostki", ko: "발목 안정근" },
  ankles: { zh: "踝部", es: "tobillos", it: "caviglie", tr: "ayak bilekleri", ru: "лодыжки", hi: "टखने", pl: "kostki", ko: "발목" },
  back: { zh: "背部", es: "espalda", it: "schiena", tr: "sırt", ru: "спина", hi: "पीठ", pl: "plecy", ko: "등" },
  biceps: { zh: "肱二头肌", es: "bíceps", it: "bicipiti", tr: "pazı", ru: "бицепс", hi: "बाइसेप्स", pl: "biceps", ko: "이두근" },
  brachialis: { zh: "肱肌", es: "braquial", it: "brachiale", tr: "brakialis", ru: "плечевая мышца", hi: "ब्रैकियलिस", pl: "mięsień ramienny", ko: "상완근" },
  calves: { zh: "小腿", es: "pantorrillas", it: "polpacci", tr: "baldırlar", ru: "икры", hi: "पिंडली", pl: "łydki", ko: "종아리" },
  "cardiovascular system": { zh: "心血管系统", es: "sistema cardiovascular", it: "sistema cardiovascolare", tr: "kardiyovasküler sistem", ru: "сердечно-сосудистая система", hi: "हृदय प्रणाली", pl: "układ krążenia", ko: "심혈관계" },
  chest: { zh: "胸部", es: "pecho", it: "petto", tr: "göğüs", ru: "грудь", hi: "छाती", pl: "klatka piersiowa", ko: "가슴" },
  core: { zh: "核心", es: "core", it: "core", tr: "kor", ru: "кор", hi: "कोर", pl: "core", ko: "코어" },
  deltoids: { zh: "三角肌", es: "deltoides", it: "deltoidi", tr: "deltoidler", ru: "дельтовидные", hi: "डेल्टॉइड", pl: "naramienne", ko: "삼각근" },
  delts: { zh: "三角肌", es: "deltoides", it: "deltoidi", tr: "deltalar", ru: "дельты", hi: "डेल्ट्स", pl: "barki", ko: "삼각근" },
  feet: { zh: "足部", es: "pies", it: "piedi", tr: "ayaklar", ru: "ступни", hi: "पैर", pl: "stopy", ko: "발" },
  forearms: { zh: "前臂", es: "antebrazos", it: "avambracci", tr: "ön kollar", ru: "предплечья", hi: "अग्रबाहु", pl: "przedramiona", ko: "전완근" },
  glutes: { zh: "臀肌", es: "glúteos", it: "glutei", tr: "kalça kasları", ru: "ягодицы", hi: "ग्लूट्स", pl: "pośladki", ko: "둔근" },
  "grip muscles": { zh: "握力肌", es: "músculos de agarre", it: "muscoli della presa", tr: "kavrama kasları", ru: "мышцы хвата", hi: "पकड़ मांसपेशियाँ", pl: "mięśnie chwytu", ko: "악력 근육" },
  groin: { zh: "腹股沟", es: "ingle", it: "inguine", tr: "kasık", ru: "пах", hi: "कमर का भाग", pl: "pachwina", ko: "사타구니" },
  hamstrings: { zh: "腘绳肌", es: "isquiotibiales", it: "femorali", tr: "arka bacak kasları", ru: "бицепс бедра", hi: "हैमस्ट्रिंग", pl: "mięśnie dwugłowe uda", ko: "햄스트링" },
  hands: { zh: "手部", es: "manos", it: "mani", tr: "eller", ru: "кисти", hi: "हाथ", pl: "dłonie", ko: "손" },
  "hip flexors": { zh: "髋屈肌", es: "flexores de cadera", it: "flessori dell'anca", tr: "kalça fleksörleri", ru: "сгибатели бедра", hi: "हिप फ्लेक्सर", pl: "zginacze bioder", ko: "고관절 굴곡근" },
  "inner thighs": { zh: "大腿内侧", es: "muslos internos", it: "interno cosce", tr: "iç uyluk", ru: "внутренняя поверхность бедра", hi: "भीतरी जांघ", pl: "wewnętrzna strona ud", ko: "허벅지 안쪽" },
  "latissimus dorsi": { zh: "背阔肌", es: "dorsal ancho", it: "gran dorsale", tr: "latissimus dorsi", ru: "широчайшая мышца спины", hi: "लैटिसिमस डॉर्सी", pl: "najszerszy grzbietu", ko: "광배근" },
  lats: { zh: "背阔肌", es: "dorsales", it: "dorsali", tr: "kanat kasları", ru: "широчайшие", hi: "लैट्स", pl: "najszersze", ko: "광배근" },
  "levator scapulae": { zh: "肩胛提肌", es: "elevador de la escápula", it: "elevatore della scapola", tr: "levator skapula", ru: "мышца, поднимающая лопатку", hi: "लेवेटर स्कैपुला", pl: "dźwigacz łopatki", ko: "견갑거근" },
  "lower abs": { zh: "下腹肌", es: "abdominales inferiores", it: "addominali bassi", tr: "alt karın", ru: "нижний пресс", hi: "निचले एब्स", pl: "dolny brzuch", ko: "하복부" },
  "lower back": { zh: "下背部", es: "espalda baja", it: "zona lombare", tr: "bel", ru: "поясница", hi: "निचली पीठ", pl: "dolny odcinek pleców", ko: "허리" },
  obliques: { zh: "腹斜肌", es: "oblicuos", it: "obliqui", tr: "yan karın kasları", ru: "косые мышцы", hi: "तिरछी मांसपेशियाँ", pl: "mięśnie skośne", ko: "복사근" },
  pectorals: { zh: "胸大肌", es: "pectorales", it: "pettorali", tr: "göğüs kasları", ru: "грудные мышцы", hi: "पेक्टोरल", pl: "mięśnie piersiowe", ko: "대흉근" },
  quadriceps: { zh: "股四头肌", es: "cuádriceps", it: "quadricipiti", tr: "dört başlı kas", ru: "квадрицепс", hi: "क्वाड्रिसेप्स", pl: "mięśnie czworogłowe", ko: "대퇴사두근" },
  quads: { zh: "股四头肌", es: "cuádriceps", it: "quadricipiti", tr: "ön bacak", ru: "квадрицепсы", hi: "क्वाड्स", pl: "czworogłowe", ko: "사두근" },
  "rear deltoids": { zh: "后三角肌", es: "deltoides posteriores", it: "deltoidi posteriori", tr: "arka deltoidler", ru: "задние дельты", hi: "पिछले डेल्टॉइड", pl: "tylne aktony naramiennych", ko: "후면 삼각근" },
  rhomboids: { zh: "菱形肌", es: "romboides", it: "romboidi", tr: "romboidler", ru: "ромбовидные", hi: "रॉमबॉइड", pl: "mięśnie równoległoboczne", ko: "능형근" },
  "rotator cuff": { zh: "肩袖", es: "manguito rotador", it: "cuffia dei rotatori", tr: "rotator manşet", ru: "вращательная манжета", hi: "रोटेटर कफ", pl: "stożek rotatorów", ko: "회전근개" },
  "serratus anterior": { zh: "前锯肌", es: "serrato anterior", it: "dentato anteriore", tr: "ön serratus", ru: "передняя зубчатая мышца", hi: "सेराटस एंटीरियर", pl: "mięsień zębaty przedni", ko: "전거근" },
  shins: { zh: "胫部", es: "espinillas", it: "stinchi", tr: "kaval kemikleri", ru: "голени", hi: "पिंडली की हड्डी", pl: "golenie", ko: "정강이" },
  shoulders: { zh: "肩部", es: "hombros", it: "spalle", tr: "omuzlar", ru: "плечи", hi: "कंधे", pl: "barki", ko: "어깨" },
  soleus: { zh: "比目鱼肌", es: "sóleo", it: "soleo", tr: "soleus", ru: "камбаловидная мышца", hi: "सोलियस", pl: "mięsień płaszczkowaty", ko: "가자미근" },
  spine: { zh: "脊柱", es: "columna", it: "colonna vertebrale", tr: "omurga", ru: "позвоночник", hi: "रीढ़", pl: "kręgosłup", ko: "척추" },
  sternocleidomastoid: { zh: "胸锁乳突肌", es: "esternocleidomastoideo", it: "sternocleidomastoideo", tr: "sternokleidomastoid", ru: "грудино-ключично-сосцевидная мышца", hi: "स्टर्नोक्लिडोमास्टॉयड", pl: "mięsień mostkowo-obojczykowo-sutkowy", ko: "흉쇄유돌근" },
  trapezius: { zh: "斜方肌", es: "trapecio", it: "trapezio", tr: "trapez", ru: "трапециевидная мышца", hi: "ट्रेपेज़ियस", pl: "czworoboczny", ko: "승모근" },
  traps: { zh: "斜方肌", es: "trapecios", it: "trapezi", tr: "trapezler", ru: "трапеции", hi: "ट्रैप्स", pl: "kaptury", ko: "승모근" },
  triceps: { zh: "肱三头肌", es: "tríceps", it: "tricipiti", tr: "arka kol", ru: "трицепс", hi: "ट्राइसेप्स", pl: "triceps", ko: "삼두근" },
  "upper back": { zh: "上背部", es: "espalda alta", it: "parte alta della schiena", tr: "üst sırt", ru: "верх спины", hi: "ऊपरी पीठ", pl: "górny odcinek pleców", ko: "상부 등" },
  "upper chest": { zh: "上胸部", es: "pecho superior", it: "parte alta del petto", tr: "üst göğüs", ru: "верх груди", hi: "ऊपरी छाती", pl: "górna część klatki", ko: "상부 가슴" },
  "wrist extensors": { zh: "腕伸肌", es: "extensores de muñeca", it: "estensori del polso", tr: "bilek ekstansörleri", ru: "разгибатели запястья", hi: "कलाई विस्तारक", pl: "prostowniki nadgarstka", ko: "손목 신전근" },
  "wrist flexors": { zh: "腕屈肌", es: "flexores de muñeca", it: "flessori del polso", tr: "bilek fleksörleri", ru: "сгибатели запястья", hi: "कलाई फ्लेक्सर", pl: "zginacze nadgarstka", ko: "손목 굴곡근" },
  wrists: { zh: "腕部", es: "muñecas", it: "polsi", tr: "bilekler", ru: "запястья", hi: "कलाइयाँ", pl: "nadgarstki", ko: "손목" },
};

const allTerms: TermMap = { ...bodyParts, ...equipment, ...muscles };

/** Translate a dataset term (body part, equipment, muscle) into the active language.
 *  Falls back to the original English term if no translation exists. */
export function getTerm(term: string, lang: LangCode): string {
  if (lang === DEFAULT_LANG) return term;
  const key = term.toLowerCase().trim();
  return allTerms[key]?.[lang] ?? term;
}
