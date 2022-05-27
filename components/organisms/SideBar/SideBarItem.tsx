import Image from 'next/image';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  // icon:
  //   | 'ic-menu-overview'
  //   | 'ic-menu-transaction'
  //   | 'ic-menu-card'
  //   | 'ic-menu-logout'
  //   | 'ic-menu-messages'
  //   | 'ic-menu-reward'
  //   | 'ic-menu-setting';
  // active?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function SideBarItem(props: Partial<MenuItemProps>) {
  const { title, href = '/' } = props;
  // const classItem = cx({
  //   item: true,
  //   'mb-30': true,
  //   active,
  // });

  return (
    <div className="item">
      <div className="me-3">
        <Image src="/vercel.svg" width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
