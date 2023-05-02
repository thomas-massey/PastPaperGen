import React from 'react'

export default function ListTopics() {
  const subjects = ["Math", "Physics"];
  const exam_types = ["AS", "A-Level", "IGCSE"];
  const exam_boards = ["Edexcel", "AQA", "OCR"];
  const topics = ["Algebra", "Calculus", "Trigonometry", "Vectors", "Mechanics", "Statistics", "Probability", "Kinematics", "Dynamics", "Forces", "Waves", "Electricity", "Magnetism", "Electromagnetism", "Quantum Physics", "Particle Physics", "Thermodynamics", "Optics", "Light", "Sound", "Heat", "Energy", "Power", "Work", "Pressure", "Electricity", "Magnetism", "Electromagnetism", "Quantum Physics", "Particle Physics", "Thermodynamics", "Optics", "Light", "Sound", "Heat", "Energy", "Power", "Work", "Pressure", "Electricity", "Magnetism", "Electromagnetism", "Quantum Physics", "Particle Physics", "Thermodynamics", "Optics", "Light", "Sound", "Heat", "Energy", "Power", "Work", "Pressure", "Electricity", "Magnetism", "Electromagnetism", "Quantum Physics", "Particle Physics", "Thermodynamics", "Optics", "Light", "Sound", "Heat", "Energy", "Power", "Work", "Pressure"];
  return (
    <div className="overflow-auto h-96">
      {topics.map((topic) => (
        <div>
          <input type="checkbox" id={topic} name={topic} value={topic} />
          <label for={topic}>{topic}</label>
        </div>
      ))}
    </div>
  )
}