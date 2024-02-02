import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppClass from './AppClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Chapter 2-2
 */

// setInterval(() => {
//   root.render(
//     <p>現在時刻：{(new Date()).toLocaleString()}</p>
//   )
// }, 1000)

// root.render(
//   <React.StrictMode>
//     <AppClass />
//   </React.StrictMode>
// )


/**
 * Chapter 2-3
 */

// root.render(
//   <>
//     <p>こんにちは、世界！</p>
//     <p>はじめまして、React！！</p>
//   </>
// )

// const name = '鈴木'
// root.render(
//   <>
//     <p>こんにちは、{name}です！</p>
//     <p>{'こんにちは'}</p>
//   </>
// )

// const content = `
//   <h3>WINGSプロジェクト</h3>
//   <img src="https://wings.msn.to/image/wings.jpg" />
// `
// root.render(
//   <p>{content}</p>
//   // <p dangerouslySetInnerHTML={{__html: content}}></p>
// )

// root.render(
//   <>
//     <div>{'Tom &amp; Jerry'}</div>
//     <div>Tom &amp; Jerry</div>
//     <div>{'Tom \u0026 Jerry'}</div>
//     <div>{`Tom ${String.fromCodePoint(38)} Jerry`}</div>
//     {/* <div dangerouslySetInnerHTML={{__html: 'Tom &amp; Jerry'}} /> */}
//   </>
// )

// root.render(
//   <ul>
//     <li>{true}</li>
//     <li>{false}</li>
//     <li>{undefined}</li>
//     <li>{null}</li>
//     <li>{0}</li>
//     <li>{String(true)}</li>
//   </ul>
// )

// const dest = 'https://ja.react.dev'
// root.render(
//   // <a href={dest}>React本家サイト</a>
//   <a href={dest + '/docs'}>React本家サイト</a>
// )

// const attrs = {
//   href: 'https://wings.msn.to/',
//   download: false,
//   target: '_blank',
//   rel: 'help',
// }
// root.render(
//   <a {...attrs}>サポートページへ</a>
// )



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
