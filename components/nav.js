import NavLink from "./navLink";
const styles = {
  nav: `blue-glassmorphism h-screen w-96 p-5 py-10 `,
  link: `hover:text-[#faec73]`,
  playlistName: `text-[#fff] cursor-default text-sm hover:text-[#faec73]`,
};

{
  /* Add BlockChain Social Links to Nav */
}

const Nav = () => {
  return (
    <div className={styles.nav}>
      <h1 className="text-2xl text-white items-center justify-center text-center ">
        Muse Music
      </h1>
      <img
        className="items-center justify-center text-center -mt-6"
        alt=""
        src="../assets/Logo.png"
        width={220}
        height={20}
      />

      <div className="-mt-4 mb-10">
        <NavLink icon="assets/home.svg" title="Home" className={styles.link} />
        <NavLink
          icon="assets/search.svg"
          title="Search"
          className={styles.link}
        />
        <NavLink
          icon="assets/playlist.svg"
          title="Your library"
          className={styles.link}
        />
      </div>
      <div className="mb-5 border-b border-gray-100/10">
        <NavLink
          icon="assets/add.svg"
          title="Create Playlist"
          className={styles.link}
        />
        <NavLink
          icon="assets/hearts.svg"
          title="Liked Songs"
          className={styles.link}
        />
      </div>
      <div className="mt-5 leading-8 flex flex-col gap-[10px]">
        <p className="text-sm text-[#9c64fb]">GHOST SONGS</p>
        <p className={styles.playlistName}>CarPlay Vol.2</p>
        <p className={styles.playlistName}>Country Dump</p>
        <p className={styles.playlistName}>Energy Booster: Country</p>
        <p className={styles.playlistName}>Funky</p>
        <p className={styles.playlistName}>Coaching 🔥</p>
        <p className={styles.playlistName}>Country</p>
        <p className={styles.playlistName}>Your Top Songs 2019</p>
      </div>
    </div>
  );
};

export default Nav;
