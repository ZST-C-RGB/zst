const CACHE_NAME = 'quiz-app-v1';

// 需要缓存的静态资源
const STATIC_ASSETS = [
  './',
  './做题系统.html',
  './题库数据.js',
  './题库数据2.js',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
];

// 安装事件 - 预缓存静态资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[ServiceWorker] 缓存静态资源');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => {
          console.log('[ServiceWorker] 删除旧缓存:', name);
          return caches.delete(name);
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// 网络请求拦截 - 缓存优先策略
self.addEventListener('fetch', event => {
  // 只处理 GET 请求
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // 有缓存 → 返回缓存（快速加载）
        return cachedResponse;
      }

      // 无缓存 → 发起网络请求
      return fetch(event.request).then(response => {
        // 只缓存成功的响应和同源请求
        if (response && response.status === 200 && response.type === 'basic') {
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clonedResponse);
          });
        }
        return response;
      }).catch(() => {
        // 网络不可用且无缓存时，尝试返回离线页面
        // 对于题库数据文件，返回一个空数组占位
        if (event.request.url.endsWith('题库数据.js') || event.request.url.endsWith('题库数据2.js')) {
          return new Response('const QUESTION_BANK = [];', { headers: { 'Content-Type': 'application/javascript' } });
        }
        // 对于其他请求，返回一个简单的离线提示
        return new Response('网络不可用，请检查网络连接后重试。', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
