import React from 'react';
import { Link } from 'react-router-dom';

export default function Youtube () {
    return (
        <div>
            <div id="navbar" style={ { textAlign: 'center' } }>
                <h1><Link to="/" style={ { color: 'rgb(13, 181, 172)', textDecoration: 'none' } }>Downloader101</Link></h1>
                <div class="scrollmenu">
                    <Link to='/files'>Files Downloader</Link>
                    <Link to='/youtube' className='active'>Youtube Downloader</Link>
                </div>
            </div>
        </div>
    );
}
