//crud operation
const { connectDB } = require("./db");
const { Book } = require("./models/book");

async function crudOperations() {
    await connectDB();

    // 1. Find all books in a specific genre
    const fictionBooks = await Book.find({ genre: "Fiction" });
    console.log("📚 Fiction Books:", fictionBooks);

     //2. Find books published after a certain year
    const recentBooks = await Book.find({ published_year: { $gt: 2010 } });
    console.log("📖 Recent Books:", recentBooks);

    // 3. Find books by a specific author
    const byChimamanda = await Book.find({ author: "Chimamanda Ngozi Adichie" });
    console.log("✍️ Books by Chimamanda:", byChimamanda);

    // 4. Update the price of a specific book
    await Book.updateOne({ title: "Americanah" }, { $set: { price: 35 } });
    console.log("💰 Price updated for Americanah");

    // 5. Delete a book by its title
    await Book.deleteOne({ title: "Stay With Me" });
    console.log("🗑️ Deleted 'Stay With Me'");

    process.exit();
}

crudOperations();


//Indexing
const { connectDB } = require("./db");
const { Book } = require("./models/book");

async function indexingTasks() {
    await connectDB();

    // 1️⃣ Create an index on the title field
    await Book.collection.createIndex({ title: 1 });
    console.log("✅ Index created on title field");

    // 2️⃣ Create a compound index on author and published_year
    await Book.collection.createIndex({ author: 1, published_year: -1 });
    console.log("✅ Compound index created on author + published_year");

    // 3️⃣ Use explain() to check performance of a query with the index
    const explainResult = await Book.find({ title: "Book 1" }).explain("executionStats");
    console.log("🔍 Explain result for title query:");
    console.dir(explainResult.executionStats, { depth: null });

    process.exit();
}

indexingTasks();

//Agreggation
const { connectDB } = require("./db");
const { Book } = require("./models/book");

async function aggregationTasks() {
    await connectDB();

    // 1️⃣ Average price of books by genre
    const avgPriceByGenre = await Book.aggregate([
        { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
    ]);
    console.log("📊 Average Price by Genre:", avgPriceByGenre);

    // 2️⃣ Author with the most books
    const topAuthor = await Book.aggregate([
        { $group: { _id: "$author", bookCount: { $sum: 1 } } },
        { $sort: { bookCount: -1 } },
        { $limit: 1 }
    ]);
    console.log("🏆 Author with Most Books:", topAuthor);

    // 3️⃣ Group books by decade and count them
    const booksByDecade = await Book.aggregate([
        {
            $group: {
                _id: { $subtract: [ { $divide: ["$published_year", 10] }, { $mod: [ { $divide: ["$published_year", 10] }, 1 ] } ] }, // decade grouping
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                decade: { $multiply: ["$_id", 10] },
                count: 1,
                _id: 0
            }
        },
        { $sort: { decade: 1 } }
    ]);
    console.log("📚 Books Grouped by Decade:", booksByDecade);

    process.exit();
}

aggregationTasks();

//advanced-Queries

const { connectDB } = require("./db");
const { Book } = require("./models/book");

async function advancedQueries() {
    await connectDB();

    // 1. Find books that are both in stock and published after 2010
    //const availableRecentBooks = await Book.find({
      //  in_stock: true,
        //published_year: { $gt: 2010 }});
   // console.log("📚 In-stock books after 2010:", availableRecentBooks);

    // 2. Projection (only title, author, price)
    const projectedBooks = await Book.find({}, { title: 1, author: 1, price: 1, _id: 0 });
    console.log("📖 Projected Books:", projectedBooks);

    // 3. Sorting by price
   // console.log("⬆️ Ascending:", await Book.find().sort({ price: 1 }));
    //console.log("⬇️ Descending:", await Book.find().sort({ price: -1 }));

    // 4. Pagination (5 per page)
    //const page = 2;
    //const perPage = 5;
    //const paginatedBooks = await Book.find().skip((page - 1) * perPage).limit(perPage);
    //console.log(`📄 Page ${page} Books:`, paginatedBooks);

    
    process.exit();
}

advancedQueries();

