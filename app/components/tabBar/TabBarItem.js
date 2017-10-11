/**
 * Created by osx on 17/10/10.
 */
/**
 *  TabBarItem
 */
'use strict'

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import React, {Component} from 'react';

export default class TabBarItem extends Component {
    componentDidMount() {
    }

    render() {
        let child = this.props.children;
        child = React.cloneElement(child, {ref: component => this._view = component})
        if (child.length && child.length > 0) {
            throw new Error("onlyChild must be passed a children with exactly one child.");
        }
        return (
            <View style={styles.weight}>
                {child}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weight: {
        flex: 1,
    }
});
