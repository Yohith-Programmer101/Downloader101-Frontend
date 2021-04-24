import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import files1 from './files-1.jpg';
import files2 from './files-2.jpg';
import files3 from './files-3.jpg';
import youtube1 from './youtube-1.jpg';
import youtube2 from './youtube-2.jpg';
import youtube3 from './youtube-3.jpg';
import favicon from './favicon.ico';

export default function Home () {
    function openImg (src) {
        window.open(src);
    }
    const css = `
    .box {
        background-color: lightgrey;
        border-radius: 5px;
        padding: 5px;
        margin: auto;
        margin-bottom: 40px;
      }
      
      .card {
        width: 300px !important;
        height: 300px !important;
        margin: 10px;
      }
      
      .card-img-top {
        cursor: pointer;
        width: 300px !important;
        height: 150px !important;
      }
      
      .steps {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
      }
      
      .card {
        border-radius: 5px;
      }
      
      .card-body {
        width: 300px !important;
        height: 150px !important;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
      }`;
    return (
        < >
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Downloader101 - Step By Step Tutorial</title>
                <meta name="description"
                    content="This is a website where you can download files and even youtube videos for free. This page contains the step by step tutorial for downloading files and youtube videos." />
                <link rel="shortcut icon" href={ favicon } type="image/x-icon" />
                <meta name="og:title" content="Downloader101 - Step By Step Tutorial" />
                <meta name="og:url" content="https://downloader101.netlify.app" />
                <meta name="og:image" content={ favicon } />
                <meta name="og:image:height" content="100" />
                <meta name="og:image:width" content="100" />
                <meta name="og:description"
                    content="This is a website where you can download files and even youtube videos for free. This page contains the step by step tutorial for downloading files and youtube videos." />
            </Helmet>
            <div id="navbar" style={ { 'textAlign': 'center' } }>
                <h1><Link to="/" style={ { 'color': 'rgb(13, 181, 172)', 'textDecoration': 'none' } }>Downloader101</Link></h1>
                <div className="scrollmenu">
                    <Link to='/files'>Files Downloader</Link>
                    <Link to='/youtube'>Youtube Downloader</Link>
                </div>
            </div>
            <br />
            <div style={ { 'textAlign': 'center' } }>
                <h2>Tutorial</h2>
                <h5>Step by Step tutorial to use Files Downloader and Youtube Downloader</h5>
                <div className="box" style={ { 'marginTop': '30px' } }>
                    <h3>How To Use Files Downloader</h3>
                    <div className="steps">
                        <div className="card">
                            <img className="card-img-top" src={ files1 } onClick={ () => openImg(files1) } />
                            <div className="card-body" style={ { 'backgroundColor': 'grey' } }>
                                <p className="card-text" style={ { 'color': 'white' } }>First go to the Files Downloader page and
                                    place the cursor in the input.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={ files2 } onClick={ () => openImg(files2) } />
                            <div className="card-body" style={ { 'backgroundColor': 'grey' } }>
                                <p className="card-text" style={ { 'color': 'white' } }>Enter the url of the file that you want to
                                    download and click the save button.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={ files3 } onClick={ () => openImg(files3) } />
                            <div className="card-body" style={ { 'backgroundColor': 'grey' } }>
                                <p className="card-text" style={ { 'color': 'white' } }>Follow the steps there to download the file
                                and the file will be downloaded.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box" style={ { 'marginTop': '40px' } }>
                    <h3>How To Use Youtube Downloader</h3>
                    <div className="steps">
                        <div className="card">
                            <img className="card-img-top" src={ youtube1 } onClick={ () => openImg(youtube1) } />
                            <div className="card-body" style={ { 'backgroundColor': 'grey' } }>
                                <p className="card-text" style={ { 'color': 'white' } }>First go to the Youtube Downloader page and
                                    and enter the url and click save.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={ youtube2 } onClick={ () => openImg(youtube2) } />
                            <div className="card-body" style={ { 'backgroundColor': 'grey' } }>
                                <p className="card-text" style={ { 'color': 'white' } }>See the options and select anything and click
                                    the link if you want to preview it.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={ youtube3 } onClick={ () => openImg(youtube3) } />
                            <div className="card-body" style={ { 'backgroundColor': 'grey' } }>
                                <p className="card-text" style={ { 'color': 'white' } }>If you want to download, follow the steps
                                there to download the file
                                    and the will be downloaded.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={ { 'backgroundColor': 'lightgrey', 'height': '25px', 'position': 'fixed', 'bottom': '0px', 'width': '100%', 'padding': '5px' } }>
                <pre>Version: 0.1        Author: Yohith        About me: <a href="https://yohith.netlify.app" target="_blank">here</a>        API: <a href="/api/" target="_blank">here</a>        Tutorial: <a href="/tutorial/" target="_blank">here</a></pre>
            </div>
            <style>
                { css }
            </style>
        </>
    );
}
