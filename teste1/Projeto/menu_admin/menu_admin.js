async function puxarMenu(){ 
    fetch('../menu_admin/menu_admin.html').then(response => response.text()).then(data =>{document.getElementById('menuAdmin').innerHTML = data})

    
}

puxarMenu()