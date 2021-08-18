import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import CardLead from '../../components/CardLead';
import { View, FlatList } from 'react-native';

import { TOKEN } from '../../pass/pass';

const CountLead = () => {
  const [lead, setLead] = useState([]);

  const pageIndex = 0;
  const pageSize = 15;
  const baseURL = `https://api.atendare.com/v1/lead?pageIndex=${pageIndex}&pageSize=${pageSize}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Token: TOKEN,
    },
  };


  useEffect(() => {
    fetch(baseURL, options)
      .then(res => res.json())
      .then(res => {
        setLead(res.results);
      })
      .catch(err => console.error(err));
  }, []);


  return (
    <View>
      <FlatList
        data={lead}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CardLead {...item} />}
        ListHeaderComponent={<Header />}
      />
    </View>
  );
};

export default CountLead;
