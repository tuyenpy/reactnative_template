import React from 'react';
import {SafeAreaView, Text, FlatList, View, StyleSheet, TouchableOpacity, Button} from 'react-native';

import axios from 'axios';


class App extends React.Component {
  state = {
    data: null,
    selectId: null,
    freshing: false,
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text>{item.name}</Text>
        <Text>{item.amount}</Text>
      </TouchableOpacity>
    );
  };

  onFreshing = () => {
    console.log("refreshing");
    this.setState({freshing: true}, this.requestApi)
  }

  componentDidMount() {
    this.requestApi();  
  }
  
  async requestApi() {
    let res = await axios.get('https://5f3f339244212d0016fec7e3.mockapi.io/api/users');
    this.setState({data: res.data, freshing: false});
    
  }

  render() {
    console.log("App rendering");
    return (
      <>
        <SafeAreaView>
          <Text style={styles.text}>FlatList Demo</Text>
          {this.state.data && (
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
              style = {{height: '70%'}}
              refreshing={this.state.freshing}
              onRefresh={this.onFreshing}
            />
          )}
        </SafeAreaView>
      </>
    );

  }
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    paddingTop: 15,
    marginBottom: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default App;
