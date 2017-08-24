//const greet = require('./greet.js');
//document.getElementById('root').appendChild(greet());
//

import React from 'react';
import {render} from 'react-dom';
import Greeter from './greet';
import Header from './common/header';

import '../css/bootstrap/css/bootstrap.min.css';
import '../css/animate.css';
import '../css/reset.css';


render(<Header />,document.getElementById('root'));
