import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SearchPage.css';

import Card from '../../components/Card/Card';
import List from '../../components/List/List';
import Search from '../../components/Search/Search';

import { baseUrl } from '../../utils/constants';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('love');
  useEffect(() => {
    onSubmit(searchTerm)
  }, [])
  const [searchResult, setSearchResult] = useState([]);

  const onSubmitSuccess = (response) => {
    var res = response['data']['list']
    console.log(res)
    if (res) {
      console.log("Request Successful!")
      setSearchResult(res);
    }
  }

  const onSubmit = (searchTerm) => {
    const uri = `${baseUrl}title`;
    axios.post(uri, {'title' : `${searchTerm}`})
      .then(res => onSubmitSuccess(res))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <Search value={searchTerm} onChange={setSearchTerm} onSubmit={onSubmit} />
      <br />
      <List elements={searchResult} component={Card} />
    </div>
  )
}