import { DEFAULT_LANG, type LangCode } from "@/lib/i18n";

/* Exercise names are free text (1,324 of them), so there's no per-name
 * translation in the dataset. Names are highly templated, though — 560 unique
 * word-tokens cover all of them. We translate a name by tokenizing it and
 * looking up each token (Korean only for now), which is how Korean fitness
 * apps localize movement names. Unknown tokens fall back to the English word. */

// Korean token dictionary. English source word -> 한국어.
const ko: Record<string, string> = {};

/** Register tokens into a target dictionary. Bound per-language via `into`. */
let current: Record<string, string> = ko;
function reg(map: Record<string, string>) {
  Object.assign(current, map);
}
function into(dict: Record<string, string>) {
  current = dict;
}

// Equipment / apparatus
reg({
  dumbbell: "덤벨", dumbbells: "덤벨", barbell: "바벨", cable: "케이블", ball: "볼",
  band: "밴드", kettlebell: "케틀벨", smith: "스미스머신", ez: "EZ바", "ez-bar": "EZ바",
  "ez-barbell": "EZ바벨", "t-bar": "T바", "sz-bar": "SZ바", bar: "바", bosu: "보수",
  medicine: "메디신", rope: "로프", ropes: "로프", battling: "배틀", roller: "롤러",
  wheel: "휠", sled: "슬레드", machine: "머신", lever: "레버", trainer: "트레이너",
  landmine: "랜드마인", pulley: "풀리", suspension: "서스펜션", suspended: "서스펜션",
  resistance: "저항", stability: "스태빌리티", bike: "바이크", bicycle: "바이시클",
  elliptical: "일립티컬", treadmill: "트레드밀", stepmill: "스텝밀", ergometer: "에르고미터",
  cambered: "캠버드", trap: "트랩", weighted: "웨이티드", bodyweight: "맨몸", assisted: "어시스트",
  gripless: "그립없이", cage: "케이지", box: "박스", bench: "벤치", benches: "벤치",
  chair: "의자", floor: "플로어", wall: "벽", board: "보드", platform: "플랫폼",
  towel: "타월", strap: "스트랩", straps: "스트랩", handle: "핸들", attachment: "어태치먼트",
  pad: "패드", stepbox: "스텝박스", captains: "캡틴", cocoons: "코쿤", olympic: "올림픽",
});

// Core movements
reg({
  curl: "컬", curls: "컬", "curl-up": "컬업", press: "프레스", presses: "프레스",
  row: "로우", raise: "레이즈", raises: "레이즈", "y-raise": "Y레이즈", "t-raise": "T레이즈",
  extension: "익스텐션", fly: "플라이", flyes: "플라이", flyes2: "플라이", crunch: "크런치",
  crunches: "크런치", squat: "스쿼트", squats: "스쿼트", squatting: "스쿼트", lunge: "런지",
  deadlift: "데드리프트", "push-up": "푸시업", pushup: "푸시업", "pull-up": "풀업",
  "pull-ups": "풀업", pullup: "풀업", "chin-up": "친업", "chin-ups": "친업", "sit-up": "싯업",
  situp: "싯업", dip: "딥", dips: "딥", "dip-pull-up": "딥풀업", pushdown: "푸시다운",
  pulldown: "풀다운", pullover: "풀오버", "pull-in": "풀인", pull: "풀", push: "푸시",
  kickback: "킥백", kickbacks: "킥백", shrug: "슈러그", bridge: "브릿지", plank: "플랭크",
  clean: "클린", snatch: "스내치", jerk: "저크", thruster: "쓰러스터", swing: "스윙",
  twist: "트위스트", twists: "트위스트", twisting: "트위스트", twisted: "트위스트",
  rotation: "회전", rotational: "회전", rotary: "회전", rotate: "회전", "step-up": "스텝업",
  step: "스텝", jump: "점프", jumps: "점프", hop: "홉", hops: "홉", jack: "잭",
  burpee: "버피", crawl: "크롤", climb: "클라임", climber: "클라이머", run: "런",
  walk: "워크", walking: "워킹", march: "마치", carry: "캐리",
  slam: "슬램", chop: "찹", woodchop: "우드찹", pass: "패스", drive: "드라이브", throw: "쓰로우",
  hyperextension: "하이퍼익스텐션", hyper: "하이퍼", abduction: "외전", adduction: "내전",
  flexion: "굴곡", extension2: "신전", pronation: "회내", supination: "회외",
  tilt: "틸트", bend: "벤드", bends: "벤드", reach: "리치", squeeze: "스퀴즈",
  lift: "리프트", lifting: "리프팅", "get-up": "겟업", "muscle-up": "머슬업",
  "v-up": "브이업", "v-sit": "브이싯", "l-sit": "엘싯", "l-pull-up": "엘풀업",
  "sit-up2": "싯업", fallout: "폴아웃", rollout: "롤아웃", rollerout: "롤아웃",
  "up-down": "업다운", "side-to-side": "좌우", "elbow-to-knee": "팔꿈치무릎",
  windmill: "윈드밀", superman: "슈퍼맨", scissor: "시저", flutter: "플러터",
});

// Body parts / muscles
reg({
  arm: "암", arms: "암", leg: "레그", legs: "레그", legged: "레그", "leg-hip": "레그힙",
  chest: "체스트", shoulder: "숄더", shoulders: "숄더", back: "백", hip: "힙", hips: "힙",
  knee: "니", knees: "니", calf: "카프", calves: "카프", neck: "넥", wrist: "리스트",
  wrists: "리스트", ankle: "발목", ankles: "발목", toe: "발끝", heel: "뒤꿈치",
  glute: "둔근", glutes: "둔근", gluteus: "둔근", "glute-ham": "둔근햄스트링",
  hamstring: "햄스트링", quad: "대퇴사두", quads: "대퇴사두", biceps: "이두", bicep: "이두",
  triceps: "삼두", tricep: "삼두", delt: "삼각근", deltoid: "삼각근", delts: "삼각근",
  lat: "광배근", lats: "광배근", ab: "복근", abdominal: "복근", oblique: "복사근",
  spine: "척추", scapula: "견갑골", scapular: "견갑골", groin: "사타구니", femoral: "대퇴",
  "rectus": "직근", femoris: "대퇴", pectoralis: "대흉근", pec: "흉근", adductor: "내전근",
  abductor: "외전근", peroneals: "비골근", tibialis: "전경골근", quadriceps: "대퇴사두근",
  posterior: "후면", anterior: "전면", pelvic: "골반", finger: "손가락", hand: "핸드",
  hands: "핸드", elbow: "팔꿈치", face: "페이스", head: "헤드", butt: "엉덩이",
  sternum: "흉골", body: "바디", "body-up": "바디업", "bottoms-up": "바텀업",
});

// Positions / modifiers
reg({
  seated: "시티드", sitted: "시티드", sit: "싯", standing: "스탠딩", stance: "스탠스",
  lying: "라잉", supine: "누워서", prone: "엎드려", kneeling: "니링", incline: "인클라인",
  decline: "디클라인", flat: "플랫", bent: "벤트", "bent-over": "벤트오버", "bent over": "벤트오버",
  reverse: "리버스", "reverse-grip": "리버스그립", reversed: "리버스", "revers": "리버스",
  front: "프론트", rear: "리어", side: "사이드", lateral: "래터럴", overhead: "오버헤드",
  over: "오버", under: "언더", underhand: "언더핸드", overhand: "오버핸드", behind: "비하인드",
  close: "클로즈", "close-grip": "클로즈그립", wide: "와이드", "wide-grip": "와이드그립",
  narrow: "내로우", grip: "그립", "wrist-grip": "그립", high: "하이", low: "로우",
  upper: "어퍼", lower: "로워", middle: "미들", inner: "이너", outer: "아우터",
  outside: "바깥쪽", inside: "안쪽", internal: "내측", external: "외측", neutral: "뉴트럴",
  parallel: "패러렐", vertical: "버티컬", horizontal: "호리즌탈", straight: "스트레이트",
  cross: "크로스", "cross-over": "크로스오버", crossover: "크로스오버", crossovers: "크로스오버",
  single: "싱글", one: "원", two: "투", "two-one": "투원", three: "쓰리", double: "더블",
  alternate: "얼터네이트", alternating: "얼터네이팅", twin: "트윈", weighted2: "웨이티드",
  wide2: "와이드", palm: "팔", "palm-in": "팔안쪽", "palms": "팔", "palm-in2": "팔안쪽",
  pronated: "회내", supinated: "회외", "reverse2": "리버스", diagonal: "대각선",
  full: "풀", half: "하프", quarter: "쿼터", partial: "부분", short: "숏", long: "롱",
  wide3: "와이드", elevated: "엘리베이티드", raised: "레이즈드", extended: "익스텐디드",
  bottoms: "바텀", floor2: "플로어", "45": "45도", "90": "90도", degrees: "도",
  weight: "웨이트", weights: "웨이트", plate: "플레이트", plates: "플레이트",
});

// Named / style variants (mostly transliterated, as fitness apps do)
reg({
  russian: "러시안", arnold: "아놀드", zottman: "조트만", spider: "스파이더",
  preacher: "프리처", peacher: "프리처", peacher2: "프리처", concentration: "컨센트레이션",
  hammer: "해머", pistol: "피스톨", sumo: "스모", cossack: "코사크", bulgarian: "불가리안",
  romanian: "루마니안", jefferson: "제퍼슨", zercher: "저처", pendlay: "펜들레이",
  bradford: "브래드포드", rocky: "로키", cuban: "쿠반", turkish: "터키시", korean: "코리안",
  hindu: "힌두", judo: "유도", yoga: "요가", pilates: "필라테스", frog: "프로그",
  donkey: "동키", gorilla: "고릴라", monster: "몬스터", frankenstein: "프랑켄슈타인",
  bear: "베어", crab: "크랩", stork: "스토크", swimmer: "스위머", skater: "스케이터",
  skier: "스키어", ski: "스키", sprint: "스프린트", sprints: "스프린트", runners: "러너",
  runner: "러너", speed: "스피드", quick: "퀵", feet: "발", dynamic: "다이나믹",
  isometric: "아이소메트릭", plyo: "플라이오", ballistic: "밸리스틱", explosive: "익스플로시브",
  archer: "아처", clap: "클랩", diamond: "다이아몬드", pike: "파이크", "pike-to-cobra": "파이크코브라",
  handstand: "물구나무", inchworm: "인치웜", "dead bug": "데드버그", bug: "버그", dead: "데드",
  "mountain": "마운틴", "good morning": "굿모닝", morning: "모닝", good: "굿", jackknife: "잭나이프",
  jumping: "점핑", star: "스타", pallof: "팔로프", "world": "월드", "greatest": "그레이티스트",
  goblet: "고블릿", zercher2: "저처", "clean-grip": "클린그립", "clean grip": "클린그립",
  guillotine: "길로틴", skull: "스컬", skullcrusher: "스컬크러셔", crusher: "크러셔",
  "skull-crusher": "스컬크러셔", french: "프렌치", jm: "JM", tate: "테이트", svend: "스벤드",
  waiter: "웨이터", "w-press": "W프레스", bradford2: "브래드포드", cossack2: "코사크",
  farmers: "파머스", farmer: "파머", flag: "플래그", "human": "휴먼", saw: "쏘",
  renegade: "레니게이드", janda: "얀다", gironda: "지론다", thibaudeau: "티보도",
  peacock: "피콕", planche: "플랜치", maltese: "말티즈", pelican: "펠리칸",
  kayak: "카약", "wind sprints": "윈드스프린트", wind: "윈드", potty: "포티",
  "sissy": "시시", scott: "스캇", larsen: "라센", spoto: "스포토", meadows: "메도우스",
});

// Connectors, generic and remaining tokens
reg({
  with: "", on: "", to: "투", and: "", the: "", of: "", from: "", in: "",
  against: "어게인스트", between: "비트윈", through: "쓰루", around: "어라운드",
  over2: "오버", off: "오프", into: "인투", above: "위", plus: "플러스", "anti": "안티",
  "anti-gravity": "안티그래비티", gravity: "그래비티", exercise: "운동", stretch: "스트레칭",
  motion: "모션", range: "레인지", circles: "서클", circular: "서클", clock: "클락",
  figure: "피겨", "8": "8자", v: "V", "v-bar": "V바", blaster: "블래스터", drag: "드래그",
  drop: "드롭", set: "세트", pyramid: "피라미드", reps: "렙", rep: "렙", multiple: "멀티플",
  negative: "네거티브", "military": "밀리터리", upright: "업라이트", "toe touch": "발끝터치",
  touch: "터치", touchers: "터치", touchdown: "터치다운", down: "다운", up: "업", ups: "업",
  out: "아웃", forward: "포워드", backward: "백워드", forth: "포스", apart: "벌려",
  together: "모아", "fours": "네발", squad: "스쿼트", "3/4": "3/4",
  pov: "POV", tap: "탭", point: "포인트", response: "리스폰스", release: "릴리즈",
  catch: "캐치", hold: "홀드", stabilization: "안정화", balance: "밸런스", "fixed": "고정",
  drag2: "드래그", tuck: "턱", tucked: "턱", clasped: "깍지", "hands-up": "핸즈업",
  spell: "스펠", caster: "캐스터", "spell caster": "스펠캐스터", sphinx: "스핑크스",
  stalder: "스탈더", staircase: "스테어케이스", "skin": "스킨", cat: "캣", "skin the cat": "스킨더캣",
  degrees2: "도", closer: "클로저", angled: "앵글드", angle: "앵글", sledge: "슬레지",
  "iron": "아이언", "iron cross": "아이언크로스", tennis: "테니스", "hug": "허그",
  pin: "핀", rack: "랙", "pin presses": "핀프레스", drag3: "드래그", cycle: "사이클",
  "deep": "딥", diamond2: "다이아몬드", bowling: "볼링", contralateral: "대측", unilateral: "일측",
  "can": "캔", breeding: "브리딩", "curtsey": "커트시", curtsy: "커트시", "big": "빅",
  thrusts: "쓰러스트", thrust: "쓰러스트", "ring": "링", "self": "셀프", slingers: "슬링어",
  piriformis: "이상근", "brachialis": "상완근", brachii: "상완", pronate: "회내",
  "pronate-grip": "회내그립", "reverse-grip2": "리버스그립", "underhand2": "언더핸드",
  "seesaw": "시소", "see-saw": "시소", pirate: "파이럿", supper: "서퍼", "style": "스타일",
  "kipping": "키핑", "strict": "스트릭트", "modified": "모디파이드", "basic": "베이직",
  "advanced": "어드밴스드", "intermediate": "인터미디엇", "semi": "세미", "quarter2": "쿼터",
  "hyght": "하이트", "impossible": "임파서블", "depth": "뎁스", "keens": "무릎", "reclining": "리클라인",
  "big2": "빅", "diagonal2": "대각선", "elevator": "엘리베이터", "elbow-to-knee2": "팔꿈치무릎",
  "ground": "그라운드", "wipers": "와이퍼", "windshield": "윈드실드", "prisoner": "프리즈너",
  "hollow": "할로우", "boxing": "복싱", "hook": "훅", "left": "레프트", "right": "라이트",
  "lean": "린", "gripper": "그리퍼", "flexor": "굴근", "flexors": "굴근", "extensor": "신근",
  "extensors": "신근", "pronators": "회내근", "supinators": "회외근", "diamond-grip": "다이아몬드그립",
  "svend2": "스벤드", "waiter2": "웨이터", "landmine2": "랜드마인", "otis": "오티스",
  "otis-up": "오티스업", "peacher-grip": "프리처그립", "sphinx2": "스핑크스", "cocoon": "코쿤",
  "svend-press": "스벤드프레스", "kayak2": "카약", "kroc": "크록", "meadows2": "메도우스",
});

// Fill remaining gap tokens found by coverage analysis
reg({
  male: "", female: "", hanging: "행잉", hang: "행", split: "스플릿", hack: "핵",
  inverse: "인버스", inverted: "인버티드", stiff: "스티프", support: "서포트",
  supported: "서포티드", kick: "킥", kicks: "킥", muscle: "머슬", bars: "바", "bar2": "바",
  pose: "포즈", chin: "친", rocking: "로킹", flip: "플립", power: "파워", depresor: "하강근",
  depressor: "하강근", retractor: "후인근", stationary: "스테이셔너리", straddle: "스트래들",
  air: "에어", all: "", major: "대", astride: "벌려앉아", knife: "나이프", both: "양쪽",
  "butt-ups": "버트업", butterfly: "버터플라이", variation: "변형", pro: "프로",
  stirrups: "등자", across: "가로질러", position: "포지션", "get": "겟",
  rectus2: "직근", cobra: "코브라", "half-kneeling": "하프니링", tuck2: "턱",
  "pistol2": "피스톨", "wall-ball": "월볼", "toes-to-bar": "발끝바", toes: "발끝",
  "chest-to-bar": "체스트바", "sit-through": "싯쓰루", "otis-up2": "오티스업",
  "l-raise": "L레이즈", "around-the-world": "어라운드더월드", "6": "6", "7": "7",
  seesaw2: "시소", "kneeling2": "니링", frog2: "프로그", "high-knee": "하이니",
  "toe-touch": "발끝터치", spellcaster: "스펠캐스터", "reverse-hyper": "리버스하이퍼",
});

// Chinese token dictionary. English source word -> 中文.
const zh: Record<string, string> = {};
into(zh);

// Equipment / apparatus
reg({
  dumbbell: "哑铃", dumbbells: "哑铃", barbell: "杠铃", cable: "拉索", ball: "球",
  band: "弹力带", kettlebell: "壶铃", smith: "史密斯机", ez: "曲柄杠铃", "ez-bar": "曲柄杠铃",
  "ez-barbell": "曲柄杠铃", "t-bar": "T杠", "sz-bar": "SZ杠", bar: "杠", bosu: "波速球",
  medicine: "药球", rope: "绳索", ropes: "绳索", battling: "战绳", roller: "滚轮",
  wheel: "健腹轮", sled: "雪橇", machine: "器械", lever: "杠杆", trainer: "训练器",
  landmine: "杠铃底座", pulley: "滑轮", suspension: "悬吊", suspended: "悬吊",
  resistance: "阻力", stability: "稳定", bike: "单车", bicycle: "单车",
  elliptical: "椭圆机", treadmill: "跑步机", stepmill: "登山机", ergometer: "测力计",
  cambered: "曲柄", trap: "六角杠", weighted: "负重", bodyweight: "自重", assisted: "辅助",
  gripless: "无握", cage: "深蹲架", box: "跳箱", bench: "卧凳", benches: "卧凳",
  chair: "椅", floor: "地面", wall: "墙", board: "板", platform: "台",
  towel: "毛巾", strap: "带", straps: "带", handle: "握把", attachment: "配件",
  pad: "垫", stepbox: "踏板", captains: "队长椅", cocoons: "卷腹", olympic: "奥林匹克",
});

// Core movements
reg({
  curl: "弯举", curls: "弯举", "curl-up": "卷体", press: "推举", presses: "推举",
  row: "划船", raise: "上举", raises: "上举", "y-raise": "Y字上举", "t-raise": "T字上举",
  extension: "伸展", fly: "飞鸟", flyes: "飞鸟", crunch: "卷腹", crunches: "卷腹",
  squat: "深蹲", squats: "深蹲", squatting: "深蹲", lunge: "弓步", deadlift: "硬拉",
  "push-up": "俯卧撑", pushup: "俯卧撑", "pull-up": "引体向上", "pull-ups": "引体向上",
  pullup: "引体向上", "chin-up": "反手引体", "chin-ups": "反手引体", "sit-up": "仰卧起坐",
  situp: "仰卧起坐", dip: "臂屈伸", dips: "臂屈伸", "dip-pull-up": "臂屈伸引体", pushdown: "下压",
  pulldown: "下拉", pullover: "上拉", "pull-in": "收拉", pull: "拉", push: "推",
  kickback: "后踢伸", kickbacks: "后踢伸", shrug: "耸肩", bridge: "臀桥", plank: "平板支撑",
  clean: "翻", snatch: "抓举", jerk: "挺举", thruster: "推举深蹲", swing: "摆荡",
  twist: "转体", twists: "转体", twisting: "转体", twisted: "转体",
  rotation: "旋转", rotational: "旋转", rotary: "旋转", rotate: "旋转", "step-up": "登阶",
  step: "踏步", jump: "跳", jumps: "跳", hop: "单跳", hops: "单跳", jack: "开合跳",
  burpee: "波比跳", crawl: "爬行", climb: "攀爬", climber: "登山", run: "跑",
  walk: "行走", walking: "行走", march: "踏步", carry: "行走搬运",
  slam: "砸球", chop: "劈砍", woodchop: "劈砍", pass: "传递", drive: "驱动", throw: "抛",
  hyperextension: "背屈伸", hyper: "超伸", abduction: "外展", adduction: "内收",
  flexion: "屈曲", pronation: "旋前", supination: "旋后",
  tilt: "倾斜", bend: "弯屈", bends: "弯屈", reach: "伸够", squeeze: "夹紧",
  lift: "举", lifting: "举", "get-up": "起身", "muscle-up": "双力臂",
  "v-up": "V字起坐", "v-sit": "V字支撑", "l-sit": "L字支撑", "l-pull-up": "L字引体",
  fallout: "跪姿滚轮", rollout: "滚轮", rollerout: "滚轮",
  "up-down": "起落", "side-to-side": "左右", "elbow-to-knee": "肘碰膝",
  windmill: "风车", superman: "超人", scissor: "剪式", flutter: "打腿",
});

// Body parts / muscles
reg({
  arm: "臂", arms: "臂", leg: "腿", legs: "腿", legged: "腿", "leg-hip": "腿髋",
  chest: "胸", shoulder: "肩", shoulders: "肩", back: "背", hip: "髋", hips: "髋",
  knee: "膝", knees: "膝", calf: "小腿", calves: "小腿", neck: "颈", wrist: "腕",
  wrists: "腕", ankle: "踝", ankles: "踝", toe: "脚尖", heel: "脚跟",
  glute: "臀", glutes: "臀", gluteus: "臀", "glute-ham": "臀腿",
  hamstring: "腘绳肌", quad: "股四头", quads: "股四头", biceps: "二头", bicep: "二头",
  triceps: "三头", tricep: "三头", delt: "三角肌", deltoid: "三角肌", delts: "三角肌",
  lat: "背阔肌", lats: "背阔肌", ab: "腹", abdominal: "腹", oblique: "腹斜肌",
  spine: "脊柱", scapula: "肩胛", scapular: "肩胛", groin: "腹股沟", femoral: "股",
  rectus: "直肌", femoris: "股", pectoralis: "胸大肌", pec: "胸肌", adductor: "内收肌",
  abductor: "外展肌", peroneals: "腓骨肌", tibialis: "胫骨前肌", quadriceps: "股四头肌",
  posterior: "后侧", anterior: "前侧", pelvic: "骨盆", finger: "手指", hand: "手",
  hands: "手", elbow: "肘", face: "面", head: "头", butt: "臀",
  sternum: "胸骨", body: "身体", "body-up": "起身", "bottoms-up": "底部向上",
});

// Positions / modifiers
reg({
  seated: "坐姿", sitted: "坐姿", sit: "坐", standing: "站姿", stance: "站距",
  lying: "仰卧", supine: "仰卧", prone: "俯卧", kneeling: "跪姿", incline: "上斜",
  decline: "下斜", flat: "平", bent: "屈", "bent-over": "俯身", "bent over": "俯身",
  reverse: "反向", "reverse-grip": "反握", reversed: "反向", revers: "反向",
  front: "前", rear: "后", side: "侧", lateral: "侧平", overhead: "过顶",
  over: "上", under: "下", underhand: "反握", overhand: "正握", behind: "颈后",
  close: "窄", "close-grip": "窄握", wide: "宽", "wide-grip": "宽握",
  narrow: "窄", grip: "握", high: "高", low: "低",
  upper: "上", lower: "下", middle: "中", inner: "内", outer: "外",
  outside: "外侧", inside: "内侧", internal: "内", external: "外", neutral: "中立",
  parallel: "平行", vertical: "垂直", horizontal: "水平", straight: "直",
  cross: "交叉", "cross-over": "交叉", crossover: "交叉", crossovers: "交叉",
  single: "单", one: "单", two: "双", "two-one": "二一", three: "三", double: "双",
  alternate: "交替", alternating: "交替", twin: "双", diagonal: "对角",
  palm: "掌", "palm-in": "掌心向内", palms: "掌",
  pronated: "旋前", supinated: "旋后",
  full: "全程", half: "半程", quarter: "四分之一", partial: "半程", short: "短", long: "长",
  elevated: "垫高", raised: "抬高", extended: "伸展", bottoms: "底部", floor2: "地面",
  "45": "45度", "90": "90度", degrees: "度", weight: "负重", weights: "负重",
  plate: "杠铃片", plates: "杠铃片",
});

// Named / style variants (Chinese conventional names where they exist)
reg({
  russian: "俄式", arnold: "阿诺德", zottman: "佐特曼", spider: "蜘蛛式",
  preacher: "牧师", peacher: "牧师", concentration: "集中", hammer: "锤式",
  pistol: "手枪式", sumo: "相扑", cossack: "哥萨克", bulgarian: "保加利亚",
  romanian: "罗马尼亚", jefferson: "杰斐逊", zercher: "泽奇", pendlay: "彭德利",
  bradford: "布拉德福德", rocky: "洛基", cuban: "古巴", turkish: "土耳其", korean: "韩式",
  hindu: "印度", judo: "柔道", yoga: "瑜伽", pilates: "普拉提", frog: "青蛙",
  donkey: "驴式", gorilla: "大猩猩", monster: "怪兽", frankenstein: "科学怪人",
  bear: "熊爬", crab: "螃蟹", stork: "鹤式", swimmer: "游泳", skater: "滑冰",
  skier: "滑雪", ski: "滑雪", sprint: "冲刺", sprints: "冲刺", runners: "跑者",
  runner: "跑者", speed: "速度", quick: "快速", feet: "脚", dynamic: "动态",
  isometric: "等长", plyo: "增强式", archer: "弓箭手", clap: "击掌", diamond: "钻石",
  pike: "屈体", "pike-to-cobra": "屈体眼镜蛇", handstand: "倒立", inchworm: "毛毛虫",
  "dead bug": "死虫", bug: "虫", dead: "死", mountain: "登山", "good morning": "早安",
  morning: "早安", good: "好", jackknife: "折刀", jumping: "跳跃", star: "星形",
  pallof: "帕洛夫", goblet: "高脚杯", "clean-grip": "翻握", guillotine: "断头台",
  skull: "碎颅", skullcrusher: "碎颅", crusher: "碎颅", french: "法式", jm: "JM",
  tate: "泰特", svend: "斯文德", waiter: "侍者", "w-press": "W推举", farmers: "农夫",
  farmer: "农夫", flag: "旗式", saw: "锯式", renegade: "叛徒", janda: "扬达",
  gironda: "吉隆达", thibaudeau: "蒂博多", planche: "俯卧撑挺身", maltese: "马耳他",
  kayak: "皮划艇", wind: "风", potty: "如厕", sissy: "西西", scott: "斯科特",
});

// Connectors, generic and remaining tokens
reg({
  with: "", on: "", to: "至", and: "", the: "", of: "", from: "", in: "",
  against: "抵", between: "间", through: "穿过", around: "环绕",
  over2: "上", off: "离", into: "入", above: "上方", plus: "加", anti: "抗",
  "anti-gravity": "抗重力", gravity: "重力", exercise: "运动", stretch: "拉伸",
  motion: "运动", range: "范围", circles: "画圈", circular: "画圈", clock: "时钟",
  figure: "字形", v: "V", "v-bar": "V杠", blaster: "臂弯举器", drag: "拖拉",
  drop: "递减", set: "组", pyramid: "金字塔", reps: "次", rep: "次", multiple: "多",
  negative: "离心", military: "军式", upright: "直立", touch: "触碰", touchers: "触碰",
  touchdown: "触地", down: "下", up: "上", ups: "起", out: "外", forward: "向前",
  backward: "向后", forth: "向前", apart: "分开", together: "并拢", fours: "四肢着地",
  all: "", squad: "深蹲", "3/4": "3/4", pov: "视角", tap: "点触", point: "尖",
  response: "反应", release: "释放", catch: "接", hold: "保持", stabilization: "稳定",
  balance: "平衡", fixed: "固定", tuck: "收膝", tucked: "收膝", clasped: "交扣",
  spell: "拼写", caster: "施法", "spell caster": "施法者", sphinx: "斯芬克斯",
  stalder: "斯塔尔德", staircase: "阶梯", skin: "皮", cat: "猫", "skin the cat": "穿越猫",
  closer: "更近", angled: "倾斜", angle: "角度", sledge: "大锤", iron: "铁",
  "iron cross": "十字支撑", tennis: "网球", hug: "抱", pin: "固定", rack: "架",
  cycle: "循环", deep: "深", bowling: "保龄", contralateral: "对侧", unilateral: "单侧",
  can: "罐", breeding: "繁殖", curtsey: "屈膝礼", curtsy: "屈膝礼", big: "大",
  thrusts: "顶髋", thrust: "顶髋", ring: "吊环", self: "自我", slingers: "甩摆",
  piriformis: "梨状肌", brachialis: "肱肌", brachii: "肱", pronate: "旋前",
  "pronate-grip": "旋前握", seesaw: "跷跷板", "see-saw": "跷跷板", pirate: "海盗",
  supper: "晚餐", style: "式", kipping: "借力", strict: "严格", modified: "改良",
  basic: "基础", advanced: "进阶", intermediate: "中级", semi: "半", quarter2: "四分之一",
  hyght: "海特", impossible: "不可能", depth: "深度", keens: "膝", reclining: "斜躺",
  big2: "大", diagonal2: "对角", elevator: "升降", ground: "地面", wipers: "雨刷",
  windshield: "雨刷", prisoner: "囚徒", hollow: "空心", boxing: "拳击", hook: "钩",
  left: "左", right: "右", lean: "倾", gripper: "握力器", flexor: "屈肌", flexors: "屈肌",
  extensor: "伸肌", extensors: "伸肌", pronators: "旋前肌", supinators: "旋后肌",
  otis: "奥蒂斯", "otis-up": "奥蒂斯起坐", cocoon: "卷腹", kroc: "克罗克", meadows: "梅多斯",
  male: "", female: "", hanging: "悬垂", hang: "悬垂", split: "分腿", hack: "哈克",
  inverse: "反向", inverted: "倒置", stiff: "直腿", support: "支撑", supported: "支撑",
  kick: "踢", kicks: "踢", muscle: "肌肉", bars: "杠", pose: "姿势", chin: "下巴",
  rocking: "摇摆", flip: "翻转", power: "力量", depresor: "下降肌", depressor: "下降肌",
  retractor: "回缩肌", stationary: "固定", straddle: "跨立", air: "空中", major: "大",
  astride: "跨坐", knife: "刀", both: "双", "butt-ups": "臀桥", butterfly: "蝴蝶",
  variation: "变式", pro: "专业", stirrups: "马镫", across: "横跨", position: "姿势",
  get: "起", cobra: "眼镜蛇", toes: "脚尖", figure8: "8字",
});

const dicts: Partial<Record<LangCode, Record<string, string>>> = { ko, zh };

/** Translate a free-text exercise name by tokenizing and translating each word.
 *  Only Korean is supported; every other language (and unknown tokens) falls
 *  back to the original English. Punctuation between tokens is preserved. */
export function translateExerciseName(name: string, lang: LangCode): string {
  if (lang === DEFAULT_LANG) return name;
  const dict = dicts[lang];
  if (!dict) return name;

  // Pre-clean dataset noise before tokenizing:
  //  - "(male)" / "(female)" model-sex tags carry no meaning in a name
  //  - "45°" → keep the number, drop the degree glyph (we append 도 ourselves)
  const cleaned = name
    .replace(/\((?:male|female)\)/gi, "")
    .replace(/°/g, ""); // "45" already maps to "45도" in the dictionary

  // Split into word tokens and the separators between them, so we can rejoin.
  const parts = cleaned.split(/([^a-zA-Z0-9/'-]+)/);
  let translatedAny = false;

  const out = parts.map((part) => {
    if (/^[^a-zA-Z0-9/'-]+$/.test(part) || part === "") return part;
    const hit = dict[part.toLowerCase()];
    if (hit !== undefined) {
      translatedAny = true;
      return hit;
    }
    return part; // unknown word or pure number: pass through
  });

  // Clean up artifacts left by tokens that mapped to an empty string:
  // empty brackets, doubled/edge spaces, and dangling separators.
  const joined = out
    .join("")
    .replace(/\(\s*\)/g, "")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s*-\s*(?=\s|$)/g, " ")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.)])/g, "$1")
    .trim();

  // If nothing matched, keep the clean English name.
  return translatedAny ? joined : name;
}







