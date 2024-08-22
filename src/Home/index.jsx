import Header from "../Components/Header";
import { Carousel } from 'react-responsive-carousel';
import ListarProdutos from "../Components/ListarProdutos";

function Cinco(ListaProdutos) {
    const primeirosDiscos = ListaProdutos.nome.slice(0, 5).map((nome, index) => {
        return <li key={index}>{nome}</li>;
    });

    return (
        <ul>
            {primeirosCincoNomes}
        </ul>
    );
}
export default function Home(){
    
    
    return(
        <>
        <Cinco/>
        <Header/>
        <h1>Home</h1>
        </>
        
    )
} 