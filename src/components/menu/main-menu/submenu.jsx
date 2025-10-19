import PropTypes from "prop-types";
import Link from "next/link";

const SubMenu = ({ menu }) => (
    <ul className="submenu">
        {menu.map((nav) => (
            <li key={nav.id}>
                <Link
                    href={nav.path}
                    className={nav.isLive ? "live-expo" : ""}
                >
                    {nav.text}
                    {nav?.icon && <i className={`feather ${nav.icon}`} />}
                </Link>
            </li>
        ))}
    </ul>
);

SubMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SubMenu;
