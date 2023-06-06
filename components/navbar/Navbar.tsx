import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import GlobalAppContext from '../layout/context/GlobalAppContext';

function Navbar() {
  const { displayBanner } = useContext(GlobalAppContext);
  const router = useRouter();
  const nav = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Inventory', href: '/inventory' }
  ];
  return (
    <nav
      className={`fixed ${
        displayBanner ? 'top-[72px]' : 'top-0'
      } z-30 flex w-full items-center justify-between gap-10 border-b border-black-200/30 bg-white py-4 px-6 xl:pr-8 2xl:pr-24`}
    >
      <div className="flex items-center gap-8 text-sm font-semibold text-black-400">
        <Link href="/dashboard">
          <Image
            src="/assets/img/komiser.svg"
            width={40}
            height={40}
            alt="Komiser logo"
          />
        </Link>
        {nav.map((navItem, idx) => (
          <Link
            key={idx}
            href={navItem.href}
            className={
              router.pathname === navItem.href
                ? 'text-primary'
                : 'text-black-400'
            }
          >
            {navItem.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
