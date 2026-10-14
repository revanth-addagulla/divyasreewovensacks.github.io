function toggleMenu(){document.getElementById("nav").classList.toggle("open")}
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));

// Replace this number with the business WhatsApp number before publishing.
// Use country code, digits only. Example: 919876543210
const WHATSAPP_NUMBER = "919246628685";

function sendEnquiry(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const company=document.getElementById("company").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const message=document.getElementById("message").value.trim();
  const text=`Hello Divyasree Woven Sacks,%0A%0AName: ${encodeURIComponent(name)}%0ACompany: ${encodeURIComponent(company)}%0APhone: ${encodeURIComponent(phone)}%0ARequirement: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,"_blank");
}