import React from "react";
import "./App.css";
import Context from "./context";
import List from "./components/List/List";

function App() {
  const model = [
    {
      id: 1,
      imageUrl: "./images/ring_1.png",
      name: "Ring 1",
      description: "Lorem ipsum",
      amount: 4,
      size: 14,
      comments: [
        {
          id: 1,
          productId: () => model.id,
          description: "some text here",
          date: "14:00 22.08.2021",
        },
      ],
    },
    {
      id: 2,
      imageUrl: "./images/ring_2.png",
      name: "Ring 2",
      description: "Lorem ipsum",
      amount: 4,
      size: 16,
      comments: [],
    },
    {
      id: 3,
      imageUrl: "./images/ring_3.png",
      name: "Ring 3",
      description: "Lorem ipsum",
      amount: 3,
      size: 16,
      comments: [],
    },
    {
      id: 4,
      imageUrl: "./images/ring_2.png",
      name: "Ring 4",
      description: "Lorem ipsum",
      amount: 5,
      size: 16,
      comments: [],
    },
    {
      id: 5,
      imageUrl: "./images/ring_1.png",
      name: "Ring 5",
      description: "Lorem ipsum",
      amount: 9,
      size: 16,
      comments: [],
    },
  ];

  const [items, setItems] = React.useState(model);

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function addItem(args) {
    const [
      imgUrl = "",
      name = "No name",
      desc = "Description is empty",
      amount = 0,
      size = 20
    ] = args;
    setItems(
      items.concat([
        {
          id: items.length + 1,
          imageUrl: imgUrl,
          name: name,
          description: desc,
          amount: amount,
          size: size,
          comments: [],
        },
      ])
    );
  }

  const editItem = (newItem) => {
    setItems((items) => {
      items.forEach((item) => {
        if (item.id === newItem.id) {
          Object.assign(item, newItem);
        }
      });
      return [...items];
    });
  };
  const isSortedBy = (items, key) => {
    debugger;
    if (typeof items[0][key] === "string") {
      for (let i = 0; i < items.length - 1; i++) {
        if (items[i][key] > items[i + 1][key]) {
          return false;
        }
      }
    } else {
      for (let i = 0; i < items.length - 1; i++) {
        if (items[i][key] > items[i + 1][key]) {
          return false;
        }
      }
    }
    return true;
  };
  const sortItems = (itemKey) => {
    console.log(itemKey);
    const sorted = [...items].sort((a, b) => {
      if (typeof a[itemKey] === "string") {
        if (a[itemKey].toLowerCase() > b[itemKey].toLowerCase()) {
          return 1;
        }

        if (a[itemKey].toLowerCase() < b[itemKey].toLowerCase()) {
          return -1;
        }
        return 0;
      } else {
        return a[itemKey] - b[itemKey];
      }
    });
    if (isSortedBy(items, itemKey)) {
      console.log(`Already sorted by` + itemKey);
      sorted.reverse();
    }
    setItems(sorted);
  };
  const addComment = (commentItem) => {
    if (commentItem) {
      setItems((items) => {
        items.forEach((item) => {
          if (item.id === commentItem.productId) {
            item.comments.push(commentItem);
          }
        });
        return [...items];
      });
    }
  };
  return (
    <Context.Provider value={{ removeItem, addItem, addComment, editItem }}>
      <div>
        <List items={items} sort={sortItems} />
      </div>
    </Context.Provider>
  );
}

export default App;
