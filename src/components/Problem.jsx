import React from 'react'
import './Problem.css'
import Example from './Example';
import { useLocation } from 'react-router-dom'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import BugReportIcon from '@mui/icons-material/BugReport';

import problems  from './dummyData';
function Problem() {
    const location = useLocation();
    const queryParameters = new URLSearchParams(location.search);
    const idx = parseInt(queryParameters.get("id"));
    
  return (
    <div className="problem">
    <div className="problem-left">
     <div className="problem-header problem-left-header">
        <div className="problem-left-heading active">Description</div>
        <div className="problem-left-heading">Editorial</div>
        <div className="problem-left-heading">Solutions(332)</div>
        <div className="problem-left-heading">Submissions</div>
     </div>
     <div className="problem-body">
        <div className="problem-title">
           {problems[idx-1].number}. {problems[idx-1].title}
        </div>
        <div className="problem-stats">
            <div className="problem-difficulty" style={{backgroundColor: problems[idx-1].difficulty === 'Easy' && '#224C47' ||
                                                        problems[idx-1].difficulty === 'Medium' && '#654F25' ||
                                                        problems[idx-1].difficulty === 'Hard' && 'rgba(249, 25, 25,0.3)',
                                                        color: problems[idx-1].difficulty === 'Easy' && '#77D37E' ||
                                                        problems[idx-1].difficulty === 'Medium' && '#FFB84D' ||
                                                        problems[idx-1].difficulty === 'Hard' && 'rgb(249, 25, 25)'}}>
                {problems[idx-1].difficulty}
            </div>
            <div className="icon">
            <ThumbUpIcon className="image"/>
            <span style={{color: "gray"}}>&nbsp;233</span>
            </div>
            <div className="icon">
            <ThumbDownAltIcon className="image"/>
            <span style={{color: "gray"}}>&nbsp;45</span>
            </div>
            <div className="icon">
            <StarBorderIcon className="image"/>
            </div>
            <div className="icon">
            <ShareRoundedIcon className="image"/>
            </div>
        </div>
        <div className="problem-description">
            {problems[idx-1].description}
        </div>
        <div className="examples">
            {
                problems[idx-1].examples.map((example,idx) => <Example input={example.input} output={example.output} number={idx+1}/>)
            }
        </div>
     </div>
    </div>
    <div className="problem-right">
    <div className="problem-right-upper">
    <div className="problem-header problem-right-header">
        <div className="problem-right-heading">Java</div>
        <div className="problem-right-heading">Auto</div>
     </div>
    </div>
    <div className="problem-right-down">
        <div className="console">
            <span>Console</span>
            <span className="menu">^</span>
        </div>
        <div className="down-icons">
            <div className="debug">
                <BugReportIcon id="bug"/>
            </div>
            <button className="code-btn" id="run">Run</button>
            <button className="code-btn" id="submit">Submit</button>
        </div>
     </div>
     
    </div>
    </div>
  )
}

export default Problem