export const ADD_COST = 'ADD_COST';
export const DELETE_COST = 'DELETE_COST';

export const updatePrice = addedPrice => {
  console.log(`Added feature is: Number ${addedPrice.id}, Name ${addedPrice.name}`);
  return {
    type: ADD_COST,
    payload: addedPrice
    };
};

export const updateNewPrice = deletedprice => {
    console.log(`Added feature is: Number ${deletedprice.id}, Name ${deletedprice.name}`);
    return {
      type: DELETE_COST,
      payload: deletedprice
      };
  };