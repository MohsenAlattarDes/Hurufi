export interface EntryContent {
  type: 'text' | 'arabic' | 'comparison' | 'diagram' | 'letterforms';
  content?: string;
  arabicText?: string;
  latinText?: string;
  latinExample?: string;
  arabicExample?: string;
  highlight?: string;
  description?: string;
  items?: { form: string; example: string; label: string }[];
}

export interface Entry {
  slug: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  related: string[];
  sections: {
    title?: string;
    contents: EntryContent[];
  }[];
}

export const entries: Entry[] = [
  {
    slug: 'rtl',
    title: 'RTL',
    subtitle: 'Right-to-left text direction',
    related: ['numbers-in-arabic-text', 'contextual-letterforms', 'diacritics', 'kashida'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Arabic is written and read from right to left. This fundamental characteristic affects everything from text alignment to UI layout.',
          },
        ],
      },
      {
        title: 'Direction in Practice',
        contents: [
          {
            type: 'arabic',
            arabicText: 'مرحبا بالعالم',
            description: '"Hello World" — notice how the text flows from right to left',
          },
        ],
      },
    ],
  },
  {
    slug: 'numbers-in-arabic-text',
    title: 'Numbers in Arabic Text',
    subtitle: 'How numerals behave in RTL context',
    related: ['rtl', 'naskh', 'ruqah'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Numbers in Arabic text can use either Western numerals (0-9) or Eastern Arabic numerals (٠-٩). Their directionality within RTL text requires special handling.',
          },
        ],
      },
      {
        title: 'Eastern Arabic Numerals',
        contents: [
          {
            type: 'arabic',
            arabicText: '٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩',
            description: 'Eastern Arabic numerals used in many Arab countries',
          },
        ],
      },
    ],
  },
  {
    slug: 'diacritics',
    title: 'Diacritics',
    subtitle: 'Vocalization marks above and below letters',
    related: ['dot-placement', 'contextual-letterforms', 'naskh', 'thuluth'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Arabic is typically written without vowel marks. However, short vowels can be indicated with diacritical marks called harakat. These appear above or below letters.',
          },
        ],
      },
      {
        title: 'Common Marks',
        contents: [
          {
            type: 'arabic',
            arabicText: 'بَ بِ بُ بْ بّ بً',
            description: 'The letter bā with different diacritics: fatḥa, kasra, ḍamma, sukūn, shadda, tanwīn',
          },
        ],
      },
    ],
  },
  {
    slug: 'contextual-letterforms',
    title: 'Contextual Letterforms',
    subtitle: 'Letters change shape based on position',
    related: ['rtl', 'tooth', 'dot-placement', 'naskh', 'ruqah'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Each Arabic letter has up to four different forms depending on where it appears in a word: isolated, initial, medial, or final.',
          },
        ],
      },
      {
        title: 'Four Forms',
        contents: [
          {
            type: 'letterforms',
            items: [
              { form: 'ب', example: 'ب', label: 'Isolated' },
              { form: 'بـ', example: 'بـ', label: 'Initial' },
              { form: 'ـبـ', example: 'ـبـ', label: 'Medial' },
              { form: 'ـب', example: 'ـب', label: 'Final' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'kashida',
    title: 'Kashida',
    subtitle: 'Horizontal elongation for justification',
    related: ['rtl', 'tooth', 'naskh', 'ruqah'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Instead of adjusting word or letter spacing like Latin typography, Arabic text can be justified by elongating the connecting strokes between letters. This is called kashida or tatweel.',
          },
        ],
      },
      {
        title: 'With Kashida',
        contents: [
          {
            type: 'arabic',
            arabicText: 'بـــسم الله الرحــــمن الرحـــــيم',
            description: 'Elongated connections for justification',
          },
        ],
      },
    ],
  },
  {
    slug: 'tooth',
    title: 'Tooth',
    subtitle: 'The vertical stroke in Arabic letters',
    related: ['contextual-letterforms', 'kashida', 'naskh', 'ruqah'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'The "tooth" refers to the vertical stroke that appears in many Arabic letters. Understanding teeth is essential for recognizing letter patterns and designing Arabic typefaces.',
          },
        ],
      },
      {
        title: 'Letters with Teeth',
        contents: [
          {
            type: 'arabic',
            arabicText: 'ب ت ث ن ي',
            description: 'These letters share similar tooth structures, differentiated by dots',
          },
        ],
      },
    ],
  },
  {
    slug: 'dot-placement',
    title: 'Dot Placement',
    subtitle: 'How dots distinguish letters',
    related: ['diacritics', 'contextual-letterforms', 'naskh', 'maghrebi'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Many Arabic letters share the same base shape and are distinguished only by the number and position of dots. Dot placement varies between regional traditions.',
          },
        ],
      },
      {
        title: 'Dot Variations',
        contents: [
          {
            type: 'arabic',
            arabicText: 'ب ت ث',
            description: 'Same base shape: one dot below (bā), two dots above (tā), three dots above (thā)',
          },
        ],
      },
    ],
  },
  {
    slug: 'naskh',
    title: 'Naskh',
    subtitle: 'The script of book culture and clarity',
    related: ['ruqah', 'thuluth', 'nastaliq', 'diwani', 'kufi', 'maghrebi'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Naskh (نسخ) is one of the most widely used Arabic scripts, developed and refined as Arabic writing became more systematized during the Abbasid era. It became closely associated with book culture because it balanced beauty with clarity, making it well suited for continuous reading and careful copying.',
          },
        ],
      },
      {
        title: 'Visual Character',
        contents: [
          {
            type: 'text',
            content: 'Naskh is known for its rounded forms, steady proportions, and clear letter differentiation, especially in smaller sizes. Its rhythm tends to feel even and controlled, which is why it became a dominant choice for manuscripts and later for printed Arabic text. Many contemporary Arabic "text" fonts still build on Naskh logic, even when the style is modernized.',
          },
        ],
      },
    ],
  },
  {
    slug: 'ruqah',
    title: 'Ruqʿah',
    subtitle: 'The practical everyday script',
    related: ['naskh', 'thuluth', 'nastaliq', 'diwani', 'kufi', 'maghrebi'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Ruqʿah (رقعة) is a practical Arabic script that became widely standardized in the Ottoman period, shaped by the need for fast, consistent everyday writing. In that sense, it plays a role similar to cursive handwriting in Latin: a script built for speed, ease, and daily use rather than display.',
          },
        ],
      },
      {
        title: 'Visual Character',
        contents: [
          {
            type: 'text',
            content: 'Ruqʿah is known for its compact proportions, short verticals, and simplified letterforms with fewer flourishes than classical scripts. Many shapes feel compressed and direct, creating an even texture that reads quickly. Because of its efficiency and familiarity, Ruqʿah often signals an everyday voice, and it continues to influence modern handwriting and contemporary Arabic type styles.',
          },
        ],
      },
    ],
  },
  {
    slug: 'thuluth',
    title: 'Thuluth',
    subtitle: 'Classical script of monumentality and rhythm',
    image: '/images/thuluth.svg',
    imageAlt: 'Bismillah al-Rahman al-Rahim written in Thuluth script with construction guidelines',
    related: ['naskh', 'ruqah', 'nastaliq', 'diwani', 'kufi', 'maghrebi'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Thuluth (ثلث) is a classical Arabic script developed during the Abbasid era, when Arabic calligraphy became more systematized and governed by proportion. It is closely associated with the calligraphic tradition of the "six scripts," and is often linked to Ibn Muqla\'s proportional approach, later refined by masters such as Yaqut al-Mustaʿsimi.',
          },
        ],
      },
      {
        title: 'Visual Character',
        contents: [
          {
            type: 'text',
            content: 'Visually, Thuluth is known for its tall verticals, sweeping curves, and balanced stroke contrast, giving it a strong sense of rhythm and monumentality. Because of its clarity at large sizes and its ability to form elegant, architectural compositions, it has been widely used for Qur\'anic headings, inscriptions, and mosque decoration, where the script is meant to carry both meaning and presence.',
          },
        ],
      },
    ],
  },
  {
    slug: 'nastaliq',
    title: 'Nastaʿliq',
    subtitle: 'The lyrical script of Persian literary culture',
    image: '/images/nastaliq.svg',
    imageAlt: 'Nastaʿliq script example showing cascading baseline',
    related: ['naskh', 'ruqah', 'thuluth', 'diwani', 'kufi', 'maghrebi'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Nastaʿliq (نستعليق) is a classical script that emerged in Persia, shaped by blending qualities associated with Naskh and Taʿliq. It became closely tied to Persian literary culture and was widely used for poetry and manuscripts, where the script\'s form could carry tone and mood alongside meaning.',
          },
        ],
      },
      {
        title: 'Visual Character',
        contents: [
          {
            type: 'text',
            content: 'Nastaʿliq is known for its slanted, hanging baseline (look at the red baseline) and its dramatic rhythm. Words often feel like they\'re cascading, with strong diagonals, elegant curves, and lively contrast that create a lyrical texture across the line. Because its structure is expressive and less "straight" than text scripts like Naskh, Nastaʿliq is most often seen in literary and cultural contexts rather than dense continuous reading.',
          },
        ],
      },
    ],
  },
  {
    slug: 'diwani',
    title: 'Diwani',
    subtitle: 'The ornate script of Ottoman authority',
    related: ['naskh', 'ruqah', 'thuluth', 'nastaliq', 'kufi', 'maghrebi'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Diwani (ديواني) is an Ottoman-era script developed for the imperial court and administrative writing. It became known as a script of formality and prestige, used in official documents where the writing itself signaled authority.',
          },
        ],
      },
      {
        title: 'Visual Character',
        contents: [
          {
            type: 'text',
            content: 'Diwani is recognized by its dense, flowing letterforms, tight spacing, and strong sense of movement, often with dramatic curves and interwoven strokes. The baseline can feel lively rather than rigid, and the overall texture tends to look ornamental even when the text is functional. Because of its visual richness and ceremonial character, Diwani is often used today in invitations, certificates, and decorative headings rather than long body text.',
          },
        ],
      },
    ],
  },
  {
    slug: 'kufi',
    title: 'Kufi',
    subtitle: 'The angular geometric script',
    related: ['naskh', 'ruqah', 'thuluth', 'nastaliq', 'diwani', 'maghrebi'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Kufi is one of the oldest Arabic scripts, originating in Kufa, Iraq. Known for its angular, geometric forms, it was used extensively in early Quran manuscripts.',
          },
        ],
      },
      {
        title: 'Kufi Geometry',
        contents: [
          {
            type: 'arabic',
            arabicText: 'الكوفي',
            description: 'The word "Kufi" — note the angular construction',
          },
        ],
      },
    ],
  },
  {
    slug: 'maghrebi',
    title: 'Maghrebi',
    subtitle: 'The North African script tradition',
    related: ['naskh', 'ruqah', 'thuluth', 'nastaliq', 'diwani', 'kufi'],
    sections: [
      {
        contents: [
          {
            type: 'text',
            content: 'Maghrebi scripts developed in North Africa and Al-Andalus. They feature distinctive rounded forms and unique dot placement conventions that differ from Eastern traditions.',
          },
        ],
      },
      {
        title: 'Regional Character',
        contents: [
          {
            type: 'arabic',
            arabicText: 'المغرب العربي',
            description: 'The Arab Maghreb — regional script identity',
          },
        ],
      },
    ],
  },
];

// Helper function to get entry by slug
export function getEntryBySlug(slug: string): Entry | undefined {
  return entries.find((entry) => entry.slug === slug);
}

// Helper function to get related entries
export function getRelatedEntries(slugs: string[]): Entry[] {
  return slugs
    .map((slug) => entries.find((entry) => entry.slug === slug))
    .filter((entry): entry is Entry => entry !== undefined);
}
