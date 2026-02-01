---
title: "Photography"
collection: hobbies
permalink: /hobbies/photography
date: 2026-02-01
prev_page:
  url: /hobbies/civil-aviation
  title: "Aviation"
next_page:
  url: /hobbies/urban-rail-transit
  title: "Urban Rail Transit Systems"
---

<a href="/hobbies/" style="display: inline-block; margin-bottom: 1em; color: #8B0000;"><i class="fas fa-arrow-left"></i> Back to Hobbies</a>

I enjoy capturing the vibrant essence of bustling cities through my lens. From towering skyscrapers to busy streets, I love documenting the energy and beauty of urban landscapes.

## Photo Gallery

<style>
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;
}
.photo-item {
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}
.photo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
.photo-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}
.photo-caption {
  padding: 12px 15px;
  font-size: 14px;
  color: #666;
  text-align: center;
}

/* Modal styles */
.photo-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  z-index: 1000;
  justify-content: center;
  align-items: center;
}
.photo-modal.active {
  display: flex;
}
.photo-modal-content {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  animation: zoomIn 0.3s ease;
}
@keyframes zoomIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.photo-modal-close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
}
.photo-modal-close:hover {
  opacity: 0.7;
}
.photo-modal-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 18px;
  background: rgba(0,0,0,0.5);
  padding: 10px 20px;
  border-radius: 5px;
}
</style>

<div class="photo-gallery">
  <div class="photo-item" onclick="openPhotoModal('/images/photog/Downtown LA.jpg', 'Downtown Los Angeles')">
    <img src="/images/photog/Downtown LA.jpg" alt="Downtown Los Angeles">
    <div class="photo-caption">Downtown Los Angeles</div>
  </div>
  <div class="photo-item" onclick="openPhotoModal('/images/photog/Downtown San Francisco.jpg', 'Downtown San Francisco')">
    <img src="/images/photog/Downtown San Francisco.jpg" alt="Downtown San Francisco">
    <div class="photo-caption">Downtown San Francisco</div>
  </div>
  <div class="photo-item" onclick="openPhotoModal('/images/photog/New York Manhattan.jpg', 'New York Manhattan')">
    <img src="/images/photog/New York Manhattan.jpg" alt="New York Manhattan">
    <div class="photo-caption">New York Manhattan</div>
  </div>
  <div class="photo-item" onclick="openPhotoModal('/images/photog/Singapore Marina Bay.jpg', 'Singapore Marina Bay')">
    <img src="/images/photog/Singapore Marina Bay.jpg" alt="Singapore Marina Bay">
    <div class="photo-caption">Singapore Marina Bay</div>
  </div>
</div>

<!-- Photo Modal -->
<div class="photo-modal" id="photoModal" onclick="closePhotoModal()">
  <span class="photo-modal-close">&times;</span>
  <img class="photo-modal-content" id="modalImage">
  <div class="photo-modal-caption" id="modalCaption"></div>
</div>

<script>
function openPhotoModal(imgSrc, caption) {
  const modal = document.getElementById('photoModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  
  modal.classList.add('active');
  modalImg.src = imgSrc;
  modalCaption.textContent = caption;
  document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
  const modal = document.getElementById('photoModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closePhotoModal();
  }
});
</script>

---

*More photos will be added soon as I continue to explore and capture the beauty of cities around the world.*
