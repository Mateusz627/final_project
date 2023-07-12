import './App.css';
import CustomAppBar from "./components/AppBar.jsx";
import ControlledCarousel from "./components/Slider.jsx";
import MediaCard from "./components/Product.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from "react";

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
            <CustomAppBar />
            <ControlledCarousel />

            <div className="products-heading">
                <h2>Our products</h2>
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

            <footer>Footer</footer>
        </>
    );
}

export default App;
