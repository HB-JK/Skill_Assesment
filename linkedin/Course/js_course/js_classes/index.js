import Backpack from './Backpack.js'
import Book from './Book.js'

const books = [];

const everydayBacpack = new Backpack(
	"Everyday Backpack",
	30,
	"black",
	115,
	26,
	26,
	false
)

const book = new Book(
	'Book 1',
	'Julius',
	999923012,
	1998,
	100,
	80,
	'reading'
);
books.push(book.addBook());

console.log(books)
console.log(everydayBacpack);