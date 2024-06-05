import ListGroup from "./components/ListGroup"

function App() {
  const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"]

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading="List of City"
        onSelectItem={handleSelectItem}
      />
    </div>
  )
}

export default App
