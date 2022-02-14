import Footer from "../components/Footer";
import Header from "../components/Header";
import Image1 from "../images/passeio-1.png";
import Image2 from "../images/passeio-2.png";
import Image3 from "../images/passeio-3.png";
import Image4 from "../images/passeio-4.png";
import Image5 from "../images/passeio-5.png";
import Image6 from "../images/passeio-6.png";
import { useLocation } from 'react-router-dom';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const wpp = <FontAwesomeIcon icon={faWhatsapp} />

export default function Packages () {
    const { pathname } = useLocation();
    if(pathname.includes('/01')){
        return (
            <main>
            <Header/>
            <div className="package-container">
            <div className="image-container">
            <img src={Image1} alt="pacote-1" className="image" />
            </div>
            <div className="package-content">
            <h1>Lagoa Azul</h1>
            <p>A Lagoa Azul é uma bela lagoa de águas azuis localizada em Presidente Figueiredo, a cerca de duas horas de Manaus. Sua coloração azul logo chamou a atenção e hoje ela recebe muitas visitas todos os dias.
            A Lagoa fica numa propriedade particular na Comunidade Boa Esperança em Presidente Figueiredo. O acesso é pelo Ramal do Km-120 da Rodovia BR-174, que liga Manaus a Boa Vista, na Comunidade Boa Esperança.
            O motivo por trás da coloração azul da água em plena selva amazônica pode ser atribuído ao excesso de algas cianofíceas (algas azuis) ou ainda pelo fato da água ser muito pura e refletir a cor azul. Isso porque a a água da lagoa é proveniente do aquífero das Guianas, uma das águas mais limpas do planeta.
            </p>
            <h1>Gruta da Judeia</h1>
            <p> Quem faz o passeio que leva à Gruta da Judéia, no município de Presidente Figueiredo, a pouco mais de 100 km da capital do Amazonas, encontra tudo o que procura para um dia revigorante em meio à natureza: preservação ambiental, muitas aves nativas, trilha com infraestrutura, cavernas seguras e lagoas que se formam abaixo das quedas d’água em um cenário de encher os olhos.
            A trilha da Gruta da Judéia passa pela Caverna Refúgio do Maroaga, um dos passeios mais visitados do município conhecido como ‘terra das cachoeiras’, mas não se estende por mais do que dois quilômetros. A queda d’água da gruta corta a caverna gerando um espetáculo de cores por conta da coloração da água  
            </p>
            <h1>Caverna do Maroaga</h1>
            <p>A Área de Proteção Ambiental (APA) Caverna do Maroaga, localizada no município de Presidente Figueiredo (distante 117 quilômetros de Manaus), abriga uma área de 374.700 hectares de um conjunto de cavernas, grutas e cachoeiras, que formam uma das mais belas paisagens do Amazonas.Devido ao fácil acesso pela capital, o lugar se tornou um atrativo turístico bastante procurado para ficar perto da natureza e de espécies nativas da região. A APA é uma das 42 Unidades de Conservação (UC) gerenciadas pela Secretaria de Estado do Meio Ambiente (Sema).
            Quem for se aventurar na APA poderá conhecer, por exemplo, a Caverna do Maroaga e a Gruta da Judeia, localizadas no Km 06 da margem direita da estrada de Balbina (AM-240). O complexo de cavernas de formação arenítica, onde se localiza a Caverna Refúgio do Maroaga, é um dos atributos mais relevantes da região.</p>

            <h3>Itinerário</h3>
            <p>Lagoa Azul, Gruta da Judeia, Caverna do Maroaga</p>
            <h3>Valores</h3>
            <p>A partir de R$ 120,00</p>
            <p>Incluso: Transporte (saindo de Manaus-AM), Guia, Taxas de Acesso e Refeição</p>
            <h3>Entre em contato com a Agência:</h3>
            <a href="https://api.whatsapp.com/send?phone=5592984166641" target="_blank" className="btn" rel="noreferrer">{wpp} Agência Passeio Figueiredo Tour</a>
            </div>
            </div>
            
            <Footer/>
        </main>
        )
    }
    if(pathname.includes('/02')){
        return (
            <main>
            <Header/>
            <div className="package-container">
            <div className="image-container">
            <img src={Image2} alt="pacote-2" className="image" />
            </div>
            <div className="package-content">
            <h1>Cachoeira da Asframa</h1>
            <p>Localizada no município de Presidente Figueiredo no estado do Amazonas, a Cachoeira Asframa possui um local tranquilo com restaurante, bosque, campo de futebol, tornando-se ótimo para viagens em família, com os amigos e para levar a criançada.Dentre as várias cachoeiras de Presidente Figueiredo, a Cachoeira Asframa é a melhor, principalmente quem vai com crianças, pois possui local limpo, de fácil acesso, apoio de bar e restaurante, ambiente familiar, e pocinhos de piscina, tornando um lugar tranquilo, agradável e relaxante para se visitar. </p>
            <h3>Valores</h3>
            <p>A partir de R$ 70,00</p>
            <p>Incluso: Transporte (saindo de Manaus-AM), Taxas de Acesso</p>
            <h3>Entre em contato com a Agência:</h3>
            <a href="https://api.whatsapp.com/send?phone=5592984166641" target="_blank" className="btn" rel="noreferrer">{wpp} Agência Passeio Figueiredo Tour</a>
            </div>
            </div>
            <Footer/>
        </main>
        )
    }
    if(pathname.includes('/03')){
        return (
            <main>
            <Header/>
            <div className="package-container">
            <div className="image-container">
            <img src={Image3} alt="pacote-3" className="image" />
            </div>
            <div className="package-content">
            <h1>Lagoa Azul</h1>
            <p>A Lagoa Azul é uma bela lagoa de águas azuis localizada em Presidente Figueiredo, a cerca de duas horas de Manaus. Sua coloração azul logo chamou a atenção e hoje ela recebe muitas visitas todos os dias.
            A Lagoa fica numa propriedade particular na Comunidade Boa Esperança em Presidente Figueiredo. O acesso é pelo Ramal do Km-120 da Rodovia BR-174, que liga Manaus a Boa Vista, na Comunidade Boa Esperança.
            O motivo por trás da coloração azul da água em plena selva amazônica pode ser atribuído ao excesso de algas cianofíceas (algas azuis) ou ainda pelo fato da água ser muito pura e refletir a cor azul. Isso porque a a água da lagoa é proveniente do aquífero das Guianas, uma das águas mais limpas do planeta.
            </p>
            <h1>Fervedouro do Maranhão</h1>
            <p>O fervedouro do Maranhão é um dos atrativos do complexo aquático conhecido como Lagoa Azul do Maranhão, na comunidade Nova Esperança, em Presidente Figueiredo. Na área também tem lagoa, cachoeira e igarapé.O fervedouro é um poço de água transparente com fundo de argila. É a presença do Aquífero das Guianas, um dos maiores mananciais de água pura do mundo, que aflorou precisamente naquele local.
            No fundo do lago, a potente nascente “ferve” quando se faz barulho. O fenômeno é curioso e atrai muitos visitantes.Localizado no meio da mata e com a sinfonia dos pássaros como trilha musical, o local transmite uma sensação de paz e plenitude. E rende belas fotos.</p>
            <h1>Corredeira do Urubui</h1>
            <p>Lugar agradável de corredeiras, com águas geladas, a partir de um rio muito bonito.Localizada entre a natureza exuberante, possui bares e restaurantes em volta que oferecem a boa culinária Amazonense</p>
            <h1>Paredão das Lajes</h1>
            <p>
            O Paredão das Lajes está localizado no KM 113 de quem vai de Manaus com destino a Boa Vista-RR. Do lado direito há mais de 15 boulders já catalogados e um pequeno cânion com cerca de 12 metros de altura com aproximadamente 60 m de largura. O cânion, conhecido como Paredão das Lajes, é um local de referência para a prática de psicoblocos.
            O paredão é bastante visitado para prática de rapel e é particularmente assustador… Para se acampar no local, o valor é R$ 15 por pessoa (preço 2021). O lugar possui pouca área para banho e o campo de montagem da barraca e rede era bem restrito.</p>
            <h3>Itinerário</h3>
            <p>Lagoa Azul, Fervedouro do Maranhão, Corredeira do Urubuí, Paredão das Lajes.</p>
            <h3>Valores</h3>
            <p>A partir de R$ 120,00</p>
            <p>Incluso: Transporte (saindo de Manaus-AM), Guia, Taxas de Acesso e Almoço.</p>
            <h3>Entre em contato com a Agência:</h3>
            <a href="https://api.whatsapp.com/send?phone=5592984166641" target="_blank" className="btn" rel="noreferrer">{wpp} Agência Passeio Figueiredo Tour</a>
            </div>
            </div>
            <Footer/>
        </main>
        )
    }
    if(pathname.includes('/04')){
        return (
            <main>
            <Header/>
            <div className="package-container">
            <div className="image-container">
            <img src={Image4} alt="pacote-4" className="image" />
            </div>
            <div className="package-content">
            <h1>Lago do Robertinho</h1>
            <p>O Lago do Robertinho é um balneário de águas transparentes no meio do cerrado de Roraima. Localizado a 50 km da capital Boa Vista, o lago atrai muitas pessoas em busca da beleza e suas opções de lazer.
            A cidade mais próxima do Lago do Robertinho é Boa Vista, a 50 km de distância. O acesso é pela BR 174 sentido Pacaraima e depois por uma estrada de terra. Na BR 174 tem uma placa indicando a entrada para a estrada de terra. Todo o caminho é muito bem sinalizado e é bem fácil chegar.
            O local é ideal para famílias ou amigos que estão em busca de um sossego, principalmente após aventurar-se pelos municípios com cachoeiras de Roraima.</p>
            <h1>Aqua Mak</h1>
            <p>
            O maior Parque Aquático do Hemisfério norte do Brasil. Um parque com uma excelente infra-estrutura em meio à natureza utilizando água natural e corrente.
            Considerado uma das mais visitadas atrações de Roraima.
            </p>
            <h3>Itinerário</h3>
            <p>Lago do Robertinho e Aqua Mak</p>
            <h3>Valores</h3>
            <p>A partir de R$ 470,00</p>
            <p>Incluso: Transporte (saindo de Manaus-AM), Pernoite no Hotel, Café da Manhã, Entradas.</p>
            <h3>Entre em contato com a Agência:</h3>
            <a href="https://www.whatsapp.com/catalog/559293844780/?app_absent=0" target="_blank" className="btn" rel="noreferrer">{wpp} AraújoTur Agência de Turismo</a>
            </div>
            </div>
            <Footer/>
        </main>
        )
    }
    if(pathname.includes('/05')){
        return (
            <main>
            <Header/>
            <div className="package-container">
            <div className="image-container">
            <img src={Image5} alt="pacote-5" className="image" />
            </div>
            <div className="package-content">
            <h1>Safári Amazônico</h1>
            <p>Navegando pelo Rio Negro acima, em direção à plataforma flutuante, cruzaremos a Ponte Jornalista Phelippe Daou, mais conhecida como Ponte Rio Negro com um comprimento de 3.595 metros. Chegando na plataforma flutuante de contemplação dos botos cor-de-rosa poderemos nadar com esses dóceis animais e observá-los sendo alimentados por um ribeirinho legalizado pelo Ibama. Os grupos são separados de 10 em 10, seguindo as regras impostas pelos órgãos ambientais, e assim todos poderão se divertir, contemplando essa maravilha da natureza.</p>
            <p>

            A viagem segue com destino à comunidade indígena onde os índios oriundos do alto Rio Negro e de diferentes etnias se reúnem para compartilhar conosco suas danças e cultura. Como convidados de honra, somos chamados para participar de um ritual de apresentação acompanhado de muita alegria, após esse breve momento será disponibilizado um tempo para fotografias e compras de artesanato. Silenciar e permitir imergir naqueles poucos minutos na companhia de olhos brilhantes e sorrisos cativantes, é transformador, por isso, viva esse momento.
            Continuando a viagem, iremos descer o Rio Negro passando mais uma vez pela orla da cidade onde veremos as casas palafitas. No Parque Ecológico Janauary, região de floresta alagada, iremos encontrar os Igapós (áreas alagadas) e Igarapés (curso d’água) e também visitar as famosas vitórias-régias, plantas aquáticas típicas da região amazônica. No parque será servido um almoço regional em restaurante flutuante com cardápio à base de peixes, de carne ou frango, saladas e acompanhamentos, buffet self-service.</p> 
            <p>

            Próximo ao parque, visitaremos a comunidade de casas flutuantes do Catalão para a contemplação do peixe Pirarucu (Arapaima Gigas), o gigante das águas doces, nativo da Amazônia. Por fim, a última parada para observar o fenômeno Encontro das Águas, local onde o Rio Negro e Solimões se encontram sem que suas águas se misturem, uma experiência que encanta aos olhos de todos. Ao som do motor e no balanço do banzeiro retornamos ao porto para desembarque e fim dessa incrível experiência.</p>
            <h3>Itinerário</h3>
            <p>Encontro das Águas, Parque Ecológico January, Comunidade Indígena.</p>
            <h3>Valores</h3>
            <p>A partir de R$ 100,00</p>
            <p>Incluso: Transporte (saindo de Manaus-AM), Almoço, Visita a Tribo.</p>
            <h3>Entre em contato com a Agência:</h3>
            <a href="https://api.whatsapp.com/send?phone=5592982061940&text=Seja+Bem+Vindo+a+RealturManaus" target="_blank" className="btn" rel="noreferrer">{wpp} Realtur Agência de Turismo</a>
            </div>
            </div>
            <Footer/>
        </main>
        )
    }
    if(pathname.includes('/06')){
        return (
            <main>
            <Header/>
            <div className="package-container">
            <div className="image-container">
            <img src={Image6} alt="pacote-6" className="image" />
            </div>
            <div className="package-content">
            <h1>Serra do Tepequém</h1>
            <p>Nem tudo o que a natureza mostra nós percebemos. Nem tudo o que ela esconde deixamos de perceber. Tudo depende de ter atenção e olhos voltados para o que nos rodeia e integrar-se à natureza. Em Roraima não há como não ver, a uma pequena distância e por uma estrada bem acessível, um dos mais belos pontos turísticos do Estado: A Serra do Tepequém. 
            No caminho para a serra, a paisagem vai mudando a cada quilômetro rodado. O cerrado e os igarapés que lembram o Pantanal vão, aos poucos, cedendo lugar à mata fechada. Conhecer o Tepequém é reviver um pouco a história de Roraima, e apreciar um dos lugares mais deslumbrantes do Estado.</p>
            <h3>Itinerário</h3>
            <p>Comunidade do Tepequém, Cachoeira do Paiva, Cachoeira do Barata, Vila Cabo Sobral, Cachoeira do Sobral, rio Preto e Platô da Serra do Tepequém.</p>
            <h3>Valores</h3>
            <p>A partir de R$ 450,00</p>
            <p>Incluso: Transporte (saindo de Manaus-AM), Guia e Camping</p>
            <h3>Entre em contato com a Agência:</h3>
            <a href="https://api.whatsapp.com/send?phone=559291905100" target="_blank" className="btn" rel="noreferrer">{wpp} Agência de Turismo Juju Tour</a>
            </div>
            </div>
            <Footer/>
        </main>
        )
    }
    return (
        <main>
            <Header/>
            <div className="package-container">
                <h1 className="package-content">Erro Página Invalida</h1>
            </div>
            <Footer/>
        </main>
    )
}