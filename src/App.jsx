import { lazy, Suspense, useEffect, useReducer } from 'react'
// import { idGenerator } from './utils/helper';
import { toyReducer } from './Reducer/toyReducer.js';
import ToyRepository from './ToyRepository.js';
import ToyAdapter from './ToyAdapter.js';

const Button = lazy(() => import("./Components/Button.jsx"));
const Input = lazy(() => import("./Components/Input.jsx"));
const ListItem = lazy(() => import("./ListItem.jsx"))
const App = () => {

  const [toys, dispatch] = useReducer(toyReducer, []);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const rawToys = await ToyRepository.fetchToys();
        const formattedToys = ToyAdapter.formatToys(rawToys);

        // Toy Reducer
        dispatch({ type: "SET_TOYS", toys: formattedToys });
      } catch (error) {
        console.error("Failed to fetch toys:", error);
      }
    };

    fetchToys();
  }, []);


  let handlePostData = async (e) => {
    e.preventDefault()
    let form = new FormData(e.target)
    let values = Object.fromEntries(form)
    const rawPostToys = await ToyRepository.addToy(values?.name)
    const formattedToys = ToyAdapter.prepareToyInput(rawPostToys)
    dispatch({ type: 'ADD_TOY', ...formattedToys }); // Dispatch the ADD_TOY action
    // Reset the form fields
    e.target.reset();

  }

  const handleDelete = (id) => {
    dispatch({ type: 'REMOVE_TOY', details: { _id: id } }); // Dispatch the ADD_TOY action
  }

  return (
    <>
      <form onSubmit={handlePostData}>
        <label htmlFor="">Toy name</label>
        <br />
        <br />
        {/* <input type="text" name="name" /> */}
        <Suspense fallback={<div>Loading Button...</div>}>
          <Input />
        </Suspense>
        <br />
        <br />
        {/* <button type='submit'>Add Toy</button> */}
        <Suspense fallback={<div>Loading Button...</div>}>
          <Button />
        </Suspense>
        <br />

      </form>
      <Suspense fallback={<div>Loading Button...</div>}>
        <ListItem toys={toys} callBackFunction={handleDelete} />
      </Suspense>
    </>
  )
}

export default App