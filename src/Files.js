import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Files () {
    return (
        < >
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Files - Downloader101</title>
                <meta name="description" content="You can download files here for free." />
                <meta name="og:title" content="Files- Downloader101" />
                <meta name="og:url" content="https://downloader101.herokuapp.com/files" />
                <meta name="og:image:height" content="100" />
                <meta name="og:image:width" content="100" />
                <meta name="og:description" content="You can download files here for free." />
            </Helmet>
            <div id="navbar" style={ { textAlign: 'center' } }>
                <h1><Link to="/" style={ { color: 'rgb(13, 181, 172)', textDecoration: 'none' } }>Downloader101</Link></h1>
                <div className="scrollmenu">
                    <Link to='/files' className='active'>Files Downloader</Link>
                    <Link to='/youtube'>Youtube Downloader</Link>
                </div>
            </div>
            <br />
            <div style={ { 'textAlign': 'center' } }>
                <h2 style={ { 'textAlign': 'center' } }>Files Downloader</h2>
                <p style={ { 'textAlign': 'center' } }>You can download files by placing the url in the input.</p>
                <div>
                    <input type="text" id="url_bar" name="url_bar" onChange="processInput()" />
                    <button className="btn" style="background-color: rgb(13, 181, 172);"
                        onClick="processInput()">Save</button><br /><br />
                    <div className="box" style={ { 'display': 'none' } }>
                        <p>Right click the link and select the option save link in computers or long press the link and
                            select option download link in mobiles.</p>
                        <a className="btn btn-primary" id="link" href="" target="_blank">Link</a>
                    </div>
                </div>
            </div>
            <div id="alert" className="alert alert-warning alert-dismissible fade show" role="alert"
                style="display: none; width: 600px; margin: auto; text-align: center;">
                <strong>Alert !</strong> You should enter any url.
                <button type="button" className="btn" aria-label="Close" onClick="closeAlert()">
                    <span aria-hidden="true"
                        style="font-size: 25px; position: absolute; right: 10px; top: 2px;">&times;</span>
                </button>
            </div>
            <div
                style="background-color: lightgrey; height: 25px; position: fixed; bottom: 0px; width: 100%; padding: 5px;">
                <pre>Version: 0.1        Author: Yohith        About me: <a href="https://yohith.herokuapp.com" target="_blank">here</a>        API: <a href="/api/" target="_blank">here</a>        Tutorial: <a href="/tutorial/" target="_blank">here</a></pre>
            </div>
        </>
    );
}
