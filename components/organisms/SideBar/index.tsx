import { useRouter } from 'next/router';
import SideBarItem from './SideBarItem';

export default function SideBar() {
  const router = useRouter();

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <div className="menus">
          <SideBarItem title="Home" href="/" />
          <SideBarItem title="Mahasiswa" href="/mahasiswa" />
        </div>
      </div>
    </section>
  );
}
