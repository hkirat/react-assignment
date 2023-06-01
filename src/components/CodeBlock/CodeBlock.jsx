import React from 'react';

import { CodeBlock } from '@atlaskit/code';

const exampleCodeBlock = `// React Component
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  mountNode
);`;


const CustomCodeBlock = (props) => {
  const {language, text, onChange}= props;
  const testCode = `fsfsgs${text}`
  return <CodeBlock language={language} text={testCode} onChange={onChange}/>;
};

export default CustomCodeBlock;
