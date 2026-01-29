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
    headerTag: "Zoom",
    title: "Et si je dois tout modifier ?",
    badge: "Réflexion",
    text: [
      "Ces styles sont utilisés à plusieurs endroits du site.",
      "Ils remplissent la même fonction visuelle, mais sont dupliqués dans le code."
    ],
    questionBlock: null,
    narration:
      "Que se passe-t-il si je dois modifier cette valeur partout dans le projet ? Combien d'endroits devrais-je mettre à jour ?",
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
    `.trim()
  },
  {
    id: 4,
    type: "questionnement",
    headerTag: "Questionnement",
    title: "Questions à l’écran",
    badge: "Pause (réflexion)",
    text: [
      "Prenez un instant pour vous projeter : que se passe-t-il si une valeur répétée doit changer partout ?",
    ],
    questionBlock: null,
    narration:
      "Que se passe-t-il si je dois modifier cette valeur partout dans le projet ? Combien d'endroits devrais-je mettre à jour ?",
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
    ,
    codeOverlays: [
      {
        variant: "yellow",
        top: -10,
        left: 17,
        text:
          "Que se passe-t-il si je dois modifier cette valeur partout dans le projet ?"
      },
      {
        variant: "blue",
        top: 25,
        left: 15,
        text: "Combien d’endroits devrais-je mettre à jour ?"
      }
    ]
  },
  {
    id: 5,
    type: "synthese",
    headerTag: "Synthèse",
    title: "Mettre à plat ce que vous avez repéré",
    badge: "Pause (analyse)",
    text: [
      "À votre tour.",
      "Observez ce nouveau fichier CSS et repérez au moins trois répétitions de styles."
    ],
    questionBlock: {
      title: "Mini-pause",
      content:
        "Notez 3 répétitions (valeur + où elle apparaît), puis passez au QCM."
    },
    codeFilename: "theme.css",
    code: `
<span class="css-selector">.header</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#34495e</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">18px</span>;
  <span class="css-prop">padding</span>: <span class="css-value">25px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">20px</span>;
}

<span class="css-selector">.navigation</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#34495e</span>;
  <span class="css-prop">padding</span>: <span class="css-value">15px</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">14px</span>;
}

<span class="css-selector">.button-primary</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#3498db</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">16px</span>;
  <span class="css-prop">padding</span>: <span class="css-value">12px 24px</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value">5px</span>;
}

<span class="css-selector">.button-secondary</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#95a5a6</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ecf0f1</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">16px</span>;
  <span class="css-prop">padding</span>: <span class="css-value">12px 24px</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value">5px</span>;
}

<span class="css-selector">.card</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">padding</span>: <span class="css-value">18px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">20px</span>;
  <span class="css-prop">box-shadow</span>: <span class="css-value">0 3px 6px rgba(0, 0, 0, 0.15)</span>;
}

<span class="css-selector">.sidebar</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#ecf0f1</span>;
  <span class="css-prop">padding</span>: <span class="css-value">15px</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">14px</span>;
}

<span class="css-selector">.footer</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#2c3e50</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">padding</span>: <span class="css-value">20px</span>;
}

<span class="css-selector">.alert</span> {
  <span class="css-prop">padding</span>: <span class="css-value">12px 24px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">20px</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value">5px</span>;
  <span class="css-prop">color</span>: <span class="css-value">#e74c3c</span>;
}
    `.trim()
  },
  {
    id: 6,
    type: "dragdrop",
    headerTag: "Évaluer",
    title: "Auto-évaluation : identifier les répétitions",
    badge: "Glisser-déposer",
    text: [
      "Parmi les éléments suivants, lesquels relèvent d'une répétition de styles ?",
      "Glissez-déposez les éléments dans la zone de dépôt pour obtenir un feedback immédiat."
    ],
    questionBlock: null,
    showCode: false,
    dragDrop: {
      question:
        "Parmi les éléments suivants, lesquels relèvent d'une répétition de styles ?",
      options: [
        { id: "o1", label: "#ffffff", repeats: 4 },
        { id: "o2", label: "padding: 12px 24px", repeats: 3 },
        { id: "o3", label: "margin-bottom: 20px", repeats: 3 },
        { id: "o4", label: "font-size: 14px", repeats: 3 },
        { id: "o5", label: "border-radius: 5px", repeats: 3 },
        { id: "o6", label: "background-color: #ecf0f1", repeats: 1 },
        { id: "o7", label: "box-shadow: 0 3px 6px", repeats: 1 },
        { id: "o8", label: "color: #e74c3c", repeats: 1 }
      ],
      codeHtml: `
<span class="css-selector css-selector--red">.header</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#34495e</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">18px</span>;
  <span class="css-prop">padding</span>: <span class="css-value">25px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">20px</span>;
}

<span class="css-selector css-selector--red">.navigation</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#34495e</span>;
  <span class="css-prop">padding</span>: <span class="css-value">15px</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">14px</span>;
}

<span class="css-selector css-selector--red">.button-primary</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#3498db</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">16px</span>;
  <span class="css-prop">padding</span>: <span class="css-value">12px 24px</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value">5px</span>;
}

<span class="css-selector css-selector--red">.button-secondary</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#95a5a6</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ecf0f1</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">16px</span>;
  <span class="css-prop">padding</span>: <span class="css-value">12px 24px</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value">5px</span>;
}

<span class="css-selector css-selector--red">.card</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">padding</span>: <span class="css-value">18px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">20px</span>;
  <span class="css-prop">box-shadow</span>: <span class="css-value">0 3px 6px rgba(0, 0, 0, 0.15)</span>;
}

<span class="css-selector css-selector--red">.sidebar</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#ecf0f1</span>;
  <span class="css-prop">padding</span>: <span class="css-value">15px</span>;
  <span class="css-prop">font-size</span>: <span class="css-value">14px</span>;
}

<span class="css-selector css-selector--red">.footer</span> {
  <span class="css-prop">background-color</span>: <span class="css-value">#2c3e50</span>;
  <span class="css-prop">color</span>: <span class="css-value">#ffffff</span>;
  <span class="css-prop">padding</span>: <span class="css-value">20px</span>;
}

<span class="css-selector css-selector--red">.alert</span> {
  <span class="css-prop">padding</span>: <span class="css-value">12px 24px</span>;
  <span class="css-prop">margin-bottom</span>: <span class="css-value">20px</span>;
  <span class="css-prop">border-radius</span>: <span class="css-value">5px</span>;
  <span class="css-prop">color</span>: <span class="css-value">#e74c3c</span>;
}
      `.trim()
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
const codeOverlaysEl = document.getElementById("code-overlays");
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

function buildBadgeHtml(slide) {
  return slide.badge
    ? `<span class="badge"><span class="badge-dot"></span>${slide.badge}</span>`
    : "";
}

function buildQuestionBlockHtml(slide) {
  if (!slide.questionBlock) return "";
  return `
    <div class="question-block">
      <strong>${slide.questionBlock.title}</strong>
      <span>${slide.questionBlock.content}</span>
    </div>
  `;
}

function buildQcmBlockHtml(slide) {
  if (slide.type !== "qcm" || !slide.qcm) return "";

  const optionsHtml = slide.qcm.options
    .map(
      (opt) => `
      <button class="qcm-option" data-id="${opt.id}">
        ${opt.label}
      </button>
    `
    )
    .join("");

  return `
      <div class="qcm-options" id="qcm-options">
        ${optionsHtml}
      </div>
      <div class="qcm-feedback" id="qcm-feedback"></div>
    `;
}

function buildDragDropHtml(slide) {
  if (slide.type !== "dragdrop" || !slide.dragDrop) return "";

  const opts = slide.dragDrop.options ?? [];
  const buttons = opts
    .map(
      (o) => `
      <button class="dd-chip" draggable="true" data-id="${o.id}">
        ${o.label}
      </button>
    `
    )
    .join("");

  return `
    <div class="dd-layout" id="dd-layout">
      <div class="dd-code">
        <div class="dd-code-title">Code CSS</div>
        <div class="dd-code-window">
          <pre class="dd-code-pre">${slide.dragDrop.codeHtml}</pre>
        </div>
      </div>

      <div class="dd-activity">
        <div class="dd-question">${slide.dragDrop.question}</div>

        <div class="dd-grid" id="dd-grid">
          ${buttons}
        </div>

        <div class="dd-drop-row">
          <div class="dd-arrow" aria-hidden="true"></div>
          <div class="dd-dropzone" id="dd-dropzone">
            <div class="dd-dropzone-title">Zone de dépôt</div>
            <div class="dd-dropzone-items" id="dd-dropzone-items"></div>
          </div>
        </div>

        <div class="dd-feedback" id="dd-feedback" aria-live="polite"></div>
      </div>
    </div>
  `;
}

function initDragDrop(slide) {
  if (slide.type !== "dragdrop" || !slide.dragDrop) return;

  const grid = document.getElementById("dd-grid");
  const dropzone = document.getElementById("dd-dropzone");
  const items = document.getElementById("dd-dropzone-items");
  const feedback = document.getElementById("dd-feedback");
  if (!grid || !dropzone || !items || !feedback) return;

  const optionById = new Map(
    (slide.dragDrop.options ?? []).map((o) => [o.id, o])
  );

  grid.addEventListener("dragstart", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const chip = target.closest(".dd-chip");
    if (!chip) return;
    const id = chip.dataset.id;
    if (!id) return;
    e.dataTransfer?.setData("text/plain", id);
    e.dataTransfer?.setData("application/x-dd-id", id);
    e.dataTransfer?.setDragImage(chip, 10, 10);
  });

  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("is-over");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("is-over");
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("is-over");

    const id =
      e.dataTransfer?.getData("application/x-dd-id") ??
      e.dataTransfer?.getData("text/plain");
    if (!id) return;

    const opt = optionById.get(id);
    if (!opt) return;

    const isRepeated = (opt.repeats ?? 1) > 1;
    const randomPart =
      globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
    const itemId = `dd-item-${randomPart}`;

    const item = document.createElement("div");
    item.className = `dd-item ${isRepeated ? "is-correct" : "is-wrong"}`;
    item.id = itemId;

    const label = document.createElement("div");
    label.className = "dd-item-label";
    label.textContent = opt.label;

    const remove = document.createElement("button");
    remove.className = "dd-item-remove";
    remove.type = "button";
    remove.setAttribute("aria-label", "Retirer");
    remove.textContent = "×";

    const message = document.createElement("div");
    message.className = `dd-msg ${isRepeated ? "dd-msg--ok" : "dd-msg--no"}`;
    message.textContent = isRepeated
      ? `✓ Correct ! Cette valeur apparaît ${opt.repeats} fois dans le code.`
      : "✗ Incorrect. Cette valeur n'apparaît qu'une seule fois, ce n'est donc pas une répétition.";

    item.appendChild(label);
    item.appendChild(remove);
    items.appendChild(item);

    feedback.innerHTML = "";
    feedback.appendChild(message);

    remove.addEventListener("click", () => {
      item.remove();
      feedback.innerHTML = "";
    });
  });
}

function buildCounterBlockHtml(slide) {
  if (typeof slide.totalRepeats !== "number") return "";
  return `
    <div class="global-counter">
      <div class="global-counter-label">Répétitions repérées dans ce code</div>
      <div class="global-counter-value" id="global-counter-value">0</div>
    </div>
  `;
}

function buildCodeOverlaysHtml(slide) {
  const overlays = Array.isArray(slide.codeOverlays) ? slide.codeOverlays : [];
  return overlays
    .map((o) => {
      const klass =
        o.variant === "blue" ? "code-bubble--blue" : "code-bubble--yellow";
      const top = typeof o.top === "number" ? `${o.top}%` : "10%";
      const left = typeof o.left === "number" ? `${o.left}%` : "10%";
      return `<div class="code-bubble ${klass}" style="top:${top};left:${left};">${o.text}</div>`;
    })
    .join("");
}

function renderCodePanel(slide, shouldShowCode) {
  if (!shouldShowCode) {
    if (codeOverlaysEl) codeOverlaysEl.innerHTML = "";
    return;
  }

  asideTagEl.textContent = slide.headerTag;
  codeFilenameEl.textContent = slide.codeFilename;
  codeContentEl.innerHTML = slide.code;
  if (codeOverlaysEl) codeOverlaysEl.innerHTML = buildCodeOverlaysHtml(slide);
}

function toggleCodePanel(shouldShowCode) {
  if (!slideAsideEl || !slideBodyEl) return;
  slideAsideEl.hidden = !shouldShowCode;
  slideBodyEl.classList.toggle("is-code-hidden", !shouldShowCode);
}

function renderSlide(index) {
  const slide = slides[index];
  if (!slide) return;

  // Progression
  progressEl.textContent = `Slide ${index + 1} / ${slides.length}`;

  const shouldShowCode = slide.showCode !== false;
  toggleCodePanel(shouldShowCode);

  // Contenu principal
  const paragraphs = slide.text.map((t) => `<p>${t}</p>`).join("");

  slideMainEl.innerHTML = `
    ${buildBadgeHtml(slide)}
    <h2>${slide.title}</h2>
    ${paragraphs}
    ${buildQuestionBlockHtml(slide)}
    ${buildCounterBlockHtml(slide)}
    ${buildQcmBlockHtml(slide)}
    ${buildDragDropHtml(slide)}
  `;

  renderCodePanel(slide, shouldShowCode);

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

  if (slide.type === "dragdrop" && slide.dragDrop) {
    initDragDrop(slide);
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
