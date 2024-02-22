
//- O aluno deve criar um objeto com as seguintes propriedades:
//  - nome
//- idade 
//- cursando (um array com as matérias que o aluno está cursando)
//- presença (um array de datas que o aluno esteve presente)
//- ra (registro acadêmico) 

//O aluno deve criar as seguintes validações:
//- O nome do aluno deve ter no mínimo 10 caracteres
//- A idade do aluno deve ser maior que 14
//- O aluno deve estar cursando no mínimo 3 matéria
//- O aluno deve ter no mínimo 2 presenças
//- O RA do aluno deve ter 7 caracteres


let aluno = {
    nome: "aaaaaaaaaaaaaaaa", 
    idade: 10,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10"],
    ra: "220022"
}

function validacao(){
    
    let cod1 = null;
    let cod2 = null;
    let cod3 = null;
    let cod4 = null;
    let cod5 = null;

    if(aluno.nome.length>=10){
       console.log("nome certo");
    }
    else{
    cod1 = "Nome errado";
    }
       if(aluno.idade>14){
        console.log("idade esta certa");
       }
       else{
        cod2 = "erro idade";
       
        }
    if(aluno.cursando.length >=3){
        console.log("cursos certos");
    }
    else{
        cod3 = "erro curso";
        
        }
    if(aluno.presença.length >=2){
        console.log("presença suficiente");
    }
    else{
        cod4 = "erro presença";
        
        }
    if(aluno.ra.length == 7){
        console.log("Ra válido");

    }
    else{
        cod5 = "erro ra";
      
        }


    return cod1+""+cod2+""+cod3+""+cod4+""+cod5;

    }
 
console.log(validacao());
