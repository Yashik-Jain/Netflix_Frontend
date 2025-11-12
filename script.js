console.log("hello");
let a = document.querySelector(".box1");
let b = document.querySelector(".desc1");
let c = document.querySelector(".cross1");
let d = document.querySelector(".sign1");

let e = document.querySelector(".box2");
let f = document.querySelector(".desc2");
let g = document.querySelector(".cross2");
let h = document.querySelector(".sign2");

let i = document.querySelector(".box3");
let j = document.querySelector(".desc3");
let k = document.querySelector(".cross3");
let l = document.querySelector(".sign3");

let m = document.querySelector(".box4");
let n = document.querySelector(".desc4");
let o = document.querySelector(".cross4");
let p = document.querySelector(".sign4");

let q = document.querySelector(".box5");
let r = document.querySelector(".desc5");
let s = document.querySelector(".cross5");
let t = document.querySelector(".sign5");

let u = document.querySelector(".box6");
let v = document.querySelector(".desc6");
let w = document.querySelector(".cross6");
let x = document.querySelector(".sign6");

const display = (a, b, c, d) => {
  d.addEventListener("click", () => {
    b.style.display = "block";
    d.style.display = "none";
    c.style.display = "block";
    // c.addEventListener("click",()=>{
    // close(b,c,d);
    // })
  });
};

const close = (b, c, d) => {
  c.addEventListener("click", () => {
    b.style.display = "none";
    d.style.display = "block";
    c.style.display = "none";
  });
};

display(a, b, c, d);
close(b, c, d);

display(e, f, g, h);
close(f, g, h);

display(i, j, k, l);
close(j, k, l);

display(m, n, o, p);
close(n, o, p);

display(q, r, s, t);
close(r, s, t);

display(u, v, w, x);
close(v, w, x);

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function addanchor() {
  const email = document.getElementById("email1").value;
  let an = document.createElement("a");
  an.href = "index4.html";
  an.classList.add("getstarted");
  an.classList.add("anchor");
  let get = document.querySelector(".start12");
  if (isValidEmail(email)) {
    while (get.firstChild) {
      an.appendChild(get.firstChild);
    }
    get.appendChild(an);
  } else {
    alert("invalid email address");
  }
}

document.querySelector(".start12").addEventListener("click", addanchor);
