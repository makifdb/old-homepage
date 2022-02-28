import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Pre = ({ className, children }) => {
  const lang = className.split('-')[1];
  const CODE = children.slice(0, -1);
  return (
    <SyntaxHighlighter
      language={lang}
      style={coldarkDark}
      wrapLines={true}
      customStyle={{ backgroundColor: 'rgb(4, 120, 87, 0.2)' }}
    >
      {CODE}
    </SyntaxHighlighter>
  );
};

export default Pre;
