/* ============================================================
   dh-live.js - "Believability, and the other axis"
   learn-ai-digital-human-with-phoebe

   REAL: the viseme sequence and its timing are computed from
   whatever you type, and the SVG mouth is really driven by that
   sequence. Change the words and the mouth genuinely changes.

   MODELLED: the believability and trust scores. They are a
   teaching model, and the page says so.

   The point of the second axis: disclosure does not make the
   avatar more convincing. It makes the thing it says worth
   something. And an undisclosed avatar carries a liability that
   does not show up until it is found out.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- real grapheme to viseme mapping ---------------- */
  /* Simplified but genuine: a small rule set over digraphs and
     letters, producing a timed viseme track. Not a phonetics
     engine, and the page does not claim it is one. */
  var DIGRAPHS = {
    "ch": "SH", "sh": "SH", "th": "TH", "ph": "FV", "wh": "U",
    "oo": "U", "ee": "E", "ea": "E", "ou": "U", "ow": "U",
    "ai": "AI", "ay": "AI", "oa": "O", "ck": "K", "ng": "N"
  };
  var LETTERS = {
    a: "AI", e: "E", i: "AI", o: "O", u: "U", y: "E",
    m: "MBP", b: "MBP", p: "MBP",
    f: "FV", v: "FV",
    l: "L", r: "R", w: "U", q: "U",
    s: "S", z: "S", c: "K", k: "K", g: "K",
    t: "TH", d: "TH", n: "N",
    h: "REST", j: "SH", x: "K"
  };
  /* per-viseme duration in milliseconds, roughly how long each
     mouth shape is actually held in natural speech */
  var HOLD = { AI: 110, E: 95, O: 115, U: 110, MBP: 70, FV: 80, TH: 75,
               SH: 90, S: 80, K: 70, L: 85, R: 85, N: 75, REST: 60 };

  function toVisemes(text) {
    var t = String(text).toLowerCase(), out = [], i = 0;
    while (i < t.length) {
      var ch = t[i];
      if (/[^a-z]/.test(ch)) {
        /* punctuation becomes a real pause, which is what prosody is */
        var pause = (ch === "," ? 180 : /[.!?]/.test(ch) ? 340 : ch === " " ? 60 : 40);
        if (out.length && out[out.length - 1].v === "REST") out[out.length - 1].ms += pause;
        else out.push({ v: "REST", ms: pause, punct: /[.,!?]/.test(ch) });
        i++; continue;
      }
      var two = t.substr(i, 2);
      if (DIGRAPHS[two]) { out.push({ v: DIGRAPHS[two], ms: HOLD[DIGRAPHS[two]] }); i += 2; continue; }
      var v = LETTERS[ch] || "REST";
      out.push({ v: v, ms: HOLD[v] });
      i++;
    }
    return out;
  }

  /* mouth geometry per viseme: [width, height, cornerLift] */
  var SHAPE = {
    REST: [58, 8, 0], AI: [62, 34, 0], E: [76, 16, 5], O: [40, 34, -2],
    U: [32, 24, -3], MBP: [56, 3, 0], FV: [60, 10, 2], TH: [58, 14, 0],
    SH: [44, 18, -1], S: [66, 9, 3], K: [56, 16, 0], L: [54, 20, 0],
    R: [50, 18, -1], N: [56, 12, 0]
  };

  var LEVERS = [
    { id: "prosody", w: 0.18, session: 3, name: "Pause where the punctuation is",
      why: "Read the track below: commas and full stops become real held pauses. Without them the delivery runs flat and the uncanny feeling arrives fast." },
    { id: "blink", w: 0.14, session: 3, name: "Blink on a human cadence",
      why: "A face that never blinks reads as wrong before a viewer can say why." },
    { id: "motion", w: 0.12, session: 3, name: "Let the head move a little",
      why: "Perfect stillness is the single strongest tell. Small motion buys more believability than higher resolution." },
    { id: "timing", w: 0.16, session: 3, name: "Match the mouth to the actual syllables",
      why: "Generic loops drift out of sync within a sentence. The track below is computed from your words, so it stays matched." }
  ];
  var DISCLOSE = { id: "disclose", name: "Say clearly that this presenter is synthetic",
    why: "It does not make the avatar more convincing, and that is the point. It changes what the thing it says is worth, and it removes a liability you would otherwise be carrying without knowing it." };

  var state = { prosody: false, blink: false, motion: false, timing: false, disclose: false, found: false };

  function believability() {
    var s = 0.24;
    LEVERS.forEach(function (l) { if (state[l.id]) s += l.w; });
    return Math.max(0.05, Math.min(0.94, s));
  }
  function trust() {
    /* disclosed: trust tracks believability and is durable.
       undisclosed: it looks the same until it does not. */
    if (state.disclose) return Math.min(0.92, 0.42 + believability() * 0.5);
    if (!state.found) return Math.min(0.88, believability() * 0.92);
    return 0.06;
  }

  function el(t, c, x) { var n = document.createElement(t); if (c) n.className = c; if (x != null) n.textContent = x; return n; }

  function mount(root) {
    var reads = el("div", "dh-reads");
    function meter(label, cls) {
      var w = el("div", "dh-meter " + cls);
      var b = el("output", "dh-big", "-");
      w.appendChild(b);
      w.appendChild(el("span", "dh-mlab", label));
      var sub = el("span", "dh-msub", "");
      w.appendChild(sub);
      reads.appendChild(w);
      return { big: b, sub: sub, box: w };
    }
    var mB = meter("believability", "dh-b");
    var mT = meter("trust in what it said", "dh-t");
    root.appendChild(reads);

    var stage = el("div", "dh-stage");
    var faceWrap = el("div", "dh-facewrap");
    faceWrap.innerHTML =
      '<svg viewBox="0 0 260 300" class="dh-face" role="img" aria-label="A stylised presenter face whose mouth is driven by the viseme track below">' +
      '<ellipse class="dh-head" cx="130" cy="150" rx="86" ry="106" fill="#CBD5E1"/>' +
      '<ellipse cx="130" cy="150" rx="86" ry="106" fill="none" stroke="#475569" stroke-width="2"/>' +
      '<g class="dh-eyes">' +
      '<ellipse class="dh-eye" cx="100" cy="126" rx="13" ry="9" fill="#F8FAFC" stroke="#475569" stroke-width="2"/>' +
      '<ellipse class="dh-eye" cx="160" cy="126" rx="13" ry="9" fill="#F8FAFC" stroke="#475569" stroke-width="2"/>' +
      '<circle cx="100" cy="126" r="5" fill="#1E293B"/><circle cx="160" cy="126" r="5" fill="#1E293B"/>' +
      '</g>' +
      '<ellipse class="dh-mouth" cx="130" cy="200" rx="29" ry="4" fill="#1E293B"/>' +
      '</svg>';
    stage.appendChild(faceWrap);

    var right = el("div", "dh-right");
    right.appendChild(el("h4", "dh-h", "Say something"));
    var ta = document.createElement("textarea");
    ta.className = "dh-ta"; ta.rows = 3; ta.spellcheck = false;
    ta.value = "Welcome to the team. Let me show you around, and then we will get started.";
    ta.setAttribute("aria-label", "The line the presenter says");
    right.appendChild(ta);
    var ctl = el("div", "dh-ctl");
    var play = el("button", "dh-btn", "▶ Speak it");
    var trackNote = el("span", "dh-tnote", "");
    ctl.appendChild(play); ctl.appendChild(trackNote);
    right.appendChild(ctl);
    right.appendChild(el("h4", "dh-h", "The viseme track, computed from your words"));
    var track = el("div", "dh-track");
    right.appendChild(track);
    stage.appendChild(right);
    root.appendChild(stage);

    var panel = el("div", "dh-panel");
    var ph = el("div", "dh-phead");
    ph.appendChild(el("b", null, "Craft"));
    ph.appendChild(el("span", "dh-pnote", "these four move believability, and only believability"));
    panel.appendChild(ph);
    LEVERS.forEach(function (l) {
      var row = el("label", "dh-lever");
      var cb = document.createElement("input"); cb.type = "checkbox"; cb.dataset.id = l.id;
      row.appendChild(cb);
      var mid = el("div", "dh-lmid");
      mid.appendChild(el("b", null, l.name));
      mid.appendChild(el("span", "dh-why", l.why));
      row.appendChild(mid);
      row.appendChild(el("span", "dh-w", "+" + Math.round(l.w * 100)));
      row.appendChild(el("span", "dh-sess", "session " + l.session));
      cb.addEventListener("change", function () {
        state[l.id] = cb.checked; row.classList.toggle("on", cb.checked); paint();
      });
      panel.appendChild(row);
    });

    var eth = el("div", "dh-phead dh-ethhead");
    eth.appendChild(el("b", null, "The other axis"));
    eth.appendChild(el("span", "dh-pnote", "this one does not touch believability at all"));
    panel.appendChild(eth);
    var drow = el("label", "dh-lever dh-disc");
    var dcb = document.createElement("input"); dcb.type = "checkbox"; dcb.dataset.id = "disclose";
    drow.appendChild(dcb);
    var dmid = el("div", "dh-lmid");
    dmid.appendChild(el("b", null, DISCLOSE.name));
    dmid.appendChild(el("span", "dh-why", DISCLOSE.why));
    drow.appendChild(dmid);
    drow.appendChild(el("span", "dh-w dh-w0", "+0"));
    dcb.addEventListener("change", function () {
      state.disclose = dcb.checked;
      if (dcb.checked) { state.found = false; fbtn.disabled = true; }
      else fbtn.disabled = false;
      drow.classList.toggle("on", dcb.checked);
      paint();
    });
    panel.appendChild(drow);

    var facts = el("div", "dh-facts");
    var fbtn = el("button", "dh-btn ghost", "Now someone finds out");
    facts.appendChild(fbtn);
    facts.appendChild(el("span", "dh-fnote", "available only while it is undisclosed"));
    panel.appendChild(facts);
    root.appendChild(panel);

    var verdict = el("p", "dh-verdict");
    root.appendChild(verdict);

    var rail = el("p", "dh-rail");
    rail.innerHTML = "<b>What is real here.</b> The viseme track and its timings are computed from " +
      "the words you type, and the mouth is genuinely driven by that track. The two scores are a " +
      "teaching model. The relationship they encode is not: disclosure does not make a synthetic " +
      "presenter more convincing, and that is exactly why it is a separate decision from craft.";
    root.appendChild(rail);

    fbtn.addEventListener("click", function () {
      if (state.disclose) return;
      state.found = true; paint();
    });
    var acts = el("div", "dh-acts");
    var allOn = el("button", "dh-btn", "Turn on all four craft levers");
    var reset = el("button", "dh-btn ghost", "Reset");
    acts.appendChild(allOn); acts.appendChild(reset);
    panel.appendChild(acts);
    allOn.addEventListener("click", function () {
      LEVERS.forEach(function (l) { state[l.id] = true; }); sync(); paint();
    });
    reset.addEventListener("click", function () {
      LEVERS.forEach(function (l) { state[l.id] = false; });
      state.disclose = false; state.found = false; dcb.checked = false;
      drow.classList.remove("on"); fbtn.disabled = false; sync(); paint();
    });
    function sync() {
      panel.querySelectorAll('input[type=checkbox]').forEach(function (cb) {
        cb.checked = !!state[cb.dataset.id];
        cb.closest(".dh-lever").classList.toggle("on", cb.checked);
      });
    }

    var timer = null, blinkTimer = null;
    var mouth = faceWrap.querySelector(".dh-mouth");
    var head = faceWrap.querySelector(".dh-head");
    var eyes = faceWrap.querySelectorAll(".dh-eye");
    var svg = faceWrap.querySelector(".dh-face");

    function setViseme(v) {
      var s = SHAPE[v] || SHAPE.REST;
      mouth.setAttribute("rx", s[0] / 2);
      mouth.setAttribute("ry", Math.max(2, s[1] / 2));
      mouth.setAttribute("cy", 200 - s[2]);
    }
    function speak() {
      if (timer) { clearTimeout(timer); timer = null; }
      var seq = toVisemes(ta.value);
      renderTrack(seq);
      var i = 0;
      function step() {
        if (i >= seq.length) { setViseme("REST"); return; }
        var item = seq[i];
        /* prosody off collapses the punctuation pauses; timing off flattens holds */
        var ms = item.ms;
        if (!state.prosody && item.punct) ms = 50;
        if (!state.timing) ms = 85;
        setViseme(item.v);
        track.querySelectorAll(".dh-cell").forEach(function (c, ci) {
          c.classList.toggle("now", ci === i);
        });
        i++;
        timer = setTimeout(step, ms);
      }
      step();
      if (state.motion) {
        svg.style.transition = "transform .9s ease-in-out";
        var a = 0;
        var wob = setInterval(function () {
          a++; svg.style.transform = "rotate(" + (a % 2 ? 1.1 : -0.9) + "deg) translateY(" + (a % 2 ? -2 : 1) + "px)";
          if (a > 8) { clearInterval(wob); svg.style.transform = "none"; }
        }, 900);
      } else { svg.style.transform = "none"; }
    }
    function startBlink() {
      if (blinkTimer) clearInterval(blinkTimer);
      if (!state.blink) { eyes.forEach(function (e) { e.setAttribute("ry", 9); }); return; }
      blinkTimer = setInterval(function () {
        eyes.forEach(function (e) { e.setAttribute("ry", 1); });
        setTimeout(function () { eyes.forEach(function (e) { e.setAttribute("ry", 9); }); }, 120);
      }, 3400);
    }
    function renderTrack(seq) {
      track.textContent = "";
      seq.slice(0, 60).forEach(function (item) {
        var c = el("span", "dh-cell" + (item.v === "REST" ? " rest" : ""), item.v === "REST" ? "·" : item.v);
        c.title = item.v + " held " + item.ms + "ms";
        track.appendChild(c);
      });
      var total = seq.reduce(function (a, x) { return a + x.ms; }, 0);
      trackNote.textContent = seq.length + " visemes, " + (Math.round(total / 100) / 10) +
        "s of speech, computed from your text.";
    }
    play.addEventListener("click", speak);
    ta.addEventListener("input", function () { renderTrack(toVisemes(ta.value)); });

    function paint() {
      var b = believability(), t = trust();
      mB.big.textContent = Math.round(b * 100) + "%";
      mB.big.className = "dh-big " + (b >= 0.7 ? "hi" : b >= 0.45 ? "mid" : "lo");
      mB.sub.textContent = b >= 0.7 ? "reads as a person, mostly" : b >= 0.45 ? "watchable, slightly off" : "obviously synthetic";
      mT.big.textContent = Math.round(t * 100) + "%";
      mT.big.className = "dh-big " + (t >= 0.6 ? "hi" : t >= 0.3 ? "mid" : "lo");
      mT.sub.textContent = state.disclose ? "disclosed, and durable"
        : state.found ? "they found out" : "undisclosed, untested";
      mT.box.classList.toggle("collapsed", !state.disclose && state.found);

      if (state.disclose) {
        verdict.className = "dh-verdict ok";
        verdict.innerHTML = "✓ <b>Disclosed.</b> Believability is unchanged, because disclosure was " +
          "never a craft decision. What changed is that the trust is now durable: there is no later " +
          "moment where someone discovers something you did not tell them.";
      } else if (state.found) {
        verdict.className = "dh-verdict bad";
        verdict.innerHTML = "⚠ <b>They found out.</b> Believability did not move, because the avatar " +
          "is exactly as good as it was a second ago. Everything it ever said is now in question, " +
          "including the parts that were true. This is the liability that was there the whole time.";
      } else {
        verdict.className = "dh-verdict warn";
        verdict.innerHTML = "◐ <b>Undisclosed, and nothing has gone wrong yet.</b> This is the state " +
          "most organisations are actually in. Press the button and see what it was worth.";
      }
      startBlink();
      renderTrack(toVisemes(ta.value));
    }

    setViseme("REST");
    paint();
    window.DH_LIVE = {
      state: state, toVisemes: toVisemes, believability: believability, trust: trust,
      set: function (id, v) { state[id] = v; if (id === "disclose") { dcb.checked = v; if (v) state.found = false; } sync(); paint(); },
      setAll: function (v) { LEVERS.forEach(function (l) { state[l.id] = v; }); sync(); paint(); },
      findOut: function () { fbtn.click(); },
      speak: speak, levers: LEVERS
    };
  }

  var host = document.getElementById("dh-live");
  if (host) mount(host);
})();
