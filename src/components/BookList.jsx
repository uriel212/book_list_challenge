import React from 'react'
import books from '../data/books.json'

const Booklist = () => {
  const bookList = books.library;

    return (
        <>
            <div>
                {
                    bookList.map((data, index) => {
                        console.log(data)
                        return (
                            <div key={index}>
                                <img src={data.book.cover} alt="book_image" />
                                <h2 className='' >{data.book.title}</h2>
                                <h3>{data.book.author.name}</h3>
                                <p>{data.book.pages}</p>
                                <p>{data.book.synopsis}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}

export default Booklist;