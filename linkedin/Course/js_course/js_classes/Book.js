class Book{
    constructor(
        title,
        author,
        ISBN,
        pubYear,
        pageNumbers,
        currentPage,
        readStatus
    ){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.pubYear = pubYear;
        this.pageNumbers = pageNumbers;
        this.currentPage = currentPage;
        this.readStatus = readStatus;
    }
    
    addBook(){
        return {
            title: this.title,
            author: this.author,
            ISBN: this.ISBN,
            pubYear: this.pubYear,
            pageNumbers: this.pageNumbers,
            currentPage: this.currentPage,
            readStatus: this.readStatus,
        }
    }
    
    updateCurrentPage(newCurrentPage){
        this.currentPage = newCurrentPage;
    }
    
    updateReadStatus(newReadStatus){
        this.readStatus = newReadStatus;
    }
}

export default Book;