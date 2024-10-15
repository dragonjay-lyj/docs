// waline.js
import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.mjs';

export function initializeWaline() {
  init({
    el: '#waline',
    serverURL: 'https://com.dragonjay.top',
    pageview: true,
    emoji: [
      'https://unpkg.com/@waline/emojis@1.2.0/bilibili',
      'https://unpkg.com/@waline/emojis@1.2.0/bmoji',
      'https://unpkg.com/@waline/emojis@1.2.0/qq',
      'https://unpkg.com/@waline/emojis@1.2.0/tieba',
      'https://unpkg.com/@waline/emojis@1.2.0/weibo',
      'https://unpkg.com/@waline/emojis@1.2.0/soul-emoji'
    ],
  });
}
