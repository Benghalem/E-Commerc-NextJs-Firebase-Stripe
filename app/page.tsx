
import Banner from "@/components/Banner";
import Products from "@/components/Product";
import fatchData from "@/lib/fatchingData";
import { Product } from "@/types/type";


interface Props {
  productData: Product[];
} 

export default async function Page( ) {
  const products: Props = await fatchData()
 // console.log(products)
  return (
    
      <main className="bg-lighBlue">
        <div className="max-w-contenetContainer mx-auto bg-white">  
          <Banner />
          <Products product={products} />
        </div>
      </main>
   
  );
}


