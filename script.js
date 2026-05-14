document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');
    const charNoSpaceCount = document.getElementById('char-no-space-count');
    const wordCount = document.getElementById('word-count');
    const lineCount = document.getElementById('line-count');
    const themeToggle = document.getElementById('theme-toggle');
    const clearBtn = document.getElementById('clear-btn');
    const copyBtn = document.getElementById('copy-btn');
    const htmlElement = document.documentElement;

    const translations = {
        ja: {
            title: "文字数カウンター",
            placeholder: "ここにテキストを入力またはペーストしてください...",
            clear: "クリア",
            copy: "コピー",
            copied: "コピー完了！",
            "label-chars": "文字数<br>(空白込み)",
            "label-chars-no-space": "文字数<br>(空白抜き)",
            "label-words": "単語数",
            "label-lines": "行数",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "入力をクリアしますか？"
        },
        en: {
            title: "Character Counter",
            placeholder: "Type or paste your text here...",
            clear: "Clear",
            copy: "Copy",
            copied: "Copied!",
            "label-chars": "Characters<br>(with spaces)",
            "label-chars-no-space": "Characters<br>(no spaces)",
            "label-words": "Words",
            "label-lines": "Lines",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "Are you sure you want to clear the text?"
        },
        es: {
            title: "Contador de Caracteres",
            placeholder: "Escribe o pega tu texto aquí...",
            clear: "Borrar",
            copy: "Copiar",
            copied: "¡Copiado!",
            "label-chars": "Caracteres<br>(con espacios)",
            "label-chars-no-space": "Caracteres<br>(sin espacios)",
            "label-words": "Palabras",
            "label-lines": "Líneas",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "¿Estás seguro de que quieres borrar el texto?"
        },
        fr: {
            title: "Compteur de Caractères",
            placeholder: "Tapez ou collez votre texte ici...",
            clear: "Effacer",
            copy: "Copier",
            copied: "Copié !",
            "label-chars": "Caractères<br>(avec espaces)",
            "label-chars-no-space": "Caractères<br>(sans espaces)",
            "label-words": "Mots",
            "label-lines": "Lignes",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "Êtes-vous sûr de vouloir effacer le texte ?"
        },
        de: {
            title: "Zeichenzähler",
            placeholder: "Geben Sie Ihren Text hier ein oder fügen Sie ihn ein...",
            clear: "Löschen",
            copy: "Kopieren",
            copied: "Kopiert!",
            "label-chars": "Zeichen<br>(mit Leerzeichen)",
            "label-chars-no-space": "Zeichen<br>(ohne Leerzeichen)",
            "label-words": "Wörter",
            "label-lines": "Zeilen",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "Sind Sie sicher, dass Sie den Text löschen möchten?"
        },
        "zh-CN": {
            title: "字数计数器",
            placeholder: "在此输入或粘贴您的文本...",
            clear: "清除",
            copy: "复制",
            copied: "已复制！",
            "label-chars": "字符数<br>(含空格)",
            "label-chars-no-space": "字符数<br>(不含空格)",
            "label-words": "单词数",
            "label-lines": "行数",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "您确定要清除文本吗？"
        },
        "zh-TW": {
            title: "字數計數器",
            placeholder: "在此輸入或貼上您的文字...",
            clear: "清除",
            copy: "複製",
            copied: "已複製！",
            "label-chars": "字元數<br>(含空格)",
            "label-chars-no-space": "字元數<br>(不含空格)",
            "label-words": "單詞數",
            "label-lines": "行數",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "您確定要清除文字嗎？"
        },
        ko: {
            title: "글자 수 카운터",
            placeholder: "여기에 텍스트를 입력하거나 붙여넣으세요...",
            clear: "지우기",
            copy: "복사",
            copied: "복사됨!",
            "label-chars": "글자 수<br>(공백 포함)",
            "label-chars-no-space": "글자 수<br>(공백 제외)",
            "label-words": "단어 수",
            "label-lines": "줄 수",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "텍스트를 지우시겠습니까?"
        },
        it: {
            title: "Contatore di Caratteri",
            placeholder: "Digita o incolla il tuo testo qui...",
            clear: "Cancella",
            copy: "Copia",
            copied: "Copiato!",
            "label-chars": "Caratteri<br>(con spazi)",
            "label-chars-no-space": "Caratteri<br>(senza spazi)",
            "label-words": "Parole",
            "label-lines": "Linee",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "Sei sicuro di voler cancellare il testo?"
        },
        pt: {
            title: "Contador de Caracteres",
            placeholder: "Digite ou cole seu texto aqui...",
            clear: "Limpar",
            copy: "Copiar",
            copied: "Copiado!",
            "label-chars": "Caracteres<br>(com espaços)",
            "label-chars-no-space": "Caracteres<br>(sem espaços)",
            "label-words": "Palavras",
            "label-lines": "Linhas",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "Tem certeza que deseja limpar o texto?"
        },
        ru: {
            title: "Счетчик символов",
            placeholder: "Введите или вставьте текст здесь...",
            clear: "Очистить",
            copy: "Копировать",
            copied: "Скопировано!",
            "label-chars": "Символы<br>(с пробелами)",
            "label-chars-no-space": "Символы<br>(без пробелов)",
            "label-words": "Слова",
            "label-lines": "Строки",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "Вы уверены, что хотите удалить текст?"
        },
        hi: {
            title: "अक्षर काउंटर",
            placeholder: "अपना टेक्स्ट यहाँ टाइप या पेस्ट करें...",
            clear: "साफ़ करें",
            copy: "कॉपी करें",
            copied: "कॉपी किया गया!",
            "label-chars": "अक्षर<br>(स्पेस के साथ)",
            "label-chars-no-space": "अक्षर<br>(बिना स्पेस के)",
            "label-words": "शब्द",
            "label-lines": "पंक्तियां",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "क्या आप वाकई टेक्स्ट को साफ़ करना चाहते हैं?"
        },
        ar: {
            title: "عداد الحروف",
            placeholder: "اكتب أو الصق النص هنا...",
            clear: "مسح",
            copy: "نسخ",
            copied: "تم النسخ!",
            "label-chars": "حروف<br>(مع المسافات)",
            "label-chars-no-space": "حروف<br>(بدون مسافات)",
            "label-words": "كلمات",
            "label-lines": "أسطر",
            footer: "&copy; 2026 Minimalist Text Counter.",
            confirmClear: "هل أنت متأكد أنك تريد مسح النص؟"
        }
    };

    const savedLang = localStorage.getItem('lang');
    const fullBrowserLang = navigator.language;
    const baseBrowserLang = fullBrowserLang.split('-')[0];
    
    // Fallback logic to properly handle dialects like zh-TW vs zh-CN
    let detectedLang = 'en';
    if (translations[fullBrowserLang]) {
        detectedLang = fullBrowserLang;
    } else if (translations[baseBrowserLang]) {
        detectedLang = baseBrowserLang;
    } else if (baseBrowserLang === 'zh') {
        detectedLang = 'zh-CN'; // Fallback for general 'zh'
    }
    
    let currentLang = savedLang || detectedLang;
    
    const langSelect = document.getElementById('lang-select');

    const updateLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        // Update native select
        langSelect.value = lang;
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        document.title = `${translations[lang].title} | Apple Style`;
        
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    };

    langSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });

    // Theme Management
    const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
    };

    // Initialize Theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(prefersDarkQuery.matches ? 'dark' : 'light');
    }

    // Listen to system theme changes
    prefersDarkQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Counting Logic
    const updateStats = () => {
        const text = textInput.value;
        charCount.textContent = text.length;
        const noSpaces = text.replace(/\s/g, '');
        charNoSpaceCount.textContent = noSpaces.length;
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = words.length;
        const lines = text.length > 0 ? text.split('\n').length : 0;
        lineCount.textContent = lines;
    };

    textInput.addEventListener('input', updateStats);

    // Actions
    clearBtn.addEventListener('click', () => {
        if (textInput.value.length > 0) {
            if (confirm(translations[currentLang].confirmClear)) {
                textInput.value = '';
                updateStats();
            }
        }
    });

    copyBtn.addEventListener('click', () => {
        if (textInput.value.length > 0) {
            textInput.select();
            navigator.clipboard.writeText(textInput.value).then(() => {
                const originalText = translations[currentLang].copy;
                copyBtn.textContent = translations[currentLang].copied;
                copyBtn.style.backgroundColor = '#34C759';
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '';
                }, 2000);
            });
        }
    });

    // Initial check
    updateLanguage(currentLang);
    updateStats();

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
});
