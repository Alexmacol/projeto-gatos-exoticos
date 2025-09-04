// c/Users/alexm/projetos/projeto-gatos-exoticos/public/script.js

async function loadAndRenderImages() {
  const ul = document.getElementById("image-list");
  try {
    const response = await fetch("./data/images.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const imagesData = await response.json();
    const fragment = document.createDocumentFragment();

    imagesData.forEach((image) => {
      // Em vez de criar cada elemento individualmente,
      // montamos uma string HTML e a inserimos de uma vez.
      const li = document.createElement("li");
      li.className =
        "relative group rounded-[15px] shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden aspect-square";

      const webpSrc = image.src.replace(/\.(jpeg|jpg|png)$/, ".webp");

      li.innerHTML = `
        <picture>
          <source srcset="${webpSrc}" type="image/webp">
          <img src="${image.src}" 
               alt="${image.alt}" 
               loading="lazy" 
               decoding="async" 
               class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-50">
        </picture>
        <div class="absolute inset-0 rounded-[15px] border-rose-50 border-[12px] transition-all duration-300 group-hover:border-0"></div>
        <div class="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p class="text-white text-center font-semibold text-sm sm:text-base">${image.info}</p>
        </div>
      `;
      fragment.appendChild(li);
    });
    ul.appendChild(fragment);
  } catch (error) {
    console.error("Could not fetch or render images:", error);
    ul.innerHTML = `<p class="text-center text-red-500">Não foi possível carregar as imagens.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", loadAndRenderImages);
