$(document).ready(function(){
 
 
 const api = 'http://localhost:3100/comentarios'
 getTodosComentarios()

 //vai criar um botaao 
//toda vez que algum trecho de codigo  chamar esse metodo
//vai criar um botaão <butto> no nosso html
 const createButton = (label, type) => {
    return $('<button>').addClass(`btn btn-${type}`).html(label)
}


//listar todos os comentarios
function getTodosComentarios(){

    //um metodo que tem a ação de criar um botão 
    //
    

    let request = new XMLHttpRequest();
    request.open('GET' , api);
    request.responseType= 'json';
    request.send();

    request.onload = function(){
        let responseData = request.response;
        for(let i=0; i<responseData.length;i++){
            console.log(i)
            

        }
       
            renderRows(responseData)
            $('[name]').val('')
        }
            }
                //vai listar todos os comentarios
                //colocar numa tabela
                //e chamar o metodo
                //create button
                //logo, vai listar todos os comentarios e autores com o botão excluir

            const renderRows = comentarios => {
                   
                const rows = comentarios.map(comentario => {
                   

                    const removeButton = createButton('Excluir', 'danger')
                    removeButton.click(() => removeClient(comentario))

                    return $('<div id="comentarios">')            
                        .append($('<p>')).append($(' <b>Autor:</b>'))
                        .append($('<p>'))
                        .append($('<b>').append(comentario.nome))
                        .append($('<p>'))
                        .append($(' <b>Comentario:</b>').append($('<p>')).append(comentario.comentario))
                        .append($('<h1>').append(removeButton))
                })

                $('#comentarios').html(rows)
            }
        
        
        
        
        
            
            const removeClient = comentario => {
                $.ajax({
                    method: 'DELETE',
                    url: `${api}/${comentario._id}`,
                    success: getTodosComentarios
                })
            }
            //salvar dados no banco
            const saveComentarios = () => {
                const _id = $('[name=id]').val()
                const nome = $('[name=name]').val()
                const comentario = $('[name=comentario]').val()
                console.log(nome)
                console.log(comentario)

                $.ajax({
                    method: _id ? '' : 'POST',
                    url: `${api}/${_id}`,
                    data: _id ? { _id, nome,comentario } : { nome,comentario },
                    success: getTodosComentarios
                })
            }

            $(() => {
               
                $('[save]').click(saveComentarios)
            })





})