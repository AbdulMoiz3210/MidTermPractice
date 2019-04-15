import React, { Component } from 'react';
import {ScrollView } from 'react-native';
import Header1 from './Header';
import Footer1 from './Footer';
import Accordian1 from './Accordian';

class Basic extends Component
{
    render(){
        return(
            <ScrollView>
            <Header1/>
            <Accordian1/>
            <Footer1/>
            </ScrollView>
        );
        }
    }

export default Basic;