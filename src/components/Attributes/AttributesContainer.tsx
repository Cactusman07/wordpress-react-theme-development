import { useQuery } from '@apollo/client/react';
import React from 'react';
import { GET_ALL_ATTRIBUTES } from '../../hooks/graphquery';
import Attribute from './Attribute'

const AttributesContainer = () => {
  const { loading, error, data } = useQuery(GET_ALL_ATTRIBUTES);
  const attributesFound = Boolean(data?.attributes);

  return (
    <React.Fragment>
      <div id="frontPagePosts" className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Attributes</h1>
        
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : !attributesFound ? (
          <p>Attributes cound not be found</p>
        ) : (
          <div className="flex flex-wrap">
          
            {data.attributes.nodes?.map((attribute: any, index: number) => (

              <Attribute title={attribute.title} key={index} />
              
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AttributesContainer;