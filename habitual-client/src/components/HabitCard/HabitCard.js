import React from 'react'
import { scaleLinear } from 'd3-scale'
import { Circle } from 'react-progress-bar.js'
import './HabitCard.css'

const colourScale = scaleLinear()
  .domain([0, 0.33, 0.66, 1])
  .range(['#fff', '#ff0c00', '#ffbb00', '#61d100'])

const progressBarOptions = {
  easing: 'easeInOut',
  strokeWidth: 4,
  step: (state, circle, attachment) => {
    circle.path.setAttribute('stroke', colourScale(circle.value()))
    let value = Math.round(circle.value() * 100)
    circle.setText(`${value}%`)
    circle.text.style.color = colourScale(circle.value())
  }
}

const HabitCard = ({ name, description, frequency, progress, onClick }) => (
  <div className="habitcard">
    <Circle
      progress={progress / frequency}
      text={'test'}
      options={progressBarOptions}
      className={'progressBar'}
      initialAnimate={true}
    />
    <h2>{name}</h2>
    <p>{description}</p>
    <button onClick={onClick}>Done</button>
  </div>
)

export default HabitCard;
