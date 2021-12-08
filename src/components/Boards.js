import React from 'react'
import Board from './Board';

function Boards() {
  const images = [
    "https://doodleipsum.com/700x700?i=9c8765a80fc8a28621b7178c9aec581d",
    "https://doodleipsum.com/700x700?i=4699d28c7c08340f89717c7c6ffe6dac",
    "https://doodleipsum.com/700x700?i=5d1d0459018cb18996f192488490c344",
    "https://doodleipsum.com/700x700?i=6308da9791a4ed11a2c56d2554d02810",
    "https://doodleipsum.com/700x700?i=008c40ecc01a1085a88f20c2fa995ec4",
    "https://doodleipsum.com/700x700?i=3b6b697e35f330d0bbaf94e636f087be",
    "https://doodleipsum.com/700x700?i=f8b1abea359b643310916a38aa0b0562",
    "https://doodleipsum.com/700x700?i=7d79895540161ca8c31dff95199e7151",
    "https://doodleipsum.com/700x700?i=a79e5ddf189bb318050963124f848335"
  ]

  const getRandomImage = () => 
  images[Math.floor(Math.random() * 10)];

  const boards = Array(15)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    title: Math.random().toString(36).substr(2,15),
    userId: Math.random().toString(36).substr(2,6),
    timestamp: 1234567890123 + index * 1000 * 60,
    likes: Math.floor(Math.random() * 500),
    imgUrl: getRandomImage()
  }))
  .reverse();

  console.log('---', boards)

  return (
    <div className="boards">
      {boards.map((board, index) => <Board key={index} board={board}/>)}
    </div>
  )
}

export default Boards
