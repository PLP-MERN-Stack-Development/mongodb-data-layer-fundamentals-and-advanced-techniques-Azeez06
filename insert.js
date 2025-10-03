const { connectDB } = require("./db");
const { Book } = require("./models/book");

async function insertBooks() {
    await connectDB();

    const books = [
        { title: "Things Fall Apart", author: "Chinua Achebe", genre: "Fiction", published_year: 1958, price: 20, in_stock: true, pages: 209, publisher: "Heinemann" },
        { title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", genre: "Historical Fiction", published_year: 2006, price: 25, in_stock: true, pages: 448, publisher: "Knopf" },
        { title: "Americanah", author: "Chimamanda Ngozi Adichie", genre: "Romance", published_year: 2013, price: 30, in_stock: true, pages: 588, publisher: "Knopf" },
        { title: "Born a Crime", author: "Trevor Noah", genre: "Memoir", published_year: 2016, price: 28, in_stock: false, pages: 304, publisher: "Spiegel & Grau" },
        { title: "Purple Hibiscus", author: "Chimamanda Ngozi Adichie", genre: "Fiction", published_year: 2003, price: 22, in_stock: true, pages: 307, publisher: "Algonquin" },
        { title: "The Secret Lives of Baba Segi’s Wives", author: "Lola Shoneyin", genre: "Drama", published_year: 2010, price: 18, in_stock: true, pages: 245, publisher: "Serpent’s Tail" },
        { title: "Becoming", author: "Michelle Obama", genre: "Biography", published_year: 2018, price: 35, in_stock: true, pages: 426, publisher: "Crown" },
        { title: "The Fishermen", author: "Chigozie Obioma", genre: "Tragedy", published_year: 2015, price: 27, in_stock: true, pages: 304, publisher: "Little, Brown and Co." },
        { title: "Stay With Me", author: "Ayobami Adebayo", genre: "Fiction", published_year: 2017, price: 24, in_stock: false, pages: 288, publisher: "Knopf" },
        { title: "We Should All Be Feminists", author: "Chimamanda Ngozi Adichie", genre: "Essay", published_year: 2014, price: 15, in_stock: true, pages: 64, publisher: "Anchor" },
    ];

    await Book.insertMany(books);
    console.log("✅ 10 Books Inserted!");
    process.exit();
}

insertBooks();
