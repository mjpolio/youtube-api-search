import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideo from '../hooks/useVideo';

const App = () => {
    const [selected, setSelected] = useState(null);
    const [videos, search] = useVideo('react js');

    useEffect(() => {
        setSelected(videos[0]);
    }, [videos])

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="row">
                    <div className="eleven wide column">
                        <VideoDetail video={selected} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={video => setSelected(video)} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;