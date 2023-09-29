import React from 'react'

const Feedback = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>Give us your feedback</h1>
        <div className='contact-form-container'>
            <input type="text" placeholder='Your comment' />
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  );
};

export default Feedback