//const greet = require('./greet.js');
//document.getElementById('root').appendChild(greet());
//

import React from 'react';
import {render} from 'react-dom';
import Greeter from './greet';
import Header from './common/header';
import Footer from './common/footer';
import PageData from '../model/pagedata.json';

import bt from '../css/bootstrap/css/bootstrap.min.css';
import '../css/animate.css';
import reset from '../css/reset.css';


render(<div id="root" style={{height:'100%'}}>
		<Header page={PageData}  />
		<div className={reset.bodyContent + ' ' + bt.container}>
			{PageData.title}
		</div>
		<Footer page={PageData} />
	</div>
	,document.body);
