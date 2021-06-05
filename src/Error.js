import React from 'react';
import $ from 'jquery';
import bottomBar from './bottomBar.json';

export default function Error() {
  $('body').css({
    'text-align': 'center',
    color: 'white',
    'background-color': 'rgb(13, 181, 172)',
  });
  $('#root').css({
    'margin-top': '20px',
  });
  return (
    <div>
      <h2>404 Error</h2>
      <h3>Page not found !</h3>
      <button
        className='btn btn-primary'
        onClick={() => (window.location = '/')}
      >
        Back Home
      </button>
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
    </div>
  );
}
