import { useState } from "react";
import Link from "next/link";
import { UserIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { Squash as Hamburger } from "hamburger-react";
import navStyles from "@/styles/Navigation.module.scss";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.nav_container}>
          <Link href="/">Task Management</Link>
          {/* menu link for desktop */}
          <ul className={navStyles.menu_desktop}>
            <li>
              <UserIcon className={navStyles.icon} />
              <Link href="/user-management">User Management</Link>
            </li>
            <li>
              <ClipboardDocumentListIcon className={navStyles.icon} />
              <Link href="/task-management">Task Management</Link>
            </li>
          </ul>
          {/* menu button visible in mobile */}
          <div className={navStyles.menu_button}>
            <Hamburger size={19} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </nav>
      {/* menu for mobile */}
      <ul
        className={navStyles.menu_mobile}
        style={{ top: isOpen ? "61px" : "-100%" }}
      >
        <li>
          <UserIcon className={navStyles.icon} />
          <Link href="/user-management">User Management</Link>
        </li>
        <li>
          <ClipboardDocumentListIcon className={navStyles.icon} />
          <Link href="/task-management">Task Management</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
