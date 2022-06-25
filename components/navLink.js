const styles = {
  navLink: `flex item-center mb-5 cursor-pointer hover:text-[#faec73] text-[#fff]`,
  navLinkText: `ml-5`,
};

const NavLink = ({ title, icon }) => {
  return (
    <div className={styles.navLink}>
      <img alt="" src={icon} width={20} height={20} />
      <p className={styles.navLinkText}>{title}</p>
    </div>
  );
};

export default NavLink;
