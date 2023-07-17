import './App.scss';
import CustomAppBar from "./components/AppBar.jsx";
import ControlledCarousel from "./components/Slider.jsx";
import MediaCard from "./components/Product.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import imageSrc from './assets/blog1.jpg';
import imageSrc2 from './assets/blog2.jpg';
import imageSrc3 from './assets/blog3.jpg';
import FormFloatingTextareaExample from "./components/Form.jsx"
import Button from 'react-bootstrap/Button';
import SearchAppBar from "./components/AppBar.jsx";


const supabaseUrl = 'https://kaavkvsfytaancvipvbr.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthYXZrdnNmeXRhYW5jdmlwdmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwNTQ1MDcsImV4cCI6MjAwNDYzMDUwN30.Ms-3PcpWwFmdv2sW83UA6L8Q5kz-CIlimPj-ClD2wvo";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const { data } = await supabase.from("perfumes").select();
        setProducts(data);
    }

    return (
        <>

            <SearchAppBar/>
                {/*<CustomAppBar />*/}
            <ControlledCarousel />

            <div className="products-heading">
                <h2>Nasze produkty</h2>
            </div>

            <div className="product-list">
                {products.map((product) => (
                    <MediaCard
                        key={product.id}
                        className="media-card"
                        name={product.name}
                        description={product.description}
                        image="../assets/david_beckham.jpg"
                        price={product.price + "zł"}
                    />
                ))}
            </div>

            <div className="articles">
                <div className="article">
                    <img src={imageSrc} alt="Zdjęcie" />
                        <div className="text-article">
                            <h4>Substancje zapachowe</h4>
                            <p>Jedną z grup występujących w kosmetykach są związki zapachowe. Substancje te są związkami lotnymi, które pobudzają receptory węchowe. Dzięki receptorom mamy możliwość odbierania zapachów m.in. owocowych czy kwiatowych. Budowa chemiczna oraz zjawisko izomerii mają wpływ na rodzaj i intensywność zapachu. Substancje zapachowe posiadają osmoforową grupę funkcyjną np. ketonową, aldehydową czy hydroksylową. Przykładami są nerol o różano-pomarańczowym zapachu oraz jego izomer geraniol charateryzujący się wyłącznie już wonią różaną. Zapachy dzielimy na naturalne: roślinne i zwierzęce, jak i syntetyczne. Przy wyborze kosmetyku szukajmy tych, które zawierają w składzie naturalne olejki eteryczne.</p>
                        </div>
                    </div>
                <div className="article">
                    <div className="text-article">
                        <h4>Związki przeciwpotne- sole glinu</h4>
                        <p>Głównych skutkiem stosowania tych soli jest zatkanie gruczołów potowych, wydzielanie potu zostaje zablokowane, więc nie wystąpi też nieprzyjemny skutek pocenia się- przykry zapach. Zatykanie gruczołów potowych może skutkować ich stanem zapalnym, podrażnieniem i przesuszeniem skóry. Światowa organizacja zdrowia wydała dokument świadczący o możliwości negatywnego oddziaływania przez sole glinu na chorobę Alzheimera. Stwierdzono wiele przypadków  u kobiet z nowotworem piersi w komórkach znajdowały się związki glinu, ponieważ te związki kumulują się, przenikają przez barierę skórną i działają kancerogennie. Alternatywą są dezodoranty, które działające silnie antybakteryjnie, nie zawierające soli glinu. Zahamowany rozwój bakterii zapobiega powstawaniu nieprzyjemnego zapachu bez negatywnych dla zdrowia skutków ubocznych, właśnie takie produkty znajdziecie w naszej ofercie.</p>
                    </div>
                        <img src={imageSrc2} alt="Zdjęcie" />
                </div>
                <div className="article">
                        <img src={imageSrc3} alt="Zdjęcie" />
                    <div className="text-article">
                        <h4>SLS- sodowy siarczan laurylu. Czy taki straszny?</h4>
                        <p>Związek należy do laurosiarczanów, które zaliczane są do syntetycznych detergentów, główne zastosowanie znalazły w czyszczeniu różnorodnych maszyn, urządzeń i podłóg. Cenną właściwością SLS jest działanie odtłuszczające. Wykorzystanie w produktach jest bardzo szerokie i ciężko znaleźć kosmetyk, który w swojej recepturze nie zawiera tego związku. Obecny w składzie produktów myjących: szamponów, mydeł, żelach pod prysznic, płynach do kąpieli. Występuje w tonikach do odświeżania skóry twarzy, zmywaczach do paznokci. Efektów ubocznych stosowania laurosiarczanów jest bardzo wiele. Objawy wywołane na skórze to powstanie stanów zapalnych, guzków i cyst zapalnych. Może dojść do powstania przebarwień skórnych, plam. Skóra narażona jest na podrażnienia, swędzenie, wysuszenie. Zaburzenia pracy gruczołów apokrynowych, zaburzenia wydzielana potu i łoju mogą być wywołane przez SLS. Związki te stosowane w kosmetykach do pielęgnacji włosów niszczą włosy, sprawiają, że włosy stają się łamliwe i są podatne na rozdwajanie. Do działań negatywnych na błony śluzowe należą: zapalenie spojówek i podrażnienia oczu, nieżyt nosa wywołany dostępem produktu do nosa. Szczególnie wrażliwe na związki z tej grupy są dzieci. Są bardzo szkodliwe na delikatną skórę dziecięcą, dlatego należy unikać stosowania takich kosmetyków dla młodszych konsumentów. Całe szczęście część przemysłu kosmetycznego  wychodzi naprzeciw i proponuje przyjazne człowiekowi, eko surfaktanty jako zamienniki SLS.</p>
                    </div>
                </div>
            </div>

            <div className="form">
                <h4>Kontakt z nami</h4>
                <FormFloatingTextareaExample/>
                <Button variant="success" style={{margin: '30px', fontSize: '20px'}}>Wyślij</Button>{' '}
            </div>

            <footer>
                <div className="information">
                    <div>
                        <h4>INFORMACJE</h4>
                        <p>Polityka prywatności</p>
                        <p>Regulamin sklepu</p>
                        <p>Sklepy stacjonarne</p>
                        <p>Oferty Pracy</p>
                    </div>

                    <div className='client-content'>
                        <h4>OBSŁUGA KLIENTA</h4>
                        <p>Formy płatności</p>
                        <p>Formy i koszty dostawy</p>
                        <p>Zwrot i wymiana towaru</p>
                        <p>Reklamacje</p>
                    </div>

                    <div>
                        <h4>TWOJE KONTO</h4>
                        <p>Rejestracja</p>
                        <p>Logowanie</p>
                        <p>Przypomnij hasło</p>
                        <p>Twoje konto</p>
                    </div>
                </div>
                <div>
                    <h6>© 2023 Mbiotica Mateusz Siuda</h6>
                </div>
            </footer>
        </>
    );
}

export default App;
