//code used from Abdulghafour Mohammad lectures in course Fullstact Developer at University West!
import React from 'react';
import axios from 'axios';

class Books extends React.Component
{
    state={
        bookList:[]
    }
    componentDidMount()
    {
        axios.get('http://localhost:20588/api/Books').then(res=>
        {
            console.log(res.data)
            this.setState({
                bookList:res.data
            })
        })
    }
    render()
    {
        return(
            <div>
                <h1 className="header">Books</h1>
                <table className="center">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                        </tr>
                        {this.state.bookList.map(book=>{
                            return(
                                <tr>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            )
        }
    }
    export default Books;
               