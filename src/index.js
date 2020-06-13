import React from 'react';
import ReactDOM from 'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<SocialMediaIconsReact borderColor="rgba(203,120,120,1)" borderWidth="1" borderStyle="solid" icon="dribbble" iconColor="rgba(203,120,120,1)" backgroundColor="rgba(255,255,255,1)" iconSize="2" roundness="50%" url="https://dribbble.com/stxiao" size="24" />,	document.getElementById('root'));
ReactDOM.render(<SocialMediaIconsReact borderColor="rgba(203,120,120,1)" borderWidth="1" borderStyle="solid" icon="facebook" iconColor="rgba(203,120,120,1)" backgroundColor="rgba(255,255,255,1)" iconSize="0" roundness="50%" url="https://www.facebook.com/shirleytxiao/" size="24" />,	document.getElementById('root'));
ReactDOM.render(<SocialMediaIconsReact borderColor="rgba(203,120,120,1)" borderWidth="1" borderStyle="solid" icon="instagram" iconColor="rgba(203,120,120,1)" backgroundColor="rgba(255,255,255,1)" iconSize="0" roundness="50%" url="https://www.instagram.com/shrrley" size="24" />,	document.getElementById('root'));
ReactDOM.render(<SocialMediaIconsReact borderColor="rgba(203,120,120,1)" borderWidth="1" borderStyle="solid" icon="github" iconColor="rgba(203,120,120,1)" backgroundColor="rgba(255,255,255,1)" iconSize="2" roundness="50%" url="http://github.com/stxiao23" size="24" />,	document.getElementById('root'));
ReactDOM.render(<SocialMediaIconsReact borderColor="rgba(203,120,120,1)" borderWidth="1" borderStyle="solid" icon="linkedin" iconColor="rgba(203,120,120,1)" backgroundColor="rgba(255,255,255,1)" iconSize="0" roundness="50%" url="https://www.linkedin.com/in/s-xiao/" size="24" />,	document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
