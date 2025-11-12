let navAs = [];
export const buildNav = (pageMap)=>{
  const navbar = document.querySelector("nav"   );
  const footer = document.querySelector("footer");
  Object.entries(pageMap).forEach(([name, fn])=>navbar.appendChild(newNavEntry(name, fn)));
  footer.innerText = "Copyright @ 2025 shiyingu.com"
}

const newNavEntry = (name, fn) => {
  const a     = document.createElement("a");
  a.innerText = name.replaceAll("_", " "); //a.href = `./?${page}`;
  a.addEventListener("click", fn);
  navAs.push(a);
  return a;
}

export const setActiveNav = (page) => navAs
  .forEach(a => a.classList.toggle("activePage", a.textContent === page));

