import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
      <div className="md:w-4/12 w-8/12 mx-auto text-center my-8">
        <p className="text-orange-500 mb-2">{subHeading}</p>
        <h3 className="uppercase border-y py-4 text-4xl">{heading}</h3>
      </div>
    );
};

export default SectionTitle;