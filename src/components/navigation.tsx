import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import nav from "../_nav";

const Navigation = () => {
    const { pathname } = useLocation();

    return (
        <nav className="r-shadow">
            <ul>
                {nav.map((item, key) => (
                    <li
                        key={key}
                        className={classNames({
                            active: pathname === item.path,
                        })}
                    >
                        <Link to={item.path}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
