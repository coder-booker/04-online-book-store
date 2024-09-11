const BASE_URL = "http://127.0.0.1:3000";

async function createBook(book: any) {
  try {
    const response = await fetch(`${BASE_URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    });
    const data = await response.json();
    console.log("Create Response:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getBook(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/get?id=${id}`, {
      method: "GET",
    });
    const data = await response.json();
    console.log("Get Response:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function updateBook(book: any) {
  try {
    const response = await fetch(`${BASE_URL}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    });
    const data = await response.json();
    console.log("Update Response:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function deleteBook(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/delete?id=${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Delete Response:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// 示例调用
(async () => {
  console.log("Start Test");

  let newBook = {
    id: "",
    bookname: "Triple Uni",
    author: "Mike",
    publication_date: "2021-01-01",
    price: 100
  };
  
  const result_book = await createBook(newBook);
  newBook.id = result_book.id;

  await getBook(newBook.id);

  await updateBook({
    ...newBook,
    publication_date: "2024-09-11",
    price: 200
  });

  await getBook(newBook.id);
  
  await deleteBook(newBook.id);

  await getBook(newBook.id);
})();