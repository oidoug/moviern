import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import api from '../services/api';

export default function GridScreen(props) {

  const [hot, setHot] = useState([]);
  const [coming, setComing] = useState([]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Grid Screen</Text>
    </View>
  );
};

