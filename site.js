const menuButton=document.querySelector('.menu');
const navigation=document.querySelector('.nav');
if(menuButton&&navigation){menuButton.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню')});navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}))}

const filterButtons=document.querySelectorAll('[data-filter]');
const products=document.querySelectorAll('[data-category]');
filterButtons.forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;filterButtons.forEach(item=>item.classList.remove('active'));button.classList.add('active');products.forEach(product=>{product.hidden=filter!=='all'&&product.dataset.category!==filter})}));

const quoteForm=document.querySelector('#quote-form');
if(quoteForm){quoteForm.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(quoteForm);const text=[`Здравствуйте! Меня зовут ${data.get('name')}.`,`Интересует: ${data.get('product')}.`,data.get('quantity')?`Количество: ${data.get('quantity')}.`:'',data.get('message')?`Комментарий: ${data.get('message')}`:''].filter(Boolean).join('\n');window.open(`https://wa.me/998700794042?text=${encodeURIComponent(text)}`,'_blank','noopener')})}
