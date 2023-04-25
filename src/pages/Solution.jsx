import './solution.css'

const Solution = () => {
  return (
    <div className='solution-container'>
      <div className='solution-top'>
        <span className='solution-span'>Choose any language:</span>
        <select className='solution-select'>
          <option className='solution-option'>Javascript</option>
          <option className='solution-option'>Python</option>
          <option className='solution-option'>Java</option>
          <option className='solution-option'>C++</option>
        </select>
      </div>
      <div className='solution-section'>
        <textarea className='solution-solution' rows='12' cols='60' />
      </div>
      <div className='solution-action'>
        <button className='solution-cancel'>Cancel</button>
        <button className='solution-submit'>Submit</button>
      </div>
    </div>
  )
}

export default Solution
