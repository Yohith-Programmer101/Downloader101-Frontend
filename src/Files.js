import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Helmet from 'react-helmet';

export default function Files() {
  function closeAlert() {
    $('.alert').hide();
  }

  function processInput() {
    var url = $('#url_bar').val();
    if (url === '') {
      $('.alert').show();
      $('.box').hide();
    } else {
      $('.alert').hide();
      $('.box').show();
      $('#link').attr('href', url);
      $('#url_bar').val('');
      console.log(url);
    }
  }
  const css = `
    .box {
        background-color: lightgrey;
        border-radius: 5px;
        width: 800px;
        padding: 10px;
        margin: auto;
        /* display: none; */
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

    @media screen and (max-width: 610px) {
        #alert {
            width: 95% !important;
        }
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
            margin-top: 10px;
            margin-left: 0px !important;
        }
    }
    
    .span {
      margin-left: 10px;
      margin-right: 10px;
    }`;
  return (
    <>
      <Helmet>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Files Downloader - Downloader 101</title>
        <meta
          name='description'
          content='You can download files here for free.'
        />
        <link
          rel='shortcut icon'
          href='https://downloader101.netlify.app/static/media/favicon.bb8b6ce9.ico'
          type='image/x-icon'
        />
        <meta name='og:title' content='Files Downloader - Downloader 101' />
        <meta name='og:url' content='https://downloader101.netlify.app/files' />
        <meta
          name='og:image'
          content='https://downloader101.netlify.app/static/media/favicon.bb8b6ce9.ico'
        />
        <meta name='og:image:height' content='100' />
        <meta name='og:image:width' content='100' />
        <meta
          name='og:description'
          content='You can download files here for free.'
        />
      </Helmet>
      <div id='navbar' style={{ textAlign: 'center' }}>
        <h1>
          <Link
            to='/'
            style={{ color: 'rgb(13, 181, 172)', textDecoration: 'none' }}
          >
            Downloader 101
          </Link>
        </h1>
        <div className='scrollmenu'>
          <Link to='/files' className='active'>
            Files Downloader
          </Link>
          <Link to='/youtube'>Youtube Downloader</Link>
        </div>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ textAlign: 'center' }}>Files Downloader</h2>
        <p style={{ textAlign: 'center' }}>
          You can download files by placing the url in the input.
        </p>
        <div>
          <input
            type='text'
            id='url_bar'
            name='url_bar'
            placeholder='Place the url here ...'
            onInput={() => $('.box').hide()}
          />
          <button
            className='btn'
            style={{ marginLeft: '10px', backgroundColor: 'rgb(13, 181, 172)' }}
            onClick={processInput}
          >
            Save
          </button>
          <br />
          <br />
          <div
            className='box'
            style={{ display: 'none', marginBottom: '40px' }}
          >
            <p>
              Right click the link and select the option save link in computers
              or long press the link and select option download link in mobiles.
            </p>
            <a className='btn btn-primary' id='link' href='' target='_blank'>
              Link
            </a>
          </div>
        </div>
      </div>
      <div
        id='alert'
        className='alert alert-warning alert-dismissible fade show'
        role='alert'
        style={{
          display: 'none',
          width: '600px',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <strong>Alert !</strong> You should enter any url.
        <button
          type='button'
          className='btn'
          aria-label='Close'
          onClick={closeAlert}
        >
          <span
            aria-hidden='true'
            style={{
              fontSize: '25px',
              position: 'absolute',
              right: '10px',
              top: '2px',
            }}
          >
            &times;
          </span>
        </button>
      </div>
      <div className='box'>
        <h3 style={{ textAlign: 'center' }}>About...</h3>
        <p style={{ margin: '15px 50px 0px 50px' }}>
          Hello, visitors, this page of the Downloader 101 App is a File
          Downloader page. Place the URL in the input and click the <b>save</b>{' '}
          button. A box will appear with a link, right-click the link and select{' '}
          <b>save file</b> if you are on the computer and <b>download file</b>{' '}
          on mobiles. A Save as window will appear with the renaming option on
          the computer rename the file if you want, you can also change the
          format type example if you an image is in png format you can change it
          into jpg format and click save, the file will be downloaded. The
          downloading speed depends on the site or domain from which the file is
          hosted.
        </p>
      </div>
      <div
        style={{
          backgroundColor: 'lightgrey',
          height: '25px',
          position: 'fixed',
          bottom: '0px',
          width: '100%',
          padding: '5px',
        }}
      >
        <pre>
          <span className='span'>Version: 0.2</span>
          <span className='span'>Author: Yohith</span>
          <span className='span'>
            About me:{' '}
            <a href='https://yohith.netlify.app' target='_blank'>
              here
            </a>
          </span>
          <span className='span'>
            API:{' '}
            <a
              href='https://downloader101.pythonanywhere.com/api/'
              target='_blank'
            >
              here
            </a>
          </span>
          <span className='span'>
            Tutorial:{' '}
            <a
              href='https://downloader101.pythonanywhere.com/tutorial/'
              target='_blank'
            >
              here
            </a>
          </span>
        </pre>
      </div>
      <style>{css}</style>
    </>
  );
}
