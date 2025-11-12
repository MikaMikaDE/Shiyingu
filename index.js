import { buildNav, setActiveNav             } from "./RESOURCES/script/nav.js";
import { loadGalleryBatch, setGalleryConfig } from "./RESOURCES/script/gallery.js";


const initHome = () => {

}


const initAbout = () => {
  
}

const initGallery = (page) => {
  setGalleryConfig({
    batchSize: 20,
    count    : 100,
    folder   : page,
    basePath : "RESOURCES/img"
  });
  loadGalleryBatch();
  setActiveNav(page);
};


const pageMap = {
  Home         : ()=>initHome(),
  About        : ()=>initAbout(),
  Fine_Art     : ()=>initGallery("Fine_Art"),
  ACGs         : ()=>initGallery("ACGs"),
  Illustrations: ()=>initGallery("Illustrations")
};

const route = new URLSearchParams(window.location.search).keys().next().value;
buildNav(pageMap);

