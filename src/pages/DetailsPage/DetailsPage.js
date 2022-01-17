import React,  {  useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../utils/constants';
import './assets/stylesheets/main.css';
import bookImg from './../../components/Card/book.jpg'

export default function DetailsPage() {
     
    const params = useParams();
    const [responseData, setResponseData] = useState('');
    const uri = `${baseUrl}isbn`;

    useEffect( () => {
        axios.post(uri, {"isbn" : `${params.isbn}`})
            .then(res => {console.log(res); setResponseData(res['data']['book']);})
            .catch(err => {console.error(err);});
        }, []);

    if(responseData !== '')
    return (
        <>
            <section className="row-alt">
            <div className="lead container">
                <h1>{responseData.volumeInfo.title}</h1>
                    <img src={responseData.volumeInfo.imageLinks ? responseData.volumeInfo.imageLinks.thumbnail : bookImg} alt="poster"></img>
                <p>{responseData.volumeInfo.description}</p>
            </div>
            </section>
            <section className="row">
                <div className="container">
                <table style={{alignText : 'center'}}>
                    <tbody>
                        <tr>
                            <th scope="row">
                                Authors
                            </th>
                            <td className="schedule-offset" colSpan="2">
                            {`${responseData.volumeInfo.authors ? responseData.volumeInfo.authors[0] : 'Not available'}`}
                            </td>
                            <th scope="row">
                                Published
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.volumeInfo.publishedDate}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Publisher
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.volumeInfo.publisher}
                            </td>
                            <th scope="row">
                                Average Rating
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.volumeInfo.averageRating ? responseData.volumeInfo.averageRating + ' / 5' : '-'}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Page Count
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.volumeInfo.pageCount ? responseData.volumeInfo.pageCount : '-'}
                            </td>
                            <th scope="row">
                                Total Votes
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.volumeInfo.ratingsCount ? responseData.volumeInfo.ratingsCount : '-'}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Language
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.volumeInfo.language ? responseData.volumeInfo.language : '-'}
                            </td>
                            <th scope="row">
                                ISBN
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.volumeInfo.industryIdentifiers[0].identifier}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{display:'flex', alignItems:'center', textAlign:'center', justifyContent:'space-evenly', marginLeft:'15rem'}}>
                    <a  href={responseData.accessInfo.webReaderLink ? responseData.accessInfo.webReaderLink : "#"}>
                        <button className="btn btn-dark">View</button>
                    </a>
                    <a  href={responseData.saleInfo.buyLink ? responseData.saleInfo.buyLink : "#"}>
                        <button  className="btn btn-info">Buy{responseData.saleInfo.retailPrice ? ` (${responseData.saleInfo.retailPrice.currencyCode} ${responseData.saleInfo.retailPrice.amount})`:''}</button>
                    </a>
                    <p id="saved"></p>
                    </div>
                </div>
            </section>
            <footer className="primary-footer container group">
            <a style={{color:'#648880'}} href="https://developers.google.com/books">
                <small>&copy;Google API</small>
            </a>
            </footer>
        </>
    )
    else
        return (<></>)
}