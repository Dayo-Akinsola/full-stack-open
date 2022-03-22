import React from 'react'

interface coursePartType {
  name: string,
  exerciseCount: number,
}

const Content = ({ courseParts } : { courseParts: Array<coursePartType>}) => {
  return (
    <>
    <p>
      {courseParts[0].name} {courseParts[0].exerciseCount}
    </p>
    <p>
      {courseParts[1].name} {courseParts[1].exerciseCount}
    </p>
    <p>
      {courseParts[2].name} {courseParts[2].exerciseCount}
    </p>
    </>
  )
}

export default Content