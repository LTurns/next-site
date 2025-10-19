import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import Link from "next/link";

const MegaMenu = ({ menu }) => (
    <div className="rn-megamenu">
        <div className="wrapper">
            <div className="row row--0">
                {menu.map((nav) => (
                    <div key={nav.id} className="col-lg-3 single-mega-item">
                        {nav?.submenu && (
                            <ul className="mega-menu-item">
                                {nav.submenu.map((subnav) => (
                                    <li key={subnav.id}>
                                        <Link href={subnav.path}>
                                            {subnav.text}
                                            {subnav?.icon && (
                                                <i
                                                    className={`feather ${subnav.icon}`}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

MegaMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MegaMenu;
