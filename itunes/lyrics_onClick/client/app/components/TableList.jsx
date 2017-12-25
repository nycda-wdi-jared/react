import React, { Component } from 'react'; 

import TableItem from './TableItem';

export default class TableList extends Component {
    render() {
        const { songs } = this.props;
        
        var renderSongs = () => {
            return songs.map((song, index) => {
                return (
                    <TableItem
                        title={song.title}
                        artist={song.artist}
                        index={index + 1}
                        key={index}
                    />
                );
            });
        }
        return (
            <tbody>
                {renderSongs()}
            </tbody>
        );
    } 
}