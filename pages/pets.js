// import Image from 'next/image'

function Pets() {
  return (
  <div>

    {/* {
        ['1','2','3','4','5'].map((path)=>{
            return(
                <div key={path}>
                    <Image src={`/${path}.avif`} alt='pet' width='400' height='420' />
                </div>
            )
        })
    } */}
    PetsPage

  </div>
  );
}

export default Pets

// Error: Image Optimization using Next.js' default loader is not compatible with `next export`.