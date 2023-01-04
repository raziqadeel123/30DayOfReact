import React from 'react';

const Information = () => {
  //getMonth() method: It returns the month of a year, where 0 is January and 11 is December.
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <>
      <table class='table white'>
        <tbody>
          <tr>
            <th scope='row'>Day</th>
            <td>1</td>
          </tr>
          <tr>
            <th scope='row'>Topic</th>
            <td>Props</td>
          </tr>
          <tr>
            <th scope='row'>Date</th>
            <td>{date}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Information;
