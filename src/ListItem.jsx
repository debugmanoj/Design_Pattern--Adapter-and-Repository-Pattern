import PropTypes from 'prop-types';

const ListItem = ({ toys, callBackFunction }) => {
  return (
    <>
      {
        toys && toys?.map((item) => {
          return <li key={item?._id}>
            {item?.toyName}
            <span onClick={() => callBackFunction(item?._id)} style={{ marginLeft: "10px", cursor: "pointer", backgroundColor: "red", padding: "2px" }}>X</span>
          </li >
        })
      }
    </>
  )

}

// Define prop types for the component
ListItem.propTypes = {
  toys: PropTypes.array.isRequired,        // 'toys' should be an array and is required
  callBackFunction: PropTypes.func.isRequired, // 'callBackFunction' should be a function and is required
};

export default ListItem