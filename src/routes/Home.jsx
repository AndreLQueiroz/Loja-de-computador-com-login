import Imagem1 from '../assets/imagem1.jpg'
import Imagem2 from '../assets/imagem2.jpg'
import Imagem3 from '../assets/imagem3.jpg'
import Imagem4 from '../assets/imagem4.jpg'
import '../css/loja.css'

const Home=()=>{
    return(
        <>
        <header>
            <h1>Loja Kaboom</h1>
        </header>
        <main>
            <article className='produto-grid' >
                <section className='produto-item span-row-2'>
                    <img src={Imagem1} alt='produto-1' id='image'/>
                    <div>
                        <h3>Produto-1</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>
                <section className='produto-item'>
                    <img src={Imagem2} alt="produto-2" id='image' />
                    <div>
                        <h3>Produto-2</h3>
                        <p>R$ 200.00</p>
                    </div>
                </section>
                <section className='produto-item'>
                    <img src={Imagem3} alt="produto-3" id='image' />
                    <div>
                        <h3>Produto-3</h3>
                        <p>R$300.00</p>
                    </div> 
                </section>
                <section className='produto-item span-row-2'>
                    <img src={Imagem2} alt="produto-4" id='image' />
                    <div>
                        <h3>Produto-4</h3>
                        <p>R$400.00</p>
                    </div> 
                </section>
                <section className='produto-item span-row-2 span-col-2'>
                    <img src={Imagem3} alt="produto-5" id='image' />
                    <div>
                        <h3>Produto-5</h3>
                        <p>R$500.00</p>
                    </div> 
                </section>
                <section className='produto-item'>
                    <img src={Imagem1} alt="produto-6" id='image' />
                    <div>
                        <h3>Produto-6</h3>
                        <p>R$600.00</p>
                    </div> 
                </section>
                <section className='produto-item'>
                    <img src={Imagem2} alt="produto-7" id='image' />
                    <div>
                        <h3>Produto-7</h3>
                        <p>R$700.00</p>
                    </div> 
                </section>
                <section className='produto-item'>
                    <img src={Imagem1} alt="produto-8" id='image' />
                    <div>
                        <h3>Produto-8</h3>
                        <p>R$800.00</p>
                    </div> 
                </section>
                <section className='produto-item'>
                    <img src={Imagem3} alt="produto-9" id='image' />
                    <div>
                        <h3>Produto-9</h3>
                        <p>R$900.00</p>
                    </div> 
                </section>
                <section className='produto-item'>
                    <img src={Imagem1} alt="produto-10" id='image' />
                    <div>
                        <h3>Produto-10</h3>
                        <p>R$1000.00</p>
                    </div> 
                </section>
                <section className='produto-item'>
                    <img src={Imagem2} alt="produto-11" id='image' />
                    <div>
                        <h3>Produto-11</h3>
                        <p>R$1100.00</p>
                    </div> 
                </section>
                

                

            </article>

        </main>
        </>
    )
}
export default Home