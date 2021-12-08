import React from 'react'

function Board({board}) {
  
  return (
    <div className="board">
      <div className="content">
        <div className="image-box">
          <img src={board.imgUrl} alt={board.title} />
        </div>
        <div className="text-box">
          <h2>{board.title}</h2>
          <div className="description">
            {board.userId}<span>👍{board.likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board
