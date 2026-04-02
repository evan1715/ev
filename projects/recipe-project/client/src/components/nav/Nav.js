import React from 'react';
import NavBottom from './NavBottom.js';
import NavPopout from './NavPopout.js';
import NavTop from './NavTop.js';

const Nav = () => (
    <div className="center">
        <div className="nav__desktop">
            <NavTop />
            <NavBottom />
        </div>
        <div className="nav__mobile">
            <NavPopout />
        </div>
    </div>
);

export { Nav as default };
