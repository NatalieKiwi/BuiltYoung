/**
 * BUILT YOUNG — content.js
 * ─────────────────────────────────────────────────────────────
 * 只改這個檔案就能更新所有頁面文字。
 * 規則：
 *   1. 只改 " " 引號裡面的文字
 *   2. 不要改變數名、key 名稱或結構
 *   3. \n 表示換行，保留它
 *   4. <strong> <em> <span> 等 HTML 標籤是有意的，請保留
 * ─────────────────────────────────────────────────────────────
 */

const BY = {

  /* ══════════════════════════════════
     GLOBAL — 全站共用
  ══════════════════════════════════ */
  global: {
    brand:      "BUILT Young",          // Logo 文字
    tagline:    "Their story starts where yours can too.",  // Footer tagline
    manifesto:  "Either you learn or you win. Either way, you move.",
    email:      "hello@built-young.com",
    website:    "built-young.com",
    copyright:  "© 2025 Built Young · built-young.com",
    social: {
      youtube:   "https://www.youtube.com/@BuiltYoungClub",
      instagram: "https://www.instagram.com/builtyoungclub/",
      linkedin:  "https://www.linkedin.com/in/nataliechu0414/",
    }
  },

  /* ══════════════════════════════════
     NAV
  ══════════════════════════════════ */
  nav: {
    links: ["About", "Podcast", "Club", "Workshops", "Contact"]
    // 順序：左邊前兩個，右邊後三個
  },

  /* ══════════════════════════════════
     HERO
  ══════════════════════════════════ */
  hero: {
    kicker_left:  "Under 25",    // 左邊白色大字
    kicker_right: "Over $1M",    // 右邊金色大字
    kicker_sep:   "/",           // 中間分隔符號

    // 三行 tagline — 每行獨立，方便調整
    tagline_line1: "Built Young tells",
    tagline_line2: "young founder stories that teach",
    tagline_line3: "you how to move.",

    cta_text:     "Apply to Club",    // 主要 CTA 按鈕文字
    cta_url:      "https://built-young.com/club.html",

    manifesto:    "Either you learn or you win. Either way, you move.",
  },

  /* ══════════════════════════════════
     S2 — FOUNDER STORIES
  ══════════════════════════════════ */
  stories: {
    label:    "#How they take action within 24 hours",
    title:    "Their stories start where yours can too.",
    see_all:  "See all episodes →",

    // 每張 ep card — 改這裡更新卡片內容
    episodes: [
      {
        num:     "EP. 01",
        name:    "Marcus Chen",
        company: "Stackflow AI",
        revenue: "$1.2M ARR",
        quote:   "\"I closed my first enterprise deal from a cold DM at 2am. That's when I knew this was real.\"",
        time_elapsed: "22:14",
        time_remain:  "-18:30",
        progress:     "55",    // 0–100 (%)
        img:     "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80&auto=format&fit=crop&crop=face",
      },
      {
        num:     "EP. 02",
        name:    "Priya Nair",
        company: "Halo Commerce",
        revenue: "$2.4M Rev",
        quote:   "\"My parents thought I was wasting my degree. Then the wire hit for $180K and they stopped asking.\"",
        time_elapsed: "14:05",
        time_remain:  "-31:02",
        progress:     "30",
        img:     "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80&auto=format&fit=crop&crop=face",
      },
      {
        num:     "EP. 03",
        name:    "Jordan Blake",
        company: "Reframe Labs",
        revenue: "$900K ARR",
        quote:   "\"I dropped out with $800 in my account. Built the first version in 11 days. That was two years ago.\"",
        time_elapsed: "31:50",
        time_remain:  "-13:10",
        progress:     "70",
        img:     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop&crop=face",
      }
    ],

    // "Your story next?" 卡片
    soon: {
      title:   "Your story next?",
      desc:    "Under 25 with real revenue. Apply to be featured.",
      cta:     "Apply to Be Featured",
      cta_url: "https://formspree.io/f/mgodnlbn",
    }
  },

  /* ══════════════════════════════════
     S3 — WHY BUILT YOUNG
  ══════════════════════════════════ */
  why: {
    label:   "Why Built Young",
    title:   "BUILT YOUNG",          // 大標題（Bebas Neue）
    unlock:  "Three Things We Unlock",

    cards: [
      {
        num:   "01",
        label: "Resources",
        title: "Workshops & Playbooks",
        desc:  "Hiring, GTM, leadership, and operator frameworks for real companies.",
      },
      {
        num:   "02",
        label: "Connections",
        title: "Mentors & Operators",
        desc:  "Experienced people who help you skip the costly mistakes.",
      },
      {
        num:   "03",
        label: "Revenue Peers",
        title: "Founders Like You",
        desc:  "Young founders building real companies, making real revenue.",
      }
    ]
  },

  /* ══════════════════════════════════
     S4 — WHO THIS IS FOR
  ══════════════════════════════════ */
  who: {
    label: "Who This Is For",
    title: "Ready to Join a Room Full of People Who Are Already Moving?",

    cards: [
      {
        accent:  "fire",    // "fire" = 橘紅色  |  "gold" = 金色
        title:   "Young Founders",
        desc:    "Under 30, building from scratch, with real revenue or clear momentum. You're ready for what comes next.",
        cta:     "Apply to Club →",
        cta_url: "https://formspree.io/f/mgodnlbn",
        outline: false,     // false = 實心按鈕  |  true = 空心按鈕
      },
      {
        accent:  "gold",
        title:   "Mentors & Operators",
        desc:    "Experienced builders, executives, and operators who support young founders through mentorship, workshops, or introductions.",
        cta:     "Connect as Mentor →",
        cta_url: "https://formspree.io/f/mykondaw",
        outline: true,
      }
    ]
  },

  /* ══════════════════════════════════
     FOOTER
  ══════════════════════════════════ */
  footer: {
    tagline:   "Their story starts where yours can too.",
    copyright: "© 2025 Built Young · built-young.com",
  }

};

// ─────────────────────────────────────────────────────────────
// inject() — 把上面的內容注入到 HTML 的對應元素
// 不需要修改這個函式，它會自動找到對應的 data-by 屬性
// ─────────────────────────────────────────────────────────────
BY.inject = function() {
  const set = (sel, val) => {
    const el = document.querySelector(sel);
    if (el && val !== undefined) el.innerHTML = val;
  };
  const setAttr = (sel, attr, val) => {
    const el = document.querySelector(sel);
    if (el && val !== undefined) el.setAttribute(attr, val);
  };

  // Hero
  set('[data-by="kicker-left"]',   BY.hero.kicker_left);
  set('[data-by="kicker-right"]',  BY.hero.kicker_right);
  set('[data-by="kicker-sep"]',    BY.hero.kicker_sep);
  set('[data-by="tagline-1"]',     BY.hero.tagline_line1);
  set('[data-by="tagline-2"]',     BY.hero.tagline_line2);
  set('[data-by="tagline-3"]',     BY.hero.tagline_line3);
  set('[data-by="hero-cta"]',      BY.hero.cta_text);
  setAttr('[data-by="hero-cta"]',  'onclick', `window.location='${BY.hero.cta_url}'`);
  set('[data-by="manifesto"]',     BY.hero.manifesto);

  // Stories header
  set('[data-by="stories-label"]', BY.stories.label);
  set('[data-by="stories-title"]', BY.stories.title);

  // Why
  set('[data-by="why-label"]',  BY.why.label);
  set('[data-by="why-title"]',  BY.why.title);
  set('[data-by="why-unlock"]', BY.why.unlock);

  // Who
  set('[data-by="who-label"]', BY.who.label);
  set('[data-by="who-title"]', BY.who.title);

  // Footer
  set('[data-by="footer-tagline"]',   BY.footer.tagline);
  set('[data-by="footer-copyright"]', BY.footer.copyright);
  set('[data-by="global-tagline"]',   BY.global.tagline);
};

// 頁面載入後自動執行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', BY.inject);
} else {
  BY.inject();
}
