import SectionTitle from "@/components/SectionTitle";

function About() {
  return (
    <section className='container'>
      <section className='flex gap-3 justify-around items-center p-3'>
        <div className='flex-1 '>
          <SectionTitle title='Who are we?' />
          <p className='indent-2'>
            store Informatique is a shop specialized in the sale of computer
            hardware oriented to the consumer, PC Laptops, PC Desktop, PC
            Gaming, ALL-IN-ONE, Printers, Accessories, Wiring, Network, Software
            ... etc. we offer our customers a wide variety of products carefully
            selected to guarantee them an optimal solution at a fair price.
          </p>
        </div>
        <img
          className='w-1/3 rounded-md'
          src='https://web.archive.org/web/20231214171646im_/https://i0.wp.com/www.click-dz.com/wp-content/uploads/2020/10/qui-sommes-nous-1.png?fit=319%2C159&ssl=1'
          alt=''
        />
      </section>
      <section className='flex gap-3 justify-around items-center p-3'>
        <img
          className='w-1/3 rounded-md'
          src='https://web.archive.org/web/20231214171646im_/https://i0.wp.com/www.click-dz.com/wp-content/uploads/2020/10/qui-sommes-nous-1.png?fit=319%2C159&ssl=1'
          alt=''
        />
        <div className='flex-1 '>
          <SectionTitle title='our goals' />
          <p className='indent-2'>
            store Informatique is a shop specialized in the sale of computer
            hardware oriented to the consumer, PC Laptops, PC Desktop, PC
            Gaming, ALL-IN-ONE, Printers, Accessories, Wiring, Network, Software
            ... etc. we offer our customers a wide variety of products carefully
            selected to guarantee them an optimal solution at a fair price.
          </p>
        </div>
      </section>
    </section>
  );
}

export default About;
