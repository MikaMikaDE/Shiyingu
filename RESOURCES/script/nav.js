export const buildNav = ()=>{
  const header = document.querySelector("header");
  const navbar = document.querySelector("nav"   );
  const footer = document.querySelector("footer");
  const pages  = ["Home","About","Fine Art", "ACGs", "Illustrations"]
  pages.forEach(page=>{
    const a     = document.createElement("a");
    a.innerText = page;
    a.href = `./${page}`;
    navbar.appendChild(a);
  });
  footer.innerText = "Copyright @ 2025 shiyingu.com"
}
