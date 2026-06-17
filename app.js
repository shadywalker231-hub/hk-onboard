const modules = Array.from({length:15}, (_,i)=>({
 title:`Name ${i+1}`,
 content:`<h1>Name ${i+1}</h1><p>Edit this module content.</p>`
}));

let currentPage=0;
const completed=JSON.parse(localStorage.getItem('completedModules'))||{};

function renderMenu(){
 const menu=document.getElementById('menu');
 menu.innerHTML='';
 modules.forEach((m,i)=>{
  const btn=document.createElement('button');
  btn.className='menu-btn';
  if(i===currentPage) btn.classList.add('active');
  if(completed[i]) btn.classList.add('completed');
  btn.innerHTML=`<span>${m.title}</span><span>${completed[i]?'✓':''}</span>`;
  btn.onclick=()=>{currentPage=i;renderPage();};
  menu.appendChild(btn);
 });
}

function updateProgress(){
 const count=Object.values(completed).filter(Boolean).length;
 const pct=Math.round(count/modules.length*100);
 document.getElementById('progressFill').style.width=pct+'%';
 document.getElementById('progressText').textContent=pct+'%';
}

function renderPage(){
 document.getElementById('contentArea').innerHTML=`<div class="page">${modules[currentPage].content}</div>`;
 document.getElementById('completedCheckbox').checked=completed[currentPage]||false;
 renderMenu();
 updateProgress();
}

document.getElementById('completedCheckbox').addEventListener('change',e=>{
 completed[currentPage]=e.target.checked;
 localStorage.setItem('completedModules',JSON.stringify(completed));
 renderMenu(); updateProgress();
});

document.getElementById('nextBtn').onclick=()=>{
 if(currentPage<modules.length-1){currentPage++;renderPage();}
};
document.getElementById('prevBtn').onclick=()=>{
 if(currentPage>0){currentPage--;renderPage();}
};

renderPage();
