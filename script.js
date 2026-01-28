const slides = [
  {
    id: 1,
    type: "exposition",
    headerTag: "Observation",
    title: "Observer un fichier CSS existant",
    badge: "Analyse guidée",
    text: [
      "Observons ce fichier CSS.",
      "À première vue, il fonctionne… mais prenons un instant pour regarder les valeurs utilisées."
    ],
    questionBlock: null,
    narration:
      "Observons ce fichier CSS. À première vue, il fonctionne... mais prenons un instant pour regarder les valeurs utilisées.",
    codeFilename: "styles.css",
    code: `
<span class="css-selector">.header</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#2c3e50</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">16px</span>;
  <span class="css-prop">padding</span>: <span class="css-value">20px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">30px</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value">8px</span>;
}

<span class="css-selector">.navigation</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#2c3e50</span>;
  <span class="css-prop">padding</span>: <span class="css-value">20px</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">14px</span>;
}

<span class="css-selector">.button-primary</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#3498db</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">16px</span>;
  <span class="css-prop">padding</span>: <span class="css-value">15px 30px</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value">8px</span>;
  <span class="css-prop">border</span>: <span class="css-value">none</span>;
}

<span class="css-selector">.button-secondary</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#95a5a6</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">16px</span>;
  <span class="css-prop">padding</span>: <span class="css-value">15px 30px</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value">8px</span>;
  <span class="css-prop">border</span>: <span class="css-value">none</span>;
}

<span class="css-selector">.card</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">padding</span>: <span class="css-value">20px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">30px</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value">8px</span>;
  <span class="css-prop">box-shadow</span>: <span class="css-value">0 2px 4px rgba(0, 0, 0, 0.1)</span>;
}

<span class="css-selector">.sidebar</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#ecf0f1</span>;
  <span class="css-prop">padding</span>: <span class="css-value">20px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">30px</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">14px</span>;
}

<span class="css-selector">.footer</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#2c3e50</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">padding</span>: <span class="css-value">20px</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">14px</span>;
}

<span class="css-selector">.alert</span> {
  <span class="css-prop">padding</span>: <span class="css-value">15px 30px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">30px</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value">8px</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">16px</span>;
}

<span class="css-selector">.link</span> {
  <span class="css-prop">color</span>: <span class="css-value">#3498db</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">14px</span>;
}
    `.trim()
  },
  {
    id: 2,
    type: "mise_en_evidence",
    headerTag: "Surlignage",
    title: "Repérer les valeurs répétées",
    badge: "Zoom visuel",
    text: [
      "Observez attentivement ce fichier CSS.",
      "Combien de fois cette couleur bleue #2c3e50 apparaît-elle ? Et cette taille de police 16px ?",
      "Les mêmes valeurs reviennent encore et encore."
    ],
    questionBlock: {
      title: "À vous de compter",
      content:
        "Repérez visuellement le nombre d’occurrences de la couleur bleue et de la taille de texte mise en évidence."
    },
    totalRepeats: 45,
    narration:
      "Combien de fois cette couleur apparaît-elle dans le fichier ? Et cette taille de police ?",
    codeFilename: "styles.css",
    code: `
<span class="css-selector">.header</span> {
  <span class="css-prop">background-color</span>: <span class="css-value css-highlight">#2c3e50</span> <span class="counter-chip counter-chip--pulse">x4</span>;
  <span class="css-prop">color</span>: <span class="css-value css-highlight">#ffffff</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">font-size</span>: <span class="css-value css-highlight css-highlight--accent">16px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
  <span class="css-prop">padding</span>: <span class="css-value css-highlight">20px</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value css-highlight">30px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value css-highlight">8px</span> <span class="counter-chip counter-chip--pulse">x5</span>;
}

<span class="css-selector">.navigation</span> {
  <span class="css-prop">background-color</span>: <span class="css-value css-highlight">#2c3e50</span> <span class="counter-chip counter-chip--pulse">x4</span>;
  <span class="css-prop">padding</span>: <span class="css-value css-highlight">20px</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">font-size</span>: <span class="css-value css-highlight">14px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
}

<span class="css-selector">.button-primary</span> {
  <span class="css-prop">background-color</span>: <span class="css-value css-highlight">#3498db</span> <span class="counter-chip counter-chip--pulse">x2</span>;
  <span class="css-prop">color</span>: <span class="css-value css-highlight">#ffffff</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">font-size</span>: <span class="css-value css-highlight--accent">16px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
  <span class="css-prop">padding</span>: <span class="css-value css-highlight">15px 30px</span> <span class="counter-chip counter-chip--pulse">x3</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value css-highlight">8px</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">border</span>: <span class="css-value css-highlight">none</span> <span class="counter-chip counter-chip--pulse">x2</span>;
}

<span class="css-selector">.button-secondary</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#95a5a6</span>;
  <span class="css-prop">color</span>: <span class="css-value css-highlight">#ffffff</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">font-size</span>: <span class="css-value css-highlight--accent">16px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
  <span class="css-prop">padding</span>: <span class="css-value css-highlight">15px 30px</span> <span class="counter-chip counter-chip--pulse">x3</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value css-highlight">8px</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">border</span>: <span class="css-value css-highlight">none</span> <span class="counter-chip counter-chip--pulse">x2</span>;
}

<span class="css-selector">.card</span> {
  <span class="css-prop">background-color</span>: <span class="css-value css-highlight">#ffffff</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">padding</span>: <span class="css-value css-highlight">20px</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value css-highlight">30px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value css-highlight">8px</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">box-shadow</span>: <span class="css-value">0 2px 4px rgba(0, 0, 0, 0.1)</span>;
}

<span class="css-selector">.sidebar</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#ecf0f1</span>;
  <span class="css-prop">padding</span>: <span class="css-value css-highlight">20px</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value css-highlight">30px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
  <span class="css-prop">font-size</span>: <span class="css-value css-highlight">14px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
}

<span class="css-selector">.footer</span> {
  <span class="css-prop">background-color</span>: <span class="css-value css-highlight">#2c3e50</span> <span class="counter-chip counter-chip--pulse">x4</span>;
  <span class="css-prop">color</span>: <span class="css-value css-highlight">#ffffff</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">padding</span>: <span class="css-value css-highlight">20px</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">font-size</span>: <span class="css-value css-highlight">14px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
}

<span class="css-selector">.alert</span> {
  <span class="css-prop">padding</span>: <span class="css-value css-highlight">15px 30px</span> <span class="counter-chip counter-chip--pulse">x3</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value css-highlight">30px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value css-highlight">8px</span> <span class="counter-chip counter-chip--pulse">x5</span>;
  <span class="css-prop">font-size</span>: <span class="css-value css-highlight">16px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
}

<span class="css-selector">.link</span> {
  <span class="css-prop">color</span>: <span class="css-value css-highlight">#3498db</span> <span class="counter-chip counter-chip--pulse">x2</span>;
  <span class="css-prop">font-size</span>: <span class="css-value css-highlight">14px</span> <span class="counter-chip counter-chip--pulse">x4</span>;
}
    `.trim()
  },
  {
    id: 3,
    type: "problematization",
    headerTag: "Questionnement",
    title: "Et si je dois tout modifier ?",
    badge: "Réflexion",
    text: [
      "Ces styles sont utilisés à plusieurs endroits du site.",
      "Ils remplissent la même fonction visuelle, mais sont dupliqués dans le code."
    ],
    questionBlock: {
      title: "Question",
      content:
        "Que se passe-t-il si vous devez modifier cette valeur partout dans le projet ? Combien d’endroits devrez-vous mettre à jour ?"
    },
    narration:
      "Que se passe-t-il si je dois modifier cette valeur partout dans le projet ? Combien d'endroits devrais-je mettre à jour ?",
    codeFilename: "layout.css",
    code: `
<span class="css-selector">.hero-title</span> {
  <span class="css-prop">font-size</span>: <span class="css-value">32px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">24px</span>;
}

<span class="css-selector">.page-title</span> {
  <span class="css-prop">font-size</span>: <span class="css-value">32px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">24px</span>;
}

<span class="css-selector">.section-title</span> {
  <span class="css-prop">font-size</span>: <span class="css-value">24px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">24px</span>;
}
    `.trim()
  },
  {
    id: 4,
    type: "activite",
    headerTag: "Activité",
    title: "À vous d’analyser un nouveau fichier CSS",
    badge: "Pratique autonome",
    text: [
      "À votre tour : observez ce nouveau fichier CSS et repérez au moins trois répétitions de styles.",
      "Notez-les mentalement ou sur un papier avant de passer à la suite."
    ],
    questionBlock: {
      title: "Consigne",
      content:
        "Repérez au moins 3 répétitions : même couleur réutilisée, mêmes marges, mêmes tailles de texte, etc."
    },
    narration:
      "À votre tour. Observez ce nouveau fichier CSS et repérez au moins trois répétitions de styles.",
    codeFilename: "theme.css",
    code: `
<span class="css-selector">.btn-primary</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#1d4ed8</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">padding</span>: <span class="css-value">10px 20px</span>;
}

<span class="css-selector">.btn-danger</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#dc2626</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">padding</span>: <span class="css-value">10px 20px</span>;
}

<span class="css-selector">.badge</span> {
  <span class="css-prop">border-radius</span>: <span class="css-value">999px</span>;
  <span class="css-prop">padding</span>: <span class="css-value">4px 12px</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">12px</span>;
}

<span class="css-selector">.tag</span> {
  <span class="css-prop">border-radius</span>: <span class="css-value">999px</span>;
  <span class="css-prop">padding</span>: <span class="css-value">4px 12px</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">12px</span>;
}
    `.trim()
  },
  {
    id: 5,
    type: "synthese",
    headerTag: "Synthèse",
    title: "Mettre à plat ce que vous avez repéré",
    badge: "Pause (analyse)",
    text: [
      "Avant le QCM, prenez 20 secondes pour lister mentalement vos répétitions repérées (couleurs, marges, tailles…).",
      "L’idée ici n’est pas de corriger, mais de faire émerger le besoin de factoriser."
    ],
    questionBlock: {
      title: "Mini-pause",
      content:
        "Notez 3 répétitions (valeur + où elle apparaît), puis passez au QCM."
    },
    codeFilename: "theme.css",
    code: `
<span class="css-selector">.btn-primary</span> {
  <span class="css-prop">padding</span>: <span class="css-value css-highlight">10px 20px</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
}

<span class="css-selector">.btn-danger</span> {
  <span class="css-prop">padding</span>: <span class="css-value css-highlight">10px 20px</span> <span class="counter-chip">répétée</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
}

<span class="css-selector">.badge</span> {
  <span class="css-prop">border-radius</span>: <span class="css-value css-highlight css-highlight--accent">999px</span>;
}

<span class="css-selector">.tag</span> {
  <span class="css-prop">border-radius</span>: <span class="css-value css-highlight css-highlight--accent">999px</span> <span class="counter-chip">répétée</span>;
}
    `.trim()
  },
  {
    id: 6,
    type: "qcm",
    headerTag: "Auto-évaluation",
    title: "Identifier les répétitions de styles",
    badge: "QCM / feedback immédiat",
    text: [
      "Parmi les éléments suivants, lesquels relèvent d’une répétition de styles ?",
      "Cliquez sur toutes les bonnes réponses pour vérifier votre compréhension."
    ],
    questionBlock: null,
    codeFilename: "exemple.css",
    code: `
<span class="css-selector">.title-main</span> {
  <span class="css-prop">font-size</span>: <span class="css-value">24px</span>;
}

<span class="css-selector">.title-sidebar</span> {
  <span class="css-prop">font-size</span>: <span class="css-value">18px</span>;
}
    `.trim(),
    qcm: {
      options: [
        {
          id: "a",
          label:
            "Deux boutons différents (.btn-primary et .btn-secondary) qui partagent exactement la même couleur de fond.",
          correct: true
        },
        {
          id: "b",
          label:
            "Deux titres qui ont des tailles de police proches (24px et 26px) mais définies séparément.",
          correct: true
        },
        {
          id: "c",
          label:
            "Un paragraphe unique qui a une couleur et une marge définies une seule fois.",
          correct: false
        },
        {
          id: "d",
          label:
            "Plusieurs badges qui utilisent tous la même classe .badge avec les mêmes propriétés.",
          correct: false
        }
      ],
      feedbackCorrect:
        "Exact : les répétitions de styles apparaissent lorsque la même intention visuelle est codée plusieurs fois, souvent avec les mêmes valeurs.",
      feedbackIncorrect:
        "Regardez les cas où la même valeur (couleur, marge, taille de texte) doit être maintenue à plusieurs endroits différents."
    }
  },
  {
    id: 7,
    type: "conclusion",
    headerTag: "Conclusion",
    title: "Conclusion / transition",
    badge: "À suivre",
    showCode: false,
    text: [
      "Vous venez d'identifier les répétitions dans ce code CSS. C'est exactement la compétence d'analyse que nous cherchions à développer.",
      "Maintenant, imaginez devoir gérer ces répétitions sur un projet de 50 pages web avec des milliers de lignes de CSS. Comment faire pour éviter de modifier manuellement chaque occurrence ?",
      "C'est précisément ce problème que SASS va résoudre grâce à deux fonctionnalités clés : les variables, qui permettent de centraliser les valeurs répétitives, et les mixins, qui permettent de réutiliser des blocs de styles complets.",
      "Dans la suite de la formation, nous verrons comment utiliser ces outils pour transformer ce code répétitif en code maintenable et professionnel.",
      "Vous êtes maintenant prêts pour la prochaine étape."
    ],
    questionBlock: null,
    codeFilename: "Message de transition",
    code: `
/* Message de transition */
/* Prochaine étape : variables / mixins SASS (sans démonstration) */
    `.trim()
  }
];

let currentIndex = 0;
let qcmAnswered = false;

const slideMainEl = document.getElementById("slide-main");
const progressEl = document.getElementById("slide-progress");
const codeContentEl = document.getElementById("code-content");
const codeFilenameEl = document.getElementById("code-filename");
const asideTagEl = document.getElementById("aside-tag");
const slideBodyEl = document.getElementById("slide-body");
const slideAsideEl = document.getElementById("slide-aside");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function animateCounter(element, target, durationMs) {
  const start = 0;
  const startTime = performance.now();

  function frame(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / durationMs);
    const value = Math.round(start + (target - start) * progress);
    element.textContent = value.toString();
    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

function renderSlide(index) {
  const slide = slides[index];
  if (!slide) return;

  // Progression
  progressEl.textContent = `Slide ${index + 1} / ${slides.length}`;

  // Affichage/masquage de l'encart "Fichier CSS" (ex : conclusion)
  const shouldShowCode = slide.showCode !== false;
  if (slideAsideEl && slideBodyEl) {
    slideAsideEl.hidden = !shouldShowCode;
    slideBodyEl.classList.toggle("is-code-hidden", !shouldShowCode);
  }

  // Tag & fichier
  if (shouldShowCode) {
    asideTagEl.textContent = slide.headerTag;
    codeFilenameEl.textContent = slide.codeFilename;
  }

  // Contenu principal
  const paragraphs = slide.text
    .map((t) => `<p>${t}</p>`)
    .join("");

  const badge = slide.badge
    ? `<span class="badge"><span class="badge-dot"></span>${slide.badge}</span>`
    : "";

  const questionBlock = slide.questionBlock
    ? `
    <div class="question-block">
      <strong>${slide.questionBlock.title}</strong>
      <span>${slide.questionBlock.content}</span>
    </div>
  `
    : "";

  let qcmBlock = "";
  if (slide.type === "qcm" && slide.qcm) {
    const optionsHtml = slide.qcm.options
      .map(
        (opt) => `
      <button class="qcm-option" data-id="${opt.id}">
        ${opt.label}
      </button>
    `
      )
      .join("");

    qcmBlock = `
      <div class="qcm-options" id="qcm-options">
        ${optionsHtml}
      </div>
      <div class="qcm-feedback" id="qcm-feedback"></div>
    `;
  }

  const counterBlock =
    typeof slide.totalRepeats === "number"
      ? `
    <div class="global-counter">
      <div class="global-counter-label">Répétitions repérées dans ce code</div>
      <div class="global-counter-value" id="global-counter-value">0</div>
    </div>
  `
      : "";

  slideMainEl.innerHTML = `
    ${badge}
    <h2>${slide.title}</h2>
    ${paragraphs}
    ${questionBlock}
    ${counterBlock}
    ${qcmBlock}
  `;

  // Code
  if (shouldShowCode) {
    codeContentEl.innerHTML = slide.code;
  }

  // Animation du compteur global (slide 2)
  if (typeof slide.totalRepeats === "number") {
    const el = document.getElementById("global-counter-value");
    if (el) {
      animateCounter(el, slide.totalRepeats, 5000);
    }
  }

  // État des boutons
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;

  // Réinitialiser état QCM
  qcmAnswered = false;
  if (slide.type === "qcm" && slide.qcm) {
    initQcm(slide);
  }
}

function initQcm(slide) {
  const optionsContainer = document.getElementById("qcm-options");
  const feedbackEl = document.getElementById("qcm-feedback");
  if (!optionsContainer || !feedbackEl) return;

  optionsContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const optionBtn = target.closest(".qcm-option");
    if (!optionBtn || qcmAnswered) return;

    const id = optionBtn.dataset.id;
    const opt = slide.qcm.options.find((o) => o.id === id);
    if (!opt) return;

    // Marquage visuel
    if (opt.correct) {
      optionBtn.classList.add("correct");
    } else {
      optionBtn.classList.add("incorrect");
    }

    // Feedback (simple : si au moins une bonne réponse cochée)
    const hasCorrect = slide.qcm.options.some(
      (o) =>
        o.correct &&
        optionsContainer.querySelector(
          `.qcm-option[data-id="${o.id}"].correct`
        )
    );

    feedbackEl.textContent = hasCorrect
      ? slide.qcm.feedbackCorrect
      : slide.qcm.feedbackIncorrect;

    qcmAnswered = true;
  });
}

function goToSlide(newIndex) {
  if (newIndex < 0 || newIndex >= slides.length) return;
  currentIndex = newIndex;
  renderSlide(currentIndex);
}

prevBtn.addEventListener("click", () => {
  goToSlide(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  goToSlide(currentIndex + 1);
});

// Navigation clavier
globalThis.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    goToSlide(currentIndex + 1);
  } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
    goToSlide(currentIndex - 1);
  }
});

// Initialisation
renderSlide(currentIndex);
