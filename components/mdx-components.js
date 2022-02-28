import Image from 'next/image';
import Pre from './pre';

export const mdxComponents = {
  Image,
  pre: ({ children }) => <Pre {...children.props} />,
  figcaption: (props) => <figcaption className="-mt-6" {...props} />,
  A: (props) => (
    <div
      className="inherit block py-4 px-6 bg-green-900 bg-opacity-50 text-center rounded-xl"
      {...props}
    />
  ),
};
