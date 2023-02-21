
var isCredit = false;
var isShowing = false;

async function showCredit(){
    if(isCredit) return;
    document.querySelector('.toggle').classList.toggle('active');
    isCredit = true;

    await new Promise(resolve => setTimeout(resolve, 3000)); 
    document.querySelector('.toggle').classList.toggle('active');
    isCredit = false;
};

function resetDetails(){
    document.querySelectorAll('.bouton').forEach((item) => {
        if(item.classList.contains('details')) item.classList.remove('details');
        if(item.classList.contains('small')) item.classList.remove('small');
        if(document.querySelector('.choice-section').classList.contains('details')) document.querySelector('.choice-section').classList.remove('details');
    });
};
async function showDetails(id){
    if(isShowing) return;
    isShowing = true;
    const detailsList = ['Mon parcours<p id="td" class="text-details"><br><br>2022-2025 : école ingénieur INSA spécialité informatique et cybersécurité</p>', 'Mes compétences<p id="td" class="text-details"><br><br>lslkfjlskfjs</p>', 'Mes expériences<p id="td" class="text-details"><br><br>lslkfjlskfjs</p>'];
    const itemList = ['Mon parcours', 'Mes compétences', 'Mes expériences'];
    var ok = false;
    var i = 0;
    if(!document.querySelector('.choice-section').classList.contains('details')) document.querySelector('.choice-section').classList.add('details');
    document.querySelectorAll('.bouton').forEach((item) => {
        if(item.id == id) {
            if(item.classList.contains('details')) {
                item.innerHTML = itemList[i];
                item.style.transform = 'translateX(0%)';
                ok = true
            }
            else {
                item.classList.add('details');
                item.style.transform = 'translateX(95%)';
                item.innerHTML = detailsList[i];
            }

            if(item.classList.contains('small')) {
                item.classList.remove('small');
            }
        }

        else {
            if(item.classList.contains('details')) {
                item.classList.remove('details');
                item.style.transform = 'translateX(0%)';
            }
            if(!item.classList.contains('small')) item.classList.add('small');
            item.innerHTML = itemList[i];
        }
        i++;
    });
    if(ok) resetDetails();
    else {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        document.getElementById('td').classList.add('block');
        await new Promise(resolve => setTimeout(resolve, 100)); 
        document.getElementById('td').classList.add('active');
    }
    isShowing = false;
};