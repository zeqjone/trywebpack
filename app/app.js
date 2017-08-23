//const greet = require('./greet.js');
//document.getElementById('root').appendChild(greet());
//

import React from 'react';
import {render} from 'react-dom';
import Greeter from './greet';

render(<Greeter />,document.getElementById('root'));
