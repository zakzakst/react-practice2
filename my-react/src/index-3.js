import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Chapter 2
// import AppClass from './AppClass';

// Chapter 3
// import books from './chap03/books'
// import MyHello from './chap03/MyHello'
// import EventBasic from './chap03/EventBasic'
// import StateBasic from './chap03/StateBasic'
// import ForList from './chap03/ForList'
// import ForNest from './chap03/ForNest'
// import ForFilter from './chap03/ForFilter'
// import ForSort from './chap03/ForSort'
// import SelectStyle from './chap03/SelectStyle'
// import StyledPanel from './chap03/StyledPanel'
// import TitledPanel from './chap03/TitledPanel'
// import ListTemplate from './chap03/ListTemplate'
// import TypeProp, { Member } from './chap03/TypeProp'
// import StateParent from './chap03/StateParent'

// Chapter 4
// import EventMouse from './chap03/EventMouse'
// import EventCompare from './chap03/EventCompare'
// import EventError from './chap03/EventError'
// import EventObj from './chap03/EventObj'
// import EventPoint from './chap03/EventPoint'
// import EventKey from './chap03/EventKey'
// import EventArgs from './chap03/EventArgs'
// import EventArgs2 from './chap03/EventArgs2'
// import EventPropagation from './chap03/EventPropagation'
// import EventOnce from './chap03/EventOnce'
// import EventPassive from './chap03/EventPassive'

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// #region ■■chap02■■
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

// const props = 'color: White; background-color: Blue; padding: 3px'
// const props = {
//   color: 'white',
//   backgroundColor: 'blue',
//   padding: 3,
// }
// root.render(
//   <>
//     <p style={props}>WINGSプロジェクト</p>
//     <p className='hoge'>WINGSプロジェクト</p>
//   </>
// )

// const title = 'これからはじめるVue.js 3実践入門'
// root.render(
//   React.createElement(
//     'div',
//     { className: 'main' },
//     React.createElement(
//       'p',
//       null,
//       `「${title}」（SBクリエイティブ刊）`
//     ),
//     React.createElement(
//       'img',
//       {
//         src: 'https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg',
//         alt: title
//       }
//     ),
//     '絶賛発売中！'
//   )
// )
// #endregion

// #region ■■chap03■■
/**
 * Chapter 3-1
 */
// root.render(
//   <>
//     <MyHello myName='鈴木' />
//     <MyHello myName={3} />
//     <MyHello />
//   </>
// )

// root.render(
//   <EventBasic type='time' />
// )

// root.render(
//   <StateBasic init={0} />
// )

// root.render(
//   <ForList src={books} />
// )

// root.render(
//   <ForNest src={books} />
// )

// root.render(
//   <ForFilter src={books} />
// )

// root.render(
//   <ForSort src={books} />
// )

// root.render(
//   <SelectStyle mode='light' />
//   // <SelectStyle mode='dark' />
// )

// root.render(
//   <StyledPanel>
//     <p>メンバー募集中！</p>
//     <p>ようこそ、WINGSプロジェクトへ！！</p>
//     <MyHello myName='鈴木' />
//   </StyledPanel>
// )

// root.render(
//   <TitledPanel
//     title={
//       <p>メンバー募集中！</p>
//     }
//     body={
//       <p>ようこそ、WINGSプロジェクトへ！！</p>
//       // <MyHello myName='鈴木' />
//     }
//   />
// )

// const title = <p>メンバー募集中！</p>
// const body = <p>ようこそ、WINGSプロジェクトへ！！</p>
// root.render(
//   <TitledPanel
//     title={title}
//     body={body}
//   />
// )

// root.render(
//   <TitledPanel>
//     <p key='title'>メンバー募集中！</p>
//     <p key='body'>ようこそ、WINGSプロジェクトへ！！</p>
//   </TitledPanel>
// )

// root.render(
//   <ListTemplate src={books}>
//     {(el) => (
//       <>
//         <dt>
//           <a href={`https://wings.msn.to/books/${el.isbn}/${el.isbn}.jpg`}>
//             {el.title}（{el.price}円）
//           </a>
//         </dt>
//         <dd>{el.summary}</dd>
//       </>
//     )}
//   </ListTemplate>
// )

// root.render(
//   <ListTemplate src={books} render={(el) => (
//     <>
//       <dt>
//         <a href={`https://wings.msn.to/books/${el.isbn}/${el.isbn}.jpg`}>
//           {el.title}（{el.price}円）
//         </a>
//       </dt>
//       <dd>{el.summary}</dd>
//     </>
//   )} />
// )

// // （1）PropTypes.instanceOf
// root.render(
//   <TypeProp prop1={new Member()} />
//   // <TypeProp prop1='hoge' />
// )

// // （2）PropTypes.oneOf
// root.render(
//   <TypeProp prop2='男性' />
//   // <TypeProp prop2='hoge' />
// )

// // （3）PropTypes.oneOfType
// root.render(
//   <TypeProp prop3='鈴木花子' />
//   // <TypeProp prop3={new Member()} />
// )

// // （4）PropTypes.arrayOf
// root.render(
//   <TypeProp prop4={[15, 30]} />
//   // <TypeProp prop4={[30, '鈴木花子']} />
// )

// // （5）ProtoTypes.objectOf
// root.render(
//   <TypeProp prop5={{ '鈴木花子': 15, '佐藤雫': 30 }} />
//   // <TypeProp prop5={{ '鈴木花子': 15, '佐藤雫': '三十' }} />
// )

// // （6）PropTypes.shape
// root.render(
//   <TypeProp prop6={{ name: '鈴木花子', age: 35, sex: '女性', blood: 'A' }} />
//   // <TypeProp prop6={{ age: 35, sex: '女性' }} />
// )

// （7）PropTypes.exact
// root.render(
//   <TypeProp prop7={{ name: '鈴木花子', age: 35, sex: '女性', blood: 'A' }} />
// )

// root.render(
//   <StateParent />
// )

// #endregion

// #region ■■chap04■■
// root.render(
//   <EventMouse
//     alt='ロゴ画像'
//     beforeSrc='https://www.web-deli.com/image/linkbanner_l.gif'
//     afterSrc='https://www.web-deli.com/image/home_chara.gif'
//   />
// )

// root.render(
//   <EventCompare />
// )

// root.render(
//   <EventError
//     src='./image/wings.jpg'
//     // src='./image/_wings.jpg'
//     alt='サンプル画像'
//   />
// )

// root.render(
//   <EventObj />
// )

// root.render(
//   <EventPoint />
// )

// root.render(
//   <EventKey />
// )

// root.render(
//   <EventArgs />
// )

// root.render(
//   <EventArgs2 />
// )

// root.render(
//   <EventPropagation />
// )

// root.render(
//   <EventOnce />
// )

// root.render(
//   <EventPassive />
// )

// #endregion

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
