import React from 'react';

const TaskComponent = ({ diff }) => {
  let colorText;

  if (diff === 'Easy') {
    colorText = 'green';
  } else if (diff === 'Medium') {
    colorText = 'orange';
  } else if (diff === 'Hard') {
    colorText = 'red';
  }

  return (
    <td style={{ color: colorText }}>
        {diff}
    </td>
  );
};

export default TaskComponent;
