import { buildNav                           } from "./RESOURCES/script/nav.js"
import { loadGalleryBatch, setGalleryConfig } from "./RESOURCES/script/gallery.js"



buildNav();
setGalleryConfig({
  count    : 100,
  batchSize:  5,
  folder   : "ACGs",
  basePath : "RESOURCES/img"
})
loadGalleryBatch();

