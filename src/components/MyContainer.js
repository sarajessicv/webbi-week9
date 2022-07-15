import MyList from './MyList.js'


const MyContainer = () => {
  return (
    <div>
      <h2>My Container</h2>
      <MyList header="Really epic list component"
      items={[
        { id: "1", text: "This is an item" },
        { id: "2", text: "Also this" },
      ]} 
      />
    </div>
  )
}

export default MyContainer
