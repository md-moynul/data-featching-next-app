import ProductsCard from "@/components/ProductsCard";
import next from "next";

const getProducts = async () => {
    const res = await fetch('http://localhost:5000/products' ,{next :{revalidate : 10}})
    return res.json()
}

const ProductPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h1 className="text-center text-3xl">Products : {products.length}</h1>
            <div className="grid grid-cols-4 gap-5">
                {products.map(product => <ProductsCard key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default ProductPage;