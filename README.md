
# 📚 PLP Bookstore – MongoDB Assignment

This repository contains my MongoDB assignment for the **PLP MERN Stack Development Program**. It demonstrates how to work with MongoDB collections using Node.js, covering CRUD operations, advanced queries, aggregation pipelines, and indexing.

---

## 📂 Files in This Repository

* **insert_books.js** → Inserts at least 10 book documents into the `books` collection.
* **queries.js** → Contains MongoDB queries for CRUD operations and advanced queries (find, update, delete, projection, sorting, pagination).
* **aggregation.js** → Contains aggregation pipelines (average price by genre, most books by an author, group by publication decade).
* **indexing.js** → Demonstrates indexing (`title` field and compound index on `author + published_year`) with `explain()` to show performance.
* **README.md** → This file, explaining how to run the project.
* **screenshot.png** → Screenshot of my MongoDB Compass/Atlas showing the `books` collection and sample data.

---

## 🛠 Requirements

Before running the project, ensure the following are installed:

* [Node.js](https://nodejs.org/)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/atlas)
* [MongoDB Compass](https://www.mongodb.com/products/compass) (optional but useful for viewing data)

---

## ▶️ How to Run the Project

1. **Clone this repository**:

   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Azeez06.git
   cd mongodb-data-layer-fundamentals-and-advanced-techniques-Azeez06
   ```

2. **Install required packages**:

   ```bash
   npm install mongodb dotenv
   ```

3. **Start your MongoDB server** (or connect to MongoDB Atlas).

4. **Insert sample data into the collection**:

   ```bash
   node insert_books.js
   ```

5. **Run CRUD and queries**:

   ```bash
   node queries.js
   ```

6. **Run aggregation pipelines**:

   ```bash
   node aggregation.js
   ```

7. **Run indexing examples**:

   ```bash
   node indexing.js
   ```

---

## 📸 Screenshot

A screenshot of my MongoDB Compass showing the `books` collection with documents has been added as **screenshot.png**.

---

## 📊 Features Implemented

✔️ Inserted 10+ book documents into the `books` collection
✔️ Basic CRUD operations (Create, Read, Update, Delete)
✔️ Advanced queries with filtering, projection, sorting, and pagination
✔️ Aggregation pipelines (average price by genre, most books by an author, group by decade)
✔️ Indexing for performance improvement

---

## 👨‍💻 Author

* **Azeez Sulaiman**
