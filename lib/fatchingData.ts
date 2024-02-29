
/* =============== SSR data fetching oled methode=================== */

/* async function getProducts(postId: string) {
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
  });
  return response
}

export  async function PostId ({ params }: any) {
  const products = await getProducts(params.id);
  return products
}
 */
/* =============== SSR data fetching new method  =================== */
async function fatchData() {
    const prodectResponse = await fetch("http://localhost:3000/api/products", {
      // cache: "force-cache", // < SSG getStaticProps
       cache: "no-cache", // < SSR   getServerSideProps
      // next: {
      //   revalidate: 10, // < ISR revalidate
      //  },
    })
    // await wait (4000);
    console.log("fatching Product");
    return prodectResponse.json()
  }

  export default fatchData