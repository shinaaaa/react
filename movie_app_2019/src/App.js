import React from 'react';
import PropTypes from 'prop-types';

const foodlike = [
  {
    id: 1,
    name: "김치",
    picture: "https://img.kr.news.samsung.com/kr/wp-content/uploads/2013/07/김치_03.jpg",
    rating: 4
  },
  {
    id: 2,
    name: "삽겹살",
    picture: "https://t1.daumcdn.net/cfile/tistory/27556B3F53FC68AA33",
    rating: 2
  },
  {
    id: 3,
    name: "불고기",
    picture: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Bulgogi_2.jpg",
    rating: 3
  },
  {
    id: 4,
    name: "비빔밥",
    picture: "https://3.bp.blogspot.com/-ivcIFbxA2OM/TvsdLFcR8lI/AAAAAAAABOQ/Qhp6UtPIzh8/s1600/Picture1%2B-%2Bjeonju.jpg",
    rating: 1
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}
Food.propTypes = {
name: PropTypes.string.isRequired,
picture:PropTypes.string.isRequired,
rating:PropTypes.number
}

function App() {
  return (
    <div>
      {foodlike.map(dish => (
        <Food
        key={dish.id}
        name={dish.name}
        picture={dish.picture}
        rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;