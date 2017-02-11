import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';
import Highlight from 'react-syntax-highlight';

const elementTypes = {
	TEXT: 'markdown',
	CODE_SNIPPET: 'code'
}

const languages = {
	BASH: 'bash',
	JS: 'javascript',
	HTML: 'html',
	TS: 'typescript'
}


class UsingElement extends Component {
	render() {

	const pageElements = [{
		type: elementTypes.TEXT,
		value:`## Using a Polymer Element
In this whole Polymer course we will be building a **Personal Dashboard** which can also be used as an **Enterprise Dashboard** with little bit of tweaking.

Follow the whole workshop or individual topics to understand & have hands-on important concepts/elements in the Polymer ecosystem.

### Step1:

Use the following command to create the initial project folder wherever you want the project to be: 
`		},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`mkdir personal-dashboard
cs personal-dashboard`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step2: Starter Template
We will be using the Polymer CLI's **init** command along with its **starter-kit** template to get a production ready App Structure on which we will begin our journey of creating our Personal Dashboard.

In the same folder, run the following command on the terminal/command prompt:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`polymer init starter-kit`		
	},
	{
		type: elementTypes.TEXT,
		value: `### Step3: Run the Polymer Server
Now, we will run the polymer server to startup the dev server in order to see the output of what we are building in the browser. It also has a hot reloader which refreshes your web app as soon as you make any change in the source code.

In the same folder, run the following command on the terminal/command prompt:`
	},
	{
		type: elementTypes.CODE_SNIPPET,
		lang: languages.BASH,
		value:`polymer server --open`		
	}
	];

		return (
			<div>
				{ pageElements.map((pageElement, index) => {
						if(pageElement.type === elementTypes.TEXT){
							return (<ReactMarkdown key={`pe-${index}`} source={pageElement.value} />);
						}else if(pageElement.type === elementTypes.CODE_SNIPPET){
							return (<Highlight key={`pe-${index}`} lang={pageElement.lang} value={pageElement.value} />);
						}
					})
				}
			</div>
		);
	}
}

export default UsingElement;