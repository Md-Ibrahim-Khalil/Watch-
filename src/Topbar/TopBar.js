import React from 'react';

import classes from './TopBar.module.css';

const TopBar = () => {
    return(
        <header>
            <nav className={classes.TopBar}>
                <img src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png" alt="Amazon Logo" />
            </nav>
        </header>
    )
}

export default TopBar;