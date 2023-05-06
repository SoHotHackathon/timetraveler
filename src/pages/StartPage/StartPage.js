import React from 'react';
import './StartPage.scss';
import Header from '../Component/Header/Header';

function Nav(){
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}
function Article(){
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}

function StartPage() {
    return (
        <div>
            <Header />
            <Nav></Nav>
            <Article></Article>
        </div>
    );
}

export default StartPage;