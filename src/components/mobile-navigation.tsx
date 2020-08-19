import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import classNames from "classnames";
import nav from "../_nav";
import content from "../_content";

const MobileNavigation = () => {
    const { pathname } = useLocation();
    const [isOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!isOpen);
    const [redirectLocation, setRedirect] = useState("");

    const navigate = (e: any) => {
        e.preventDefault();
        setOpen(false);
        setRedirect(e.target.dataset.target);
    };

    if (redirectLocation === pathname) {
        setRedirect("");
    }

    if (redirectLocation.length > 0) {
        return <Redirect to={redirectLocation} />;
    }

    return (
        <>
            <div className="r-shadow mobile-bar">
                <a
                    href="#"
                    data-target="/"
                    className="brand"
                    onClick={navigate}
                >
                    Reece Russell
                </a>
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
                                <a
                                    href="#"
                                    data-target={item.path}
                                    onClick={navigate}
                                >
                                    {item.text}
                                </a>
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
