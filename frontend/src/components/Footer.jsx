import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full py-6 flex items-center bg-black text-white">
      <div className=" px-4 lg:px-8 w-[1400px] flex flex-col gap-6 mx-auto">
        <h1 className="text-3xl font-bold">Brand</h1>
        {/* items */}
        <div className="flex flex-wrap gap-4">
          {/* item */}
          <div className="flex flex-col gap-4 flex-[2] p-4">
            <span>
              Stay in the know on product releases, founder news, and all things
              Atoms.
            </span>
            <input
              type="text"
              placeholder="Enter email here for update"
              className="placeholder:text-white rounded-full border-none outline-none ring-1 ring-white p-2 px-4 bg-transparent"
            />
          </div>
          {/* item*/}
          <div className="flex-1 flex flex-col gap-2">
            <span className="text-2xl mb-4">Products</span>
            <Link href="/">Model 001</Link>
            <Link href="/">Model 000</Link>
            <Link href="/">Laces</Link>
            <Link href="/">Mask</Link>
            <Link href="/">No-Show Socks</Link>
            <Link href="/">Crew Socks</Link>
            <Link href="/">Fift Card</Link>
          </div>
          {/* item*/}
          <div className="flex-1 flex flex-col gap-2">
            <span className="text-2xl mb-4">Support</span>
            <Link href="/">Help Center</Link>
            <Link href="/">Order Status</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Return and Exchange</Link>
            <Link href="/">Contuct Us</Link>
          </div>
          {/* item*/}
          <div className="flex-1 flex flex-col gap-2">
            <span className="text-2xl mb-4">Everything Else</span>
            <Link href="/">Community</Link>
            <Link href="/">Why Brands</Link>
            <Link href="/">About Brands</Link>
            <Link href="/">Discount Program</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Brand Ambassadors</Link>
          </div>
          {/* social icon*/}
          <div className="flex-1 flex flex-col gap-2  justify-center">
            <Link href="/" className="flex gap-2">
              <Image
                src="/img/twitter.png"
                height={18}
                width={18}
                className="object-contain"
                alt="twitter"
              />
              <span>Twitter</span>
            </Link>
            <Link href="/" className="flex gap-2">
              <Image
                src="/img/insta.png"
                height={18}
                width={18}
                className="object-contain"
                alt="instagram"
              />
              <span>Instagram</span>
            </Link>
            <Link href="/" className="flex gap-2">
              <Image
                src="/img/facebook.png"
                height={18}
                width={18}
                className="object-contain"
                alt="Facebook"
              />
              <span>Facebook</span>
            </Link>
          </div>
        </div>
        {/* CopyWright  */}
        <div className="flex gap-4 text-sm">
          <span>© 2023 ATOMS INC.</span>
          <Link href="/">TERMS & CONDITIONS</Link>
          <Link href="/">PRIVACY POLICY</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
