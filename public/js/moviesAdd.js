window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let estado = 0
    let input = document.querySelector('#titulo')
    input.addEventListener('input',(e)=>{
        
        if(e.data){
            switch (e.data) {
                case 's':
                    if(estado == 0){
                        estado = 1
                    }else{
                        estado = 0
                    }
                    
                    break;
                case 'e':
                    if(estado == 1){
                        estado = 2
                    }
                    else if(estado == 4){
                        estado = 5
                    }
                    else{
                        estado = 0
                    }
                    
                    break;
                case 'c':
                    if(estado == 2){
                        estado = 3
                    }else{
                        estado = 0
                    }
                    break;
                case 'r':
                    if(estado == 3){
                        estado = 4
                    }else{
                        estado = 0
                    }
                    break;
                
                case 't':
                    if(estado == 5){
                        estado = 6
                    }else{
                        estado = 0
                    }
                    break;
                case 'o':
                    if(estado == 6){
                        estado = 0
                        alert("SECRETO MAGICO")
                    }else{
                        estado = 0
                    }
                    break;
                default:
                    estado = 0
                    break;
            }
        }
        console.log(estado)
    })

}