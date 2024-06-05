import { useState } from "react"

interface Props {
  items: string[]
  heading: string
  onSelectItem: (item: string) => void
}

export default function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedItem, setSelectedItem] = useState(0)
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && "no items found"}
        {items.map((item, index) => (
          <li
            key={item}
            role="button"
            onClick={() => {
              setSelectedItem(index)
              onSelectItem(item)
            }}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
