'use strict';

/* ============================================================
   WORD LIST  (400+ common English words, all lowercase)
   ============================================================ */
const WORDS = [
  'the','be','to','of','and','a','in','that','have','it','for','not','on',
  'with','he','as','you','do','at','this','but','his','by','from','they',
  'we','say','her','she','or','an','will','my','one','all','would','there',
  'their','what','so','up','out','if','about','who','get','which','go','me',
  'when','make','can','like','time','no','just','him','know','take','people',
  'into','year','your','good','some','could','them','see','other','than',
  'then','now','look','only','come','its','over','think','also','back',
  'after','use','two','how','our','work','first','well','way','even','new',
  'want','because','any','these','give','day','most','us','great','between',
  'need','large','often','hand','high','place','hold','turn','here','why',
  'help','put','different','away','again','off','old','number','tell','small',
  'every','found','still','learn','plant','cover','food','sun','four','state',
  'keep','eye','never','last','let','thought','city','tree','cross','farm',
  'hard','start','might','story','saw','far','sea','draw','left','late',
  'run','while','press','close','night','real','life','few','north','open',
  'seem','together','next','white','begin','got','walk','paper','always',
  'music','those','both','mark','book','letter','until','mile','river','car',
  'feet','care','second','enough','plain','girl','young','ready','above',
  'ever','red','list','though','feel','talk','bird','soon','body','dog',
  'family','leave','song','door','black','short','class','wind','question',
  'happen','complete','ship','area','half','rock','order','fire','south',
  'problem','piece','told','knew','pass','since','top','whole','king','space',
  'heard','best','hour','better','true','during','five','remember','step',
  'early','west','ground','interest','reach','fast','sing','listen','six',
  'table','travel','less','morning','ten','simple','several','toward','war',
  'lay','against','pattern','slow','center','love','person','money','serve',
  'appear','road','map','rain','rule','pull','cold','notice','voice','fall',
  'power','town','fine','drive','contain','front','teach','week','final',
  'gave','green','quick','ocean','warm','free','minute','strong','special',
  'behind','clear','tail','produce','fact','street','inch','nothing','course',
  'stay','wheel','full','force','blue','object','decide','surface','deep',
  'moon','island','foot','system','busy','test','record','boat','common',
  'gold','possible','plane','age','wonder','laugh','thousand','ago','ran',
  'check','game','shape','miss','brought','heat','snow','bring','fill',
  'east','paint','language','grand','ball','wave','drop','heart','ring',
  'supply','corner','soft','visit','church','sense','lead','field','figure',
  'break','chance','point','play','spell','air','animal','house','page',
  'mother','answer','study','should','world','near','add','own','below',
  'country','school','father','earth','light','head','under','else','quite',
  'live','call','front','keep','face','watch','idea','body','enough','along',
  'side','dark','door','stand','own','lost','name','late','true','such',
  'show','move','try','kind','hand','such','turn','here','why','ask','men',
  'read','need','land','different','home','us','move','try','kind','again',
  'off','play','spell','air','away','animal','house','point','letter','mother',
  'answer','found','study','still','learn','should','world','high','every',
  'near','add','food','between','own','below','country','plant','last',
  'school','father','keep','tree','never','start','city','earth','light',
  'thought','head','under','story','left','while','along','might','close',
  'something','seem','hard','open','example','begin','life','always','those',
  'both','paper','together','often','run','important','until','children',
  'side','feet','car','mile','night','walk','white','sea','four','carry',
  'once','hear','stop','without','later','idea','watch','indian','almost',
  'sometimes','mountain','cut','young','talk','soon','list','song','being',
  'pass','since','came','able','see','kind','most','long','down','day',
  'did','get','come','made','may','part','over','such','right','take',
  'place','where','much','through','back','also','after','use','man','well',
  'way','been','call','who','oil','sit','set','put','end','does','another',
  'well','large','often','hand','high','hold','turn','play','spell',
];

/* ============================================================
   60 % KEYBOARD LAYOUT
   zone: pl=pinky-left, pr=pinky-right, rl=ring-left, rr=ring-right,
         ml=middle-left, mr=middle-right, il=index-left, ir=index-right,
         th=thumb, mod=modifier
   ============================================================ */
const KB = [
  /* Number row */
  [
    {t:'~', b:'`',         k:'`',        z:'pl'},
    {t:'!', b:'1',         k:'1',        z:'pl'},
    {t:'@', b:'2',         k:'2',        z:'rl'},
    {t:'#', b:'3',         k:'3',        z:'ml'},
    {t:'$', b:'4',         k:'4',        z:'il'},
    {t:'%', b:'5',         k:'5',        z:'il'},
    {t:'^', b:'6',         k:'6',        z:'ir'},
    {t:'&', b:'7',         k:'7',        z:'ir'},
    {t:'*', b:'8',         k:'8',        z:'mr'},
    {t:'(', b:'9',         k:'9',        z:'rr'},
    {t:')', b:'0',         k:'0',        z:'pr'},
    {t:'_', b:'-',         k:'-',        z:'pr'},
    {t:'+', b:'=',         k:'=',        z:'pr'},
    {t:'',  b:'Backspace', k:'Backspace',z:'mod', w:'w200'},
  ],
  /* QWERTY row */
  [
    {t:'',  b:'Tab',  k:'Tab', z:'mod', w:'w150'},
    {t:'',  b:'Q',    k:'q',   z:'pl'},
    {t:'',  b:'W',    k:'w',   z:'rl'},
    {t:'',  b:'E',    k:'e',   z:'ml'},
    {t:'',  b:'R',    k:'r',   z:'il'},
    {t:'',  b:'T',    k:'t',   z:'il'},
    {t:'',  b:'Y',    k:'y',   z:'ir'},
    {t:'',  b:'U',    k:'u',   z:'ir'},
    {t:'',  b:'I',    k:'i',   z:'mr'},
    {t:'',  b:'O',    k:'o',   z:'rr'},
    {t:'',  b:'P',    k:'p',   z:'pr'},
    {t:'{', b:'[',    k:'[',   z:'pr'},
    {t:'}', b:']',    k:']',   z:'pr'},
    {t:'|', b:'\\',   k:'\\',  z:'mod', w:'w150'},
  ],
  /* Home row */
  [
    {t:'',  b:'Caps Lock', k:'CapsLock', z:'mod', w:'w175'},
    {t:'',  b:'A',  k:'a', z:'pl', dot:true},
    {t:'',  b:'S',  k:'s', z:'rl'},
    {t:'',  b:'D',  k:'d', z:'ml'},
    {t:'',  b:'F',  k:'f', z:'il', dot:true},
    {t:'',  b:'G',  k:'g', z:'il'},
    {t:'',  b:'H',  k:'h', z:'ir'},
    {t:'',  b:'J',  k:'j', z:'ir', dot:true},
    {t:'',  b:'K',  k:'k', z:'mr'},
    {t:'',  b:'L',  k:'l', z:'rr'},
    {t:':', b:';',  k:';', z:'pr'},
    {t:'"', b:"'",  k:"'", z:'pr'},
    {t:'',  b:'Enter', k:'Enter', z:'mod', w:'w225'},
  ],
  /* Bottom row */
  [
    {t:'',  b:'Shift', k:'ShiftL', z:'mod', w:'w225'},
    {t:'',  b:'Z',  k:'z', z:'pl'},
    {t:'',  b:'X',  k:'x', z:'rl'},
    {t:'',  b:'C',  k:'c', z:'ml'},
    {t:'',  b:'V',  k:'v', z:'il'},
    {t:'',  b:'B',  k:'b', z:'il'},
    {t:'',  b:'N',  k:'n', z:'ir'},
    {t:'',  b:'M',  k:'m', z:'ir'},
    {t:'<', b:',',  k:',', z:'mr'},
    {t:'>', b:'.',  k:'.', z:'rr'},
    {t:'?', b:'/',  k:'/', z:'pr'},
    {t:'',  b:'Shift', k:'ShiftR', z:'mod', w:'w275'},
  ],
  /* Space row */
  [
    {t:'', b:'Ctrl', k:'CtrlL', z:'mod', w:'w125'},
    {t:'', b:'Alt',  k:'AltL',  z:'mod', w:'w125'},
    {t:'', b:'',     k:' ',     z:'th',  w:'wsp'},
    {t:'', b:'Alt',  k:'AltR',  z:'mod', w:'w125'},
    {t:'', b:'Ctrl', k:'CtrlR', z:'mod', w:'w125'},
  ],
];

/* ============================================================
   STATE
   ============================================================ */
const S = {
  chars:         [],    // [{char, display, typed, el}]
  cursor:        0,
  totalStrokes:  0,
  errors:        0,
  startTime:     null,
  isActive:      false,
  prevWPM:       0,
  prevAcc:       100,
  prevScore:     0,
  sessionSec:    0,
  sessionTimer:  null,
  keyStats:      {},    // key -> {correct, total, wpmSamples:[]}
  topWPM:        0,
  wpmAtStart:     null,  // WPM when current test was first started
};

/* ============================================================
   WORD / CHAR HELPERS
   ============================================================ */
function pick() { return WORDS[Math.floor(Math.random() * WORDS.length)]; }

function buildChars(wordList) {
  const arr = [];
  wordList.forEach((w, wi) => {
    if (wi > 0) arr.push({char:' ', display:'\u00B7', typed:null});
    for (const ch of w) arr.push({char:ch, display:ch, typed:null});
  });
  return arr;
}

/* ============================================================
   KEYBOARD RENDER
   ============================================================ */
function buildKeyboard() {
  const kb = document.getElementById('keyboard');
  kb.innerHTML = '';
  KB.forEach(row => {
    const rowEl = document.createElement('div');
    rowEl.className = 'kb-row';
    row.forEach(def => {
      const el = document.createElement('div');
      el.className = ['key', 'zone-' + def.z, def.w || 'w1'].join(' ');
      if (def.w) el.classList.add('key-wide');
      el.dataset.key = def.k;

      if (def.t) {
        const ts = document.createElement('span');
        ts.className = 'key-top';
        ts.textContent = def.t;
        el.appendChild(ts);
      }
      const ms = document.createElement('span');
      ms.className = 'key-main';
      ms.textContent = def.b;
      el.appendChild(ms);

      if (def.dot) {
        const d = document.createElement('span');
        d.className = 'home-bump';
        el.appendChild(d);
      }
      rowEl.appendChild(el);
    });
    kb.appendChild(rowEl);
  });
}

/* ============================================================
   TEXT RENDER
   ============================================================ */
function renderChars(charArr) {
  const display = document.getElementById('words-display');
  display.innerHTML = '';
  charArr.forEach(co => {
    const span = document.createElement('span');
    span.className = 'ch';
    span.textContent = co.display;
    co.el = span;
    display.appendChild(span);
  });
}

function setCharClass(i) {
  const co = S.chars[i];
  if (!co || !co.el) return;
  co.el.className = 'ch';
  if (i < S.cursor) {
    co.el.classList.add(co.typed === co.char ? 'correct' : 'incorrect');
  } else if (i === S.cursor) {
    co.el.classList.add('cursor');
  }
}

/* ============================================================
   APPEND MORE WORDS (called when buffer gets low)
   ============================================================ */
function appendWords(n) {
  const display = document.getElementById('words-display');
  const newWords = Array.from({length: n}, pick);
  const extra = buildChars(newWords);
  // Add separator dot between existing text and new batch
  const sep = {char:' ', display:'\u00B7', typed:null};
  const sepEl = document.createElement('span');
  sepEl.className = 'ch';
  sepEl.textContent = sep.display;
  sep.el = sepEl;
  display.appendChild(sepEl);
  S.chars.push(sep);

  extra.forEach(co => {
    const span = document.createElement('span');
    span.className = 'ch';
    span.textContent = co.display;
    co.el = span;
    display.appendChild(span);
    S.chars.push(co);
  });
}

/* ============================================================
   SCROLL  – keep cursor on visible line 2
   ============================================================ */
function updateScroll() {
  const display = document.getElementById('words-display');
  const cursorEl = display.querySelector('.ch.cursor');
  if (!cursorEl) return;
  const lineH = 56; // 28px font × 2 line-height
  const cursorTop = cursorEl.offsetTop;
  const offset = Math.max(0, cursorTop - lineH);
  display.style.transform = 'translateY(-' + offset + 'px)';
}

/* ============================================================
   KEYBOARD HIGHLIGHT
   ============================================================ */
function charToKey(ch) {
  if (ch === ' ') return ' ';
  return ch.toLowerCase();
}

function highlightNextKey() {
  document.querySelectorAll('.key.key-next').forEach(k => k.classList.remove('key-next'));
  if (S.cursor >= S.chars.length) return;
  const ch = S.chars[S.cursor].char;
  const keyVal = charToKey(ch);
  const el = document.querySelector('.key[data-key="' + CSS.escape(keyVal) + '"]');
  if (el) el.classList.add('key-next');
}

function flashKey(ch, correct) {
  const el = document.querySelector('.key[data-key="' + CSS.escape(charToKey(ch)) + '"]');
  if (!el) return;
  const cls = correct ? 'flash-ok' : 'flash-err';
  el.classList.remove('flash-ok', 'flash-err');
  // force reflow
  void el.offsetWidth;
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), 300);
}

/* ============================================================
   PER-KEY STATS
   ============================================================ */
function recordKey(key, correct) {
  if (!S.keyStats[key]) S.keyStats[key] = {correct:0, total:0, wpmSamples:[]};
  S.keyStats[key].total++;
  if (correct) S.keyStats[key].correct++;
}

function badgeClass(acc) {
  if (acc >= .90) return 'badge-green';
  if (acc >= .70) return 'badge-gold';
  return 'badge-red';
}

/* ============================================================
   METRICS
   ============================================================ */
function calcWPM() {
  if (!S.startTime || S.cursor === 0) return 0;
  const mins = (Date.now() - S.startTime) / 60000;
  if (mins < 0.001) return 0;
  const correct = S.chars.slice(0, S.cursor).filter(c => c.typed === c.char).length;
  return Math.round((correct / 5) / mins);
}

function calcAcc() {
  if (S.totalStrokes === 0) return 100;
  return Math.round(((S.totalStrokes - S.errors) / S.totalStrokes) * 10000) / 100;
}

function calcScore(wpm, acc) { return Math.round(wpm * (acc / 100) * 10); }

function deltaStr(cur, prev, suffix) {
  const d = cur - prev;
  if (d > 0) return {txt:'(↑' + d + suffix + ')', cls:'pos'};
  if (d < 0) return {txt:'(↓' + Math.abs(d) + suffix + ')', cls:'neg'};
  return null;
}

function setDelta(elId, cur, prev, suffix) {
  const el = document.getElementById(elId);
  const d = deltaStr(Math.round(cur), Math.round(prev), suffix);
  if (d && Math.round(prev) !== 0) {
    el.textContent = d.txt;
    el.className = 'metric-delta ' + d.cls;
  } else {
    el.textContent = '';
  }
}

function updateMetrics() {
  const wpm   = calcWPM();
  const acc   = calcAcc();
  const score = calcScore(wpm, acc);

  document.getElementById('speed-val').textContent = wpm + 'wpm';
  document.getElementById('acc-val').textContent   = acc + '%';
  document.getElementById('score-val').textContent = score;

  setDelta('speed-delta', wpm,   S.prevWPM,   'wpm');
  setDelta('acc-delta',   acc,   S.prevAcc,   '%');
  setDelta('score-delta', score, S.prevScore, '');

  S.prevWPM   = wpm;
  S.prevAcc   = acc;
  S.prevScore = score;

  if (wpm > S.topWPM) {
    S.topWPM = wpm;
    document.getElementById('top-speed-val').textContent = wpm + 'wpm';
  }
  document.getElementById('last-speed-val').textContent = wpm > 0 ? wpm + 'wpm' : '--';

  // Learning rate: difference between best and initial WPM this session
  const lrVal = (S.topWPM > 0 && S.wpmAtStart !== null)
    ? (S.topWPM - S.wpmAtStart >= 0 ? '+' : '') +
      (S.topWPM - S.wpmAtStart).toFixed(1) + 'wpm/lesson'
    : '--';
  const lr = lrVal;
  document.getElementById('lr-val').textContent = lr;
  document.getElementById('lr-dot').style.display = S.topWPM > 0 ? 'inline-block' : 'none';

  // Accuracy description
  const accDesc = document.getElementById('acc-desc');
  if (S.totalStrokes === 0) {
    accDesc.innerHTML = 'Start typing to track your accuracy.';
  } else {
    const errWord = S.errors === 1 ? '1 error' : S.errors + ' errors';
    accDesc.innerHTML = errWord + ' from ' + S.totalStrokes +
      ' keystrokes — <span class="hl">' + acc + '%</span> accuracy.';
  }

  updateAllKeys();
}

function updateAllKeys() {
  const cont = document.getElementById('all-keys');
  cont.innerHTML = '';
  const keys = Object.keys(S.keyStats).filter(k => k !== ' ').sort();
  if (keys.length === 0) {
    cont.innerHTML = '<span class="keys-empty">No keys typed yet.</span>';
    return;
  }
  keys.forEach(k => {
    const st  = S.keyStats[k];
    const acc = st.total > 0 ? st.correct / st.total : 1;
    const b   = document.createElement('span');
    b.className = 'key-badge ' + badgeClass(acc);
    b.textContent = k.toUpperCase();
    b.title = k + ': ' + Math.round(acc * 100) + '% (' + st.total + ' presses)';
    cont.appendChild(b);
  });
}

function updateCurrentKeyBadge() {
  if (S.cursor >= S.chars.length) return;
  const ch = S.chars[S.cursor].char;
  if (ch === ' ') return;
  const badge = document.getElementById('cur-key-badge');
  badge.textContent = ch.toUpperCase();
  const st  = S.keyStats[ch];
  const acc = st && st.total > 0 ? st.correct / st.total : 1;
  badge.className = 'key-badge ' + badgeClass(acc);
}

function updateDailyGoal() {
  const mins  = S.sessionSec / 60;
  const goal  = 30;
  const pct   = Math.min(100, (mins / goal) * 100);
  document.getElementById('daily-goal-txt').textContent =
    Math.floor(pct) + '%/' + goal + ' minutes';
  document.getElementById('progress-fill').style.width = pct + '%';
}

/* ============================================================
   INPUT HANDLING
   ============================================================ */
window.addEventListener('keydown', e => {
  // Ignore pure modifiers
  if (['Shift','Control','Alt','Meta','CapsLock'].includes(e.key)) return;
  if (e.key === 'Tab') { e.preventDefault(); return; }

  if (e.key === 'Backspace') {
    e.preventDefault();
    handleBackspace();
    return;
  }
  if (e.key.length === 1) {
    e.preventDefault();
    handleChar(e.key);
  }
});

function handleChar(key) {
  // Ensure enough buffer
  if (S.cursor >= S.chars.length - 20) appendWords(40);

  const expected = S.chars[S.cursor].char;
  const ok = key === expected;

  // Start timer
  if (!S.isActive) {
    S.isActive   = true;
    S.startTime  = Date.now();
    S.wpmAtStart = S.prevWPM; // capture baseline at test start
  }

  S.chars[S.cursor].typed = key;
  S.totalStrokes++;
  if (!ok) S.errors++;

  recordKey(expected, ok);
  flashKey(expected, ok);

  setCharClass(S.cursor);
  S.cursor++;
  setCharClass(S.cursor);

  highlightNextKey();
  updateCurrentKeyBadge();
  updateScroll();
  updateMetrics();
}

function handleBackspace() {
  if (S.cursor <= 0) return;
  S.cursor--;
  S.chars[S.cursor].typed = null;
  setCharClass(S.cursor);
  setCharClass(S.cursor + 1);
  highlightNextKey();
  updateCurrentKeyBadge();
  updateScroll();
}

/* ============================================================
   INIT / RESET
   ============================================================ */
function init() {
  // Reset state (keep session timer running)
  S.chars        = buildChars(Array.from({length: 80}, pick));
  S.cursor       = 0;
  S.totalStrokes = 0;
  S.errors       = 0;
  S.startTime    = null;
  S.isActive     = false;
  S.prevWPM      = 0;
  S.prevAcc      = 100;
  S.prevScore    = 0;
  S.topWPM       = 0;
  S.wpmAtStart    = null;
  S.keyStats     = {};

  renderChars(S.chars);
  setCharClass(0);
  highlightNextKey();
  updateCurrentKeyBadge();
  document.getElementById('words-display').style.transform = 'translateY(0)';
  updateMetrics();

  // Restart session timer if needed
  if (S.sessionTimer) clearInterval(S.sessionTimer);
  S.sessionSec   = 0;
  S.sessionTimer = setInterval(() => {
    S.sessionSec++;
    updateDailyGoal();
    if (S.isActive) updateMetrics();
  }, 1000);
}

/* ============================================================
   BUTTON HANDLERS
   ============================================================ */
document.getElementById('btn-restart').addEventListener('click', init);
document.getElementById('btn-new').addEventListener('click',     init);
document.getElementById('btn-fs').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
});

/* ============================================================
   HELP & SETTINGS (simple inline panel)
   ============================================================ */
document.querySelector('.ctrl-btn[title="Help"]').addEventListener('click', () => {
  alert(
    'TouchingTyping – How to use:\n\n' +
    '• Just start typing the displayed words.\n' +
    '• Spaces between words appear as · dots.\n' +
    '• Backspace corrects the last character.\n' +
    '• Green keys = high accuracy, Gold = medium, Red = needs practice.\n' +
    '• Use ↩ or ↪ buttons to start a new test.'
  );
});
document.querySelector('.ctrl-btn[title="Settings"]').addEventListener('click', () => {
  alert('Settings coming soon! Use the ↩ button to restart at any time.');
});

/* ============================================================
   BOOT
   ============================================================ */
buildKeyboard();
init();
