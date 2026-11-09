(() => {
  'use strict';

  // Filenames of the polaroid images in images/
  const IMAGE_FILES = [
    '03e3dcdf-5d0b-429d-8551-8b5cda026d51.jpg',
    '09007bde-3929-4d80-9ced-ca7e52f70e61.jpg',
    '0c666e3a-73ce-429a-9322-0d4f492a624b.jpg',
    '0f92e9a7-7ff3-430e-bc77-082aef964550.jpg',
    '16bd8bb8-2b79-40c2-8a72-4813fa91d975.jpg',
    '1ad5a1cc-516d-480c-8c27-cc93257513f7.jpg',
    '1ce2f7d8-d5e3-46d3-a0f8-779524d0bdd7.jpg',
    '1f669f69-3466-42c3-b09c-5968c888340d.jpg',
    '2032a166-c6e3-4397-833d-c0e2217ff258.jpg',
    '215e05b1-0734-4792-8302-538ffb8585e7.jpg',
    '21b7b514-03ac-479c-8737-d952b0985c25.jpg',
    '2bc6a49d-973e-45cc-bc5b-d85fb3182239.jpg',
    '30d38537-be82-4f34-8653-ad9f982f7fda.jpg',
    '3be56dd9-c372-4776-991f-a62988adcb80.jpg',
    '42ac8f3b-99a5-40b8-b653-76edc508c290.jpg',
    '50560c96-d813-44e0-8379-3bfa6e7483a1.jpg',
    '522baa38-6616-4406-b850-9d34eacce788.jpg',
    '546bcfff-6a7d-4a6e-a309-f93f18b26e7c.jpg',
    '5ab3c4b6-09a4-4d0b-9c3a-51ad076c9b10.jpg',
    '637cf5fc-7e95-422c-ae21-b0a87478fa3f.jpg',
    '643e8582-176c-47de-bb8a-8e10c9ee01d3.jpg',
    '653b0f64-8cf4-406d-8212-b0faf2d05af8.jpg',
    '66837a08-1035-4c39-8b05-771baf1af06b.jpg',
    '6d63f346-8e90-4699-a96e-8d868bd50c94.jpg',
    '734bbf99-6f65-4bbd-b251-d7a3f122c824.jpg',
    '73dfbe7a-8f78-44e6-a191-cca7f6993350.jpg',
    '78efb77e-10c3-496e-8e38-7db316c9353f.jpg',
    '84f7c18f-5d55-439e-8afc-d74ca5e78ae5.jpg',
    '855c751e-1adc-4854-9a8b-debc05914151.jpg',
    '8e108977-08fd-44d3-8808-27f4557b2c8d.jpg',
    '8fec1e95-69b4-408b-9430-ff1db7ffa04b.jpg',
    '95394665-59a1-4045-b133-807d1e1d9c5c.jpg',
    '95d61ae9-0b2a-4061-9f1d-02c0585b3fe0.jpg',
    '9830a504-7cd2-4d91-9d76-5b10ac416e2d.jpg',
    'a5a6430f-b447-4b6e-bec1-6ffd3ed2a3f6.jpg',
    'a7030e1f-2602-4417-9938-61e70694cede.jpg',
    'acb9ec06-f0fb-4803-a9d5-c6b3f68c204f.jpg',
    'ae20848d-ce6a-47e1-8d89-ab36fdbd3b8b.jpg',
    'afc6c0d9-efa5-41ab-a6e8-57de6a216577.jpg',
    'b8484200-53b8-4a49-a13f-5df7361b898d.jpg',
    'c67cdf34-3738-4f97-a073-7124cf71df03.jpg',
    'ce459ebb-0613-45b7-ae8d-a26400ff0808.jpg',
    'd7063c18-0e07-4989-970b-7ad65ce5a672.jpg',
    'd7aabdac-086c-4eac-b58b-7af31c32d218.jpg',
    'dbf6f8f5-43b1-4bdd-a7a2-e2da0546e01a.jpg',
    'df042e37-c82e-444e-8284-213b857abaed.jpg',
    'e4d9ead8-a681-49cc-a7de-ce20d80a2738.jpg',
    'e4ec3674-a59a-4ecf-83c8-a25440c41c1b.jpg',
    'e96f0981-49ce-4823-9875-5fe9b6146230.jpg',
    'f3f04ba2-37ef-4456-85e4-3b9ba31d0e8a.jpg',
    'f92d578a-2580-404b-8726-458649d225ef.jpg',
    'fb8cf767-d098-49e4-b640-468950496153.jpg',
    'fd920444-d49b-4298-a5a5-2790f1e39137.jpg',
    'ffc47dc1-d948-4daa-b26e-e52daa643c9c.jpg'
  ];

  const CELL_W = 210;
  const CELL_H = 240;
  const MIN_SCALE = 0.2;
  const MAX_SCALE = 4;
  const TAP_THRESHOLD = 6;
  const OPEN_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>';
  const ROTATE_LEFT_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 5 10l4-4"/><path d="M5 10h8a6 6 0 1 1 0 12H9"/></svg>';
  const ROTATE_RIGHT_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14l4-4-4-4"/><path d="M19 10h-8a6 6 0 1 0 0 12h4"/></svg>';

  const viewport = document.getElementById('viewport');
  const world = document.getElementById('world');

  // --- Selection state (shows the "open in new tab" button) ---
  let selectedEl = null;

  function selectPhoto(el) {
    if (selectedEl && selectedEl !== el) selectedEl.classList.remove('polaroid--selected');
    selectedEl = el;
    el.classList.add('polaroid--selected');
  }

  function deselectPhoto() {
    if (selectedEl) selectedEl.classList.remove('polaroid--selected');
    selectedEl = null;
  }

  function rotatePhoto(el, deltaDeg) {
    const current = parseFloat(el.dataset.rot) || 0;
    const next = current + deltaDeg;
    el.dataset.rot = String(next);
    el.style.transform = `rotate(${next}deg)`;
    saveLayoutState();
  }

  // --- Persisted layout (position + rotation per image) ---
  const STORAGE_KEY = 'polaroid-board-state-v1';

  function loadSavedLayout() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (err) {
      return {};
    }
  }

  function saveLayoutState() {
    const state = {};
    world.querySelectorAll('.polaroid').forEach((el) => {
      state[el.dataset.file] = {
        left: parseFloat(el.style.left),
        top: parseFloat(el.style.top),
        rot: parseFloat(el.dataset.rot) || 0
      };
    });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) { /* storage unavailable or full */ }
  }

  // --- View state (pan/zoom applied to #world) ---
  let scale = 1;
  let tx = 0;
  let ty = 0;
  let topZ = 1;

  function applyTransform() {
    world.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  }

  function clampScale(s) {
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, s));
  }

  // Zoom while keeping the given screen point visually fixed in place.
  function zoomAt(screenX, screenY, newScale) {
    newScale = clampScale(newScale);
    const worldX = (screenX - tx) / scale;
    const worldY = (screenY - ty) / scale;
    tx = screenX - newScale * worldX;
    ty = screenY - newScale * worldY;
    scale = newScale;
    applyTransform();
  }

  function viewportCenter() {
    const r = viewport.getBoundingClientRect();
    return { x: r.width / 2, y: r.height / 2 };
  }

  function resetView(worldW, worldH) {
    const r = viewport.getBoundingClientRect();
    scale = clampScale(Math.min(r.width / worldW, r.height / worldH) * 0.92);
    tx = (r.width - worldW * scale) / 2;
    ty = (r.height - worldH * scale) / 2;
    applyTransform();
  }

  // Fisher-Yates shuffle, returns a new array.
  function shuffleArray(arr) {
    const result = arr.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  // --- Build the scattered layout of polaroids on the virtual canvas ---
  function buildLayout() {
    const savedLayout = loadSavedLayout();
    const files = shuffleArray(IMAGE_FILES);
    const count = files.length;
    const cols = Math.ceil(Math.sqrt(count * (CELL_H / CELL_W) * 1.3));
    const rows = Math.ceil(count / cols);
    const worldW = cols * CELL_W;
    const worldH = rows * CELL_H;

    world.style.width = `${worldW}px`;
    world.style.height = `${worldH}px`;

    files.forEach((file, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const jitterX = (Math.random() - 0.5) * (CELL_W * 0.4);
      const jitterY = (Math.random() - 0.5) * (CELL_H * 0.4);
      const saved = savedLayout[file];
      const left = saved ? saved.left : col * CELL_W + CELL_W * 0.15 + jitterX;
      const top = saved ? saved.top : row * CELL_H + CELL_H * 0.15 + jitterY;
      const rotation = saved ? saved.rot : (Math.random() - 0.5) * 16;

      const el = document.createElement('div');
      el.className = 'polaroid';
      el.dataset.file = file;
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
      el.style.setProperty('--rot', `${rotation}deg`);
      el.style.transform = `rotate(${rotation}deg)`;
      el.style.zIndex = String(++topZ);
      el.dataset.rot = String(rotation);

      const img = document.createElement('img');
      img.className = 'polaroid__img';
      img.src = `images/${file}`;
      img.alt = 'Wedding polaroid photo';
      img.draggable = false;
      img.loading = 'lazy';

      const openBtn = document.createElement('button');
      openBtn.type = 'button';
      openBtn.className = 'polaroid__action-btn polaroid__open-btn';
      openBtn.title = 'Open image in new tab';
      openBtn.setAttribute('aria-label', 'Open image in new tab');
      openBtn.innerHTML = OPEN_ICON_SVG;
      openBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
      openBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(img.src, '_blank', 'noopener,noreferrer');
      });

      const rotateLeftBtn = document.createElement('button');
      rotateLeftBtn.type = 'button';
      rotateLeftBtn.className = 'polaroid__action-btn polaroid__rotate-btn--left';
      rotateLeftBtn.title = 'Rotate left';
      rotateLeftBtn.setAttribute('aria-label', 'Rotate left');
      rotateLeftBtn.innerHTML = ROTATE_LEFT_ICON_SVG;
      rotateLeftBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
      rotateLeftBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        rotatePhoto(el, -90);
      });

      const rotateRightBtn = document.createElement('button');
      rotateRightBtn.type = 'button';
      rotateRightBtn.className = 'polaroid__action-btn polaroid__rotate-btn--right';
      rotateRightBtn.title = 'Rotate right';
      rotateRightBtn.setAttribute('aria-label', 'Rotate right');
      rotateRightBtn.innerHTML = ROTATE_RIGHT_ICON_SVG;
      rotateRightBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
      rotateRightBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        rotatePhoto(el, 90);
      });

      el.appendChild(img);
      el.appendChild(openBtn);
      el.appendChild(rotateLeftBtn);
      el.appendChild(rotateRightBtn);
      world.appendChild(el);
      makePhotoDraggable(el);
    });

    return { worldW, worldH };
  }

  let activeDrag = null;

  // --- Dragging an individual photo ---
  function makePhotoDraggable(el) {
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;

    el.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
      if (activePointers.size > 1) return; // a second finger is already down elsewhere; let the board pan/pinch
      e.stopPropagation();
      dragging = true;
      el.setPointerCapture(e.pointerId);
      el.classList.add('polaroid--dragging');
      el.style.zIndex = String(++topZ);
      startX = e.clientX;
      startY = e.clientY;
      startLeft = parseFloat(el.style.left);
      startTop = parseFloat(el.style.top);
      activeDrag = {
        el,
        cancel() {
          dragging = false;
          el.classList.remove('polaroid--dragging');
          try { el.releasePointerCapture(e.pointerId); } catch (err) { /* already released */ }
        }
      };
    });

    el.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      e.stopPropagation();
      const dx = (e.clientX - startX) / scale;
      const dy = (e.clientY - startY) / scale;
      el.style.left = `${startLeft + dx}px`;
      el.style.top = `${startTop + dy}px`;
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      el.classList.remove('polaroid--dragging');
      if (activeDrag && activeDrag.el === el) activeDrag = null;
      const moved = Math.hypot(e.clientX - startX, e.clientY - startY);
      if (moved < TAP_THRESHOLD) {
        selectPhoto(el);
      } else {
        saveLayoutState();
      }
      try { el.releasePointerCapture(e.pointerId); } catch (err) { /* already released */ }
    }

    el.addEventListener('pointerup', endDrag);
    el.addEventListener('pointercancel', endDrag);
  }

  // --- Panning the board + pinch-to-zoom ---
  // Tracked at the document level (capture phase) so positions are recorded for every
  // pointer, even ones that started on a photo, letting pinch math use both fingers.
  const activePointers = new Map();
  let panning = false;
  let panStartX = 0;
  let panStartY = 0;
  let panStartTx = 0;
  let panStartTy = 0;
  let pinchStartDist = 0;
  let pinchStartScale = 1;

  function pointerDistance() {
    const pts = [...activePointers.values()];
    const dx = pts[0].x - pts[1].x;
    const dy = pts[0].y - pts[1].y;
    return Math.hypot(dx, dy);
  }

  function pointerMidpoint() {
    const pts = [...activePointers.values()];
    return { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };
  }

  document.addEventListener('pointerdown', (e) => {
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.size >= 2) {
      if (activeDrag) {
        activeDrag.cancel();
        activeDrag = null;
      }
      panning = false;
      pinchStartDist = pointerDistance();
      pinchStartScale = scale;
      return;
    }

    // A single pointer only starts a board pan if it didn't land on a photo;
    // photos claim single-finger touches themselves to drag/select instead.
    if (!e.target.closest('.polaroid')) {
      panning = true;
      viewport.classList.add('viewport--panning');
      panStartX = e.clientX;
      panStartY = e.clientY;
      panStartTx = tx;
      panStartTy = ty;
    }
  }, true);

  document.addEventListener('pointermove', (e) => {
    if (!activePointers.has(e.pointerId)) return;
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.size >= 2) {
      const dist = pointerDistance();
      const mid = pointerMidpoint();
      const ratio = dist / (pinchStartDist || dist);
      zoomAt(mid.x, mid.y, pinchStartScale * ratio);
    } else if (panning) {
      tx = panStartTx + (e.clientX - panStartX);
      ty = panStartTy + (e.clientY - panStartY);
      applyTransform();
    }
  }, true);

  function releasePointer(e) {
    if (activePointers.size === 1 && panning) {
      const moved = Math.hypot(e.clientX - panStartX, e.clientY - panStartY);
      if (moved < TAP_THRESHOLD) deselectPhoto();
    }
    activePointers.delete(e.pointerId);
    if (activePointers.size === 0) {
      panning = false;
      viewport.classList.remove('viewport--panning');
    } else if (activePointers.size === 1) {
      // Resume single-finger panning from the remaining pointer.
      const [remaining] = [...activePointers.values()];
      panning = true;
      panStartX = remaining.x;
      panStartY = remaining.y;
      panStartTx = tx;
      panStartTy = ty;
    }
  }

  document.addEventListener('pointerup', releasePointer, true);
  document.addEventListener('pointercancel', releasePointer, true);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') deselectPhoto();
  });

  // --- Mouse wheel / trackpad zoom ---
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const factor = Math.exp(-e.deltaY * 0.0015);
    const r = viewport.getBoundingClientRect();
    zoomAt(e.clientX - r.left, e.clientY - r.top, scale * factor);
  }, { passive: false });

  // --- Toolbar buttons ---
  document.getElementById('zoomInBtn').addEventListener('click', () => {
    const c = viewportCenter();
    zoomAt(c.x, c.y, scale * 1.25);
  });

  document.getElementById('zoomOutBtn').addEventListener('click', () => {
    const c = viewportCenter();
    zoomAt(c.x, c.y, scale * 0.8);
  });

  let lastWorldSize = { worldW: 0, worldH: 0 };
  document.getElementById('resetBtn').addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    deselectPhoto();
    world.innerHTML = '';
    topZ = 1;
    lastWorldSize = buildLayout();
    resetView(lastWorldSize.worldW, lastWorldSize.worldH);
  });

  // --- Init ---
  lastWorldSize = buildLayout();
  resetView(lastWorldSize.worldW, lastWorldSize.worldH);

  window.addEventListener('resize', () => {
    resetView(lastWorldSize.worldW, lastWorldSize.worldH);
  });
})();
