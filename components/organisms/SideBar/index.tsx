import SideBarItem from './SideBarItem';

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content">
        <h4 className="text-center text-white mt-20">Teras</h4>
        <div className="menus mt-30">
          <SideBarItem title="Home" href="/" />
          <SideBarItem title="Mahasiswa" href="/mahasiswa" />
        </div>
      </div>
    </section>
  );
}
