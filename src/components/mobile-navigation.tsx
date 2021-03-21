import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import classNames from "classnames";
import nav from "../_nav";
import content from "../_content";

const MobileNavigation = () => {
    const { pathname } = useLocation();
    const [isOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!isOpen);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <>
            <div className="r-shadow mobile-bar">
                <Link to="/" className="brand">
                    Reece Russell
                </Link>
                <div className="mobile-nav-toggle">
                    <button
                        type="button"
                        title="Toggle Mobile Navigation"
                        onClick={toggle}
                    >
                        <i className="las la-bars"></i>
                    </button>
                </div>
            </div>
            <aside
                className={classNames("mobile-navigation", { open: isOpen })}
            >
                <div className="brand">
                    Reece Russell
                    <button
                        type="button"
                        title="Toggle Mobile Navigation"
                        onClick={toggle}
                    >
                        <i className="las la-bars"></i>
                    </button>
                </div>
                <nav>
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
                <footer>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: content.copyrightText,
                        }}
                    ></p>
                </footer>
            </aside>
        </>
    );
};

export default MobileNavigation;
