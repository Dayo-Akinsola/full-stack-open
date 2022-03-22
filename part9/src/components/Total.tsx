import React from 'react'

interface coursePartType {
  name: string,
  exerciseCount: number,
}

const Total = ({ courseParts } : { courseParts: Array<coursePartType>}) => {
  return (
    <p>
      Number of exercises{" "}
      {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>  
    )
}

export default Total