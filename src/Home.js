import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import bottomBar from './bottomBar.json';

export default function Home() {
  const files1 =
    'https://raw.githubusercontent.com/Yohith-Programmer101/Storage/main/Downloader101/files-1.jpg';
  const files2 =
    'https://raw.githubusercontent.com/Yohith-Programmer101/Storage/main/Downloader101/files-2.jpg';
  const files3 =
    'https://raw.githubusercontent.com/Yohith-Programmer101/Storage/main/Downloader101/files-3.jpg';
  const youtube1 =
    'https://raw.githubusercontent.com/Yohith-Programmer101/Storage/main/Downloader101/youtube-1.jpg';
  const youtube2 =
    'https://raw.githubusercontent.com/Yohith-Programmer101/Storage/main/Downloader101/youtube-2.jpg';
  const youtube3 =
    'https://raw.githubusercontent.com/Yohith-Programmer101/Storage/main/Downloader101/youtube-3.jpg';

  function openImg(src) {
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
        <title>Downloader 101 - Step By Step Tutorial</title>
        <meta
          name='description'
          content='This is a website where you can download files and even youtube videos for free. This page contains the step by step tutorial for downloading files and youtube videos. This page contains the step by step tutorial for downloading files and youtube videos.'
        />
        <link
          rel='shortcut icon'
          href='https://downloader101.netlify.app/favicon.ico'
          type='image/x-icon'
        />
        <meta
          name='og:title'
          content='Downloader 101 - Step By Step Tutorial'
        />
        <meta name='og:url' content='https://downloader101.netlify.app/' />
        <meta
          name='og:image'
          content='https://downloader101.netlify.app/favicon.ico'
        />
        <meta name='og:image:height' content='100' />
        <meta name='og:image:width' content='100' />
        <meta
          name='og:description'
          content='This is a website where you can download files and even youtube videos for free. This page contains the step by step tutorial for downloading files and youtube videos.'
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
          <Link to='/files'>Files Downloader</Link>
          <Link to='/youtube'>Youtube Downloader</Link>
        </div>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <h3>
          Why you should use Downloader 101 ?
          <br /> And <br />
          Why is it the Best Downloading app ?
        </h3>
        <div className='box' style={{ marginTop: '30px' }}>
          <div className='steps'>
            <div className='card'>
              <span
                style={{ margin: 'auto', marginTop: '35px' }}
                className='card-img-top'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='130'
                  height='130'
                  fill='currentColor'
                  className='bi bi-speedometer'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z' />
                  <path
                    fillRule='evenodd'
                    d='M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z'
                  />
                </svg>
              </span>
              <div className='card-body' style={{ backgroundColor: 'grey' }}>
                <p className='card-text' style={{ color: 'white' }}>
                  This app is Fast, Easy and Efficient to use.
                </p>
              </div>
            </div>
            <div className='card'>
              <img
                style={{ margin: 'auto', marginTop: '35px' }}
                className='card-img-top'
                src='https://raw.githubusercontent.com/Yohith-Programmer101/Storage/main/Downloader101/free.svg'
              />
              <div className='card-body' style={{ backgroundColor: 'grey' }}>
                <p className='card-text' style={{ color: 'white' }}>
                  This app is Completely Free and has an Youtube API from which
                  you can also make a website or app like this.
                </p>
              </div>
            </div>
            <div className='card'>
              <img
                style={{ margin: 'auto', marginTop: '35px' }}
                className='card-img-top'
                src='https://raw.githubusercontent.com/Yohith-Programmer101/Storage/main/Downloader101/apps.png'
              />
              <div className='card-body' style={{ backgroundColor: 'grey' }}>
                <p className='card-text' style={{ color: 'white' }}>
                  This app can be installed or added to your home screen in all
                  type of OS's.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br style={{ marginBottom: '40px' }} />
        <h2>Tutorial</h2>
        <h5>
          Step by Step tutorial to use Files Downloader and Youtube Downloader
        </h5>
        <div className='box' style={{ marginTop: '30px' }}>
          <h3>How To Use Files Downloader</h3>
          <div className='steps'>
            <div className='card'>
              <img
                className='card-img-top'
                src={files1}
                onClick={() => openImg(files1)}
              />
              <div className='card-body' style={{ backgroundColor: 'grey' }}>
                <p className='card-text' style={{ color: 'white' }}>
                  First go to the Files Downloader page and place the cursor in
                  the input.
                </p>
              </div>
            </div>
            <div className='card'>
              <img
                className='card-img-top'
                src={files2}
                onClick={() => openImg(files2)}
              />
              <div className='card-body' style={{ backgroundColor: 'grey' }}>
                <p className='card-text' style={{ color: 'white' }}>
                  Enter the url of the file that you want to download and click
                  the save button.
                </p>
              </div>
            </div>
            <div className='card'>
              <img
                className='card-img-top'
                src={files3}
                onClick={() => openImg(files3)}
              />
              <div className='card-body' style={{ backgroundColor: 'grey' }}>
                <p className='card-text' style={{ color: 'white' }}>
                  Follow the steps there to download the file and the file will
                  be downloaded.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='box' style={{ marginTop: '40px' }}>
          <h3>How To Use Youtube Downloader</h3>
          <div className='steps'>
            <div className='card'>
              <img
                className='card-img-top'
                src={youtube1}
                onClick={() => openImg(youtube1)}
              />
              <div className='card-body' style={{ backgroundColor: 'grey' }}>
                <p className='card-text' style={{ color: 'white' }}>
                  First go to the Youtube Downloader page and and enter the url
                  and click save.
                </p>
              </div>
            </div>
            <div className='card'>
              <img
                className='card-img-top'
                src={youtube2}
                onClick={() => openImg(youtube2)}
              />
              <div className='card-body' style={{ backgroundColor: 'grey' }}>
                <p className='card-text' style={{ color: 'white' }}>
                  See the options and select anything and click the link if you
                  want to preview it.
                </p>
              </div>
            </div>
            <div className='card'>
              <img
                className='card-img-top'
                src={youtube3}
                onClick={() => openImg(youtube3)}
              />
              <div className='card-body' style={{ backgroundColor: 'grey' }}>
                <p className='card-text' style={{ color: 'white' }}>
                  If you want to download, follow the steps there to download
                  the file and the will be downloaded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='box'>
        <h3 style={{ textAlign: 'center' }}>About...</h3>
        <p style={{ margin: '15px 50px 0px 50px' }}>
          Hello, visitors Downloader 101 is a file downloader app from which we
          can download files, YouTube videos, and audios. This app is completely
          free to use, and we have also provided an API that can be used by
          anyone for free, the link can be found at the bottom menu bar with the
          tutorial. The backend of this app is made with Django, a high-level
          Python Web framework, and the frontend with React.js, a JavaScript
          library. This page contains the step by step tutorial for using this
          app.
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
          <span className='span'>Version: {bottomBar['version']}</span>
          <span className='span'>Author: {bottomBar['author']}</span>
          <span className='span'>
            About me:{' '}
            <a href={bottomBar['about']} target='_blank'>
              here
            </a>
          </span>
          <span className='span'>
            API:{' '}
            <a href={bottomBar['api']} target='_blank'>
              here
            </a>
          </span>
          <span className='span'>
            Tutorial:{' '}
            <a href={bottomBar['tutorial']} target='_blank'>
              here
            </a>
          </span>
        </pre>
      </div>
      <style>{css}</style>
    </>
  );
}
