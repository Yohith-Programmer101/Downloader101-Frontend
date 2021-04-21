import React from 'react';
import $ from 'jquery';

export default function Error () {
    $('body').css({
        'text-align': 'center',
        'color': 'white',
        'background-color': 'rgb(13, 181, 172)'
    });
    $('#root').css({
        'margin-top': '20px'
    });
    return (
        <div>
            <h2>404 Error</h2>
            <h3>Page not found !</h3>
            <button className='btn btn-primary' onClick={ () => window.location = '/' }>Back Home</button>
        </div>
    );
}
