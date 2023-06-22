import React from 'react';

const Jumbotron = () => {
  const jumbotronStyle = {
    backgroundColor: 'lightgray',
    marginTop: '20px',
    marginBottom: '20px',
    padding: '40px',
  };

  return (
    <div className="jumbotron" style={jumbotronStyle}>
      <h1 className="display-4">A warm welcome!</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus unde eum illo dignissimos, minima ut fugit veritatis explicabo facilis nesciunt similique corrupti soluta error dicta tempora aliquid sit aspernatur assumenda.
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Call to action!
      </a>
    </div>
  );
};

export default Jumbotron;
