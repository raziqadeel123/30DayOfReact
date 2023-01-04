import React from 'react';
import App from '../Examples/App';

const Content = () => {
  return (
    <div className='white p-4'>
      <h3>Props</h3>
      <p>
        <span className='heightlight'> Props stand for "Properties." </span>
        Props stand for "Properties." They are read-only components. It is an
        object which stores the value of attributes of a tag and work similar to
        the HTML attributes. It gives a way to pass data from one component to
        other components. It is similar to function arguments.
      </p>
      <p>
        Props are passed to the component in the same way as arguments passed in
        a function. <span className='heightlight'> Props are immutable </span>
        so we cannot modify the props from inside the component. Inside the
        components, we can add attributes called props. These attributes are
        available in the component as this.
      </p>
      <p>
        React components use props to communicate with each other. Every parent
        component can pass some information to its child components by giving
        them props. Props might remind you of HTML attributes, but you can pass
        any JavaScript value through them, including objects, arrays, and
        functions.
      </p>
      <p>
        Eg: Props are the information that you pass to a JSX tag. For example,
        className, <span className='heightlight'> src </span> ,
        <span className='heightlight'> alt </span> , width, and height are some
        of the props you can pass to an
      </p>

      <App />
    </div>
  );
};

export default Content;
