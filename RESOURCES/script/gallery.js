const gallery   = document.getElementById("img-gallery" );
const sentinel  = document.getElementById("inf-sentinel");
let   nextIndex = 1;
let   loading   = false;
let   config;

/*config for loadBatch:*/
//const config   = {
//  count    : 100,
//  batchSize:  5,
//  folder   : "fineArt",
//  basePath : "RESOURCES/img"
//};

export function setGalleryConfig(newConfig) { 
  gallery.innerHTML = "";
  config = newConfig; 
}

export function loadGalleryBatch() {
  if (loading) return; else loading = true;
  const endExclusive = Math.min(nextIndex + config.batchSize, config.count + 1);
  const frag         = document.createDocumentFragment();

  for (let i = nextIndex; i < endExclusive; i++) {
    const url = `${config.basePath}/${encodeURIComponent(config.folder)}/${encodeURIComponent(i)}.png`;
    frag.appendChild(genImageCard(url));
  }

  gallery.appendChild(frag);
  nextIndex = endExclusive;
  loading   = false;

  if (nextIndex > config.count) { // done when we've stepped past the last image
    observer.disconnect();
    sentinel.style.display = "none";
  }
}


function genImageCard(url) {
  const card     = document.createElement("span");
  card.className = "card";
  const img      = new Image();
  img.alt        = "Shiringu Artwork";
  img.loading    = "lazy" ;
  img.decoding   = "async";
  img.src        = url;
  img.addEventListener("error",()=>{ console.error(`Image failed: ${url}`); card.remove(); });
  img.addEventListener("click",()=>{closerLook(img);});
  card.appendChild(img);
  return card;
}


const observer = new IntersectionObserver(
  entries => entries.some(e => e.isIntersecting) && loadGalleryBatch(),
  { root: null, rootMargin: "0px 0px 800px 0px", threshold: 0 }
);
observer.observe(sentinel);






const dia    = document.createElement("dialog");
document.body.appendChild(dia);
dia.addEventListener("click", ()=>{
  dia.close();
});
function closerLook(image) {
  dia.style.backgroundImage = `url("${image.src}")`;
  dia.showModal();
}
