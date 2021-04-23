import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import favicon from './favicon.ico';

export default function Youtube () {
    const refContainer = useRef(null);
    var [ data, setData ] = useState({});
    var [ streams, setStream ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);
    const css = `
    table, td, tr {
        padding: 10px;
        margin: 10px;
        border: 2px solid black;
        border-collapse: collapse;
    }
    .box {
        background-color: lightgrey;
        border-radius: 5px;
        width: 800px;
        padding: 10px;
        margin: auto;
        text-align: left;
        overflow-x: auto;
        margin-bottom: 40px;
    }

    #url_bar {
        border: 2px solid rgb(13, 181, 172);
        border-radius: 5px;
        height: 40px;
        width: 500px;
    }

    input[type=text]:focus {
        border: 2px solid rgb(13, 181, 172) !important;
        border-radius: 5px;
        box-shadow: none;
        outline: none;
    }

    @media screen and (max-width: 850px) {
        .box {
            width: 95%;
        }
    }

    @media screen and (max-width: 550px) {
        #url_bar {
            width: 95%;
        }

        .btn {
            margin-left: 0px !important;
            margin-top: 10px;
        }
    }`;
    function closeAlert () {
        $(".alert").hide();
    }

    function processInput () {
        var url = $("#url_bar").val();
        if (url === "") {
            $('.alert').show();
            $(".box").hide();
        }
        else {
            $('.alert').hide();
            $('.loader').show();
            $('#app').hide();
            // Sample Youtube Video -> https://www.youtube.com/watch?v=Y8Tko2YC5hA
            fetch(
                `https://downloader101.pythonanywhere.com/api/?url=${refContainer.current.value}`
            )
                .then((data) => {
                    return data.json();
                })
                .then((json) => {
                    setData(json);
                    var streamsList = [];
                    for (let i = 0; i < json[ 'total_streams' ]; i++) {
                        streamsList.push({
                            'media': json[ 'streams' ][ 'media' ][ i ],
                            'extension': json[ 'streams' ][ 'extension' ][ i ],
                            'filesize': json[ 'streams' ][ 'filesize' ][ i ],
                            'quality': json[ 'streams' ][ 'quality' ][ i ],
                            'url': json[ 'streams' ][ 'url' ][ i ]
                        });
                    }
                    setStream(streamsList);
                    $('.loader').hide();
                    $('.box').show();
                    $('#app').show();
                    setIsLoading(false);
                    refContainer.current.value = "";
                });
        }
    }
    function Error () {
        return (
            < >
                <h1>Error...</h1>
            </>
        );
    }
    function Box () {
        return (
            < >
                <div className="box">
                    <div style={ { 'textAlign': 'center' } }>
                        <img src={ data[ 'image' ] } alt={ data[ 'title' ] }
                            style={ { 'borderRadius': '5px', 'width': '300px', 'height': '150px' } } /><br />
                        <h3>{ data[ 'title' ] }</h3>
                    </div>
                    <p>
                        Duration: { data[ 'duration' ] } <br />
                        Views: { data[ 'views' ] } <br />
                        Ratings: { data[ 'ratings' ] } <br />
                        Likes: { data[ 'likes' ] } <br />
                        Dislikes: { data[ 'dislikes' ] } <br />
                    </p>
                    <p>Right click the link and select the option save link in computers or long press the link and
                        select option download link in mobiles.</p>
                    <table>
                        <tbody>
                            <tr style={ { 'backgroundColor': 'grey', 'color': 'white' } }>
                                <td>Media Type</td>
                                <td>Description</td>
                            </tr>
                            <tr>
                                <td>normal</td>
                                <td>Contains both audio and video. (Suitable for everything)</td>
                            </tr>
                            <tr>
                                <td>video</td>
                                <td>Contains only video. (Suitable for seeing movies like 'Charlie Chaplin')</td>
                            </tr>
                            <tr>
                                <td>audio</td>
                                <td>Contains only audio. (Suitable for listening musics.)</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <table>
                        <tbody>
                            <tr style={ { 'backgroundColor': 'grey', 'color': 'white' } }>
                                <td>Media</td>
                                <td>File</td>
                                <td>Quality</td>
                                <td>Size</td>
                                <td>Link</td>
                            </tr>
                            { streams.map((elem, index) => {
                                return (
                                    <tr key={ elem[ 'url' ] + index }>
                                        <td key={ new Date().getTime().toString() + elem[ 'media' ] }>{ elem[ 'media' ] }</td>
                                        <td key={ new Date().getTime().toString() + elem[ 'extension' ] }>{ elem[ 'extension' ] }</td>
                                        <td key={ new Date().getTime().toString() + elem[ 'quality' ] }>{ elem[ 'quality' ] }</td>
                                        <td key={ new Date().getTime().toString() + elem[ 'filesize' ] }>{ elem[ 'filesize' ] }</td>
                                        <td key={ new Date().getTime().toString() + elem[ 'url' ] }><a target='_blank' className='btn btn-primary' href={ elem[ 'url' ] }>Link</a></td>
                                    </tr>
                                );
                            }) }
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
    return (
        < >
            <Helmet>
                <meta charset='UTF-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>Youtube Downloader - Downloader101</title>
                <meta
                    name='description'
                    content='You can download youtube videos here for free.'
                />
                <link rel="shortcut icon" href={ favicon } type="image/x-icon" />
                <meta name='og:title' content='Youtube Downloader - Downloader101' />
                <meta name='og:url' content='https://downloader101.surge.sh/youtube' />
                <meta name='og:image' content={ favicon } />
                <meta name='og:image:height' content='100' />
                <meta name='og:image:width' content='100' />
                <meta
                    name='og:description'
                    content='You can download youtube videos here for free.'
                />
            </Helmet>
            <div id='navbar' style={ { textAlign: 'center' } }>
                <h1>
                    <Link
                        to='/'
                        style={ { color: 'rgb(13, 181, 172)', textDecoration: 'none' } }
                    >
                        Downloader101
          </Link>
                </h1>
                <div className='scrollmenu'>
                    <Link to='/files'>Files Downloader</Link>
                    <Link to='/youtube' className='active'>
                        Youtube Downloader
          </Link>
                </div>
            </div>
            <br />
            <div style={ { 'textAlign': 'center' } } id='app'>
                <h2 style={ { 'textAlign': 'center' } }>Youtube Downloader</h2>
                <p style={ { 'textAlign': 'center' } }>You can download youtube videos or audios by placing the link or code
                below.
                </p>
                <div>
                    <input type="text" id="url_bar" name="url" ref={ refContainer } onInput={ () => $('.box').hide() } />
                    <button className="btn" style={ { 'backgroundColor': 'rgb(13, 181, 172)', 'marginLeft': '10px' } }
                        onClick={ processInput }>Get</button>
                    <br /><br />
                    <div id="alert" className="alert alert-warning alert-dismissible fade show" role="alert"
                        style={ { 'display': 'none', 'width': '600px', 'margin': 'auto', 'textAlign': 'center' } }>
                        <strong>Alert !</strong> You should enter any url.
                        <button type="button" className="btn" aria-label="Close" onClick={ closeAlert }>
                            <span aria-hidden="true"
                                style={ { 'fontSize': '25px', 'position': 'absolute', 'right': '10px', 'top': '2px' } }>&times;</span>
                        </button>
                    </div>
                </div>
                { isError && <Error /> }
                { isLoading || <Box /> }
            </div>
            <div
                style={ { 'backgroundColor': 'lightgrey', 'height': '25px', 'position': 'fixed', 'bottom': '0px', 'width': '100%', 'padding': '5px' } }>
                <pre>Version: 0.1        Author: Yohith        About me: <a href="https://yohith.netlify.app" target="_blank">here</a>        API: <a href="/api/" target="_blank">here</a>        Tutorial: <a href="/tutorial/" target="_blank">here</a></pre>
            </div>
            <style>{ css }</style>
        </>
    );
}
