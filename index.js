const section = document.querySelector(".cards-planos");

const mock = [
    {
        id: 1,
        nome: "Flex",
        quantidadeDeCursos: 8,
        estilos:{
            cor:"rgba(56,182,255,255)",
            check:"/img/check-svgrepo-com (2).svg"
        },
        preco: 59.99,
        descricao: "Exemplo descricao",
        cursos: [
            {
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11"

            }
        ]
    },
    {
        id: 2,
        nome: "Standard",
        quantidadeDeCursos: 8,
        estilos:{
            cor:"#0d50ad",
            letras:"black",
            check:"/img/check-svgrepo-com (2).svg"
        },
        preco: 99.99,
        descricao: "Exemplo descricao",
        cursos: [
            {
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11"

            }
        ]
    },
    {
        id: 3,
        nome: "Pro",
        quantidadeDeCursos: 8,
        estilos:{
            cor:"black",
            letras:"#ffffff",
            check:"/img/check-svgrepo-com (2).svg"
        },
        preco: 119.99,
        descricao: "Exemplo descricao",
        cursos: [
            {
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11"

            }
        ]
    },
    {
        id: 4,
        nome: "Ultimate",
        quantidadeDeCursos: 8,
        estilos:{
            cor:"rgba(56,182,255,255)",
            letras:"black",
            check:"/img/check-svgrepo-com (2).svg"
        },
        preco: 149.99,
        descricao: "Exemplo descricao",
        cursos: [
            {
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11"

            }
        ]
    },
    {
        id: 5,
        nome: "pacote-5",
        quantidadeDeCursos: 8,
        estilos:{
            cor:"rgba(56,182,255,255)",
            letras:"#ffffff",
            check:"/img/check-svgrepo-com.svg"
        },
        preco: 149.99,
        descricao: "Exemplo descricao",
        cursos: [
            {
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11",
                nome: "windows 11"
            }
        ]
    }
]

mock.forEach(item => {
    const [real, centavos] = item.preco.toString().split(".")
    section.innerHTML += `
    <div class="card" style="background-color:${item.estilos.cor};color:${item.estilos.letras};">
                <h1>${item.nome}</h1>
                <div class="container-valor">
                    <h1>R$</h1>
                    <h1 class="valor">${real}</h1>
                    <div class="mes">
                        <h1 class="centavos">${centavos}</h1>
                        <h2>/mês</h2>
                    </div>
                </div>
                <button class="button-vantagens">Vantagens</button>
                <div class="van">
                    <div class="vantagens">
                        <img class="check" src="${item.estilos.check}" alt="">
                        <h2><b>${item.quantidadeDeCursos} cursos</b><br>à sua escolha</h2>
                    </div>
                    <div class="vantagens">
                        <img class="check" src="${item.estilos.check}" alt="">
                        <h2>Material didático<br><b>digital</b></h2>
                    </div>
                </div>
                <button class="button-comece-ja">Comece já!</button>
            </div>`

})