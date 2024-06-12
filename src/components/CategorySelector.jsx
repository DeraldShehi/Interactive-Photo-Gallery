import categories from '../constants/categories'
// Should receive selectedCategory, selectPreviousCategory,
// selectNextCategory, and selectCategory as props
const CategorySelector = ({ selectedCategory , selectPreviousCategory , selectNextCategory , selectCategory}) => (
  <div className="category-selector">
    {/* Create a button element for the up arrow */}
    {/* It should have the classes "arrow" and "up-arrow" */}
    {/* It should call the selectPreviousCategory function on click */}
    {/* The button should display the text "↑" */}
    <button className="arrow up-arrow" onClick={selectPreviousCategory}>↑</button>
    <div className="categories-list">
      {/* Create a button element for each category */}
      {/* Use the constant object "categories" to get the category names */}
      {/* You should map over the values of the "categories" object */}
      {/* Each button should have the class "category" */}
      {/* Use the index as the key */}
      {/* Use the index as the id */}
      {/* If the index is equal to the selectedCategory, add the class "selected" */}
      {/* The button should call the selectCategory function on click */}
      {/* The button should display the category name in uppercase */}
      {Object.values(categories).map((categoryName, index)=>(
        <button 
          key={index} 
          id={index} 
          className={`category ${index === selectedCategory ? "selected" : ""}`} 
          onClick={selectCategory}
        >
          {categoryName.toUpperCase()}
        </button>
))}
    </div>
    {/* Create a button element for the down arrow */}
    {/* It should have the classes "arrow" and "down-arrow" */}
    {/* It should call the selectNextCategory function on click */}
    {/* The button should display the text "↓" */}
    <button className='arrow down-arrow' onClick={selectNextCategory}>↓</button>
  </div>
);

export default CategorySelector;
