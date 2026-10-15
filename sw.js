// يخلي الموقع يفتح بسرعة ويشتغل حتى لو النت ضعيف. يجيب أحدث نسخة أول، ولو ما فيه نت يستخدم المحفوظ.
const C='darb-v3';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','config.js','manifest.webmanifest','fonts/bahij-400.ttf','fonts/bahij-800.ttf','icons/icon-192.png'])))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok&&!u.pathname.endsWith('.pdf')){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('index.html'))))});
