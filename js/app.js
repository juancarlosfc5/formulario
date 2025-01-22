let personas = {
    nombre : '',
    apellido : '',
    telefono : '',
    correo : ''
}

let myForm = document.getElementById('formato')

document.addEventListener('DOMContentLoaded', (e) => {
    let myFrm = new FormData();
    Object.entries(personas).forEach(([key, value]) => myFrm.append(key, value));
    myFrm.forEach((value, key) => myForm.elements[key].value = value);
});

myForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    postData(data).then(r => {
        document.querySelector("pre").innerHTML = r;
    });
});


const postData = async (data) => {
   return JSON.stringify(data);
}