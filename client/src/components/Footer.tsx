import { CircleHelp, Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <section className='p-4 bg-slate-100 dark:bg-slate-900'>
      <div className='rounded-2xl p-4 container flex items-center justify-between flex-wrap gap-3 '>
        <div>
          <h4 className='text-xl font-bold text-gray-800 dark:text-gray-200 text-nowrap capitalize'>
            we are allways here to help you.
          </h4>
          <p className='opacity-60'>
            you can get help by choosing from any of the options below
          </p>
        </div>
        <div className='flex-1 flex gap-3 items-center md:justify-around justify-start  flex-wrap'>
          <ContactCard title='Help Center' link='help.steella.com' />
          <ContactCard title='phone' link='+1 234 567 8900' />
          <ContactCard title='Email support' link='exemple@mail.com' />
        </div>
      </div>
      <div className='flex justify-around gap-3 flex-wrap mt-7'>
        <div className='col'>
          <div className='logo'>
            {/* <img src='/logo.svg' alt='logo' /> */}
            my logo
          </div>
          <p className='opacity-60'>
            Steella is a platform that connects you with the best professionals
            in the industry.
          </p>
          <div className='social-links flex gap-3 mt-3'>
            <a
              href='#'
              className='social-link text-[#1877f2]
            '
            >
              <Facebook />
            </a>
            <a
              href='#'
              className='social-link text-[#e1306c]
            '
            >
              <Instagram />
            </a>
            <a
              href='#'
              className='social-link text-[#1da1f2]
            '
            >
              <Twitter />
            </a>
          </div>
        </div>
        <div className='col'>
          <p className='font-bold'>Company</p>
          <ul className='flex flex-col gap-2'>
            <li>About us</li>
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Press</li>
          </ul>
        </div>
        <div className='col'>
          <p className='font-bold'>Product</p>
          <ul className='flex flex-col gap-2'>
            <li>Features</li>
            <li>Integrations</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='col'>
          <p className='font-bold'>Product</p>
          <ul className='flex flex-col gap-2'>
            <li>Features</li>
            <li>Integrations</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      <p className=' opacity-80 text-center mt-4'>
        © 2024. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;

const ContactCard = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className='contact flex gap-3 items-center'>
      <CircleHelp size={24} className='text-green-500' />
      <div className='flex flex-col gap-0 items-start'>
        <p className='opacity-60'>{title}</p>
        <p className='font-bold'>{link}</p>
      </div>
    </div>
  );
};
