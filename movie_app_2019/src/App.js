import React from 'react';

const foodlike = [
  {
    id:1,
    name: "김치",
    picture: "https://img.kr.news.samsung.com/kr/wp-content/uploads/2013/07/김치_03.jpg"
  },
  {
    id:2,
    name: "삽겹살",
    picture: "https://t1.daumcdn.net/cfile/tistory/27556B3F53FC68AA33"
  },
  {
    id:3,
    name: "불고기",
    picture: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Bulgogi_2.jpg"
  },
  {
    id:4,
    name: "비빔밥",
    picture: "https://3.bp.blogspot.com/-ivcIFbxA2OM/TvsdLFcR8lI/AAAAAAAABOQ/Qhp6UtPIzh8/s1600/Picture1%2B-%2Bjeonju.jpg"
  },
];

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodlike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.picture} />
      ))}
    </div>
  );
}

export default App;