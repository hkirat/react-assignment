import './index.css';

const ProblemDescription = props => {
  return (
    <div className='problem-main-container'>
      <div className='left-section'>
        <h1 className='problem-title'>Problem Name</h1>
        <p className='problem-description'>Problem Description</p>
        <div className='example'>
          <div className='example-title'>Example 1:</div>
          <div className='example-content'>Example 1 Content</div>
        </div>
        <div className='example'>
          <div className='example-title'>Example 2:</div>
          <div className='example-content'>Example 2 Content</div>
        </div>
      </div>
      <div className='right-section'>
        <div className='language-select'>
          <label htmlFor='language-select'>Select a coding language:</label>
          <select id='language-select'>
            <option value=''>Select a coding language:</option>
            <option value='javascript'>JavaScript</option>
            <option value='python'>Python</option>
            <option value='java'>Java</option>
            <option value='csharp'>C#</option>
            <option value='php'>PHP</option>
            <option value='ruby'>Ruby</option>
            <option value='swift'>Swift</option>
            <option value='go'>Go</option>
            <option value='kotlin'>Kotlin</option>
            <option value='typescript'>TypeScript</option>
          </select>
        </div>
        <div className='code-editor'>
          <textarea rows='30' placeholder='Enter your code here'></textarea>
        </div>
        <div className='button-container'>
          <button className='run-button'>Run</button>
          <button className='submit-button'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
