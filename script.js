const nav=document.querySelector('.navin'),hamb=document.querySelector('.hamb');if(hamb)hamb.onclick=()=>nav.classList.toggle('open');
const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dot')];let si=0;function showSlide(n){slides.forEach((x,i)=>x.classList.toggle('active',i===n));dots.forEach((x,i)=>x.classList.toggle('active',i===n));si=n}dots.forEach((d,i)=>d.onclick=()=>showSlide(i));if(slides.length)setInterval(()=>showSlide((si+1)%slides.length),10000);
const reviews=[...document.querySelectorAll('.review')];let ri=0;if(reviews.length)setInterval(()=>{reviews[ri].classList.remove('active');ri=(ri+1)%reviews.length;reviews[ri].classList.add('active')},3000);
const form=document.getElementById('loanForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value.trim(),m=document.getElementById('mobile').value.trim(),c=document.getElementById('city').value.trim(),l=document.getElementById('loanType').value;if(!/^\d{10}$/.test(m)){alert('Please enter a valid 10-digit mobile number.');return}const msg=`Loan Enquiry - MN Tech Finsolutions Pvt Ltd\nName: ${n}\nMobile: ${m}\nCity: ${c}\nLoan Type: ${l}`;window.open(`https://wa.me/917397270023?text=${encodeURIComponent(msg)}`,'_blank')});

document.querySelectorAll('.product,.process-card,.review,.partner,.content-card').forEach(el=>{
 el.addEventListener('mousemove',e=>{
   const r=el.getBoundingClientRect();
   el.style.backgroundImage=`radial-gradient(circle at ${e.clientX-r.left}px ${e.clientY-r.top}px, rgba(25,181,233,.10), transparent 120px)`;
 });
 el.addEventListener('mouseleave',()=>el.style.backgroundImage='');
});
