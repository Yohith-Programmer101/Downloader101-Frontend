import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Helmet from 'react-helmet';

export default function Youtube() {
  const refContainer = useRef(null);
  var [data, setData] = useState({});
  var [streams, setStream] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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

        #youtube-button{
          display: none;
        }
    }

    @media screen and (max-width: 365px) {
      #image{
        width: 100% !important;
      }
    }
    
    .span {
      margin-left: 10px;
      margin-right: 10px;
    }`;
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
          for (let i = 0; i < json['total_streams']; i++) {
            streamsList.push({
              media: json['streams']['media'][i],
              extension: json['streams']['extension'][i],
              filesize: json['streams']['filesize'][i],
              quality: json['streams']['quality'][i],
              url: json['streams']['url'][i],
            });
          }
          setStream(streamsList);
          $('.loader').hide();
          $('.box').show();
          $('#app').show();
          setIsLoading(false);
          refContainer.current.value = '';
        })
        .catch((error) => {
          $('.loader').hide();
          $('.error').show();
          setIsError(true);
          console.log(error);
        });
    }
  }
  function Error() {
    return (
      <>
        <div className='error' style={{ textAlign: 'center' }}>
          <h1>...Error...</h1>
          <button
            className='btn'
            style={{ backgroundColor: 'rgb(13, 181, 172)' }}
            onClick={() => {
              setIsError(false);
              $('.alert').hide();
              $('.loader').show();
              $('#app').hide();
              fetch(
                `https://downloader101.pythonanywhere.com/api/?url=${refContainer.current.value}`
              )
                .then((data) => {
                  return data.json();
                })
                .then((json) => {
                  setData(json);
                  var streamsList = [];
                  for (let i = 0; i < json['total_streams']; i++) {
                    streamsList.push({
                      media: json['streams']['media'][i],
                      extension: json['streams']['extension'][i],
                      filesize: json['streams']['filesize'][i],
                      quality: json['streams']['quality'][i],
                      url: json['streams']['url'][i],
                    });
                  }
                  setStream(streamsList);
                  $('.loader').hide();
                  $('.box').show();
                  $('#app').show();
                  setIsLoading(false);
                  refContainer.current.value = '';
                })
                .catch((error) => {
                  $('.loader').hide();
                  $('.error').show();
                  setIsError(true);
                  console.log(error);
                });
            }}
          >
            Retry
          </button>
          <br />
          <button
            className='btn'
            style={{ backgroundColor: 'rgb(13, 181, 172)', marginTop: '10px' }}
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Restart the App
          </button>
        </div>
      </>
    );
  }
  function Box() {
    return (
      <>
        <div className='box'>
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <img
              style={{
                position: 'absolute',
                top: '5px',
                right: '10px',
                cursor: 'pointer',
              }}
              id='youtube-button'
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${data['videoid']}`
                )
              }
              title='Open in Youtube'
              src='data:image/png;base64,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'
            />
            <img
              src={data['image']}
              alt={data['title']}
              id='image'
              style={{ borderRadius: '5px', width: '320px', height: '180px' }}
            />
            <br />
            <h3>{data['title']}</h3>
          </div>
          <p>
            Video ID: {data['videoid']} <br />
            Duration: {data['duration']} <br />
            Views: {data['views']} <br />
            Ratings: {data['ratings']} <br />
            Likes: {data['likes']} <br />
            Dislikes: {data['dislikes']} <br />
          </p>
          <p>
            Right click the link and select the option save link in computers or
            long press the link and select option download link in mobiles.
          </p>
          <table>
            <tbody>
              <tr style={{ backgroundColor: 'grey', color: 'white' }}>
                <td>Media Type</td>
                <td>Description</td>
              </tr>
              <tr>
                <td>normal</td>
                <td>
                  Contains both audio and video. (Suitable for everything)
                </td>
              </tr>
              <tr>
                <td>video</td>
                <td>
                  Contains only video. (Suitable for seeing movies like 'Charlie
                  Chaplin')
                </td>
              </tr>
              <tr>
                <td>audio</td>
                <td>Contains only audio. (Suitable for listening musics)</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table>
            <tbody>
              <tr style={{ backgroundColor: 'grey', color: 'white' }}>
                <td>Media</td>
                <td>File</td>
                <td>Quality</td>
                <td>Size</td>
                <td>Link</td>
              </tr>
              {streams.map((elem, index) => {
                return (
                  <tr key={elem['url'] + index}>
                    <td key={new Date().getTime().toString() + elem['media']}>
                      {elem['media']}
                    </td>
                    <td
                      key={new Date().getTime().toString() + elem['extension']}
                    >
                      {elem['extension']}
                    </td>
                    <td key={new Date().getTime().toString() + elem['quality']}>
                      {elem['quality']}
                    </td>
                    <td
                      key={new Date().getTime().toString() + elem['filesize']}
                    >
                      {elem['filesize']}
                    </td>
                    <td key={new Date().getTime().toString() + elem['url']}>
                      <a
                        target='_blank'
                        className='btn btn-primary'
                        href={elem['url']}
                      >
                        Link
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Youtube Downloader - Downloader 101</title>
        <meta
          name='description'
          content='You can download youtube videos here for free.'
        />
        <link
          rel='shortcut icon'
          href='https://downloader101.netlify.app/static/media/favicon.bb8b6ce9.ico'
          type='image/x-icon'
        />
        <meta name='og:title' content='Youtube Downloader - Downloader 101' />
        <meta name='og:url' content='https://downloader101.netlify.app/' />
        <meta
          name='og:image'
          content='https://downloader101.netlify.app/static/media/favicon.bb8b6ce9.ico'
        />
        <meta name='og:image:height' content='100' />
        <meta name='og:image:width' content='100' />
        <meta
          name='og:description'
          content='You can download youtube videos here for free.'
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
          <Link to='/youtube' className='active'>
            Youtube Downloader
          </Link>
        </div>
      </div>
      <br />
      {isError && <Error />}
      <div style={{ textAlign: 'center' }} id='app'>
        <h2 style={{ textAlign: 'center' }}>Youtube Downloader</h2>
        <p style={{ textAlign: 'center' }}>
          You can download youtube videos or audios by placing the link or code
          below.
        </p>
        <div>
          <input
            type='text'
            id='url_bar'
            name='url'
            placeholder='Place the link or code here ...'
            ref={refContainer}
            onInput={() => $('.box').hide()}
          />
          <button
            className='btn'
            style={{ backgroundColor: 'rgb(13, 181, 172)', marginLeft: '10px' }}
            onClick={processInput}
          >
            Get
          </button>
          <br />
          <br />
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
        </div>
        {isLoading || <Box />}
      </div>
      <div className='box'>
        <h3 style={{ textAlign: 'center' }}>About...</h3>
        <p style={{ margin: '15px 50px 0px 50px' }}>
          Hello, visitors, this page of the Downloader 101 app is a Youtube
          video downloader page. Place the Youtube video URL or video code in
          the input field and click the <b>get</b> button. A box will appear
          with the details of the YouTube video, scroll down to see more info,
          and click a desired <b>link</b> button it will take you to the preview
          page if you want to download it you can right-click the <b>link</b>{' '}
          button and follow the steps same as Files Downloader app, select{' '}
          <b>save file</b> if you are in the computer and <b>download files</b>{' '}
          on mobile.
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
